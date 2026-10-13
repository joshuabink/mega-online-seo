/**
 * Browser-smoketest voor het interactieve gedrag.
 *
 * De mailroute wordt afgevangen, zodat een test nooit een echte mail verstuurt.
 *
 * Draaien met de dev-server actief:  node scripts/smoke.mjs
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import http from 'node:http'
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

function leesCtaConstante(naam) {
  const src = fs.readFileSync(new URL('../src/lib/cta.ts', import.meta.url), 'utf8')
  const m = src.match(new RegExp(`export const ${naam} = '([^']*)'`))
  if (!m) throw new Error(`${naam} ontbreekt in src/lib/cta.ts`)
  return m[1]
}

const CTA_CONCEPT = leesCtaConstante('CTA_CONCEPT')
const CTA_SCAN = leesCtaConstante('CTA_SCAN')
const CTA_TOEGESTAAN = [CTA_CONCEPT, CTA_SCAN]

/** Oude knopzinnen. De korte headertekst "Gratis concept" hoort hier niet bij. */
const OUDE_CTA_VARIANTEN = [
  'Vraag je gratis concept aan',
  'Vraag gratis concept aan',
  'Vraag een gratis concept aan',
  'Vraag je gratis websitescan aan',
  'Vraag je gratis website-scan aan',
  'Gratis concept aanvragen',
]

function normCta(s) {
  return String(s ?? '').replace(/\s+/g, ' ').replace(/\s*→\s*$/u, '').trim()
}

/**
 * Een aanvraagknop hoort exact in CTA_TOEGESTAAN te staan.
 * De headerknop (kort label, TK-151) en linkteksten die niet om een concept
 * of scan vragen, blijven buiten die eis: die copy wijzigt deze opdracht niet.
 */
function beoordeelCtaTekst(tekst, headerKort = false) {
  const t = normCta(tekst)
  const oud = OUDE_CTA_VARIANTEN.find((v) => t.includes(v))
  if (oud) return { ok: false, reden: `oude variant: ${oud}`, tekst: t, soort: 'fout' }
  if (CTA_TOEGESTAAN.includes(t)) return { ok: true, tekst: t, soort: 'exact' }
  if (headerKort) return { ok: true, tekst: t, soort: 'header-kort' }
  if (CTA_TOEGESTAAN.some((c) => t.includes(c))) return { ok: true, tekst: t, soort: 'zin' }
  if (/vraag\s+(je\s+|een\s+)?gratis/i.test(t)) {
    return { ok: false, reden: 'niet in CTA_TOEGESTAAN', tekst: t, soort: 'fout' }
  }
  return { ok: true, tekst: t, soort: 'andere-copy' }
}

async function controleerCtaTeksten(browser) {
  const proef = [
    beoordeelCtaTekst('Vraag je gratis concept aan'),
    beoordeelCtaTekst('Vraag gratis concept aan'),
    beoordeelCtaTekst('Vraag een gratis concept aan'),
  ]
  check(
    'ingebouwde foute CTA-variant wordt geweigerd',
    proef.every((r) => !r.ok) &&
      beoordeelCtaTekst(CTA_CONCEPT).soort === 'exact' &&
      beoordeelCtaTekst(CTA_SCAN).soort === 'exact',
    proef.map((r) => `${r.tekst} → ${r.reden}`).join('; '),
  )

  const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await installRoutes(pg)
  const sitemap = await pg.request.get(BASE + '/sitemap.xml')
  const xml = await sitemap.text()
  const paden = [...xml.matchAll(/<loc>https:\/\/megaonline\.io([^<]*)<\/loc>/g)].map((m) => m[1] || '/')
  check('sitemap-paden voor CTA-controle', sitemap.status() === 200 && paden.length > 0, String(paden.length))

  const fouten = []
  const andere = new Set()
  const header = new Set()
  let zagConcept = false
  let zagScan = false

  for (const pad of paden) {
    const res = await pg.goto(BASE + pad, { waitUntil: 'domcontentloaded', timeout: 30000 })
    if (!res || res.status() >= 400) {
      fouten.push(`${pad} status ${res ? res.status() : 'geen'}`)
      continue
    }
    const data = await pg.evaluate(() => {
      const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').replace(/\s*→\s*$/u, '').trim()
      const isConcept = (href) => {
        if (!href) return false
        try {
          const u = new URL(href, location.origin)
          return u.pathname.replace(/\/$/, '') === '/gratis-websiteconcept'
        } catch {
          return false
        }
      }
      const links = [...document.querySelectorAll('a')]
        .filter((a) => isConcept(a.getAttribute('href')))
        .map((a) => ({
          tekst: norm(a.textContent),
          headerKort: !!a.querySelector('.nav__scan-short'),
        }))
      const submits = [...document.querySelectorAll('.concept button[type="submit"]')].map((b) => ({
        tekst: norm(b.textContent),
      }))
      const eindEl = document.querySelector('#scan a.btn')
      return {
        links,
        submits,
        eind: eindEl ? norm(eindEl.textContent) : '',
        lichaam: document.body?.textContent ?? '',
      }
    })

    for (const oud of OUDE_CTA_VARIANTEN) {
      if (data.lichaam.includes(oud)) fouten.push(`${pad} bevat "${oud}"`)
    }
    for (const link of data.links) {
      const oordeel = beoordeelCtaTekst(link.tekst, link.headerKort)
      if (!oordeel.ok) fouten.push(`${pad} link "${oordeel.tekst}": ${oordeel.reden}`)
      else if (oordeel.soort === 'header-kort') header.add(oordeel.tekst)
      else if (oordeel.soort !== 'exact') andere.add(oordeel.tekst)
      if (oordeel.tekst === CTA_CONCEPT || (oordeel.soort === 'exact' && oordeel.tekst === CTA_CONCEPT)) zagConcept = true
      if (oordeel.soort === 'exact' && oordeel.tekst === CTA_SCAN) zagScan = true
    }
    for (const submit of data.submits) {
      const oordeel = beoordeelCtaTekst(submit.tekst)
      if (!oordeel.ok || oordeel.soort !== 'exact') fouten.push(`${pad} submit "${submit.tekst}"`)
      else if (submit.tekst === CTA_CONCEPT) zagConcept = true
    }
    if (pad === '/kennisbank' || pad.startsWith('/kennisbank/')) {
      if (data.eind !== CTA_SCAN) fouten.push(`${pad} eind-CTA "${data.eind}" hoort "${CTA_SCAN}" te zijn`)
      else zagScan = true
    }
  }

  check(
    'CTA-teksten op sitemap-pagina\'s zijn toegestaan',
    fouten.length === 0 && zagConcept && zagScan,
    fouten.slice(0, 6).join(' | ') || `concept=${zagConcept} scan=${zagScan} pagina's=${paden.length}`,
  )
  check(
    'korte headerknop en andere linkteksten geïnventariseerd',
    header.size > 0,
    `header=${[...header].join(' || ')} overig=${[...andere].sort().join(' || ')}`,
  )
  await pg.close()
}

function isGaUrl(url) {
  return /googletagmanager\.com|google-analytics\.com|analytics\.google\.com/i.test(url)
}

function dataLayerEvents(pg, eventName) {
  return pg.evaluate((name) =>
    (window.dataLayer ?? [])
      .filter((entry) => entry && entry[0] === 'event' && entry[1] === name)
      .map((entry) => {
        const params = entry[2] && typeof entry[2] === 'object' ? entry[2] : {}
        return {
          form_name: params.form_name ?? '',
          page_path: params.page_path ?? '',
          route: params.route ?? '',
          keys: Object.keys(params).sort(),
          raw: JSON.stringify(params),
        }
      }),
  eventName)
}

