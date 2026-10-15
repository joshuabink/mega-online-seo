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

const CTA_SCAN = leesCtaConstante('CTA_SCAN')

/** Oude knopzinnen. Geen van deze mag nog op een knop staan. */
const OUDE_CTA_VARIANTEN = [
  'Vraag je gratis concept aan',
  'Vraag gratis concept aan',
  'Vraag een gratis concept aan',
  'Vraag je gratis websitescan aan',
  'Vraag je gratis website-scan aan',
  'Gratis concept aanvragen',
  'Vraag je gratis websiteconcept aan',
]

function normCta(s) {
  return String(s ?? '').replace(/\s+/g, ' ').replace(/\s*→\s*$/u, '').trim()
}

/**
 * CTA-bewaker. Een CTA-knop is een bediening waarvan de zichtbare tekst
 * exact CTA_SCAN is, of een .btn die naar de scanpagina wijst, of de
 * verstuurknop van het scan- of conceptformulier. Die tekst moet CTA_SCAN
 * zijn. Een link daarbij gaat naar /gratis-websitescan, of naar #formulier
 * of #scan op de scanpagina zelf. De gebouwde HTML mag nergens websiteconcept
 * of href="tel:", of een href met wa.me of whatsapp bevatten. '2 werkdagen' mag, behalve in hetzelfde element,
 * dezelfde zin of dezelfde kaart als het woord scan. Een telefoonnummer als
 * tekst of in JSON-LD mag blijven.
 */
