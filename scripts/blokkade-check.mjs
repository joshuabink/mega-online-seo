/**
 * Controleert de route-regels zonder een formulier te vullen en zonder
 * een verzoek te versturen. Faalt als een externe POST zou worden doorgelaten.
 */
import { routeBesluit } from './mail-blokkade.mjs'

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
    naam: 'GA-POST wordt geblokkeerd',
    url: 'https://www.google-analytics.com/g/collect?v=2',
    method: 'POST',
    body: 'en=page_view',
    actie: 'blokkeren',
  },
  {
    naam: 'GET van het meetscript mag',
    url: 'https://www.googletagmanager.com/gtag/js?id=G-TEST',
    method: 'GET',
    body: '',
    actie: 'doorlaten',
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

if (gefaald) {
  console.error(`${gefaald} blokkade-regel(s) gefaald.`)
  process.exit(1)
}
console.log('Blokkade-regels houden externe posts tegen, zonder een formulier te versturen.')
