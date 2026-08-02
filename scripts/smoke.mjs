/**
 * Browser-smoketest voor het interactieve gedrag.
 *
 * De lead-endpoint wordt afgevangen, zodat een test nooit een echte inzending
 * in de Sheet van de klant zet.
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

// De dev-server draait met MO_LEAD_ENDPOINT naar scripts/mock-endpoint.mjs,
// dus de volledige keten (browser → server function → POST) wordt getest
// zonder dat er een testlead in de echte Sheet belandt.
const LEADS = path.join(import.meta.dirname, '.mock-leads.json')
const readLeads = () => {
  try { return JSON.parse(fs.readFileSync(LEADS, 'utf8')) } catch { return [] }
}
const leadsBefore = readLeads().length

// Externe requests (Google Fonts) bestaan niet in deze sandbox; blokkeren
// scheelt lange time-outs.
await page.route('**/*', (route) =>
  route.request().url().includes('localhost') ? route.continue() : route.abort(),
)

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

/* --- meerstaps formulier --- */
const bar = () =>
  page.evaluate(() => {
    const b = document.querySelector('#leadForm .form__bar i, .form .form__bar i')
    return b ? b.style.width : null
  })

await page.fill('#f-url', 'mijnbedrijf.nl')
const bar1 = await bar()
await page.click('.fstep[data-step="1"] [data-next]')
await page.waitForTimeout(200)
const step2Visible = await page.isVisible('.fstep[data-step="2"]')
const bar2 = await bar()
check('formulier stap 1 → 2', step2Visible, `balk ${bar1} → ${bar2}`)

await page.fill('#f-naam', 'Test Persoon')
await page.fill('#f-bedrijf', 'Testbedrijf BV')
await page.click('.fstep[data-step="2"] [data-next]')
await page.waitForTimeout(200)
const step3Visible = await page.isVisible('.fstep[data-step="3"]')
const bar3 = await bar()
check('formulier stap 2 → 3', step3Visible, `balk ${bar3}`)

// Terug-knop
await page.click('.fstep[data-step="3"] [data-prev]')
await page.waitForTimeout(200)
check('formulier terug-knop', await page.isVisible('.fstep[data-step="2"]'))
await page.click('.fstep[data-step="2"] [data-next]')
await page.waitForTimeout(200)

await page.fill('#f-email', 'test@example.com')
await page.selectOption('#f-branche', { index: 1 })
await page.click('.fstep[data-step="3"] button[type="submit"]')
await page.waitForTimeout(800)

await page.waitForTimeout(1200)
const sent = await page.evaluate(
  () => document.querySelector('.form')?.classList.contains('sent') ?? false,
)
check('formulier toont bedankt-staat', sent)

const leads = readLeads()
const lead = leads[leads.length - 1]
check('inzending komt aan op de endpoint', leads.length === leadsBefore + 1)
check('velden komen correct door',
  lead?.naam === 'Test Persoon' && lead?.bedrijf === 'Testbedrijf BV' &&
  lead?.email === 'test@example.com' && !!lead?.branche,
  JSON.stringify(lead ?? {}).slice(0, 120))
check('url wordt genormaliseerd naar https://',
  lead?.url === 'https://mijnbedrijf.nl', `url=${lead?.url}`)
check('_subject en _pagina gaan mee',
  !!lead?._subject && !!lead?._pagina, `${lead?._subject}`)
check('honeypot wordt niet doorgestuurd', !('website_hp' in (lead ?? {})))

/* --- validatie blokkeert lege stap --- */
await page.goto(BASE + '/diensten/conversie-website', { waitUntil: 'load' })
await waitHydrated(page)
await page.click('.fstep[data-step="1"] [data-next]')
await page.waitForTimeout(200)
const blocked = await page.isVisible('.fstep[data-step="1"]')
check('lege verplichte stap blokkeert', blocked)

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
await page.goto(BASE + '/concept/branches/zonnepanelen', { waitUntil: 'load' })
await page.waitForTimeout(1200)
const legacyFont = await page.evaluate(() => {
  const h = document.querySelector('.legacy-concept h1')
  return h ? getComputedStyle(h).fontFamily : null
})
check('concept-pagina rendert in eigen stijl', /Caveat/.test(legacyFont ?? ''), legacyFont ?? '')

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
await mobile.route('**/*', (route) =>
  route.request().url().includes('localhost') ? route.continue() : route.abort(),
)
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

/* ---------------- Resultaat ---------------- */
const realErrors = consoleErrors.filter(
  (e) => !/favicon|React DevTools|net::ERR_FAILED|Failed to load resource/i.test(e),
)
check('geen console-fouten', realErrors.length === 0, realErrors.slice(0, 3).join(' | '))

await browser.close()
console.table(results)
console.log(failed ? `${failed} test(s) gefaald.` : 'Alle smoketests geslaagd.')
process.exitCode = failed ? 1 : 0
