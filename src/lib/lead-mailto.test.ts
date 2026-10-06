import assert from 'node:assert/strict'
import { test } from 'node:test'
import { leadMailto, maskContact, schoneVelden, MAX_FIELD_LENGTH, MAX_MAILTO_LENGTH } from './lead-mailto.ts'

test('mailto blijft onder de gecodeerde lengte en knipt emoji heel af', () => {
  const params = new URLSearchParams()
  params.set('naam', 'Test')
  params.set('bericht', '🙂'.repeat(4000))
  const href = leadMailto('Onderwerp met 🙂', params)
  assert.ok(href.length <= MAX_MAILTO_LENGTH, `lengte ${href.length}`)
  assert.ok(href.startsWith('mailto:zakelijk@joshuabink.nl?'))
  assert.ok(href.includes('%0D%0A'))
  const body = decodeURIComponent(href.split('body=')[1] ?? '')
  assert.doesNotThrow(() => encodeURIComponent(body))
  assert.equal(body.includes('\uD83D') && !body.includes('🙂') ? 'half' : 'heel', 'heel')
})

test('een los surrogate in de invoer gooit geen URIError', () => {
  const params = new URLSearchParams()
  params.set('bericht', `voor\uD83Dna`)
  assert.doesNotThrow(() => leadMailto('onderwerp', params))
  const href = leadMailto('onderwerp', params)
  assert.ok(href.length <= MAX_MAILTO_LENGTH)
})

test('website_hp gaat niet mee en velden worden getrimd en begrensd', () => {
  const params = new URLSearchParams()
  params.set('website_hp', 'ik ben een bot')
  params.set('naam', '  Ada  ')
  params.set('bericht', 'x'.repeat(MAX_FIELD_LENGTH + 50))
  const clean = schoneVelden(params)
  assert.equal(clean.get('website_hp'), null)
  assert.equal(clean.get('naam'), 'Ada')
  assert.equal(clean.get('bericht')?.length, MAX_FIELD_LENGTH)
  const href = leadMailto('S', params)
  assert.equal(href.includes('website_hp'), false)
})

test('e-mail en telefoon worden gemaskeerd', () => {
  assert.equal(maskContact('janna@domain.nl'), 'j***@domain.nl')
  assert.equal(maskContact('+31634388938'), '***38')
})
