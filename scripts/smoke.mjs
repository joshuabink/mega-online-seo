/**
 * Browser-smoketest voor het interactieve gedrag.
 *
 * De mailroute wordt afgevangen, zodat een test nooit een echte mail verstuurt.
 *
 * Draaien met de dev-server actief:  node scripts/smoke.mjs
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const BASE = process.env.BASE ?? 'http://localhost:3000'
const results = []
let failed = 0

/** Wacht tot React gehydrateerd is: `.in` wordt uitsluitend client-side gezet. */
async function waitHydrated(pg) {
  await pg.waitForFunction(() => document.querySelectorAll('.reveal.in').length > 0, null,
    { timeout: 15000 })
}

function check(name, ok, detail = '') {
  results.push({ test: name, status: ok ? '✓' : '✗', detail })
  if (!ok) failed++
}

// De vooraf geïnstalleerde Chromium gebruiken i.p.v. een download.
const EXECUTABLE =
  process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const browser = await chromium.launch({ executablePath: EXECUTABLE })

/* ---------------- Desktop ---------------- */
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

const consoleErrors = []
page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text())
})
page.on('pageerror', (e) => consoleErrors.push(String(e)))

// De dev-server draait met MO_LEAD_MAIL_ENDPOINT naar scripts/mock-endpoint.mjs,
// dus de keten (browser → server function → mail) wordt getest zonder echte mail.
// Zet MO_RESEND_API_KEY uit, anders slaat de server FormSubmit over.
const LEADS = path.join(import.meta.dirname, '.mock-leads.json')
const readLeads = () => {
  try { return JSON.parse(fs.readFileSync(LEADS, 'utf8')) } catch { return [] }
}
const leadsBefore = readLeads().length

// Posts die de browser zelf naar FormSubmit doet, nadat de server faalde.
// De route vangt ze af, zodat de smoketest nooit de echte provider raakt.
const clientPosts = []

function installRoutes(pg) {
  return pg.route('**/*', async (route) => {
    const url = route.request().url()
    if (url.includes('formsubmit.co')) {
      const body = route.request().postData() ?? ''
      clientPosts.push({ url, body })
      const ok = body.includes('client-lukt%40example.com') || body.includes('client-lukt@example.com')
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(
          ok
            ? { success: 'true', message: 'submitted successfully' }
            : { success: 'false', message: 'Unable to submit form' },
        ),
      })
      return
    }
    if (url.includes('localhost') || url.includes('127.0.0.1')) return route.continue()
    return route.abort()
  })
}

// Externe requests (Google Fonts) bestaan niet in deze sandbox; blokkeren
// scheelt lange time-outs.
await installRoutes(page)

await page.goto(BASE + '/', { waitUntil: 'load' })
await waitHydrated(page)

/* --- scroll reveals --- */
const revealed = await page.evaluate(
  () => document.querySelectorAll('.reveal.in').length,
)
check('scroll reveals activeren', revealed > 0, `${revealed} elementen zichtbaar`)

/* --- megamenu --- */
await page.hover('.mnav__item:has-text("Diensten")')
await page.waitForTimeout(350)
const megaOpen = await page.evaluate(() => {
  const mega = document.getElementById('mega')
  const sheet = mega?.querySelector('.mega__sheet')
  return {
    open: mega?.classList.contains('open') ?? false,
    height: sheet ? parseFloat(getComputedStyle(sheet).height) : 0,
    activePanel: document.querySelector('.mega__panel.is-active')?.getAttribute('data-panel'),
  }
})
check('megamenu opent bij hover', megaOpen.open && megaOpen.height > 100,
  `paneel=${megaOpen.activePanel} hoogte=${Math.round(megaOpen.height)}px`)

await page.keyboard.press('Escape')
await page.waitForTimeout(250)
const megaClosed = await page.evaluate(
  () => !document.getElementById('mega')?.classList.contains('open'),
)
check('megamenu sluit met Escape', megaClosed)