function generateLeadEvents(pg) {
  return dataLayerEvents(pg, 'generate_lead')
}

const DEV_LOG = process.env.DEV_SERVER_LOG ?? '/tmp/dev-server.log'
const LEAD_LOG_KEYS = 'datum,formulier,gelukt,pagina,reden,route'
const LEAD_LOG_PII =
  /@|\b06\d{8}\b|example\.com|Test Persoon|Testbedrijf|Mail Faalt|Client Lukt|Concept Faalt|Concept Lead|Lead Event|Sollicitant|Zonder Consent|Client Sol|springkussens|kennismaking|meelopen|linkedin|Graag een/i

function stripAnsi(value) {
  return value.replace(/\u001b\[[0-9;]*m/g, '')
}

function readLeadLogs() {
  let text = ''
  try {
    text = fs.readFileSync(DEV_LOG, 'utf8')
  } catch {
    return []
  }
  const regs = []
  for (const line of stripAnsi(text).split('\n')) {
    const at = line.indexOf('[lead-log]')
    if (at === -1) continue
    const raw = line.slice(at).trim()
    const jsonText = raw.slice('[lead-log]'.length).trim()
    try {
      regs.push({ raw, json: JSON.parse(jsonText) })
    } catch {
      regs.push({ raw, json: null })
    }
  }
  return regs
}

async function wachtLeadLogs(minCount, timeout = 5000) {
  const start = Date.now()
  let regs = readLeadLogs()
  while (regs.length < minCount && Date.now() - start < timeout) {
    await new Promise((r) => setTimeout(r, 50))
    regs = readLeadLogs()
  }
  return regs
}

function leadLogGeldig(entry) {
  const j = entry?.json
  if (!j || typeof j !== 'object') return false
  if (Object.keys(j).sort().join(',') !== LEAD_LOG_KEYS) return false
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(j.datum)) return false
  if (!['concept', 'contact', 'sollicitatie'].includes(j.formulier)) return false
  if (!['Resend', 'FormSubmit'].includes(j.route)) return false
  if (typeof j.gelukt !== 'boolean') return false
  if (typeof j.pagina !== 'string' || !/^\/[a-z0-9/_-]*$/.test(j.pagina)) return false
  if (typeof j.reden !== 'string' || !/^[a-z0-9-]*$/.test(j.reden)) return false
  if (j.gelukt ? j.reden !== '' : j.reden === '') return false
  if (LEAD_LOG_PII.test(entry.raw)) return false
  return true
}

function heeftBedankAnker(url) {
  try {
    return new URL(url).hash === '#aanvraag-verstuurd'
  } catch {
    return false
  }
}

function browserFallbackTeltAlsLead() {
  const src = fs.readFileSync(new URL('../src/lib/analytics.ts', import.meta.url), 'utf8')
  const match = src.match(/export const GENERATE_LEAD_BIJ_BROWSER_FALLBACK\s*=\s*(true|false)/)
  if (!match) throw new Error('GENERATE_LEAD_BIJ_BROWSER_FALLBACK ontbreekt')
  return match[1] === 'true'
}

async function bedankZichtbaar(pg, selector) {
  return pg.evaluate((sel) => {
    const ok = document.querySelector(sel)
    if (!(ok instanceof HTMLElement)) return false
    const style = getComputedStyle(ok)
    if (style.display === 'none' || style.visibility === 'hidden') return false
    const r = ok.getBoundingClientRect()
    return r.height > 0 && r.bottom > 0 && r.top < window.innerHeight
  }, selector)
}

async function fillSollicitatie(pg, email, naam) {
  await pg.fill('#s-naam', naam)
  await pg.fill('#s-email', email)
  await pg.fill('#s-tel', '0611111111')
  await pg.selectOption('#s-rol', 'SEO Stage')
  await pg.fill('#s-link', 'linkedin.com/in/testpersoon')
  await pg.fill('#s-motivatie', 'Ik wil graag meelopen met SEO.')
}

const SOLLICITATIE_PII = /sol-geen@example.com|sol-lead@example.com|client-lukt@example.com|Zonder Consent|Sollicitant Event|Client Sol|0611111111|linkedin.com\/in\/testpersoon|meelopen met SEO|SEO Stage/

function collectGaUrls(pg) {
  const urls = []
  pg.on('request', (req) => {
    const url = req.url()
    if (isGaUrl(url)) urls.push(url)
  })
  return urls
}

/**
 * TK-203: title en precies één H1 in de server-HTML van de negen
 * dienst- en branchepagina's. Witruimte in de H1 telt niet mee.
 */
const ZOEKTAAL_PAGINAS = [
  {
    path: '/diensten/conversie-website',
    title: 'Website laten maken gericht op aanvragen | MegaOnline',
    h1: 'Website laten maken gericht op aanvragen en boekingen',
  },
  {
    path: '/diensten/starter-website',
    title: 'Website laten maken voor starters | MegaOnline',
    h1: 'Website laten maken als je net begint',
  },
  {
    path: '/diensten/website-redesign',
    title: 'Website laten vernieuwen | MegaOnline',
    h1: 'Website vernieuwen als je bedrijf is gegroeid',
  },
  {
    path: '/diensten/website-optimalisatie',
    title: 'Bestaande website laten optimaliseren | MegaOnline',
    h1: 'Bestaande website laten optimaliseren',
  },
  {
    path: '/branches/verhuurbedrijven',
    title: 'Website laten maken voor verhuurbedrijf | MegaOnline',
    h1: 'Website laten maken voor je verhuurbedrijf',
  },
  {
    path: '/branches/dienstverleners',
    title: 'Website laten maken voor dienstverleners | MegaOnline',
    h1: 'Website laten maken voor dienstverleners',
  },
  {
    path: '/branches/activiteitenbedrijven',
    title: 'Website laten maken voor activiteitenbedrijven | MegaOnline',
    h1: 'Website laten maken voor activiteitenbedrijven',
  },
  {
    path: '/branches/reserveringen',
    title: 'Website met reserveringen laten maken | MegaOnline',
    h1: 'Website laten maken met online reserveren',
  },
  {
    path: '/branches/offerteaanvragen',
    title: 'Website laten maken voor offerteaanvragen | MegaOnline',
    h1: 'Website voor bedrijven die werken met offerteaanvragen',
  },
]

function decodeHtml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&nbsp;', ' ')
}

