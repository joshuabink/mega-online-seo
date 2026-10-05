import { submitLead } from './submit-lead'
import { LEAD_CONTACT } from './lead-contact'

/**
 * Client-side helper voor lead-inzendingen.
 *
 * Verzamelt het formulier, normaliseert het url-veld en roept de server
 * function aan die de inzending als mail verstuurt. Lukt die mail niet,
 * en is zeker dat er niets is verstuurd, dan probeert de browser één keer
 * zelf FormSubmit. Daarna blijft een mailto over, met de ingevulde antwoorden.
 */

/** Voegt `https://` toe als er geen protocol is ingevuld. Lege waarde blijft leeg.
 *  Bewust géén strikte URL-validatie: de bezoeker mag `mijnbedrijf.nl` invullen
 *  zonder foutmelding — dat is expliciet zo gevraagd. */
export function normalizeUrl(value: string | null | undefined): string {
  const v = (value ?? '').trim()
  if (!v) return v
  if (!/^https?:\/\//i.test(v)) return 'https://' + v
  return v
}

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

/** Zelfde ajax-endpoint als de documentatie van FormSubmit. De browser stuurt zelf Referer en Origin mee. */
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${LEAD_CONTACT.mail}`

const VALIDATION_ERROR = 'Vul een e-mailadres of telefoonnummer in.'

export type LeadResult =
  | { ok: true }
  | { ok: false; error: string; mailto?: string }

export function leadMailto(subject: string, params: URLSearchParams): string {
  const lines: string[] = []
  for (const [key, value] of params) {
    if (!value || key.startsWith('_') || key === 'website_hp') continue
    lines.push(`${VELD_LABELS[key] ?? key}: ${value}`)
  }
  const pagina = params.get('_pagina')
  if (pagina) lines.push('', `Pagina: ${pagina}`)

  let body = lines.join('\n')
  const head = `mailto:${LEAD_CONTACT.mail}?subject=${encodeURIComponent(subject)}&body=`
  const budget = 1900 - head.length
  if (body.length > budget) body = `${body.slice(0, Math.max(0, budget - 3))}...`
  return head + encodeURIComponent(body)
}

/**
 * FormSubmit ajax antwoordt met `"success":"true"` of `"success":"false"` als
 * string. De string "false" is truthy, dus die mag niet als geslaagd tellen.
 */
export function formSubmitAjaxGelukt(body: string): boolean {
  const trimmed = body.trim()
  if (!trimmed) return false
  const lower = trimmed.toLowerCase()
  if (lower.includes('unable to submit form') || lower.includes('needs activation')) return false
  if (lower.includes('just a moment') || lower.includes('attention required')) return false
  try {
    const data = JSON.parse(trimmed) as { success?: unknown }
    return data.success === true || data.success === 'true'
  } catch {
    return lower.includes('submitted successfully')
  }
}

async function postFormSubmitFromBrowser(params: URLSearchParams): Promise<boolean> {
  const body = new URLSearchParams(params)
  body.set('_template', 'table')
  body.set('_captcha', 'false')
  if (typeof location !== 'undefined') body.set('_url', location.href)
  const email = body.get('email')
  if (email) body.set('_replyto', email)

  try {
    const res = await fetch(FORMSUBMIT_AJAX, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: body.toString(),
    })
    const text = await res.text()
    if (!res.ok) return false
    return formSubmitAjaxGelukt(text)
  } catch {
    return false
  }
}

export async function sendLead(
  form: HTMLFormElement,
  opts: { subject?: string } = {},
): Promise<LeadResult> {
  const data = new FormData(form)

  if (data.has('url')) data.set('url', normalizeUrl(String(data.get('url'))))

  const subject = opts.subject ?? 'Nieuwe aanvraag via MegaOnline.io'
  data.append('_subject', subject)
  data.append(
    '_pagina',
    typeof document !== 'undefined' ? `${document.title} — ${location.href}` : '',
  )

  // Meerkeuze (twee waarden onder dezelfde naam) wordt één waarde,
  // zodat de mail één regel per veld krijgt.
  const buckets = new Map<string, string[]>()
  data.forEach((value, key) => {
    if (typeof value !== 'string') return
    const list = buckets.get(key)
    if (list) list.push(value)
    else buckets.set(key, [value])
  })

  const params = new URLSearchParams()
  for (const [key, values] of buckets) {
    params.append(key, values.join(', '))
  }

  const mailto = () => leadMailto(subject, params)

  try {
    const result = await submitLead({ data: params.toString() })
    if (result.ok) return { ok: true }

    // Alleen als de server zeker weet dat er geen mail is verstuurd.
    // Eén poging, daarna niet nog eens: anders kan dezelfde aanvraag dubbel gaan.
    if (result.retry === 'client') {
      const viaBrowser = await postFormSubmitFromBrowser(params)
      if (viaBrowser) return { ok: true }
    }

    return {
      ok: false,
      error: result.error,
      ...(result.error === VALIDATION_ERROR ? {} : { mailto: mailto() }),
    }
  } catch {
    return {
      ok: false,
      error: 'Geen verbinding. Controleer je internet en probeer het opnieuw.',
      mailto: mailto(),
    }
  }
}
