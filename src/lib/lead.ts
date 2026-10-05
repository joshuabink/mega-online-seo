import { submitLead } from './submit-lead'
import { LEAD_CONTACT } from './lead-contact'
import { leadMailto, schoneVelden } from './lead-mailto'

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

/** Zelfde ajax-endpoint als de documentatie van FormSubmit. De browser stuurt zelf Referer en Origin mee. */
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${LEAD_CONTACT.mail}`

/** Productiepad van de huidige pagina, zonder query of preview-host. */
export function canonicalFormUrl(pathname?: string): string {
  const path =
    pathname ??
    (typeof location !== 'undefined' && location.pathname ? location.pathname : '/gratis-websiteconcept')
  const clean = path.startsWith('/') ? path : `/${path}`
  return `https://megaonline.io${clean}`
}

const VALIDATION_ERROR = 'Vul een e-mailadres of telefoonnummer in.'

export type LeadResult =
  | { ok: true }
  | { ok: false; error: string; mailto?: string }

export { leadMailto } from './lead-mailto'

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
  const body = schoneVelden(params)
  body.set('_template', 'table')
  body.set('_captcha', 'false')
  body.set('_url', canonicalFormUrl())
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
      signal: AbortSignal.timeout(8_000),
    })
    const text = await res.text()
    if (!res.ok) return false
    return formSubmitAjaxGelukt(text)
  } catch {
    // Timeout of netwerk: niet nog een keer posten. De mailto-fallback volgt.
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