function zichtbareTekst(html) {
  return decodeHtml(html.replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim()
}

function metaContent(html, attr, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? []
  return tags.flatMap((tag) => {
    if (!new RegExp(`\\b${attr}=["']${name}["']`, 'i').test(tag)) return []
    const content = tag.match(/\bcontent=["']([^"']*)["']/i)
    return content ? [decodeHtml(content[1])] : ['']
  })
}

for (const pagina of ZOEKTAAL_PAGINAS) {
  let status = 0
  let html = ''
  try {
    const response = await fetch(BASE + pagina.path)
    status = response.status
    html = await response.text()
  } catch (error) {
    check(`${pagina.path} SSR title en H1`, false, String(error))
    continue
  }
  const zonderScripts = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  const titles = [...zonderScripts.matchAll(/<title>([^<]*)<\/title>/gi)].map((match) =>
    decodeHtml(match[1]).replace(/\s+/g, ' ').trim(),
  )
  const h1s = [...zonderScripts.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) =>
    zichtbareTekst(match[1]),
  )
  const ogTitles = metaContent(zonderScripts, 'property', 'og:title')
  const twitterTitles = metaContent(zonderScripts, 'name', 'twitter:title')
  const verboden = 'die aanvragen oplevert'
  const ok =
    status === 200 &&
    titles.length === 1 &&
    titles[0] === pagina.title &&
    pagina.title.length <= 60 &&
    !titles[0].includes(verboden) &&
    h1s.length === 1 &&
    h1s[0] === pagina.h1 &&
    !h1s[0].includes(verboden) &&
    ogTitles.length === 1 &&
    ogTitles[0] === pagina.title &&
    twitterTitles.every((title) => title === pagina.title)
  check(
    `${pagina.path} SSR title en H1`,
    ok,
    ok
      ? `${pagina.title.length} tekens`
      : `status=${status} titles=${JSON.stringify(titles)} h1s=${JSON.stringify(h1s)} og=${JSON.stringify(ogTitles)} twitter=${JSON.stringify(twitterTitles)}`,
  )
}

// De vooraf geïnstalleerde Chromium gebruiken i.p.v. een download.
const EXECUTABLE =
  process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
// Zonder --enable-automation blijft navigator.webdriver uit. cookieconsent
// verbergt de banner anders voor de browser en de GA4-checks zien hem niet.
const browser = await chromium.launch({
  executablePath: EXECUTABLE,
  ignoreDefaultArgs: ['--enable-automation'],
  args: ['--disable-blink-features=AutomationControlled'],
})

if (process.argv.includes('--alleen-cta')) {
  await controleerCtaTeksten(browser)
  await browser.close()
  console.table(results)
  console.log(failed ? `${failed} test(s) gefaald.` : 'Alle CTA-controles geslaagd.')
  process.exit(failed ? 1 : 0)
}

/* ---------------- Desktop ---------------- */
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const mainGaUrls = collectGaUrls(page)

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
// De banner dekt anders klikken af. Alleen essentiële cookies, geen statistieken.
const necessary = page.locator('[data-role="necessary"]')
await necessary.waitFor({ timeout: 10000 })
await necessary.click()

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
    /06 34 38 89 38/.test(direct) &&
    /WhatsApp/.test(direct) &&
    directMail === 'mailto:zakelijk@joshuabink.nl' &&
    directTel === 'tel:+31634388938' &&
    directWa === 'https://wa.me/31634388938',
  direct,
)

await page.fill('[name="naam"]', 'Test Persoon')
await page.fill('[name="email"]', 'test@example.com')
await page.fill('[name="telefoon"]', '0612345678')
const logsVoorConcept = readLeadLogs().length
await page.click('.fstep[data-step="6"] button[type="submit"]')
await page.waitForTimeout(1500)

const sent = await page.evaluate(
  () => document.querySelector('.form')?.classList.contains('sent') ?? false,
)
check('geslaagde mail is ok', sent, sent ? 'bedankt-staat' : 'formulier niet verzonden')
const conceptBedank = await bedankZichtbaar(page, '.form.sent .form__ok')
check(
  'geslaagd conceptformulier zet het bedank-anker',
  heeftBedankAnker(page.url()) && conceptBedank,
  page.url(),
)
const conceptLogs = await wachtLeadLogs(logsVoorConcept + 1)
const conceptLog = conceptLogs[logsVoorConcept]
check(
  'lead-log bij geslaagd concept zonder persoonsgegevens',
  conceptLogs.length === logsVoorConcept + 1 &&
    leadLogGeldig(conceptLog) &&
    conceptLog.json.pagina === '/' &&
    conceptLog.json.formulier === 'concept' &&
    conceptLog.json.route === 'FormSubmit' &&
    conceptLog.json.gelukt === true &&
    conceptLog.json.reden === '',
  conceptLog?.raw ?? `geen [lead-log] in ${DEV_LOG}`,
)

const leadsZonderConsent = await generateLeadEvents(page)
check(
  'geslaagd conceptformulier zonder consent stuurt geen generate_lead',
  leadsZonderConsent.length === 0,
  JSON.stringify(leadsZonderConsent),
)

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
const logsVoorFail = readLeadLogs().length
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
    waTarget: fallback?.querySelector('a[href*="wa.me"]')?.getAttribute('target') ?? '',
    waRel: fallback?.querySelector('a[href*="wa.me"]')?.getAttribute('rel') ?? '',
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
    /niet automatisch verstuurd/.test(mailFout.text) &&
    /Verstuur via je eigen mail/.test(mailFout.text) &&
    /zakelijk@joshuabink\.nl/.test(mailFout.text),
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
    mailtoBody.includes('Onderwerp: Iets anders') &&
    mailFout.mailto.includes('%0D%0A'),
  mailtoSubject,
)
check('telefoon en WhatsApp staan in de fallback',
  /06 34 38 89 38/.test(mailFout.text) &&
    mailFout.tel === 'tel:+31634388938' &&
    mailFout.wa === 'https://wa.me/31634388938' &&
    mailFout.waTarget === '_blank' &&
    mailFout.waRel.includes('noopener'),
  `${mailFout.tel} ${mailFout.wa} ${mailFout.waTarget}`)
check('browserpost zonder honeypot en met vast _url',
  failPosts.length === 1 &&
    !failPosts[0].body.includes('website_hp') &&
    failPosts[0].body.includes('_url=https%3A%2F%2Fmegaonline.io%2Fcontact'),
  failPosts[0]?.body?.slice(0, 180) ?? '')
check('invoer blijft staan na een mislukte mail',
  mailFout.naam === 'Mail Faalt' && mailFout.email === 'mail-faalt@example.com' &&
    mailFout.bericht === 'Graag een kennismaking.')
check('server en browser elk één keer bij een weigering',
  failLeads.length === 1 && failPosts.length === 1 &&
    failPosts[0].body.includes('mail-faalt'),
  `server=${failLeads.length} browser=${failPosts.length}`)
const failLogs = await wachtLeadLogs(logsVoorFail + 1)
const failLog = failLogs[logsVoorFail]
const fallbackZonderConsent = await dataLayerEvents(page, 'lead_fallback_getoond')
check(
  'mislukte mail logt één regel zonder persoonsgegevens',
  failLogs.length === logsVoorFail + 1 &&
    leadLogGeldig(failLog) &&
    failLog.json.pagina === '/contact' &&
    failLog.json.formulier === 'contact' &&
    failLog.json.route === 'FormSubmit' &&
    failLog.json.gelukt === false &&
    failLog.json.reden === 'referer-refused',
  failLog?.raw ?? `geen [lead-log] in ${DEV_LOG}`,
)
check(
  'zonder consent geen lead_fallback_getoond en geen bedank-anker',
  fallbackZonderConsent.length === 0 && !heeftBedankAnker(page.url()) && mainGaUrls.length === 0,
  JSON.stringify({ events: fallbackZonderConsent, url: page.url(), ga: mainGaUrls.length }),
)

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
const clientBedank = await bedankZichtbaar(page, '.fhero__form.sent .form__ok')
const clientFallbackEvents = await dataLayerEvents(page, 'lead_browser_fallback')
const clientLeadEvents = await generateLeadEvents(page)
check(
  'browser-fallback zonder consent zet het anker en stuurt geen event',
  clientSent &&
    clientBedank &&
    heeftBedankAnker(page.url()) &&
    clientFallbackEvents.length === 0 &&
    clientLeadEvents.length === 0 &&
    mainGaUrls.length === 0,
  JSON.stringify({ url: page.url(), lead_browser_fallback: clientFallbackEvents, generate_lead: clientLeadEvents }),
)