/* --- nav scroll-achtergrond --- */
await page.evaluate(() => window.scrollTo(0, 400))
await page.waitForTimeout(250)
const scrolled = await page.evaluate(
  () => document.getElementById('nav')?.classList.contains('scrolled'),
)
check('nav krijgt .scrolled', !!scrolled)
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(200)

/* --- conceptformulier, 6 stappen --- */
const stepVisible = (n) => page.isVisible(`.fstep[data-step="${n}"]`)
const choice = (step, index) =>
  page.locator(`.fstep[data-step="${step}"] .choice input`).nth(index)

// Zonder keuze blijft stap 1 staan en verschijnt de fout bij de groep.
await page.click('.fstep[data-step="1"] [data-next]')
await page.waitForTimeout(200)
const blockedHome = await stepVisible(1)
const homeError = await page.locator('.fstep[data-step="1"] .field__error').innerText()
check('lege klikstap blokkeert', blockedHome && /Kies minimaal één antwoord/.test(homeError), homeError)

await choice(1, 0).check()
await choice(1, 1).check()
const thirdDisabled = await choice(1, 2).isDisabled()
const countText = await page.locator('.fstep[data-step="1"] .choice__count').innerText()
check('maximum van twee keuzes', thirdDisabled && /2 van 2 gekozen/i.test(countText),
  `disabled=${thirdDisabled} teller=${countText}`)

// Enter op stap 1 betekent volgende stap, niet meteen versturen.
await choice(1, 0).press('Enter')
await page.waitForTimeout(200)
check('Enter op stap 1 gaat naar stap 2', await stepVisible(2))

await choice(2, 0).check()
await page.click('.fstep[data-step="2"] [data-next]')
await page.waitForTimeout(200)
check('formulier stap 2 → 3', await stepVisible(3))

await choice(3, 0).check()
await page.click('.fstep[data-step="3"] [data-next]')
await page.waitForTimeout(200)
check('formulier stap 3 → 4', await stepVisible(4))

await page.fill('[name="bedrijf"]', 'Testbedrijf BV')
await page.fill('[name="omschrijving"]', 'We verhuren springkussens in de regio Gouda.')
await page.fill('[name="url"]', 'mijnbedrijf.nl')
await page.click('.fstep[data-step="4"] [data-next]')
await page.waitForTimeout(200)
check('formulier stap 4 → 5', await stepVisible(5))

await page.click('.fstep[data-step="5"] [data-prev]')
await page.waitForTimeout(200)
check('formulier terug-knop', await stepVisible(4))
await page.click('.fstep[data-step="4"] [data-next]')
await page.waitForTimeout(200)

await choice(5, 0).check()
await page.click('.fstep[data-step="5"] [data-next]')
await page.waitForTimeout(200)
check('formulier stap 5 → 6', await stepVisible(6))

const direct = await page.locator('.form__direct').innerText()
const directMail = await page.locator('.form__direct a[href^="mailto:"]').getAttribute('href')
const directTel = await page.locator('.form__direct a[href^="tel:"]').getAttribute('href')
const directWa = await page.locator('.form__direct a[href*="wa.me"]').getAttribute('href')
check(
  'contactregel staat onder de verzendknop',
  /Liever direct contact/.test(direct) &&
    /zakelijk@joshuabink\.nl/.test(direct) &&
    /\+31634388938/.test(direct) &&
    /WhatsApp/.test(direct) &&
    directMail === 'mailto:zakelijk@joshuabink.nl' &&
    directTel === 'tel:+31634388938' &&
    directWa === 'https://wa.me/31634388938',
  direct,
)

await page.fill('[name="naam"]', 'Test Persoon')
await page.fill('[name="email"]', 'test@example.com')
await page.fill('[name="telefoon"]', '0612345678')
await page.click('.fstep[data-step="6"] button[type="submit"]')
await page.waitForTimeout(1500)

const sent = await page.evaluate(
  () => document.querySelector('.form')?.classList.contains('sent') ?? false,
)
check('geslaagde mail is ok', sent, sent ? 'bedankt-staat' : 'formulier niet verzonden')

