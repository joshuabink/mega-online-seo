import { LEAD_CONTACT } from './lead-contact.ts'

/** Zelfde grens als de server: trim, daarna maximaal dit aantal tekens. */
export const MAX_FIELD_LENGTH = 5000

const BLOCKED = new Set(['website_hp'])

const VELD_LABELS: Record<string, string> = {
  naam: 'Naam',
  bedrijf: 'Bedrijf',
  email: 'E-mailadres',
  telefoon: 'Telefoonnummer',
  tel: 'Telefoonnummer',
  url: 'Website',
  branche: 'Branche',
  doel: 'Wat de website moet opleveren',
  knelpunt: 'Knelpunt',
  omschrijving: 'Wat het bedrijf doet',
  geen_website: 'Nog geen website',
  start: 'Wanneer starten',
  bericht: 'Bericht',
  toel: 'Toelichting',
  onderwerp: 'Onderwerp',
  reden: 'Reden',
  kanaal: 'Kanaal',
  rol: 'Rol',
  link: 'Link',
  motivatie: 'Motivatie',
}

/** Mailto-URL's boven ongeveer dit aantal tekens knipt een deel van de clients af. */
export const MAX_MAILTO_LENGTH = 2000

/**
 * Zichtbaar in logs: eerste teken van het lokale deel, of alleen de laatste
 * twee cijfers van een telefoonnummer.
 */
export function maskContact(value: string): string {
  const v = value.trim()
  if (!v) return ''
  if (v.includes('@')) {
    const at = v.indexOf('@')
    const local = v.slice(0, at)
    const domain = v.slice(at + 1)
    const first = Array.from(local)[0] ?? ''
    return `${first}***@${domain}`
  }
  const digits = v.replace(/\D/g, '')
  return `***${digits.slice(-2)}`
}

/** Zelfde opschoning als de server. De spamval gaat eruit, lege velden ook. */
export function schoneVelden(params: URLSearchParams): URLSearchParams {
  const out = new URLSearchParams()
  for (const [key, value] of params) {
    if (BLOCKED.has(key)) continue
    const clean = value.trim().slice(0, MAX_FIELD_LENGTH)
    if (clean) out.append(key, clean)
  }
  return out
}

/** Eén Unicode-teken per stap, zodat een emoji niet in een los surrogate eindigt. */
function codePoints(text: string): string[] {
  return Array.from(text).filter((ch) => {
    const c = ch.codePointAt(0) ?? 0
    return c < 0xd800 || c > 0xdfff
  })
}

function truncateEncoded(text: string, budget: number): string {
  if (budget <= 0) return ''
  let out = ''
  for (const ch of codePoints(text)) {
    const next = out + ch
    if (encodeURIComponent(next).length > budget) break
    out = next
  }
  return out
}

/**
 * mailto met CRLF tussen de regels. De hele URL blijft rond de 2000 tekens,
 * gemeten ná encoding, en de knip valt op een heel teken.
 */
export function leadMailto(subject: string, params: URLSearchParams): string {
  const lines: string[] = []
  for (const [key, value] of params) {
    if (!value || key.startsWith('_') || key === 'website_hp') continue
    lines.push(`${VELD_LABELS[key] ?? key}: ${value}`)
  }
  const pagina = params.get('_pagina')
  if (pagina) lines.push('', `Pagina: ${pagina}`)

  const suffix = '...'
  const suffixEncoded = encodeURIComponent(suffix).length
  let safeSubject = codePoints(subject).join('')
  const prefix = `mailto:${LEAD_CONTACT.mail}?subject=`
  const mid = '&body='

  while (
    safeSubject &&
    prefix.length + encodeURIComponent(safeSubject).length + mid.length + suffixEncoded > MAX_MAILTO_LENGTH
  ) {
    safeSubject = codePoints(safeSubject).slice(0, -1).join('')
  }

  const head = `${prefix}${encodeURIComponent(safeSubject)}${mid}`
  const budget = MAX_MAILTO_LENGTH - head.length
  let body = lines.join('\r\n')
  if (encodeURIComponent(body).length > budget) {
    body = truncateEncoded(body, Math.max(0, budget - suffixEncoded))
    if (body && encodeURIComponent(body).length + suffixEncoded <= budget) body += suffix
  }

  const href = head + encodeURIComponent(body)
  return href.length <= MAX_MAILTO_LENGTH ? href : head
}