async function verstuurContact(email, naam) {
  await page.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(page)
  await page.fill('#c-naam', naam)
  await page.fill('#c-email', email)
  await page.fill('#c-tel', '0610101010')
  await page.selectOption('#c-onderwerp', 'Iets anders')
  const postsBefore = clientPosts.length
  const leadsBefore = readLeads().length
  await page.click('.fhero__form button[type="submit"]')
  return { postsBefore, leadsBefore }
}

function sinds(email, postsBefore, leadsBefore) {
  const stem = email.split('@')[0]
  return {
    posts: clientPosts.slice(postsBefore).filter((p) => p.body.includes(stem)),
    leads: readLeads().slice(leadsBefore).filter((l) => l.email === email),
  }
}

async function fallbackZichtbaar(timeout = 8000) {
  await page.locator('.fhero__form [data-lead-fallback]').waitFor({ timeout })
  return page.evaluate(() => ({
    busy: document.querySelector('.fhero__form')?.getAttribute('aria-busy'),
    mailto: !!document.querySelector('.fhero__form [data-lead-fallback] a.btn'),
    sent: document.querySelector('.fhero__form')?.classList.contains('sent') ?? false,
  }))
}

{
  const t = await verstuurContact('status403@example.com', 'Status 403')
  const ui = await fallbackZichtbaar()
  const d = sinds('status403@example.com', t.postsBefore, t.leadsBefore)
  check('403: precies één browserpost en een mailto',
    !ui.sent && ui.mailto && ui.busy !== 'true' && d.leads.length === 1 && d.posts.length === 1,
    `server=${d.leads.length} browser=${d.posts.length} busy=${ui.busy}`)
}

{
  const t = await verstuurContact('status500@example.com', 'Status 500')
  const ui = await fallbackZichtbaar()
  const d = sinds('status500@example.com', t.postsBefore, t.leadsBefore)
  check('5xx: geen browserpost, wel mailto',
    !ui.sent && ui.mailto && d.leads.length === 1 && d.posts.length === 0,
    `server=${d.leads.length} browser=${d.posts.length}`)
}

{
  const t = await verstuurContact('hangt@example.com', 'Hangt')
  const ui = await fallbackZichtbaar(20000)
  const d = sinds('hangt@example.com', t.postsBefore, t.leadsBefore)
  check('timeout: geen browserpost, wel mailto, formulier niet blijven hangen',
    !ui.sent && ui.mailto && ui.busy !== 'true' && d.leads.length === 1 && d.posts.length === 0,
    `server=${d.leads.length} browser=${d.posts.length} busy=${ui.busy}`)
}

{
  const t = await verstuurContact('challenge@example.com', 'Challenge')
  const ui = await fallbackZichtbaar()
  const d = sinds('challenge@example.com', t.postsBefore, t.leadsBefore)
  check('Cloudflare-challenge is geen succes',
    !ui.sent && ui.mailto && d.leads.length === 1 && d.posts.length === 1,
    `server=${d.leads.length} browser=${d.posts.length}`)
}

{
  const t = await verstuurContact('successfalse@example.com', 'Success False')
  const ui = await fallbackZichtbaar()
  const d = sinds('successfalse@example.com', t.postsBefore, t.leadsBefore)
  check('success false is geen succes',
    !ui.sent && ui.mailto && d.leads.length === 1 && d.posts.length === 1,
    `server=${d.leads.length} browser=${d.posts.length}`)
}

{
  let aborted = 0
  const abortServerFn = async (route) => {
    if (route.request().method() === 'POST') {
      aborted += 1
      await route.abort('failed')
      return
    }
    await route.fallback()
  }
  await page.route('**/_serverFn/**', abortServerFn)
  const postsBefore = clientPosts.length
  await page.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(page)
  await page.fill('#c-naam', 'Server Gooit')
  await page.fill('#c-email', 'gooit@example.com')
  await page.selectOption('#c-onderwerp', 'Iets anders')
  await page.click('.fhero__form button[type="submit"]')
  const ui = await fallbackZichtbaar()
  await page.unroute('**/_serverFn/**', abortServerFn)
  const posts = clientPosts.length - postsBefore
  check('server function gooit: mailto, geen browserpost, niet blijven hangen',
    !ui.sent && ui.mailto && ui.busy !== 'true' && aborted >= 1 && posts === 0,
    `afgebroken=${aborted} browser=${posts} busy=${ui.busy}`)
}

{
  const postsBefore = clientPosts.length
  const leadsBefore = readLeads().length
  await page.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(page)
  await page.fill('#c-naam', 'Zonder Contact')
  await page.fill('#c-email', '')
  await page.fill('#c-tel', '')
  await page.evaluate(() => {
    document.querySelectorAll('.fhero__form [required]').forEach((el) => el.removeAttribute('required'))
  })
  await page.click('.fhero__form button[type="submit"]')
  await page.locator('.fhero__form .form__error').waitFor({ timeout: 8000 })
  const validatie = await page.evaluate(() => ({
    fout: document.querySelector('.fhero__form .form__error')?.textContent ?? '',
    mailto: document.querySelectorAll('.fhero__form [data-lead-fallback]').length,
  }))
  check('validatiefout zonder mailto',
    /e-mailadres of telefoonnummer/.test(validatie.fout) &&
      validatie.mailto === 0 &&
      clientPosts.length === postsBefore &&
      readLeads().length === leadsBefore,
    validatie.fout)
}

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

/* --- oude scan-URL en canonieke redirects --- */
{
  const res = await page.request.get(BASE + '/gratis-websitescan', { maxRedirects: 0 })
  const loc = res.headers()['location'] ?? ''
  check('301 /gratis-websitescan', res.status() === 301 && loc.includes('/gratis-websiteconcept'),
    `${res.status()} → ${loc}`)
}

// node:http stuurt het pad ongewijzigd. fetch en Playwright normaliseren
// `//` en `\` al vóór de request, en dan is de open redirect niet te zien.
function rawGet(requestPath) {
  const target = new URL(BASE)
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        protocol: target.protocol,
        hostname: target.hostname,
        port: target.port,
        method: 'GET',
        path: requestPath,
      },
      (res) => {
        res.resume()
        res.on('end', () =>
          resolve({
            status: res.statusCode ?? 0,
            location: res.headers.location ?? '',
          }),
        )
      },
    )
    req.on('error', reject)
    req.end()
  })
}