const leads = readLeads()
const lead = leads[leads.length - 1]
check('inzending komt aan op de endpoint', leads.length === leadsBefore + 1, `aantal ${leads.length - leadsBefore}`)
check('velden komen correct door',
  lead?.naam === 'Test Persoon' &&
  lead?.bedrijf === 'Testbedrijf BV' &&
  lead?.email === 'test@example.com' &&
  lead?.telefoon === '0612345678' &&
  lead?.branche === 'Activiteiten / Recreatie' &&
  lead?.start === 'Zo snel mogelijk' &&
  lead?.omschrijving === 'We verhuren springkussens in de regio Gouda.' &&
  lead?.knelpunt === 'Er komen te weinig aanvragen of boekingen binnen, Mijn website ziet er verouderd uit' &&
  lead?.doel === 'Meer offerteaanvragen',
  JSON.stringify(lead ?? {}).slice(0, 240))
check('url wordt genormaliseerd naar https://',
  lead?.url === 'https://mijnbedrijf.nl', `url=${lead?.url}`)
check('_subject en _pagina gaan mee',
  lead?._subject === 'Nieuwe aanvraag gratis websiteconcept - MegaOnline.io' && !!lead?._pagina,
  `${lead?._subject}`)
check('honeypot wordt niet doorgestuurd', !('website_hp' in (lead ?? {})))
check('lege optionele velden gaan niet mee', !lead?.geen_website)
check('_url gaat mee naar FormSubmit', lead?._url === 'https://megaonline.io/', lead?._url)
check('Referer en Origin gaan mee',
  lead?._test_referer === 'https://megaonline.io/' && lead?._test_origin === 'https://megaonline.io',
  `referer=${lead?._test_referer} origin=${lead?._test_origin}`)
check('geslaagde mail post niet nog eens vanuit de browser', clientPosts.length === 0,
  `browserposts=${clientPosts.length}`)

/* --- mislukte mail: server weigert, browser-poging ook, mailto-fallback --- */
await page.goto(BASE + '/contact', { waitUntil: 'load' })
await waitHydrated(page)
await page.fill('#c-naam', 'Mail Faalt')
await page.fill('#c-email', 'mail-faalt@example.com')
await page.fill('#c-tel', '0611111111')
await page.selectOption('#c-onderwerp', 'Iets anders')
await page.fill('#c-bericht', 'Graag een kennismaking.')
const postsBeforeFail = clientPosts.length
const leadsBeforeFail = readLeads().length
await page.click('.fhero__form button[type="submit"]')
await page.locator('.fhero__form [data-lead-fallback]').waitFor({ timeout: 8000 })
const mailFout = await page.evaluate(() => {
  const form = document.querySelector('.fhero__form')
  const fallback = form?.querySelector('[data-lead-fallback]')
  return {
    sent: form?.classList.contains('sent') ?? false,
    text: fallback?.textContent?.replace(/\s+/g, ' ').trim() ?? '',
    mailto: fallback?.querySelector('a.btn')?.getAttribute('href') ?? '',
    tel: fallback?.querySelector('a[href^="tel:"]')?.getAttribute('href') ?? '',
    wa: fallback?.querySelector('a[href*="wa.me"]')?.getAttribute('href') ?? '',
    naam: form?.querySelector('#c-naam')?.value ?? '',
    email: form?.querySelector('#c-email')?.value ?? '',
    bericht: form?.querySelector('#c-bericht')?.value ?? '',
  }
})
const mailtoSubject = decodeURIComponent((mailFout.mailto.split('subject=')[1] ?? '').split('&')[0] ?? '')
const mailtoBody = decodeURIComponent(mailFout.mailto.split('body=')[1] ?? '')
const failPosts = clientPosts.slice(postsBeforeFail)
const failLeads = readLeads().slice(leadsBeforeFail)
check(
  'mislukte mail toont de fallback',
  !mailFout.sent &&
    /niet automatisch versturen/.test(mailFout.text) &&
    /Verstuur via je eigen mail/.test(mailFout.text),
  mailFout.text || 'geen fallback',
)
check(
  'mailto bevat onderwerp en alle antwoorden',
  mailFout.mailto.startsWith('mailto:zakelijk@joshuabink.nl?') &&
    mailtoSubject === 'Nieuw contactverzoek - MegaOnline.io' &&
    mailtoBody.includes('Naam: Mail Faalt') &&
    mailtoBody.includes('E-mailadres: mail-faalt@example.com') &&
    mailtoBody.includes('Telefoonnummer: 0611111111') &&
    mailtoBody.includes('Bericht: Graag een kennismaking.') &&
    mailtoBody.includes('Onderwerp: Iets anders'),
  mailtoSubject,
)
check('telefoon en WhatsApp staan in de fallback',
  mailFout.tel === 'tel:+31634388938' && mailFout.wa === 'https://wa.me/31634388938',
  `${mailFout.tel} ${mailFout.wa}`)
