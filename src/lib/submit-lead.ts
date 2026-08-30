import { createServerFn } from '@tanstack/react-start'

/**
 * Server-side doorzetten van lead-inzendingen (TanStack Start server function).
 *
 * Let op: dit bestand mag NIET `.server.ts` heten — die naamconventie haalt de
 * hele module uit de client-bundel, waardoor de RPC-stub niet gegenereerd wordt
 * en de aanroep in de browser faalt. `createServerFn` regelt de client/server-
 * splitsing zelf: de handler-body verdwijnt uit de client-bundel.
 *
 * In de prototypes postte de browser rechtstreeks naar de Google Apps Script
 * webapp met `mode: "no-cors"`. Dat was fire-and-forget: de response was niet
 * leesbaar, dus een mislukte inzending zag je nooit — het formulier meldde
 * altijd "verzonden".
 *
 * Nu gaat de POST naar deze server function, die hem doorzet naar hetzelfde
 * Apps Script met exact dezelfde veldnamen (inclusief `_subject` en
 * `_pagina`). De bestaande Sheet/automatisering blijft dus ongewijzigd werken,
 * maar we krijgen wél een echte status terug, kunnen spam filteren en de
 * endpoint-URL blijft buiten de client-bundle.
 *
 * Zet `MO_LEAD_ENDPOINT` als environment variable om de URL te wijzigen zonder
 * de code aan te passen.
 */
const DEFAULT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbysHVGhN1DBp58AgD46qX3LtQwj3XstB-FEaRDTwKNRe1RnmrFlou2rxPDxsmkgUhL2/exec'

/**
 * Tweede bestemming: e-mail naar zakelijk@joshuabink.nl via FormSubmit.
 * Geen account of API-key nodig; FormSubmit stuurt álle meegegeven velden mee
 * en gebruikt dezelfde `_subject`-conventie als het bestaande formulier.
 * Let op: de eerste inzending moet éénmalig per mail bevestigd worden.
 * Te overschrijven met `MO_LEAD_MAIL_ENDPOINT`.
 */
const DEFAULT_MAIL_ENDPOINT = 'https://formsubmit.co/zakelijk@joshuabink.nl'

/** Velden die we bewust NIET doorsturen (techniek/spamval). */
const BLOCKED = new Set(['website_hp'])

/**
 * FormSubmit weigert elke POST zonder `Referer` met "Unable to submit form" —
 * hij gaat ervan uit dat een browser het formulier verstuurt. Wij posten vanaf
 * de server, dus die header moeten we zelf meegeven, anders wordt er niets
 * verstuurd.
 *
 * Bewust een vaste waarde en niet de pagina waar de bezoeker stond: FormSubmit
 * activeert per domein. Een preview-deploy, een staging-omgeving of localhost
 * zou dan als nieuw, niet-geactiveerd formulier gelden en stil niets versturen.
 * Waar de bezoeker vandaan kwam staat sowieso al in `_pagina`.
 */
const MAIL_REFERER = 'https://megaonline.io/'

/**
 * FormSubmit antwoordt bij een weigering met HTTP 200 en de fout in de pagina
 * zelf. Alleen naar de statuscode kijken betekent dus dat een mislukte mail als
 * geslaagd telt — precies waardoor dit maandenlang onopgemerkt bleef.
 */
function formSubmitWeigering(html: string): string | null {
  const t = html.toLowerCase()
  if (t.includes('needs activation')) {
    return 'formulier nog niet geactiveerd — klik de activatielink in de mail van FormSubmit'
  }
  if (t.includes('unable to submit form')) {
    return 'FormSubmit weigerde de inzending (Referer ontbreekt of wordt niet geaccepteerd)'
  }
  if (t.includes('submitted successfully')) return null
  // Onbekend antwoord: niet blokkeren, wel vastleggen zodat het opvalt.
  console.warn('[lead] onbekend antwoord van FormSubmit:', html.slice(0, 200))
  return null
}

/**
 * Voorkeursroute voor de mail: een echte transactionele mailprovider.
 *
 * FormSubmit doet het wel, maar is op drie manieren fragiel: de mail komt van
 * formsubmit.co in plaats van je eigen domein (dus geen SPF/DKIM-match en dus
 * spamrisico), er is geen bezorglog om iets in terug te zoeken, en hij weigert
 * server-side POSTs tenzij je een `Referer` meestuurt die wij zelf verzinnen.
 *
 * Staat `MO_RESEND_API_KEY` ingesteld, dan gaat de mail via Resend en blijft
 * FormSubmit ongebruikt. Staat hij er niet, dan verandert er niets. Zo hoeft er
 * geen moment te zijn waarop beide routes tegelijk om moeten.
 *
 * `MO_MAIL_FROM`, `MO_MAIL_TO` en `MO_RESEND_ENDPOINT` zijn te overschrijven;
 * die laatste bestaat zodat de smoketest tegen een mock kan draaien in plaats
 * van tegen de echte provider.
 */