const canonicalRedirects = [
  ['/', 200, ''],
  ['/gratis-websiteconcept/', 308, '/gratis-websiteconcept'],
  ['/diensten/seo/', 308, '/diensten/seo'],
  ['/gratis-websitescan/', 301, '/gratis-websiteconcept'],
  ['/diensten/seo/?utm_source=test&x=1', 308, '/diensten/seo?utm_source=test&x=1'],
  ['//evil.com/', 308, '/evil.com'],
  ['/\\evil.com/', 308, '/evil.com'],
  ['///evil.com', 308, '/evil.com'],
  ['/diensten//seo/', 308, '/diensten/seo'],
  ['/gratis-websitescan?utm=mail', 301, '/gratis-websiteconcept?utm=mail'],
  ['/gratis-websitescan/?utm=mail', 301, '/gratis-websiteconcept?utm=mail'],
]
for (const [from, status, location] of canonicalRedirects) {
  const res = await rawGet(from)
  const sameOrigin =
    location === '' ||
    (location.startsWith('/') &&
      !location.startsWith('//') &&
      !location.includes('\\') &&
      new URL(location, BASE).origin === new URL(BASE).origin)
  check(
    `redirect ${from}`,
    res.status === status && res.location === location && sameOrigin,
    `${res.status} → ${res.location}`,
  )
}
{
  const first = await rawGet('/diensten//seo/')
  const second = await rawGet(first.location || '/')
  check(
    '308 /diensten//seo/ in één hop',
    first.status === 308 && first.location === '/diensten/seo' && second.status === 200,
    `${first.status} → ${first.location} → ${second.status}`,
  )
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

/* --- kennisbank: FAQ-blok, FAQPage en auteur --- */
const JOSHUA_ID = 'https://megaonline.io/#joshua-bink'

function normTekst(s) {
  return String(s ?? '').replace(/\s+/g, ' ').trim()
}

async function leesKennisbank(pg) {
  return pg.evaluate((joshuaId) => {
    const blok = document.querySelector('section#faq')
    const vragen = blok
      ? [...blok.querySelectorAll('.qa .qa__q')].map((el) => (el.textContent || '').replace(/\s+/g, ' ').trim())
      : []
    const vijf = (document.body.innerText || '').includes(
      'Vijf dingen die je zonder ons kunt uitvoeren',
    )
    const found = []
    const walk = (value) => {
      if (!value || typeof value !== 'object') return
      if (Array.isArray(value)) {
        value.forEach(walk)
        return
      }
      found.push(value)
      Object.values(value).forEach(walk)
    }
    for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
      try {
        walk(JSON.parse(s.textContent || 'null'))
      } catch {
        /* ongeldige markup telt hieronder als ontbrekend schema */
      }
    }
    const article = found.find((n) => n['@type'] === 'Article') ?? null
    const faqPages = found.filter((n) => n['@type'] === 'FAQPage')
    const joshua = found.some((n) => n['@id'] === joshuaId && n.name === 'Joshua Bink')
    return {
      faqBlok: !!blok,
      vragen,
      vijf,
      author: article?.author ?? null,
      faqVragen: faqPages.map((n) =>
        Array.isArray(n.mainEntity) ? n.mainEntity.map((q) => String(q.name ?? '')) : [],
      ),
      joshua,
    }
  }, JOSHUA_ID)
}

function auteurIsJoshua(author) {
  return !!author && author['@id'] === JOSHUA_ID && !author.name
}

async function openKennisbank(pad) {
  await page.goto(BASE + pad, { waitUntil: 'load' })
  await waitHydrated(page)
  return leesKennisbank(page)
}

for (const pad of [
  '/kennisbank/website-levert-geen-aanvragen-op',
  '/kennisbank/vertrouwen-wekken-zakelijke-website',
  '/kennisbank/prijzen-op-website-verhuurbedrijf',
  '/kennisbank/waar-boekingen-weglekken',
]) {
  const data = await openKennisbank(pad)
  const schemaVragen = (data.faqVragen[0] ?? []).map(normTekst)
  const zichtbaar = data.vragen.map(normTekst)
  const gelijk =
    data.faqVragen.length === 1 &&
    zichtbaar.length > 0 &&
    zichtbaar.length === schemaVragen.length &&
    zichtbaar.every((q, i) => q === schemaVragen[i])
  check(
    `${pad} toont FAQ-blok en FAQPage`,
    data.faqBlok && gelijk && data.vijf && auteurIsJoshua(data.author) && data.joshua,
    `blok=${data.faqBlok} vragen=${zichtbaar.length} schema=${data.faqVragen.length} vijf=${data.vijf} auteur=${JSON.stringify(data.author)} joshua=${data.joshua}`,
  )
}

{
  await page.goto(BASE + '/kennisbank/waar-boekingen-weglekken', { waitUntil: 'load' })
  await waitHydrated(page)
  const artikel = await page.evaluate(() => ({
    h1: (document.querySelector('h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    vragen: [...document.querySelectorAll('section#faq .qa .qa__q')].map((el) =>
      (el.textContent || '').replace(/\s+/g, ' ').trim(),
    ),
    ctaHref: document.querySelector('#scan a')?.getAttribute('href') || '',
    ctaTekst: (document.querySelector('#scan a')?.textContent || '').replace(/\s+/g, ' ').trim(),
    ctaKop: (document.querySelector('#scan h2')?.textContent || '').replace(/\s+/g, ' ').trim(),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
  }))
  check(
    'waar-boekingen-weglekken houdt slug, title, meta en H1',
    artikel.h1 === 'Waar lekken boekingen weg op je website?' &&
      artikel.title === 'Waar boekingen weglekken op je website | MegaOnline.io' &&
      artikel.description ===
        'Bezoekers willen boeken en haken toch af. Tien plekken waar boekingen weglekken, waarom dat gebeurt en per lek een zelfcheck van vijf minuten.' &&
      artikel.canonical === 'https://megaonline.io/kennisbank/waar-boekingen-weglekken' &&
      artikel.vragen.length === 3 &&
      artikel.vragen[0] === 'Hoe check je of de boekingsknop op je website werkt?' &&
      artikel.vragen[1] === 'Eerst meer bezoekers of eerst het boekingsproces verbeteren?' &&
      artikel.vragen[2] === 'Heb je een volledig boekingssysteem nodig?',
    `h1=${artikel.h1} title=${artikel.title} vragen=${artikel.vragen.length}`,
  )
  check(
    'waar-boekingen-weglekken gebruikt de standaard eind-CTA',
    artikel.ctaHref.includes('/gratis-websiteconcept') &&
      artikel.ctaTekst === 'Vraag je gratis concept aan' &&
      artikel.ctaKop === 'Wil je een gratis websiteconcept voor je bedrijf?',
    `${artikel.ctaHref} / ${artikel.ctaTekst} / ${artikel.ctaKop}`,
  )
}

{
  const data = await openKennisbank('/kennisbank/smoke-zonder-faq')
  check(
    'artikel zonder FAQ toont geen FAQ-blok en geen FAQPage',
    !data.faqBlok &&
      data.vragen.length === 0 &&
      data.faqVragen.length === 0 &&
      data.vijf &&
      auteurIsJoshua(data.author) &&
      data.joshua,
    `blok=${data.faqBlok} schema=${data.faqVragen.length} vijf=${data.vijf} auteur=${JSON.stringify(data.author)} joshua=${data.joshua}`,
  )
}

{
  const data = await openKennisbank('/kennisbank/smoke-met-auteur')
  const author = data.author ?? {}
  check(
    'gezet auteursveld gebruikt die naam en slaat FAQ over',
    !data.faqBlok &&
      data.vragen.length === 0 &&
      data.faqVragen.length === 0 &&
      data.vijf &&
      author['@type'] === 'Person' &&
      author.name === 'Smoke Auteur' &&
      !author['@id'],
    `blok=${data.faqBlok} schema=${data.faqVragen.length} auteur=${JSON.stringify(data.author)}`,
  )
}

await page.goto(BASE + '/kennisbank', { waitUntil: 'load' })
await waitHydrated(page)
const overzichtHrefs = await page.evaluate(() =>
  [...document.querySelectorAll('a')].map((a) => a.getAttribute('href') || ''),
)
check(
  'controlepagina staat niet in het kennisbankoverzicht',
  !overzichtHrefs.some((href) => href.includes('smoke-')),
  overzichtHrefs.filter((href) => href.includes('kennisbank')).join(' '),
)
check(
  'artikel waar-boekingen-weglekken staat in het kennisbankoverzicht',
  overzichtHrefs.some((href) => href.includes('/kennisbank/waar-boekingen-weglekken')),
  overzichtHrefs.filter((href) => href.includes('kennisbank')).join(' '),
)

/* --- sitemap lastmod --- */
{
  const res = await page.request.get(BASE + "/sitemap.xml");
  const xml = await res.text();
  const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const lastmods = blocks.map((block) =>
    [...block.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)].map((m) => m[1]),
  );
  const dates = lastmods.map((list) => list[0] ?? "");
  check("sitemap 200", res.status() === 200, String(res.status()));
  check("sitemap heeft 38 urls", blocks.length === 38, String(blocks.length));
  const boekingen = blocks.find((block) =>
    block.includes("https://megaonline.io/kennisbank/waar-boekingen-weglekken"),
  );
  check(
    "sitemap bevat waar-boekingen-weglekken met lastmod 2026-10-13",
    !!boekingen && /<lastmod>2026-10-13<\/lastmod>/.test(boekingen),
    boekingen ?? "ontbreekt",
  );
  const kennisbankOverzicht = blocks.find((block) =>
    /<loc>https:\/\/megaonline\.io\/kennisbank<\/loc>/.test(block),
  );
  check(
    "kennisbankoverzicht lastmod volgt de nieuwste gewijzigd",
    !!kennisbankOverzicht && /<lastmod>2026-10-13<\/lastmod>/.test(kennisbankOverzicht),
    kennisbankOverzicht ?? "ontbreekt",
  );
  check(
    "elke url heeft precies één lastmod",
    lastmods.every((list) => list.length === 1 && /^\d{4}-\d{2}-\d{2}$/.test(list[0])),
    dates
      .filter((date) => !/^\d{4}-\d{2}-\d{2}$/.test(date))
      .slice(0, 3)
      .join(", "),
  );
  check("sitemap zonder changefreq en priority", !/<changefreq>|<priority>/.test(xml));
  check(
    "lastmod is niet overal dezelfde datum",
    new Set(dates).size > 1,
    [...new Set(dates)].join(", "),
  );
}

