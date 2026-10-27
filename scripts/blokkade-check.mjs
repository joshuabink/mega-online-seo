/**
 * Controleert de route-regels zonder een formulier te vullen en zonder
 * een verzoek te versturen. Faalt als een externe POST zou worden doorgelaten.
 */
import { isGaUrl, isLoopbackHost, isLoopbackUrl, redirectBesluit, routeBesluit } from './mail-blokkade.mjs'
import { SITEMAP_ONDERGRENS, SITEMAP_UITZONDERINGEN, sitemapDekking } from './sitemap-dekking.mjs'

const gevallen = [
  {
    naam: 'formsubmit.co wordt lokaal beantwoord',
    url: 'https://formsubmit.co/ajax/zakelijk@joshuabink.nl',
    method: 'POST',
    body: 'email=test@example.com&naam=Test',
    actie: 'lokaal',
    bevat: '"smoke":"onderschept"',
  },
  {
    naam: 'mail-faalt naar formsubmit.co blijft lokaal',
    url: 'https://formsubmit.co/zakelijk@joshuabink.nl',
    method: 'POST',
    body: 'email=mail-faalt@example.com',
    actie: 'lokaal',
    bevat: '"success":"false"',
  },
  {
    naam: 'api.resend.com wordt niet doorgelaten',
    url: 'https://api.resend.com/emails',
    method: 'POST',
    body: '{}',
    actie: 'lokaal',
    bevat: '"smoke":"onderschept"',
  },
  {
    naam: 'lokale mock mag door',
    url: 'http://localhost:3101/mail',
    method: 'POST',
    body: 'email=test@example.com',
    actie: 'doorlaten',
  },
  {
    naam: 'loopback GET mag door',
    url: 'http://127.0.0.1:3000/',
    method: 'GET',
    body: '',
    actie: 'doorlaten',
  },
  {
    naam: 'IPv6-loopback met haken mag door',
    url: 'http://[::1]:3000/',
    method: 'GET',
    body: '',
    actie: 'doorlaten',
  },
  {
    naam: 'localhost in hoofdletters mag door',
    url: 'http://LOCALHOST:3101/mail',
    method: 'POST',
    body: 'email=test@example.com',
    actie: 'doorlaten',
  },
  {
    naam: 'localhost met trailing dot mag door',
    url: 'http://localhost.:3000/',
    method: 'GET',
    body: '',
    actie: 'doorlaten',
  },
  {
    naam: 'GA-POST wordt geblokkeerd',
    url: 'https://www.google-analytics.com/g/collect?v=2',
    method: 'POST',
    body: 'en=page_view',
    actie: 'blokkeren',
  },
  {
    naam: 'PUT naar een GA-URL wordt geblokkeerd',
    url: 'https://www.google-analytics.com/g/collect',
    method: 'PUT',
    body: '',
    actie: 'blokkeren',
  },
  {
    naam: 'PUT naar formsubmit blijft lokaal',
    url: 'https://formsubmit.co/ajax/zakelijk@joshuabink.nl',
    method: 'PUT',
    body: 'email=test@example.com',
    actie: 'lokaal',
    bevat: '"smoke":"onderschept"',
  },
  {
    naam: 'GET van het meetscript mag',
    url: 'https://www.googletagmanager.com/gtag/js?id=G-TEST',
    method: 'GET',
    body: '',
    actie: 'doorlaten',
  },
  {
    naam: 'query met googletagmanager.com is geen GA-host',
    url: 'https://evil.example/?googletagmanager.com',
    method: 'GET',
    body: '',
    actie: 'blokkeren',
  },
  {
    naam: 'overig extern verzoek wordt geblokkeerd',
    url: 'https://fonts.googleapis.com/css?family=x',
    method: 'GET',
    body: '',
    actie: 'blokkeren',
  },
]

let gefaald = 0
for (const geval of gevallen) {
  const uit = routeBesluit(geval)
  const ok = uit.actie === geval.actie && (!geval.bevat || String(uit.body ?? '').includes(geval.bevat))
  console.log(`${ok ? 'ok' : 'FOUT'}  ${geval.naam}  actie=${uit.actie}`)
  if (!ok) gefaald += 1
}

const externePosts = [
  'https://formsubmit.co/ajax/zakelijk@joshuabink.nl',
  'https://formsubmit.co/zakelijk@joshuabink.nl',
  'https://api.resend.com/emails',
  'https://www.google-analytics.com/g/collect',
  'https://example.test/lead',
]
for (const url of externePosts) {
  const uit = routeBesluit({ url, method: 'POST', body: 'email=test@example.com' })
  const ok = uit.actie !== 'doorlaten'
  console.log(`${ok ? 'ok' : 'FOUT'}  externe POST niet doorlaten  ${url}  actie=${uit.actie}`)
  if (!ok) gefaald += 1
}