check('invoer blijft staan na een mislukte mail',
  mailFout.naam === 'Mail Faalt' && mailFout.email === 'mail-faalt@example.com' &&
    mailFout.bericht === 'Graag een kennismaking.')
check('server en browser elk één keer bij een weigering',
  failLeads.length === 1 && failPosts.length === 1 &&
    failPosts[0].body.includes('mail-faalt'),
  `server=${failLeads.length} browser=${failPosts.length}`)

/* --- server faalt, browser-poging lukt: bedankt, en niet nog een serverpost --- */
await page.fill('#c-naam', 'Client Lukt')
await page.fill('#c-email', 'client-lukt@example.com')
const postsBeforeClient = clientPosts.length
const leadsBeforeClient = readLeads().length
await page.click('.fhero__form button[type="submit"]')
await page.waitForFunction(
  () => document.querySelector('.fhero__form')?.classList.contains('sent'),
  null,
  { timeout: 8000 },
).catch(() => {})
const clientSent = await page.evaluate(
  () => document.querySelector('.fhero__form')?.classList.contains('sent') ?? false,
)
const clientLeadAdds = readLeads().length - leadsBeforeClient
const clientPostAdds = clientPosts.length - postsBeforeClient
check('browser-fallback telt als verstuurd', clientSent)
check('geen dubbele serverpost als de browser het overneemt',
  clientLeadAdds === 1 && clientPostAdds === 1,
  `server=${clientLeadAdds} browser=${clientPostAdds}`)

/* --- validatie blokkeert lege stap op een dienstpagina --- */
await page.goto(BASE + '/diensten/conversie-website', { waitUntil: 'load' })
await waitHydrated(page)
await page.click('.fstep[data-step="1"] [data-next]')
await page.waitForTimeout(200)
const blocked = await page.isVisible('.fstep[data-step="1"]')
check('lege verplichte stap blokkeert', blocked)

// De volgende knop staat onderaan een lang formulier. Na de stapwissel
// moet de stapkop onder de fixed header blijven, niet eronder verdwijnen.
await page.locator('.fstep[data-step="1"] [data-next]').evaluate((el) => {
  const root = document.documentElement
  const previous = root.style.scrollBehavior
  root.style.scrollBehavior = 'auto'
  const rect = el.getBoundingClientRect()
  const scroller = document.scrollingElement ?? root
  scroller.scrollTop = scroller.scrollTop + rect.bottom - window.innerHeight + 24
  root.style.scrollBehavior = previous
})
await choice(1, 6).check()
await page.click('.fstep[data-step="1"] [data-next]')
await page.waitForTimeout(250)
const headerGap = await page.evaluate(() => {
  const nav = document.querySelector('header.nav')?.getBoundingClientRect()
  const kop = document.querySelector('.fstep[data-step="2"] [data-step-focus]')?.getBoundingClientRect()
  if (!nav || !kop) return -1
  return Math.round(kop.top - nav.bottom)
})
check('stapkop blijft onder de header', headerGap >= 12, `ruimte=${headerGap}px`)