async function controleerCtaTeksten(browser) {
  const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await installRoutes(pg)
  const sitemap = await pg.request.get(BASE + '/sitemap.xml')
  const xml = await sitemap.text()
  const paden = [...xml.matchAll(/<loc>https:\/\/megaonline\.io([^<]*)<\/loc>/g)].map((m) => m[1] || '/')
  check('sitemap-paden voor CTA-controle', sitemap.status() === 200 && paden.length > 0 && !paden.includes('/gratis-websiteconcept'), String(paden.length))

  const fouten = []
  let zagScan = false

  for (const pad of paden) {
    const res = await pg.goto(BASE + pad, { waitUntil: 'domcontentloaded', timeout: 30000 })
    if (!res || res.status() >= 400) {
      fouten.push(`${pad} status ${res ? res.status() : 'geen'}`)
      continue
    }
    const data = await pg.evaluate((scan) => {
      const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').replace(/\s*→\s*$/u, '').trim()
      const kloon = document.body.cloneNode(true)
      kloon.querySelectorAll('script, style, noscript').forEach((n) => n.remove())
      const meta = (sel) => document.querySelector(sel)?.getAttribute('content') ?? ''
      const zichtbaar = [kloon.innerText, document.title, meta('meta[name="description"]'), meta('meta[property="og:title"]'), meta('meta[property="og:description"]')].join('\n')
      const bestemming = (href) => {
        if (!href) return { soort: 'geen' }
        try {
          const u = new URL(href, location.href)
          const path = u.pathname.replace(/\/$/, '') || '/'
          const hier = location.pathname.replace(/\/$/, '') || '/'
          if ((u.hash === '#formulier' || u.hash === '#scan') && path === hier) return { soort: 'anker' }
          if (path === '/gratis-websitescan') return { soort: 'scan' }
          return { soort: 'anders', pad: `${path}${u.search}${u.hash}` }
        } catch {
          return { soort: 'anders', pad: href }
        }
      }
      const knoppen = []
      for (const el of document.querySelectorAll('a, button')) {
        const tekst = norm(el.innerText)
        if (!tekst) continue
        const isBtn = el.classList.contains('btn')
        const isSubmit = el.matches('button[type="submit"]') && !!el.closest('.concept, [data-scan-form]')
        const href = el.tagName === 'A' ? bestemming(el.getAttribute('href')) : { soort: 'geen' }
        if (tekst !== scan && !(isBtn && href.soort === 'scan') && !isSubmit) continue
        knoppen.push({ tekst, href: href.soort, hrefPad: href.pad || '' })
      }
      const eindEl = document.querySelector('#scan a.btn')
      const form = document.querySelector('[data-screen-label="Conceptformulier"]')
      const morgen = document.querySelector('[data-screen-label="Wat je morgen kunt doen"]')
      return {
        knoppen,
        zichtbaar,
        eind: eindEl ? norm(eindEl.innerText) : '',
        heeftForm: !!document.querySelector('.concept'),
        formVoorMorgen: !!(
          form &&
          morgen &&
          (form.compareDocumentPosition(morgen) & Node.DOCUMENT_POSITION_FOLLOWING)
        ),
        html: document.documentElement.outerHTML,
        gemengd: (() => {
          const tekstVan = (el) => norm(el.innerText || el.textContent || '')
          const beide = (tekst) => /2 werkdagen/.test(tekst) && /scan/i.test(tekst)
          const eenheid = 'p, li, h1, h2, h3, h4, h5, h6, td, th, dd, figcaption, a, button, span, label'
          const treffers = []
          for (const el of document.querySelectorAll(eenheid)) {
            const tekst = tekstVan(el)
            if (!beide(tekst)) continue
            const kindHeeftBeide = [...el.children].some(
              (kind) => kind.matches(eenheid) && beide(tekstVan(kind)),
            )
            if (kindHeeftBeide) continue
            treffers.push(tekst.slice(0, 160))
          }
          for (const el of document.querySelectorAll('.ccard, .price-card, .card')) {
            const tekst = tekstVan(el)
            if (beide(tekst)) treffers.push(`kaart ${tekst.slice(0, 160)}`)
          }
          for (const el of document.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, td, dd, figcaption')) {
            for (const zin of tekstVan(el).split(/(?<=[.!?])\s+/)) {
              if (beide(zin)) treffers.push(`zin ${zin.slice(0, 160)}`)
            }
          }
          return treffers
        })(),
      }
    }, CTA_SCAN)

    if (/websiteconcept/i.test(data.html)) fouten.push(`${pad} HTML bevat websiteconcept`)
    if (data.gemengd.length) fouten.push(`${pad} koppelt 2 werkdagen aan scan: ${data.gemengd[0]}`)
    if (/href=["']tel:/i.test(data.html)) fouten.push(`${pad} HTML bevat href="tel:`)
    if (/href=["'][^"']*(?:wa\.me|whatsapp)/i.test(data.html)) fouten.push(`${pad} HTML bevat een WhatsApp-link`)
    if (/websiteconcept/i.test(data.zichtbaar)) fouten.push(`${pad} toont websiteconcept`)
    for (const oud of OUDE_CTA_VARIANTEN) {
      if (data.zichtbaar.includes(oud)) fouten.push(`${pad} bevat "${oud}"`)
    }
    for (const knop of data.knoppen) {
      if (knop.tekst !== CTA_SCAN) fouten.push(`${pad} CTA-tekst "${knop.tekst}"`)
      else zagScan = true
      if (knop.href === 'anders') fouten.push(`${pad} CTA-link ${knop.hrefPad}`)
    }
    const kennisbankCta = {
      '/kennisbank': { form: false },
      '/kennisbank/website-levert-geen-aanvragen-op': { form: true },
      '/kennisbank/prijzen-op-website-verhuurbedrijf': { form: false },
      '/kennisbank/vertrouwen-wekken-zakelijke-website': { form: false },
      '/kennisbank/waar-boekingen-weglekken': { form: false },
      '/kennisbank/wat-is-seo': { form: false },
    }[pad]
    if (kennisbankCta) {
      if (data.eind !== CTA_SCAN) fouten.push(`${pad} eind-CTA "${data.eind}"`)
      if (data.heeftForm !== kennisbankCta.form) {
        fouten.push(`${pad} formulier=${data.heeftForm}, verwacht ${kennisbankCta.form}`)
      }
      if (kennisbankCta.form && !data.formVoorMorgen) {
        fouten.push(`${pad} formulier staat niet vóór "Wat je morgen kunt doen"`)
      }
    }
  }

  check(
    'CTA-bewaker: alleen de scanknop, alleen de scanpagina, geen websiteconcept',
    fouten.length === 0 && zagScan,
    fouten.slice(0, 8).join(' | ') || `scan=${zagScan} pagina's=${paden.length}`,
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
  /@|\b06\d{8}\b|example\.com|Test Persoon|Testbedrijf|Mail Faalt|Client Lukt|Concept Faalt|Concept Lead|Artikel Lead|Lead Event|Sollicitant|Zonder Consent|Client Sol|springkussens|kennismaking|meelopen|linkedin|Graag een/i

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
  if (!['concept', 'contact', 'sollicitatie', 'scan'].includes(j.formulier)) return false
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
    title: 'Website met reserveringssysteem laten maken | MegaOnline',
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
const directTelLinks = await page.locator('.form__direct a[href^="tel:"]').count()
const directWa = await page.locator('.form__direct a[href*="wa.me"], .form__direct a[href*="whatsapp"]').count()
check(
  'contactregel staat onder de verzendknop',
  /Liever direct contact/.test(direct) &&
    /zakelijk@joshuabink\.nl/.test(direct) &&
    /06 34 38 89 38/.test(direct) &&
    /WhatsApp/.test(direct) &&
    directMail === 'mailto:zakelijk@joshuabink.nl' &&
    directTelLinks === 0 &&
    directWa === 0,
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
    conceptLog.json.formulier === 'scan' &&
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
  lead?._subject === 'Gratis website scan aanvraag' && !!lead?._pagina,
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
    telLinks: fallback?.querySelectorAll('a[href^="tel:"]').length ?? 0,
    waLinks: fallback?.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').length ?? 0,
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
    /WhatsApp/.test(mailFout.text) &&
    mailFout.telLinks === 0 &&
    mailFout.waLinks === 0,
  `${mailFout.telLinks} ${mailFout.waLinks}`)
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

/* --- oude concept-URL en canonieke redirects --- */
{
  const res = await page.request.get(BASE + '/gratis-websiteconcept', { maxRedirects: 0 })
  const loc = res.headers()['location'] ?? ''
  check('301 /gratis-websiteconcept', res.status() === 301 && loc.includes('/gratis-websitescan'),
    `${res.status()} → ${loc}`)
  const scan = await page.request.get(BASE + '/gratis-websitescan', { maxRedirects: 0 })
  check('200 /gratis-websitescan', scan.status() === 200, String(scan.status()))
}

{
  await page.goto(BASE + '/gratis-websitescan', { waitUntil: 'load' })
  await waitHydrated(page)
  const scanPagina = await page.evaluate((scanKnop) => {
    const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim()
    const veld = (naam) => document.querySelector(`[name="${naam}"]`)
    const tel = document.querySelectorAll('a[href^="tel:"]').length
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
      h1: norm(document.querySelector('h1')?.textContent),
      lead: norm(document.querySelector('.scan-hero .lead')?.textContent),
      formTag: document.getElementById('formulier')?.tagName || '',
      heroHref: document.querySelector('.scan-hero a.btn-primary')?.getAttribute('href') || '',
      tekstHref: [...document.querySelectorAll('a.tlink')].find((a) => norm(a.textContent) === 'Begin met de gratis website scan')?.getAttribute('href') || '',
      faqs: [...document.querySelectorAll('#vragen .qa__q')].map((el) => norm(el.textContent)),
      faq5antwoord: norm(document.querySelectorAll('#vragen .qa__a')[4]?.textContent),
      bedank: norm(document.querySelector('.scanform .form__ok')?.textContent),
      oplevering: norm(document.querySelector('.scan-side p')?.textContent),
      schemaReactie: [...document.querySelectorAll('script[type="application/ld+json"]')].some((node) => {
        const raw = node.textContent || ''
        return raw.includes('FAQPage') && raw.includes('Je ontvangt de uitkomst van de scan binnen 5 werkdagen na je aanvraag.')
      }),
      velden: ['site', 'mis', 'toelichting', 'doel', 'naam', 'mail'].map((naam) => ({
        naam,
        aantal: document.querySelectorAll(`[name="${naam}"]`).length,
        required: veld(naam)?.required ?? false,
      })),
      knop: norm(document.querySelector('.scanform button[type="submit"]')?.textContent),
      honeypot: !!document.querySelector('[name="company_hp"]'),
      oudeHoneypot: !!document.querySelector('.scanform [name="website_hp"]'),
      tel,
      privacy: document.querySelector('.scanform a[href="/privacyverklaring"]') ? true : false,
      schema: [...document.querySelectorAll('script[type="application/ld+json"]')].some((node) => {
        const raw = node.textContent || ''
        return raw.includes('FAQPage') && raw.includes('Service') && raw.includes('Wat is de gratis website scan?')
      }),
    }
  }, CTA_SCAN)
  const veldenOk =
    scanPagina.velden[0].aantal === 1 && scanPagina.velden[0].required &&
    scanPagina.velden[1].aantal === 6 &&
    scanPagina.velden[2].aantal === 1 && !scanPagina.velden[2].required &&
    scanPagina.velden[3].aantal === 4 && scanPagina.velden[3].required &&
    scanPagina.velden[4].aantal === 1 && scanPagina.velden[4].required &&
    scanPagina.velden[5].aantal === 1 && scanPagina.velden[5].required
  check(
    'scanpagina heeft title, H1, vijf vragen, zes velden en de scanknop',
    scanPagina.title === 'Gratis website scan voor je bedrijfswebsite | MegaOnline' &&
      scanPagina.description.startsWith('Vraag een gratis website scan aan.') &&
      scanPagina.canonical === 'https://megaonline.io/gratis-websitescan' &&
      !/noindex/i.test(scanPagina.robots) &&
      scanPagina.h1 === 'Vraag een gratis website scan aan' &&
      scanPagina.lead === 'We bekijken je site en vertellen je eerlijk wat je nu aanvragen en boekingen kost, en wat het eerst moet.' &&
      scanPagina.formTag === 'FORM' &&
      scanPagina.heroHref === '#formulier' &&
      scanPagina.tekstHref === '#formulier' &&
      scanPagina.faqs.length === 5 &&
      scanPagina.faqs[0] === 'Wat is de gratis website scan?' &&
      scanPagina.faqs[4] === 'Hoe snel ontvang ik de uitkomst?' &&
      veldenOk &&
      scanPagina.knop === CTA_SCAN &&
      scanPagina.honeypot &&
      !scanPagina.oudeHoneypot &&
      scanPagina.tel === 0 &&
      scanPagina.privacy &&
      scanPagina.schema,
    JSON.stringify(scanPagina).slice(0, 400),
  )
  check(
    'scan noemt binnen 5 werkdagen in de FAQ, de FAQPage en de bedankmelding',
    scanPagina.faq5antwoord === 'Je ontvangt de uitkomst van de scan binnen 5 werkdagen na je aanvraag.' &&
      scanPagina.schemaReactie &&
      scanPagina.bedank.includes('binnen 5 werkdagen'),
    `faq=${scanPagina.faq5antwoord} schema=${scanPagina.schemaReactie} bedank=${scanPagina.bedank}`,
  )
  check(
    'zijblok noemt rapport en videogesprek',
    scanPagina.oplevering.includes('rapport') &&
      scanPagina.oplevering.includes('videogesprek') &&
      scanPagina.oplevering === 'Binnen 5 werkdagen ontvang je een rapport over je site. In een persoonlijk videogesprek lichten we het rapport toe.',
    scanPagina.oplevering,
  )

  async function sprongNaarFormulier(selector) {
    const origin = await page.evaluate(() => {
      window.__scanBlijft = 'ja'
      history.replaceState(history.state, '', `${location.pathname}${location.search}`)
      window.scrollTo(0, 0)
      return performance.timeOrigin
    })
    await page.locator(selector).click()
    await page.waitForFunction(() => location.hash === '#formulier', null, { timeout: 5000 })
    await page.waitForFunction(() => {
      const form = document.getElementById('formulier')
      if (!form) return false
      const r = form.getBoundingClientRect()
      return r.top < window.innerHeight && r.bottom > 0
    }, null, { timeout: 5000 })
    return page.evaluate((vorige) => {
      const form = document.getElementById('formulier')
      const r = form.getBoundingClientRect()
      return {
        hash: location.hash,
        path: location.pathname,
        mark: window.__scanBlijft || '',
        zelfdeDocument: performance.timeOrigin === vorige,
        inView: r.top < window.innerHeight && r.bottom > 0,
      }
    }, origin)
  }

  const heroSprong = await sprongNaarFormulier('.scan-hero a.btn-primary[href="#formulier"]')
  check(
    'hero-knop springt naar #formulier zonder herladen',
    heroSprong.hash === '#formulier' &&
      heroSprong.path === '/gratis-websitescan' &&
      heroSprong.mark === 'ja' &&
      heroSprong.zelfdeDocument &&
      heroSprong.inView,
    JSON.stringify(heroSprong),
  )
  const tekstSprong = await sprongNaarFormulier('a.tlink[href="#formulier"]')
  check(
    'tekstlink springt naar #formulier zonder herladen',
    tekstSprong.hash === '#formulier' &&
      tekstSprong.path === '/gratis-websitescan' &&
      tekstSprong.mark === 'ja' &&
      tekstSprong.zelfdeDocument &&
      tekstSprong.inView,
    JSON.stringify(tekstSprong),
  )

  await page.fill('[name="site"]', 'jouwbedrijf.nl')
  await page.locator('[name="mis"]').first().check()
  await page.locator('[name="doel"]').first().check()
  await page.fill('[name="naam"]', 'Scan Persoon')
  await page.fill('[name="mail"]', 'scan-lead@example.com')
  const logsVoorScan = readLeadLogs().length
  const leadsVoorScan = readLeads().length
  await page.click('.scanform button[type="submit"]')
  await page.waitForFunction(
    () => document.querySelector('.scanform')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const scanLogs = await wachtLeadLogs(logsVoorScan + 1)
  const scanLog = scanLogs[logsVoorScan]
  const scanLead = readLeads().at(-1)
  check(
    'scanformulier telt apart in de lead-log',
    readLeads().length === leadsVoorScan + 1 &&
      scanLead?.mail === 'scan-lead@example.com' &&
      scanLead?.site === 'https://jouwbedrijf.nl' &&
      scanLead?.naam === 'Scan Persoon' &&
      scanLead?._subject === 'Gratis website scan aanvraag' &&
      !('company_hp' in (scanLead ?? {})) &&
      !('branche' in (scanLead ?? {})) &&
      !('telefoon' in (scanLead ?? {})) &&
      leadLogGeldig(scanLog) &&
      scanLog.json.formulier === 'scan' &&
      scanLog.json.pagina === '/gratis-websitescan' &&
      scanLog.json.gelukt === true &&
      page.url().includes('#aanvraag-verstuurd'),
    `${scanLog?.raw ?? 'geen log'} | ${JSON.stringify(scanLead ?? {}).slice(0, 240)} | ${page.url()}`,
  )

  const scanToontVijf = await page.evaluate(() => document.body.innerText.includes('binnen 5 werkdagen'))
  await page.goto(BASE + '/contact', { waitUntil: 'load' })
  await waitHydrated(page)
  const contactToontTwee = await page.evaluate(() => document.body.innerText.includes('binnen 2 werkdagen'))
  check(
    'contact toont binnen 2 werkdagen en de scanpagina binnen 5 werkdagen',
    scanToontVijf && contactToontTwee,
    `scan=${scanToontVijf} contact=${contactToontTwee}`,
  )

  await page.goto(BASE + '/diensten/starter-website', { waitUntil: 'load' })
  await waitHydrated(page)
  const starterEind = await page.evaluate(() => {
    const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim()
    const kop = document.querySelector('[data-screen-label="Eind-CTA + scan-formulier"] .endcta__copy')
    const links = [...(kop?.querySelectorAll('a') ?? [])].map((a) => ({
      tekst: norm(a.textContent),
      href: a.getAttribute('href') || '',
    }))
    return {
      links,
      kennismaking: norm(kop?.innerText).includes('Plan een kennismaking'),
    }
  })
  check(
    'starterpagina heeft precies één eind-CTA',
    starterEind.links.length === 1 &&
      starterEind.links[0].tekst === CTA_SCAN &&
      starterEind.links[0].href === '/gratis-websitescan' &&
      !starterEind.kennismaking,
    JSON.stringify(starterEind),
  )

  const starterPagina = await page.evaluate(() => {
    const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim()
    const main = document.querySelector('main')
    const hero = document.querySelector('[data-screen-label="Hero — Starter Website"]')
    const knoppen = [...(hero?.querySelectorAll('a.btn, button') ?? [])].map((el) => ({
      tekst: norm(el.textContent),
      href: el.getAttribute('href') || '',
    }))
    const prijs = [...(hero?.querySelectorAll('a') ?? [])].find((a) => norm(a.textContent) === 'Bekijk wat het kost')
    return {
      kennismaking: norm(main?.innerText).includes('Plan een kennismaking'),
      knoppen,
      prijs: prijs
        ? {
            href: prijs.getAttribute('href') || '',
            knop: prijs.classList.contains('btn'),
            tlink: prijs.classList.contains('tlink'),
          }
        : null,
    }
  })
  check(
    'starterpagina noemt geen kennismaking',
    !starterPagina.kennismaking,
    JSON.stringify(starterPagina),
  )
  check(
    'starterhero heeft precies één knop',
    starterPagina.knoppen.length === 1 &&
      starterPagina.knoppen[0].tekst === CTA_SCAN &&
      starterPagina.knoppen[0].href === '/gratis-websitescan' &&
      starterPagina.prijs?.href === '#prijs' &&
      starterPagina.prijs.tlink === true &&
      starterPagina.prijs.knop === false,
    JSON.stringify(starterPagina),
  )
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
  ['/gratis-websitescan/', 308, '/gratis-websitescan'],
  ['/diensten/seo/', 308, '/diensten/seo'],
  ['/gratis-websiteconcept/', 301, '/gratis-websitescan'],
  ['/diensten/seo/?utm_source=test&x=1', 308, '/diensten/seo?utm_source=test&x=1'],
  ['//evil.com/', 308, '/evil.com'],
  ['/\\evil.com/', 308, '/evil.com'],
  ['///evil.com', 308, '/evil.com'],
  ['/diensten//seo/', 308, '/diensten/seo'],
  ['/gratis-websiteconcept?utm=mail', 301, '/gratis-websitescan?utm=mail'],
  ['/gratis-websiteconcept/?utm=mail', 301, '/gratis-websitescan?utm=mail'],
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
      'Vijf dingen die je zelf kunt uitvoeren',
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
  '/kennisbank/wat-is-seo',
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
    'waar-boekingen-weglekken eindigt op de scan',
    artikel.ctaHref.includes('/gratis-websitescan') &&
      artikel.ctaTekst === CTA_SCAN &&
      artikel.ctaKop === 'Wil je weten wat je site laat liggen?',
    `${artikel.ctaHref} / ${artikel.ctaTekst} / ${artikel.ctaKop}`,
  )
}

{
  const res = await page.goto(BASE + '/kennisbank/wat-is-seo', { waitUntil: 'load' })
  await waitHydrated(page)
  const artikel = await page.evaluate(() => ({
    h1: (document.querySelector('h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
    title: document.title,
    vragen: [...document.querySelectorAll('section#faq .qa .qa__q')].map((el) =>
      (el.textContent || '').replace(/\s+/g, ' ').trim(),
    ),
    ctaHref: document.querySelector('#scan a')?.getAttribute('href') || '',
    ctaTekst: (document.querySelector('#scan a')?.textContent || '').replace(/\s+/g, ' ').trim(),
    ctaKop: (document.querySelector('#scan h2')?.textContent || '').replace(/\s+/g, ' ').trim(),
    interne: [...new Set(
      [...document.querySelectorAll('main a[href]')]
        .map((a) => a.getAttribute('href') || '')
        .filter((href) => href.startsWith('/') && !href.startsWith('//'))
        .map((href) => href.split('#')[0] || '/'),
    )],
  }))
  check('wat-is-seo geeft 200', res?.status() === 200, String(res?.status()))
  check(
    'wat-is-seo title en H1',
    artikel.h1 === 'Wat is zoekmachineoptimalisatie (SEO)?' &&
      artikel.title === 'Wat is zoekmachineoptimalisatie (SEO)? | MegaOnline',
    `h1=${artikel.h1} title=${artikel.title}`,
  )
  check(
    'wat-is-seo toont de vier FAQ-vragen',
    artikel.vragen.length === 4 &&
      artikel.vragen[0] === 'Wat betekent SEO precies?' &&
      artikel.vragen[1] === 'Is SEO hetzelfde als Google Ads?' &&
      artikel.vragen[2] === 'Kan iemand een plek bovenaan in Google garanderen?' &&
      artikel.vragen[3] === 'Wat is het verschil tussen SEO en GEO?',
    artikel.vragen.join(' | '),
  )
  check(
    'wat-is-seo eindknop toont de scan-tekst',
    artikel.ctaTekst === CTA_SCAN &&
      artikel.ctaHref === '/gratis-websitescan' &&
      artikel.ctaKop === 'Wil je weten wat je site laat liggen?' &&
      !/nieuw ontwerp|websiteconcept/i.test(artikel.ctaTekst),
    `${artikel.ctaHref} / ${artikel.ctaTekst}`,
  )
  const kapot = []
  for (const href of artikel.interne) {
    const antwoord = await page.request.get(BASE + href)
    if (antwoord.status() !== 200) kapot.push(`${href} ${antwoord.status()}`)
  }
  check(
    'interne links van wat-is-seo geven 200',
    kapot.length === 0 && artikel.interne.includes('/diensten/seo'),
    kapot.join(', ') || artikel.interne.join(' '),
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
const overzichtEind = await page.evaluate(() =>
  (document.querySelector('#scan a.btn')?.textContent || '').replace(/\s+/g, ' ').trim(),
)
check('kennisbankoverzicht toont de scan-tekst', overzichtEind === CTA_SCAN, overzichtEind)

async function leesArtikelForm(pad) {
  await page.goto(BASE + pad, { waitUntil: 'load' })
  await waitHydrated(page)
  return page.evaluate(() => {
    const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim()
    const form = document.querySelector('[data-screen-label="Conceptformulier"]')
    const morgen = document.querySelector('[data-screen-label="Wat je morgen kunt doen"]')
    const eind = document.querySelector('#scan a.btn')
    return {
      heeftForm: !!document.querySelector('.concept'),
      formVoorMorgen: !!(
        form &&
        morgen &&
        (form.compareDocumentPosition(morgen) & Node.DOCUMENT_POSITION_FOLLOWING)
      ),
      eind: eind ? norm(eind.textContent) : '',
      href: eind?.getAttribute('href') || '',
    }
  })
}

for (const [pad, eind, form] of [
  ['/kennisbank/website-levert-geen-aanvragen-op', CTA_SCAN, true],
  ['/kennisbank/prijzen-op-website-verhuurbedrijf', CTA_SCAN, false],
  ['/kennisbank/vertrouwen-wekken-zakelijke-website', CTA_SCAN, false],
  ['/kennisbank/waar-boekingen-weglekken', CTA_SCAN, false],
  ['/kennisbank/wat-is-seo', CTA_SCAN, false],
  ['/kennisbank/smoke-zonder-faq', CTA_SCAN, false],
]) {
  const artikel = await leesArtikelForm(pad)
  check(
    `${pad} eind-CTA en formulier volgen het artikelveld`,
    artikel.eind === eind &&
      artikel.href === '/gratis-websitescan' &&
      artikel.heeftForm === form &&
      (!form || artikel.formVoorMorgen),
    `eind=${artikel.eind} href=${artikel.href} form=${artikel.heeftForm} voorMorgen=${artikel.formVoorMorgen}`,
  )
}

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
  check("sitemap heeft 39 urls", blocks.length === 39, String(blocks.length));
  const scanInSitemap = blocks.find((block) => block.includes("https://megaonline.io/gratis-websitescan"));
  check(
    "sitemap bevat de scan van vandaag en niet het oude conceptadres",
    !!scanInSitemap &&
      /<lastmod>2026-10-14<\/lastmod>/.test(scanInSitemap) &&
      !xml.includes("gratis-websiteconcept"),
    scanInSitemap ?? "ontbreekt",
  );
  const boekingen = blocks.find((block) =>
    block.includes("https://megaonline.io/kennisbank/waar-boekingen-weglekken"),
  );
  check(
    "sitemap bevat waar-boekingen-weglekken met lastmod 2026-10-13",
    !!boekingen && /<lastmod>2026-10-13<\/lastmod>/.test(boekingen),
    boekingen ?? "ontbreekt",
  );
  const watIsSeo = blocks.find((block) =>
    block.includes("https://megaonline.io/kennisbank/wat-is-seo"),
  );
  check(
    "sitemap bevat wat-is-seo met lastmod 2026-10-14",
    !!watIsSeo && /<lastmod>2026-10-14<\/lastmod>/.test(watIsSeo),
    watIsSeo ?? "ontbreekt",
  );
  const kennisbankOverzicht = blocks.find((block) =>
    /<loc>https:\/\/megaonline\.io\/kennisbank<\/loc>/.test(block),
  );
  check(
    "kennisbankoverzicht lastmod volgt de nieuwste gewijzigd",
    !!kennisbankOverzicht && /<lastmod>2026-10-14<\/lastmod>/.test(kennisbankOverzicht),
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
  await pg.goto(BASE + '/', { waitUntil: 'load' })
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

  await gaPage.goto(BASE + '/', { waitUntil: 'load' })
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
      conceptEvent?.form_name === 'scan' &&
      conceptEvent?.page_path === '/' &&
      conceptEvent?.keys.join(',') === 'form_name,page_path' &&
      !/concept-lead@example.com|Concept Lead/.test(conceptEvent?.raw ?? ''),
    JSON.stringify(conceptEvents),
  )
  check(
    'geslaagd conceptformulier met consent zet het bedank-anker',
    heeftBedankAnker(gaPage.url()) && (await bedankZichtbaar(gaPage, '.concept.form.sent .form__ok')),
    gaPage.url(),
  )

  await gaPage.goto(BASE + '/kennisbank/website-levert-geen-aanvragen-op', { waitUntil: 'load' })
  await waitHydrated(gaPage)
  await gaPage.evaluate(() => document.querySelector('.concept')?.scrollIntoView({ block: 'center' }))
  await gaPage.waitForFunction(
    () => document.querySelector('.concept')?.classList.contains('in'),
    null,
    { timeout: 8000 },
  )
  await fillConcept(gaPage, 'artikel-lead@example.com', 'Artikel Lead')
  await gaPage.click('.concept .fstep[data-step="6"] button[type="submit"]')
  await gaPage.waitForFunction(
    () => document.querySelector('.concept.form')?.classList.contains('sent'),
    null,
    { timeout: 8000 },
  )
  const artikelEvents = await generateLeadEvents(gaPage)
  const artikelEvent = artikelEvents[0]
  check(
    'inzending via het kennisbankartikel stuurt generate_lead',
    artikelEvents.length === 1 &&
      artikelEvent?.form_name === 'scan' &&
      artikelEvent?.page_path === '/kennisbank/website-levert-geen-aanvragen-op' &&
      artikelEvent?.keys.join(',') === 'form_name,page_path' &&
      !/artikel-lead@example.com|Artikel Lead/.test(artikelEvent?.raw ?? ''),
    JSON.stringify(artikelEvents),
  )
  check(
    'geslaagd kennisbankformulier zet het bedank-anker',
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
