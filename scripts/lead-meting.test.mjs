import assert from 'node:assert/strict'
import test from 'node:test'
import { GENERATE_LEAD_BIJ_BROWSER_FALLBACK, generateLeadBijToestemming, generateLeadParams } from '../src/lib/analytics.ts'
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