const DEFAULT_MAIL_TO = 'zakelijk@joshuabink.nl'
const DEFAULT_MAIL_FROM = 'MegaOnline <aanvragen@megaonline.io>'

/** Nette Nederlandse koppen voor de velden die het formulier verstuurt. */
const VELDNAMEN: Record<string, string> = {
  naam: 'Naam',
  bedrijf: 'Bedrijf',
  email: 'E-mailadres',
  telefoon: 'Telefoonnummer',
  tel: 'Telefoonnummer',
  url: 'Website',
  branche: 'Branche',
  doel: 'Doel',
  bericht: 'Bericht',
  toel: 'Toelichting',
  onderwerp: 'Onderwerp',
  reden: 'Reden',
  kanaal: 'Kanaal',
  pagina: 'Pagina',
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function mailViaResend(
  apiKey: string,
  params: URLSearchParams,
  env: Record<string, string | undefined> | undefined,
): Promise<boolean> {
  // `_subject` en `_pagina` zijn techniek, geen inhoud: die horen niet als rij
  // in de tabel maar in het onderwerp en onderaan als herkomst.
  const rijen = [...params].filter(([k]) => !k.startsWith('_'))
  const onderwerp = params.get('_subject') ?? 'Nieuwe aanvraag via MegaOnline.io'
  const herkomst = params.get('_pagina') ?? ''

  const label = (k: string) => VELDNAMEN[k] ?? k
  const tekst =
    rijen.map(([k, v]) => `${label(k)}: ${v}`).join('\n') +
    (herkomst ? `\n\nAangevraagd via: ${herkomst}` : '')

  const html =
    '<table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;font:15px/1.5 -apple-system,system-ui,sans-serif">' +
    rijen
      .map(
        ([k, v]) =>
          `<tr><td style="border-bottom:1px solid #e6e6e6;color:#666;vertical-align:top">${escapeHtml(label(k))}</td>` +
          `<td style="border-bottom:1px solid #e6e6e6"><strong>${escapeHtml(v)}</strong></td></tr>`,
      )
      .join('') +
    '</table>' +
    (herkomst
      ? `<p style="margin-top:18px;color:#888;font:13px -apple-system,system-ui,sans-serif">Aangevraagd via: ${escapeHtml(herkomst)}</p>`
      : '')

  const afzenderMail = params.get('email')

  try {
    const res = await fetch(env?.MO_RESEND_ENDPOINT ?? 'https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env?.MO_MAIL_FROM ?? DEFAULT_MAIL_FROM,
        to: env?.MO_MAIL_TO ?? DEFAULT_MAIL_TO,
        subject: onderwerp,
        text: tekst,
        html,
        // Antwoorden gaat rechtstreeks naar de aanvrager.
        ...(afzenderMail ? { reply_to: afzenderMail } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!res.ok) {
      // Resend geeft een leesbare JSON-fout terug; die willen we in de log zien
      // in plaats van een kale statuscode.
      console.error(`[lead] Resend gaf status ${res.status}:`, await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error('[lead] Resend verzenden mislukt:', err)
    return false
  }
}

const MAX_FIELD_LENGTH = 5000


export type LeadResponse = { ok: true } | { ok: false; error: string }

// `inputValidator` i.p.v. het nieuwere `validator`: die methode bestaat pas
// vanaf react-start 1.168 en de Lovable-repo draait op 1.167. Deze naam werkt
// in beide versies (in 1.168 met een deprecation-waarschuwing bij de build).
export const submitLead = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    if (typeof data !== 'string') throw new Error('Ongeldige inzending.')
    return data
  })
  .handler(async ({ data }): Promise<LeadResponse> => {
    // Korte id per inzending zodat alle logregels van één lead te volgen zijn
    // in de server-logs (Cloud → Logs / dev-server-log).
    const leadId = Math.random().toString(36).slice(2, 8)
    const log = (msg: string) => console.info(`[lead ${leadId}] ${msg}`)
    const logError = (msg: string, err?: unknown) =>
      console.error(`[lead ${leadId}] ${msg}`, err ?? '')

    const incoming = new URLSearchParams(data)

    // Honeypot: bots vullen dit verborgen veld wel in, mensen niet.
    if ((incoming.get('website_hp') ?? '').trim()) {
      log('honeypot geraakt — inzending genegeerd (bot)')
      // Doe alsof het gelukt is, maar stuur niets door.
      return { ok: true }
    }

    // Álle ingevulde velden gaan mee — alleen de spamval valt eruit. Zo mist
    // geen enkel formulierveld meer in de mail of de Sheet.
    const params = new URLSearchParams()
    for (const [key, value] of incoming) {
      if (BLOCKED.has(key)) continue
      const clean = value.trim().slice(0, MAX_FIELD_LENGTH)
      if (clean) params.append(key, clean)
    }

    // Minimale inhoudscheck: zonder contactgegevens is het geen lead.
    const phone = params.get('telefoon') ?? params.get('tel')
    if (!params.get('email') && !phone) {
      log(`afgekeurd: geen e-mail of telefoon (pagina: ${params.get('_pagina') ?? 'onbekend'})`)
      return { ok: false, error: 'Vul een e-mailadres of telefoonnummer in.' }
    }

    log(
      `inzending ontvangen van ${params.get('email') ?? phone} ` +
        `(pagina: ${params.get('_pagina') ?? 'onbekend'}, velden: ${[...params.keys()].join(', ')})`,
    )

    // Via globalThis, zodat dit bestand geen @types/node nodig heeft — de
    // Lovable-repo heeft die niet in zijn tsconfig staan.
    const env = (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env
    const endpoint = env?.MO_LEAD_ENDPOINT ?? DEFAULT_ENDPOINT
    const mailEndpoint = env?.MO_LEAD_MAIL_ENDPOINT ?? DEFAULT_MAIL_ENDPOINT

    // E-mailvariant: zelfde velden, plus FormSubmit-opties voor een leesbare
    // tabel en het antwoordadres van de aanvrager.
    const mailParams = new URLSearchParams(params)
    mailParams.set('_template', 'table')
    mailParams.set('_captcha', 'false')
    if (params.get('email')) mailParams.set('_replyto', params.get('email')!)

    async function post(
      url: string,
      body: string,
      label: string,
      opts: {
        headers?: Record<string, string>
        /** Geeft een reden terug als de body een weigering is, anders null. */
        verify?: (html: string) => string | null
      } = {},
    ) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...opts.headers,
          },
          body,
          signal: AbortSignal.timeout(10_000),
        })
        // Apps Script antwoordt met een redirect naar script.googleusercontent.com;
        // fetch volgt die en geeft 200. Alles in de 2xx/3xx-range is goed.
        if (!res.ok && res.status >= 400) {
          logError(`${label} gaf status ${res.status}`)
          return false
        }
        if (opts.verify) {
          const reden = opts.verify(await res.text())
          if (reden) {
            logError(`${label} geweigerd (status ${res.status}): ${reden}`)
            return false
          }
        }
        return true
      } catch (err) {
        logError(`${label} verzenden mislukt:`, err)
        return false
      }
    }

    // Resend zodra de sleutel er is; anders blijft FormSubmit de mailroute.
    const resendKey = env?.MO_RESEND_API_KEY
    const mailTaak = resendKey
      ? mailViaResend(resendKey, params, env)
      : post(mailEndpoint, mailParams.toString(), 'e-mail (FormSubmit)', {
          headers: { Referer: MAIL_REFERER },
          verify: formSubmitWeigering,
        })

    const [sheetOk, mailOk] = await Promise.all([
      post(endpoint, params.toString(), 'Apps Script'),
      mailTaak,
    ])

    // Eén regel per inzending met de uitkomst van beide routes, zodat je in de
    // logs direct ziet of de mail naar zakelijk@joshuabink.nl is verstuurd.
    const mailRoute = resendKey ? 'Resend' : 'FormSubmit'
    if (sheetOk && mailOk) {
      log(`doorgestuurd: Sheet ✓, mail (${mailRoute}) ✓`)
    } else {
      logError(
        `doorsturen DEELS of NIET gelukt: Sheet ${sheetOk ? '✓' : '✗'}, ` +
          `mail (${mailRoute}) ${mailOk ? '✓' : '✗'}`,
      )
    }

    if (!sheetOk && !mailOk) {
      return {
        ok: false,
        error: 'We konden je aanvraag niet verwerken. Probeer het nog eens of mail ons direct.',
      }
    }

    return { ok: true }

  })