await choice(2, 0).check()
await page.click('.fstep[data-step="2"] [data-next]')
await choice(3, 0).check()
await page.click('.fstep[data-step="3"] [data-next]')
await page.waitForTimeout(200)
const geenAan = await page.locator('[name="geen_website"]').isChecked()
const urlDicht = await page.locator('[name="url"]').isDisabled()
await page.locator('[name="geen_website"]').uncheck()
const geenUit = !(await page.locator('[name="geen_website"]').isChecked())
const urlOpen = await page.locator('[name="url"]').isEnabled()
check(
  'vinkje geen website is uit te zetten',
  geenAan && urlDicht && geenUit && urlOpen,
  `aan=${geenAan} urlDicht=${urlDicht} uit=${geenUit} urlOpen=${urlOpen}`,
)

/* --- oude scan-URL --- */
{
  const res = await page.request.get(BASE + '/gratis-websitescan', { maxRedirects: 0 })
  const loc = res.headers()['location'] ?? ''
  check('301 /gratis-websitescan', res.status() === 301 && loc.includes('/gratis-websiteconcept'),
    `${res.status()} → ${loc}`)
}

/* --- FAQ accordeon --- */
await page.goto(BASE + '/veelgestelde-vragen', { waitUntil: 'load' })
await waitHydrated(page)
const firstQa = page.locator('.qa').first()
await firstQa.locator('.qa__q').click()
await page.waitForTimeout(600)
const qaOpen = await firstQa.evaluate((el) => ({
  open: el.classList.contains('open'),
  height: el.querySelector('.qa__a').style.height,
  aria: el.querySelector('.qa__q').getAttribute('aria-expanded'),
}))
check('FAQ opent', qaOpen.open && qaOpen.height !== '0px',
  `height=${qaOpen.height} aria-expanded=${qaOpen.aria}`)

await firstQa.locator('.qa__q').click()
await page.waitForTimeout(600)
const qaClosed = await firstQa.evaluate((el) => ({
  open: el.classList.contains('open'),
  height: el.querySelector('.qa__a').style.height,
}))
check('FAQ sluit', !qaClosed.open && qaClosed.height === '0px')

/* --- lichte header op juridische pagina --- */
await page.goto(BASE + '/algemene-voorwaarden', { waitUntil: 'load' })
await waitHydrated(page)
const lightNav = await page.evaluate(
  () => document.getElementById('nav')?.classList.contains('nav--light'),
)
check('lichte header op juridische pagina', !!lightNav)

/* --- beeld laadt --- */
await page.goto(BASE + '/', { waitUntil: 'load' })
await waitHydrated(page)
// Beeld is lazy-loaded, dus eerst naar de cases-sectie scrollen.
await page.evaluate(() => document.querySelector('#werk')?.scrollIntoView())
await page.waitForTimeout(1200)
await page.waitForFunction(
  () => Array.from(document.querySelectorAll('#werk .mediaslot img')).every((i) => i.complete),
  null, { timeout: 10000 },
).catch(() => {})
const imgs = await page.evaluate(() =>
  Array.from(document.querySelectorAll('#werk .mediaslot img')).map((i) => ({
    src: i.getAttribute('src'),
    ok: i.naturalWidth > 0,
  })),
)
check('case-afbeeldingen laden', imgs.length > 0 && imgs.every((i) => i.ok),
  `${imgs.filter((i) => i.ok).length}/${imgs.length}`)

/* --- interne navigatie zonder full reload --- */
await page.click('.footer__col a[href="/diensten/conversie-website"]')
await page.waitForURL('**/diensten/conversie-website')
check('client-side navigatie werkt', page.url().endsWith('/diensten/conversie-website'))