/* --- broodkruimels diensten en branches --- */
for (const crumbPath of ["/diensten/integraties", "/diensten/seo", "/branches/verhuurbedrijven"]) {
  await page.goto(BASE + crumbPath, { waitUntil: "load" });
  await waitHydrated(page);
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll('script[type="application/ld+json"]')].some((node) =>
        (node.textContent || "").includes("BreadcrumbList"),
      ),
    null,
    { timeout: 10000 },
  );
  const crumb = await page.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')].map(
      (node) => node.textContent || "",
    );
    const hrefs = [...document.querySelectorAll(".crumb a")].map(
      (node) => node.getAttribute("href") || "",
    );
    const badItems = [];
    let lastLabel = "";
    for (const raw of scripts) {
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        continue;
      }
      const nodes = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
      for (const node of nodes) {
        if (node["@type"] !== "BreadcrumbList") continue;
        const items = node.itemListElement || [];
        const last = items[items.length - 1];
        if (last && typeof last.name === "string") lastLabel = last.name;
        for (const item of items) {
          const href = typeof item.item === "string" ? item.item : "";
          if (!href) continue;
          let pathname = "";
          let hash = "";
          try {
            const url = new URL(href);
            pathname = url.pathname.replace(/\/$/, "") || "/";
            hash = url.hash;
          } catch {
            pathname = href;
          }
          if (hash === "#diensten" || pathname === "/diensten" || pathname === "/branches") {
            badItems.push(href);
          }
        }
      }
    }
    return {
      json: scripts.join("\n"),
      hrefs,
      badItems,
      lastLabel,
      visible: document.querySelector(".crumb b")?.textContent?.trim() ?? "",
    };
  });
  check(
    `${crumbPath} JSON-LD zonder #diensten`,
    !crumb.json.includes("megaonline.io/#diensten") && crumb.badItems.length === 0,
    crumb.badItems.join(", "),
  );
  check(
    `${crumbPath} kruimellabel gelijk aan zichtbare tekst`,
    crumb.lastLabel !== "" && crumb.lastLabel === crumb.visible,
    `json=${crumb.lastLabel} zichtbaar=${crumb.visible}`,
  );
  check(
    `${crumbPath} zichtbare kruimel zonder #diensten`,
    crumb.hrefs.length > 0 &&
      crumb.hrefs.every(
        (href) =>
          !href.includes("#diensten") &&
          !/\/diensten\/?$/.test(href) &&
          !/\/branches\/?$/.test(href),
      ),
    crumb.hrefs.join(", "),
  );
}

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
  await pg.waitForFunction(
    () => document.activeElement?.classList.contains('form__fallback-title'),
    null,
    { timeout: 3000 },
  )
  const state = await pg.evaluate(() => {
    const form = document.querySelector('.concept.form')
    const naam = form?.querySelector('[name="naam"]')?.value ?? ''
    const email = form?.querySelector('[name="email"]')?.value ?? ''
    const direct = form?.querySelector('.form__direct')
    const fallback = form?.querySelector('[data-lead-fallback]')
    return {
      sent: form?.classList.contains('sent') ?? false,
      naam,
      email,
      directHidden: direct ? getComputedStyle(direct).display === 'none' : false,
      fallbackText: fallback?.textContent ?? '',
      focused: document.activeElement?.classList.contains('form__fallback-title') ?? false,
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
      /zakelijk@joshuabink\.nl/.test(desktopFallback.fallbackText) &&
      desktopFallback.directHidden &&
      desktopFallback.focused &&
      desktopFallback.addedLeads === 1 && desktopFallback.addedPosts === 1,
    `sent=${desktopFallback.sent} server=${desktopFallback.addedLeads} browser=${desktopFallback.addedPosts}`)
  const shotDir = process.env.SCREENSHOT_DIR ?? '/opt/cursor/artifacts'
  fs.mkdirSync(shotDir, { recursive: true })
  await page.locator('[data-lead-fallback]').scrollIntoViewIfNeeded()
  await page.locator('[data-lead-fallback]').screenshot({
    path: path.join(shotDir, 'lead_fallback_desktop_full.png'),
  })

  const narrow = await browser.newPage({ viewport: { width: 390, height: 844 } })
  narrow.on('pageerror', (e) => consoleErrors.push('narrow: ' + String(e)))
  await installRoutes(narrow)
  const mobileFallback = await conceptFallback(narrow)
  check('fallback op 390px zonder horizontale scroll',
    !mobileFallback.sent && mobileFallback.overflow && mobileFallback.addedLeads === 1,
    `overflowOk=${mobileFallback.overflow} server=${mobileFallback.addedLeads}`)
  await narrow.locator('[data-lead-fallback]').scrollIntoViewIfNeeded()
  await narrow.locator('[data-lead-fallback]').screenshot({
    path: path.join(shotDir, 'lead_fallback_mobile_full.png'),
  })
  await narrow.close()
}

/* --- GA4: geen request zonder statistieken-toestemming, wel erna --- */
{
  const gaPage = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const gaUrls = collectGaUrls(gaPage)
  gaPage.on('pageerror', (e) => consoleErrors.push('ga: ' + String(e)))
  // Zelfde afhandeling als de rest van de smoketest (FormSubmit-mock), maar
  // GA-requests laten doorlopen zodat de page_view na toestemming zichtbaar is.
  await installRoutes(gaPage)
  await gaPage.route('**/*', async (route) => {
    if (isGaUrl(route.request().url())) return route.continue()
    return route.fallback()
  })
  // De rest van de test heeft de banner al weggeklikt in dezelfde context.
  await gaPage.context().clearCookies()
  await gaPage.goto(BASE + '/', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await gaPage.locator('[data-role="all"]').waitFor({ timeout: 10000 })
  const beforeChoice = await gaPage.evaluate(() => ({
    consentDefault: window.__moGaConsentDefault === true,
    analyticsDenied: (window.dataLayer ?? []).some(
      (entry) => entry && entry[0] === 'consent' && entry[1] === 'default' && entry[2]?.analytics_storage === 'denied',
    ),
    gtagScripts: document.querySelectorAll('script[src*="googletagmanager.com"]').length,
  }))
  check(
    'zonder toestemming geen GA-request',
    gaUrls.length === 0 && beforeChoice.gtagScripts === 0 && beforeChoice.consentDefault && beforeChoice.analyticsDenied,
    `requests=${gaUrls.length} scripts=${beforeChoice.gtagScripts} default=${beforeChoice.consentDefault} denied=${beforeChoice.analyticsDenied}`,
  )

  await gaPage.click('[data-role="necessary"]')
  await gaPage.waitForTimeout(1200)
  check(
    'alleen essentiële cookies: geen GA-request',
    gaUrls.length === 0 && (await gaPage.locator('script[src*="googletagmanager.com"]').count()) === 0,
    gaUrls.join(' '),
  )

  await gaPage.goto(BASE + '/werken-bij', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await fillSollicitatie(gaPage, 'sol-geen@example.com', 'Zonder Consent')
  await gaPage.click('.sol__form button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.sol__form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const solZonder = await dataLayerEvents(gaPage, 'sollicitatie_verzonden')
  const leadZonderSol = await generateLeadEvents(gaPage)
  check(
    'sollicitatie zonder analytics-consent stuurt geen event',
    solZonder.length === 0 && leadZonderSol.length === 0,
    JSON.stringify({ sollicitatie_verzonden: solZonder, generate_lead: leadZonderSol }),
  )
  check(
    'geslaagde sollicitatie zonder consent zet het bedank-anker',
    heeftBedankAnker(gaPage.url()),
    gaPage.url(),
  )

  await gaPage.context().clearCookies()
  await gaPage.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await gaPage.locator('[data-role="all"]').waitFor({ timeout: 10000 })
  check('na wissen van de keuze nog steeds geen GA-request', gaUrls.length === 0, gaUrls.join(' '))
  const gtagRequest = gaPage.waitForRequest(
    (req) => req.url().includes('googletagmanager.com/gtag/js?id=G-DCZS4D0PFM'),
    { timeout: 8000 },
  )
  await gaPage.click('[data-role="all"]')
  await gtagRequest
  const placed = await gaPage.evaluate(() => {
    const nodes = [...document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')]
    return { count: nodes.length, src: nodes.map((n) => n.src) }
  })
  check(
    'met toestemming laadt gtag.js één keer in de head',
    placed.count === 1 && placed.src[0]?.includes('id=G-DCZS4D0PFM') && gaUrls.some((u) => u.includes('googletagmanager.com/gtag/js?id=G-DCZS4D0PFM')),
    `${placed.count} ${placed.src.join(' ')} | ${gaUrls.join(' ')}`,
  )

  // De page_view na toestemming komt soms pas seconden later binnen.
  // Die hoort niet bij het intrekken hieronder.
  if (!gaUrls.some((u) => u.includes('/g/collect'))) {
    await gaPage.waitForRequest(
      (req) => req.url().includes('/g/collect'),
      { timeout: 8000 },
    ).catch(() => {})
  }

  await gaPage.fill('#c-naam', 'Lead Event')
  await gaPage.fill('#c-email', 'lead-ga@example.com')
  await gaPage.fill('#c-tel', '0610101010')
  await gaPage.selectOption('#c-onderwerp', 'Iets anders')
  await gaPage.fill('#c-bericht', 'Graag een kennismaking over een nieuwe site.')
  await gaPage.click('.fhero__form button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.fhero__form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const contactEvents = await generateLeadEvents(gaPage)
  const contactEvent = contactEvents[0]
  check(
    'met consent stuurt contact generate_lead zonder persoonsgegevens',
    contactEvents.length === 1 &&
      contactEvent?.form_name === 'contact' &&
      contactEvent?.page_path === '/contact' &&
      contactEvent?.keys.join(',') === 'form_name,page_path' &&
      !/lead-ga@example.com|Lead Event|0610101010|kennismaking over een nieuwe site/.test(contactEvent?.raw ?? ''),
    JSON.stringify(contactEvents),
  )
  const contactBedank = await bedankZichtbaar(gaPage, '.fhero__form.sent .form__ok')
  check(
    'geslaagd contactformulier zet het bedank-anker',
    contactBedank && heeftBedankAnker(gaPage.url()) && contactEvent?.route === '',
    gaPage.url(),
  )

  await gaPage.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await gaPage.fill('#c-naam', 'Client Lukt')
  await gaPage.fill('#c-email', 'client-lukt@example.com')
  await gaPage.fill('#c-tel', '0610101010')
  await gaPage.selectOption('#c-onderwerp', 'Iets anders')
  await gaPage.fill('#c-bericht', 'Deze mail gaat via de browser.')
  await gaPage.click('.fhero__form button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.fhero__form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const teltAlsLead = browserFallbackTeltAlsLead()
  const naBrowser = await generateLeadEvents(gaPage)
  const naBrowserEvent = naBrowser[0]
  const browserSignaal = await dataLayerEvents(gaPage, 'lead_browser_fallback')
  const geenFallbackPii = (raw) => !/@|Client Lukt|0610101010|via de browser/.test(raw ?? '')
  const browserSignaalOk =
    browserSignaal.length === 1 &&
    browserSignaal[0].form_name === 'contact' &&
    browserSignaal[0].page_path === '/contact' &&
    browserSignaal[0].keys.join(',') === 'form_name,page_path' &&
    geenFallbackPii(browserSignaal[0].raw)
  const leadViaFallbackOk = teltAlsLead
    ? naBrowser.length === 1 &&
      naBrowserEvent?.form_name === 'contact' &&
      naBrowserEvent?.page_path === '/contact' &&
      naBrowserEvent?.route === 'fallback' &&
      naBrowserEvent?.keys.join(',') === 'form_name,page_path,route' &&
      geenFallbackPii(naBrowserEvent?.raw)
    : naBrowser.length === 0
  check(
    teltAlsLead
      ? 'browser-fallback telt als generate_lead met route fallback'
      : 'browser-fallback na een serverweigering stuurt geen generate_lead',
    leadViaFallbackOk && browserSignaalOk && heeftBedankAnker(gaPage.url()),
    JSON.stringify({
      generate_lead: naBrowser,
      lead_browser_fallback: browserSignaal,
      url: gaPage.url(),
      teltAlsLead,
    }),
  )

  await gaPage.goto(BASE + '/gratis-websiteconcept', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await fillConcept(gaPage, 'concept-lead@example.com', 'Concept Lead')
  await gaPage.click('.fstep[data-step="6"] button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.concept.form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const conceptEvents = await generateLeadEvents(gaPage)
  const conceptEvent = conceptEvents[0]
  check(
    'met consent stuurt het conceptformulier generate_lead',
    conceptEvents.length === 1 &&
      conceptEvent?.form_name === 'gratis-websiteconcept' &&
      conceptEvent?.page_path === '/gratis-websiteconcept' &&
      conceptEvent?.keys.join(',') === 'form_name,page_path' &&
      !/concept-lead@example.com|Concept Lead/.test(conceptEvent?.raw ?? ''),
    JSON.stringify(conceptEvents),
  )
  check(
    'geslaagd conceptformulier met consent zet het bedank-anker',
    heeftBedankAnker(gaPage.url()) && (await bedankZichtbaar(gaPage, '.concept.form.sent .form__ok')),
    gaPage.url(),
  )

  await gaPage.goto(BASE + '/werken-bij', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await fillSollicitatie(gaPage, 'sol-lead@example.com', 'Sollicitant Event')
  await gaPage.click('.sol__form button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.sol__form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const solEvents = await dataLayerEvents(gaPage, 'sollicitatie_verzonden')
  const solEvent = solEvents[0]
  const leadOpSollicitatie = await generateLeadEvents(gaPage)
  check(
    'met consent stuurt sollicitatie sollicitatie_verzonden zonder persoonsgegevens',
    solEvents.length === 1 &&
      leadOpSollicitatie.length === 0 &&
      solEvent?.page_path === '/werken-bij' &&
      solEvent?.keys.join(',') === 'page_path' &&
      !SOLLICITATIE_PII.test(solEvent?.raw ?? ''),
    JSON.stringify({ sollicitatie_verzonden: solEvents, generate_lead: leadOpSollicitatie }),
  )
  check(
    'geslaagde sollicitatie met consent zet het bedank-anker',
    heeftBedankAnker(gaPage.url()),
    gaPage.url(),
  )

  await gaPage.goto(BASE + '/werken-bij', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await fillSollicitatie(gaPage, 'client-lukt@example.com', 'Client Sol')
  await gaPage.click('.sol__form button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.sol__form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const solNaBrowser = await dataLayerEvents(gaPage, 'sollicitatie_verzonden')
  const leadNaSolBrowser = await generateLeadEvents(gaPage)
  check(
    'browser-fallback van sollicitatie stuurt geen event',
    solNaBrowser.length === 0 && leadNaSolBrowser.length === 0,
    JSON.stringify({ sollicitatie_verzonden: solNaBrowser, generate_lead: leadNaSolBrowser }),
  )
  const solBrowserSignaal = await dataLayerEvents(gaPage, 'lead_browser_fallback')
  check(
    'browser-fallback van sollicitatie is apart zichtbaar zonder persoonsgegevens',
    solBrowserSignaal.length === 1 &&
      solBrowserSignaal[0].form_name === 'sollicitatie' &&
      solBrowserSignaal[0].page_path === '/werken-bij' &&
      solBrowserSignaal[0].keys.join(',') === 'form_name,page_path' &&
      !SOLLICITATIE_PII.test(solBrowserSignaal[0].raw ?? '') &&
      heeftBedankAnker(gaPage.url()),
    JSON.stringify({ lead_browser_fallback: solBrowserSignaal, url: gaPage.url() }),
  )

  await gaPage.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await gaPage.fill('#c-naam', 'Mail Faalt')
  await gaPage.fill('#c-email', 'mail-faalt@example.com')
  await gaPage.fill('#c-tel', '0611111111')
  await gaPage.selectOption('#c-onderwerp', 'Iets anders')
  await gaPage.fill('#c-bericht', 'Graag een kennismaking.')
  await gaPage.click('.fhero__form button[type="submit"]')
  await gaPage.locator('.fhero__form [data-lead-fallback]').waitFor({ timeout: 8000 })
  const getoond = await dataLayerEvents(gaPage, 'lead_fallback_getoond')
  const leadBijGetoond = await generateLeadEvents(gaPage)
  const browserBijGetoond = await dataLayerEvents(gaPage, 'lead_browser_fallback')
  check(
    'met consent komt lead_fallback_getoond in de dataLayer zonder persoonsgegevens',
    getoond.length === 1 &&
      getoond[0].form_name === 'contact' &&
      getoond[0].page_path === '/contact' &&
      getoond[0].keys.join(',') === 'form_name,page_path' &&
      leadBijGetoond.length === 0 &&
      browserBijGetoond.length === 0 &&
      !heeftBedankAnker(gaPage.url()) &&
      !/@|Mail Faalt|0611111111|kennismaking/.test(getoond[0].raw ?? ''),
    JSON.stringify({ lead_fallback_getoond: getoond, generate_lead: leadBijGetoond, url: gaPage.url() }),
  )

  await gaPage.locator('.footer__cookie').click()
  await gaPage.locator('#cc-main [data-role="save"]').waitFor({ timeout: 8000 })
  const toggled = await gaPage.evaluate(() => {
    const title = [...document.querySelectorAll('.pm__section-title')].find((el) =>
      (el.textContent ?? '').includes('Statistieken'),
    )
    const toggle = title?.closest('.pm__section--toggle')?.querySelector('input.section__toggle')
    if (!(toggle instanceof HTMLInputElement)) return 'missing'
    if (toggle.checked) toggle.click()
    return toggle.checked ? 'still-on' : 'off'
  })
  const beforeRevoke = gaUrls.length
  await gaPage.locator('#cc-main [data-role="save"]').click()
  await gaPage.waitForTimeout(400)
  await gaPage.reload({ waitUntil: 'load' })
  await waitHydrated(gaPage)
  await gaPage.waitForTimeout(1200)
  const afterRevoke = gaUrls.slice(beforeRevoke).filter(isGaUrl)
  check(
    'na intrekken geen nieuw GA-request',
    toggled === 'off' && afterRevoke.length === 0,
    `toggle=${toggled} nieuw=${afterRevoke.join(' ')}`,
  )
  await gaPage.close()
}

check(
  'smoketest zonder cookietoestemming doet geen GA-request',
  mainGaUrls.length === 0,
  mainGaUrls.join(' '),
)

await controleerCtaTeksten(browser)

/* ---------------- Resultaat ---------------- */
const realErrors = consoleErrors.filter(
  (e) => !/favicon|React DevTools|net::ERR_FAILED|Failed to load resource/i.test(e),
)
check('geen console-fouten', realErrors.length === 0, realErrors.slice(0, 3).join(' | '))

const serverPosts = readLeads().length
const alleLeadLogs = await wachtLeadLogs(serverPosts)
const ongeldigeLogs = alleLeadLogs.filter((entry) => !leadLogGeldig(entry))
// Een inzending zonder e-mail of telefoon wordt afgekeurd vóór de mailroute
// en komt dus niet in de mock terecht, maar hoort wel één logregel te krijgen.
const afgekeurd = alleLeadLogs.filter((entry) => entry.json?.reden === 'geen-contact').length
check(
  'elke serverinzending heeft precies één lead-log zonder persoonsgegevens',
  alleLeadLogs.length === serverPosts + afgekeurd &&
    serverPosts > 0 &&
    afgekeurd >= 1 &&
    ongeldigeLogs.length === 0,
  `logs=${alleLeadLogs.length} server=${serverPosts} afgekeurd=${afgekeurd} ongeldig=${ongeldigeLogs.map((entry) => entry.raw).slice(0, 2).join(' | ')}`,
)

await browser.close()
console.table(results)
console.log(failed ? `${failed} test(s) gefaald.` : 'Alle smoketests geslaagd.')
process.exitCode = failed ? 1 : 0
