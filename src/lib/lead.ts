import { submitLead } from './submit-lead'

/**
 * Client-side helper voor lead-inzendingen.
 *
 * Verzamelt het formulier, normaliseert het url-veld en roept de server
 * function aan die de inzending als mail verstuurt. Anders dan in de
 * prototypes krijgen we nu een echte status terug.
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

export type LeadResult = { ok: true } | { ok: false; error: string }

export async function sendLead(
  form: HTMLFormElement,
  opts: { subject?: string } = {},
): Promise<LeadResult> {
  const data = new FormData(form)

  if (data.has('url')) data.set('url', normalizeUrl(String(data.get('url'))))

  data.append('_subject', opts.subject ?? 'Nieuwe aanvraag via MegaOnline.io')
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

  try {
    return await submitLead({ data: params.toString() })
  } catch {
    return {
      ok: false,
      error: 'Geen verbinding. Controleer je internet en probeer het opnieuw.',
    }
  }
}