/* --- concept-pagina's mogen het design system niet vervuilen --- */
const homeBefore = await page.evaluate(() => ({
  font: getComputedStyle(document.querySelector('h1')).fontFamily,
  bg: getComputedStyle(document.body).backgroundColor,
}))
// De concept-pagina's onder /concept/** zijn verwijderd (aug 2026). De oude
// URL mag geen eigen pagina meer zijn, en de hoofdsite mag er niet van veranderen.
await page.goto(BASE + '/concept/branches/zonnepanelen', { waitUntil: 'load' })
await page.waitForTimeout(400)
const conceptGone = await page.evaluate(
  () => document.title.includes('niet gevonden'),
)
check('oude concept-URL is geen publieke pagina', conceptGone, await page.title())

await page.goto(BASE + '/', { waitUntil: 'load' })
await waitHydrated(page)
const homeAfter = await page.evaluate(() => ({
  font: getComputedStyle(document.querySelector('h1')).fontFamily,
  bg: getComputedStyle(document.body).backgroundColor,
}))
check('concept-CSS lekt niet naar de site',
  homeBefore.font === homeAfter.font && homeBefore.bg === homeAfter.bg,
  `${homeAfter.font} / ${homeAfter.bg}`)

/* --- oude URL's blijven werken --- */
const redirects = [
  ['/Conversie%20Website.html', '/diensten/conversie-website'],
  ['/Branche%20-%20Dienstverleners.html', '/branches/dienstverleners'],
  ['/index.html', '/'],
]
for (const [from, to] of redirects) {
  const res = await page.request.get(BASE + from, { maxRedirects: 0 })
  const loc = res.headers()['location'] ?? ''
  check(`301 ${from}`, res.status() === 301 && loc.replace(BASE, '') === to,
    `${res.status()} → ${loc.replace(BASE, '')}`)
}
const missing = await page.request.get(BASE + '/bestaat-niet', { maxRedirects: 0 })
check('onbekende URL geeft 404', missing.status() === 404, String(missing.status()))

/* ---------------- Mobiel ---------------- */
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
mobile.on('pageerror', (e) => consoleErrors.push('mobile: ' + String(e)))
await installRoutes(mobile)
await mobile.goto(BASE + '/', { waitUntil: 'load' })
await waitHydrated(mobile)

const menuBtnVisible = await mobile.isVisible('#menuBtn')
check('hamburger zichtbaar op mobiel', menuBtnVisible)

await mobile.click('#menuBtn')
await mobile.waitForTimeout(500)
const drawerOpen = await mobile.evaluate(() => {
  const d = document.getElementById('drawer')
  const cs = d ? getComputedStyle(d) : null
  return { open: d?.classList.contains('open'), opacity: cs?.opacity, vis: cs?.visibility }
})
check('mobiel menu opent', drawerOpen.open && drawerOpen.opacity === '1' && drawerOpen.vis === 'visible',
  `opacity=${drawerOpen.opacity} visibility=${drawerOpen.vis}`)

await mobile.click('.macc__btn:has-text("Diensten")')
await mobile.waitForTimeout(500)
const accOpen = await mobile.evaluate(() => {
  const g = document.querySelector('.macc__group')
  return { open: g?.classList.contains('open'), h: g?.querySelector('.macc__panel')?.style.height }
})
check('mobiele accordeon opent', accOpen.open && accOpen.h !== '0px', `height=${accOpen.h}`)

const noOverflow = await mobile.evaluate(
  () => document.documentElement.scrollWidth <= window.innerWidth + 1,
)
check('geen horizontale overflow op mobiel', noOverflow)

await mobile.click('.mmenu__close')
await mobile.waitForTimeout(400)
check('mobiel menu sluit', await mobile.evaluate(
  () => !document.getElementById('drawer')?.classList.contains('open'),
))

