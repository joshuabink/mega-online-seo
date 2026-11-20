import { beoordeelLeadRoute, type LeadEnv } from './lead-route.ts'
import { schoneVelden } from './lead-mailto.ts'

/** Vast voorvoegsel. Het geheime segment komt alleen uit de omgeving. */
const PAD_VOORVOEGSEL = '/health/lead/'

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'x-robots-tag': 'noindex',
}

/**
 * Procesomgeving plus de binding die het platform aan `fetch` meegeeft.
 * Een gevulde platformwaarde wint, zodat de hostingvariabele geldt.
 */
export function leesRuntimeEnv(platformEnv: unknown): LeadEnv {
  const proces = (globalThis as { process?: { env?: LeadEnv } }).process?.env
  const samen: LeadEnv = { ...(proces ?? {}) }
  if (!platformEnv || typeof platformEnv !== 'object') return samen
  for (const [sleutel, waarde] of Object.entries(platformEnv as Record<string, unknown>)) {
    if (typeof waarde === 'string') samen[sleutel] = waarde
  }
  return samen
}

/** Vaste voorbeeldinzending. Geen honeypot; het adres haalt de contactcheck. */
export function dryCheckVelden(): URLSearchParams {
  const ruw = new URLSearchParams()
  ruw.set('naam', 'Leadmonitor')
  ruw.set('email', 'leadmonitor@example.com')
  ruw.set('bericht', 'Controle van de leadroute')
  ruw.set('_subject', 'Website scan')
  ruw.set('_pagina', 'https://megaonline.io/')
  return schoneVelden(ruw)
}

/**
 * Zelfde validatie als een inzending. Roept geen fetch, mail, melding of
 * lead-log aan.
 */
export function controleerLeadRoute(env: LeadEnv): { ok: true } | { ok: false; error: string } {
  const oordeel = beoordeelLeadRoute(dryCheckVelden(), env)
  if (!oordeel.ok) return { ok: false, error: oordeel.error }
  return { ok: true }
}

function nietGevonden(): Response {
  return new Response('Not Found', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex',
    },
  })
}

function jsonAntwoord(status: number, body: { ok: true } | { ok: false; error: string }): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS })
}

/** SHA-256 van beide kanten, daarna een vergelijking zonder vroege return. */
async function gelijkInVasteTijd(links: string, rechts: string): Promise<boolean> {
  const encoder = new TextEncoder()
  const [linksHash, rechtsHash] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(links)),
    crypto.subtle.digest('SHA-256', encoder.encode(rechts)),
  ])
  const a = new Uint8Array(linksHash)
  const b = new Uint8Array(rechtsHash)
  let verschil = 0
  for (let i = 0; i < a.length; i++) verschil |= a[i] ^ b[i]
  return verschil === 0
}

/**
 * `GET /health/lead/<segment>`. Het segment moet gelijk zijn aan
 * `LEAD_DRYCHECK_TOKEN`. Ontbreekt de variabele of wijkt het segment af,
 * dan 404 — ook bij een verkeerde methode. Andere paden geven `null`,
 * zodat de gewone server ze afhandelt.
 */
export async function leadDryCheck(request: Request, platformEnv?: unknown): Promise<Response | null> {
  let url: URL
  try {
    url = new URL(request.url)
  } catch {
    return null
  }
  if (!url.pathname.startsWith(PAD_VOORVOEGSEL)) return null

  const rest = url.pathname.slice(PAD_VOORVOEGSEL.length)
  if (!rest || rest.includes('/')) return nietGevonden()

  let segment = ''
  try {
    segment = decodeURIComponent(rest)
  } catch {
    return nietGevonden()
  }
  if (!segment || request.method !== 'GET') return nietGevonden()

  const verwacht = leesRuntimeEnv(platformEnv).LEAD_DRYCHECK_TOKEN?.trim() ?? ''
  if (!verwacht || !(await gelijkInVasteTijd(segment, verwacht))) return nietGevonden()

  try {
    const resultaat = controleerLeadRoute(leesRuntimeEnv(platformEnv))
    if (!resultaat.ok) return jsonAntwoord(500, resultaat)
    return jsonAntwoord(200, { ok: true })
  } catch {
    console.error('[dry-check] controle mislukt')
    return jsonAntwoord(500, { ok: false, error: 'dry-check' })
  }
}