const hosts = [
  ['[::1]', true],
  ['::1', true],
  ['LOCALHOST', true],
  ['localhost.', true],
  ['127.0.0.1.', true],
  ['evil.example', false],
]
for (const [host, verwacht] of hosts) {
  const uit = isLoopbackHost(host)
  const ok = uit === verwacht
  console.log(`${ok ? 'ok' : 'FOUT'}  isLoopbackHost(${host})=${uit}`)
  if (!ok) gefaald += 1
}

const urls = [
  ['http://[::1]:3101/mail', true],
  ['http://LOCALHOST:3101/mail', true],
  ['http://localhost.:3000/', true],
  ['https://127.0.0.1:3000/', false],
  ['http://evil.example/', false],
]
for (const [url, verwacht] of urls) {
  const uit = isLoopbackUrl(url)
  const ok = uit === verwacht
  console.log(`${ok ? 'ok' : 'FOUT'}  isLoopbackUrl(${url})=${uit}`)
  if (!ok) gefaald += 1
}

const ga = [
  ['https://www.googletagmanager.com/gtag/js?id=G-TEST', true],
  ['https://www.google-analytics.com/g/collect', true],
  ['https://analytics.google.com/g/collect', true],
  ['https://evil.example/?googletagmanager.com', false],
  ['https://www.googletagmanager.com.evil.example/', false],
]
for (const [url, verwacht] of ga) {
  const uit = isGaUrl(url)
  const ok = uit === verwacht
  console.log(`${ok ? 'ok' : 'FOUT'}  isGaUrl(${url})=${uit}`)
  if (!ok) gefaald += 1
}

const sprong = redirectBesluit('http://127.0.0.1:3000/', 'https://evil.example/weg', 'GET')
const sprongOk = sprong.van.actie === 'doorlaten' && sprong.naar.actie === 'blokkeren'
console.log(`${sprongOk ? 'ok' : 'FOUT'}  redirect van loopback naar extern  van=${sprong.van.actie} naar=${sprong.naar.actie}`)
if (!sprongOk) gefaald += 1

const mailSprong = redirectBesluit('http://[::1]:3000/mail', 'https://formsubmit.co/ajax/zakelijk@joshuabink.nl', 'POST')
const mailSprongOk = mailSprong.van.actie === 'doorlaten' && mailSprong.naar.actie === 'lokaal'
console.log(`${mailSprongOk ? 'ok' : 'FOUT'}  redirect van loopback naar formsubmit  van=${mailSprong.van.actie} naar=${mailSprong.naar.actie}`)
if (!mailSprongOk) gefaald += 1

const basis = Array.from({ length: SITEMAP_ONDERGRENS }, (_, i) => `/pagina-${i}`)
const vol = sitemapDekking(new Set([...basis, ...SITEMAP_UITZONDERINGEN]), basis)
const volOk = vol.ondergrens && vol.ontbreekt.length === 0
console.log(`${volOk ? 'ok' : 'FOUT'}  sitemap-ondergrens en uitzonderingen  aantal=${vol.aantal} ontbreekt=${vol.ontbreekt.length}`)
if (!volOk) gefaald += 1

const teKlein = sitemapDekking(new Set(basis.slice(0, 10)), basis.slice(0, 10))
const teKleinOk = teKlein.ondergrens === false
console.log(`${teKleinOk ? 'ok' : 'FOUT'}  sitemap onder de ondergrens faalt  aantal=${teKlein.aantal}`)
if (!teKleinOk) gefaald += 1

const mistRoute = sitemapDekking(new Set([...basis, '/verdwenen']), basis)
const mistOk = mistRoute.ontbreekt.length === 1 && mistRoute.ontbreekt[0] === '/verdwenen'
console.log(`${mistOk ? 'ok' : 'FOUT'}  route die uit de sitemap verdwijnt faalt  ${mistRoute.ontbreekt.join(',')}`)
if (!mistOk) gefaald += 1

const beideWeg = sitemapDekking(new Set(basis.slice(1)), basis.slice(1))
const beideOk = beideWeg.ondergrens === false && beideWeg.ontbreekt.length === 0
console.log(`${beideOk ? 'ok' : 'FOUT'}  url weg uit route en sitemap zakt door de ondergrens  aantal=${beideWeg.aantal}`)
if (!beideOk) gefaald += 1

if (gefaald) {
  console.error(`${gefaald} blokkade-regel(s) gefaald.`)
  process.exit(1)
}
console.log('Blokkade-regels houden externe posts tegen, zonder een formulier te versturen.')