/* --- conceptformulier: fallback in beeld, desktop en 390px --- */
async function fillConcept(pg, email, naam) {
  const choice = (step, index) =>
    pg.locator(`.fstep[data-step="${step}"] .choice input`).nth(index)
  await choice(1, 0).check()
  await choice(1, 1).check()
  await pg.click('.fstep[data-step="1"] [data-next]')
  await pg.waitForTimeout(150)
  await choice(2, 0).check()
  await pg.click('.fstep[data-step="2"] [data-next]')
  await pg.waitForTimeout(150)
  await choice(3, 0).check()
  await pg.click('.fstep[data-step="3"] [data-next]')
  await pg.waitForTimeout(150)
  await pg.fill('[name="bedrijf"]', 'Testbedrijf BV')
  await pg.click('.fstep[data-step="4"] [data-next]')
  await pg.waitForTimeout(150)
  await choice(5, 0).check()
  await pg.click('.fstep[data-step="5"] [data-next]')
  await pg.waitForTimeout(150)
  await pg.fill('[name="naam"]', naam)
  await pg.fill('[name="email"]', email)
  await pg.fill('[name="telefoon"]', '0688888888')
}

async function conceptFallback(pg) {
  await pg.goto(BASE + '/gratis-websiteconcept', { waitUntil: 'load' })
  await waitHydrated(pg)
  await fillConcept(pg, 'concept-faalt@example.com', 'Concept Faalt')
  const beforeLeads = readLeads().filter((l) => l.email === 'concept-faalt@example.com').length
  const beforePosts = clientPosts.filter((p) => p.body.includes('concept-faalt')).length
  await pg.click('.fstep[data-step="6"] button[type="submit"]')
  await pg.locator('[data-lead-fallback]').waitFor({ timeout: 8000 })
  const state = await pg.evaluate(() => {
    const form = document.querySelector('.concept.form')
    const naam = form?.querySelector('[name="naam"]')?.value ?? ''
    const email = form?.querySelector('[name="email"]')?.value ?? ''
    const direct = form?.querySelector('.form__direct')?.textContent ?? ''
    return {
      sent: form?.classList.contains('sent') ?? false,
      naam,
      email,
      direct,
      overflow: document.documentElement.scrollWidth <= window.innerWidth + 1,
    }
  })
  const addedLeads = readLeads().filter((l) => l.email === 'concept-faalt@example.com').length - beforeLeads
  const addedPosts = clientPosts.filter((p) => p.body.includes('concept-faalt')).length - beforePosts
  return { ...state, addedLeads, addedPosts }
}

{
  const desktopFallback = await conceptFallback(page)
  check('conceptformulier toont de fallback',
    !desktopFallback.sent && desktopFallback.naam === 'Concept Faalt' &&
      desktopFallback.email === 'concept-faalt@example.com' &&
      /zakelijk@joshuabink.nl/.test(desktopFallback.direct) &&
      desktopFallback.addedLeads === 1 && desktopFallback.addedPosts === 1,
    `sent=${desktopFallback.sent} server=${desktopFallback.addedLeads} browser=${desktopFallback.addedPosts}`)
  const shotDir = '/opt/cursor/artifacts'
  fs.mkdirSync(shotDir, { recursive: true })
  await page.locator('.concept.form').screenshot({
    path: path.join(shotDir, 'lead_fallback_desktop.png'),
  })

  const narrow = await browser.newPage({ viewport: { width: 390, height: 844 } })
  narrow.on('pageerror', (e) => consoleErrors.push('narrow: ' + String(e)))
  await installRoutes(narrow)
  const mobileFallback = await conceptFallback(narrow)
  check('fallback op 390px zonder horizontale scroll',
    !mobileFallback.sent && mobileFallback.overflow && mobileFallback.addedLeads === 1,
    `overflowOk=${mobileFallback.overflow} server=${mobileFallback.addedLeads}`)
  await narrow.locator('.concept.form').screenshot({
    path: path.join(shotDir, 'lead_fallback_mobile.png'),
  })
  await narrow.close()
}

/* ---------------- Resultaat ---------------- */
const realErrors = consoleErrors.filter(
  (e) => !/favicon|React DevTools|net::ERR_FAILED|Failed to load resource/i.test(e),
)
check('geen console-fouten', realErrors.length === 0, realErrors.slice(0, 3).join(' | '))

await browser.close()
console.table(results)
console.log(failed ? `${failed} test(s) gefaald.` : 'Alle smoketests geslaagd.')
process.exitCode = failed ? 1 : 0
