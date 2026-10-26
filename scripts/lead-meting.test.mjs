import assert from 'node:assert/strict'
import { registerHooks } from 'node:module'
import test from 'node:test'
import { GENERATE_LEAD_BIJ_BROWSER_FALLBACK, generateLeadBijToestemming, generateLeadParams, initAnalytics, optOut, trackGenerateLead } from '../src/lib/analytics.ts'
import { metingenVoorResultaat } from '../src/lib/lead-meting.ts'

const PII = /@|06\d{8}|naam|email|telefoon|bericht/i

function events(metingen) {
  return metingen.map((item) => item.event)
}

test('een geslaagde serverreactie geeft generate_lead zonder persoonsgegevens', () => {
  const metingen = metingenVoorResultaat({ ok: true, via: 'server' }, 'contact', 'lead', true)
  assert.deepEqual(events(metingen), ['generate_lead'])
  const params = generateLeadParams('contact', '/contact')
  assert.deepEqual(params, { form_name: 'contact', page_path: '/contact' })
  assert.equal(PII.test(JSON.stringify(params)), false)
})

test('websitescan en concept gebruiken hun form_name en het paginapad', () => {
  for (const [formName, page] of [['scan', '/gratis-websitescan'], ['concept', '/']]) {
    const metingen = metingenVoorResultaat({ ok: true, via: 'server' }, formName, 'lead', true)
    assert.deepEqual(events(metingen), ['generate_lead'])
    assert.deepEqual(generateLeadParams(formName, page), { form_name: formName, page_path: page })
  }
})

test('een klik of een validatiefout geeft geen generate_lead', () => {
  const validatie = metingenVoorResultaat(
    { ok: false, error: 'Vul een e-mailadres of telefoonnummer in.' },
    'scan',
    'lead',
    true,
  )
  assert.deepEqual(validatie, [])
  const mailto = metingenVoorResultaat(
    { ok: false, error: 'niet verstuurd', mailto: 'mailto:info@megaonline.io' },
    'contact',
    'lead',
    true,
  )
  assert.deepEqual(events(mailto), ['lead_fallback_getoond'])
  assert.equal(events(mailto).includes('generate_lead'), false)
})

test('een geslaagde browser-terugval telt als response, een sollicitatie nooit als lead', () => {
  const terugval = metingenVoorResultaat(
    { ok: true, via: 'client', route: 'FormSubmit' },
    'scan',
    'lead',
    true,
  )
  assert.deepEqual(events(terugval), ['lead_browser_fallback', 'generate_lead'])
  assert.equal(terugval[1].route, 'fallback')
  const params = generateLeadParams('scan', '/gratis-websitescan', { route: 'fallback' })
  assert.deepEqual(params, { form_name: 'scan', page_path: '/gratis-websitescan', route: 'fallback' })
  assert.equal(Object.keys(params).sort().join(','), 'form_name,page_path,route')

  const sollicitatie = metingenVoorResultaat({ ok: true, via: 'server' }, 'sollicitatie', 'sollicitatie', true)
  assert.deepEqual(events(sollicitatie), ['sollicitatie_verzonden'])
  const sollicitatieTerugval = metingenVoorResultaat(
    { ok: true, via: 'client', route: 'FormSubmit' },
    'sollicitatie',
    'sollicitatie',
    true,
  )
  assert.equal(events(sollicitatieTerugval).includes('generate_lead'), false)
})

test('een form_name met een e-mailadres wordt geweigerd', () => {
  assert.equal(generateLeadParams('jan@example.com', '/contact'), null)
})

test('zonder toestemming geen generate_lead', () => {
  assert.equal(GENERATE_LEAD_BIJ_BROWSER_FALLBACK, true)
  assert.equal(generateLeadBijToestemming(false, 'contact', '/contact'), null)
  assert.equal(generateLeadBijToestemming(false, 'scan', '/gratis-websitescan', { route: 'fallback' }), null)
  assert.deepEqual(generateLeadBijToestemming(true, 'contact', '/contact'), {
    form_name: 'contact',
    page_path: '/contact',
  })
})

test('trackGenerateLead volgt gaActive', async () => {
  const posthogStub = 'data:text/javascript,' + encodeURIComponent(
    'export default { init(){ globalThis.__moPosthogStub = (globalThis.__moPosthogStub ?? 0) + 1 }, opt_in_capturing(){}, opt_out_capturing(){}, capture(){} }',
  )
  registerHooks({
    resolve(specifier, context, nextResolve) {
      if (specifier === 'posthog-js') return { url: posthogStub, shortCircuit: true }
      return nextResolve(specifier, context)
    },
  })

  const aangemaakt = []
  const dataLayer = []
  const fakeWindow = {
    dataLayer,
    document: {
      title: 'test',
      head: { appendChild(node) { aangemaakt.push(node) } },
      querySelector() { return null },
      createElement() { return { dataset: {} } },
      addEventListener() {},
    },
    gtag(...args) { dataLayer.push(args) },
  }
  const vorig = {
    window: globalThis.window,
    document: globalThis.document,
    location: globalThis.location,
  }
  globalThis.window = fakeWindow
  globalThis.document = fakeWindow.document
  globalThis.location = { pathname: '/contact', search: '', href: 'http://127.0.0.1/contact' }

  const leads = () => dataLayer.filter((entry) => entry[0] === 'event' && entry[1] === 'generate_lead')

  try {
    trackGenerateLead('contact')
    assert.equal(leads().length, 0)

    initAnalytics()
    const gestart = Date.now()
    while (!globalThis.__moPosthogStub) {
      if (Date.now() - gestart > 1000) throw new Error('posthog-stub niet geladen')
      await new Promise((resolve) => setTimeout(resolve, 10))
    }
    assert.equal(leads().length, 0)
    assert.equal(aangemaakt.length, 1)
    assert.match(aangemaakt[0].src, /^https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-DCZS4D0PFM$/)
    assert.equal(aangemaakt[0].nodeType, undefined)

    trackGenerateLead('contact')
    assert.equal(leads().length, 1)
    assert.deepEqual(leads()[0][2], { form_name: 'contact', page_path: '/contact' })

    optOut()
    trackGenerateLead('contact')
    assert.equal(leads().length, 1)
  } finally {
    optOut()
    globalThis.window = vorig.window
    globalThis.document = vorig.document
    globalThis.location = vorig.location
    delete globalThis.__moPosthogStub
  }
})
