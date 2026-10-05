import { createServerFn } from '@tanstack/react-start'
import { LEAD_CONTACT } from './lead-contact'
import { maskContact, schoneVelden } from './lead-mailto'

/**
 * Server-side doorzetten van lead-inzendingen (TanStack Start server function).
 *
 * Let op: dit bestand mag NIET `.server.ts` heten — die naamconventie haalt de
 * hele module uit de client-bundel, waardoor de RPC-stub niet gegenereerd wordt
 * en de aanroep in de browser faalt. `createServerFn` regelt de client/server-
 * splitsing zelf: de handler-body verdwijnt uit de client-bundel.
 *
 * Een inzending gaat alleen per mail naar zakelijk@joshuabink.nl. Er is geen
 * Google Sheet en geen Apps Script: die aanroep kan een inzending niet meer
 * blokkeren of vertragen. Succes of fout hangt alleen af van de mailroute.
 *
 * Mailroute: Resend als `MO_RESEND_API_KEY` staat, anders FormSubmit. De
 * veldnamen blijven zoals de formulieren ze sturen, inclusief `_subject` en
 * `_pagina`.
 */

/**
 * E-mail naar zakelijk@joshuabink.nl via FormSubmit, als Resend niet is ingesteld.
 * Geen account of API-key nodig; FormSubmit stuurt álle meegegeven velden mee
 * en gebruikt dezelfde `_subject`-conventie als het bestaande formulier.
 * Let op: de eerste inzending moet éénmalig per mail bevestigd worden.
 * Te overschrijven met `MO_LEAD_MAIL_ENDPOINT`.
 */
const DEFAULT_MAIL_ENDPOINT = `https://formsubmit.co/${LEAD_CONTACT.mail}`

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
 * geslaagd telt, precies waardoor dit maandenlang onopgemerkt bleef.
 *
 * Reden waarom een FormSubmit-antwoord geen geslaagde mail is.
 * `retry: 'client'` betekent dat de mail aantoonbaar niet is verstuurd, zodat
 * de browser daarna één keer zelf mag proberen. Bij een onduidelijk antwoord
 * blijft die tweede poging achterwege: de mail kan al weg zijn.
 */
type FormSubmitWeigering = { reason: string; detail: string; retry: 'client' | 'none' }

function formSubmitWeigering(html: string): FormSubmitWeigering | null {
  const t = html.toLowerCase()
  if (t.includes('needs activation')) {
    return {
      reason: 'needs-activation',
      detail: 'formulier nog niet geactiveerd, activatielink in de mail van FormSubmit',
      retry: 'client',
    }
  }
  if (t.includes('unable to submit form')) {
    return {
      reason: 'referer-refused',
      detail: 'FormSubmit weigerde de inzending (Referer ontbreekt of wordt niet geaccepteerd)',
      retry: 'client',
    }
  }
  // AJAX-antwoord is JSON met de string "false", niet de boolean. Een losse
  // truthiness-check zou die weigering als succes zien.
  if (/"success"\s*:\s*"false"/.test(t) || /"success"\s*:\s*false\b/.test(t)) {
    return {
      reason: 'success-false',
      detail: 'FormSubmit antwoordde success false',
      retry: 'client',
    }
  }
  if (
    t.includes('just a moment') ||
    t.includes('cf-browser-verification') ||
    t.includes('attention required') ||
    t.includes('enable javascript and cookies') ||
    t.includes('you have been blocked')
  ) {
    return {
      reason: 'cloudflare-challenge',
      detail: 'FormSubmit (Cloudflare) diende een bot-challenge uit in plaats van de mail',
      retry: 'client',
    }
  }
  if (t.includes('submitted successfully')) return null
  // Onbekend antwoord: niet blokkeren. Een afwijkende bedankpagina is geen
  // bewijs dat de mail faalde, en een tweede poging zou dan dubbel kunnen gaan.
  console.warn('[lead] onbekend antwoord van FormSubmit:', html.slice(0, 200))
  return null
}

type MailResult = { ok: true } | { ok: false; reason: string; retry: 'client' | 'none' }

function httpWeigering(status: number, body: string): { reason: string; retry: 'client' | 'none' } {
  const t = body.toLowerCase()
  let reason = `http-${status}`
  if (t.includes('needs activation')) reason = 'needs-activation'
  else if (t.includes('unable to submit form')) reason = 'referer-refused'
  else if (
    t.includes('just a moment') ||
    t.includes('attention required') ||
    t.includes('you have been blocked') ||
    t.includes('error 1010') ||
    t.includes('error 1020')
  ) {
    reason = `http-${status}-blocked`
  }
  // 4xx: geweigerd, er is geen mail verstuurd. 5xx kan na een geslaagde
  // verwerking alsnog terugkomen, dus dan niet nog eens vanaf de browser.
  const retry = status >= 400 && status < 500 ? 'client' : 'none'
  return { reason, retry }
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
const DEFAULT_MAIL_TO = LEAD_CONTACT.mail
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
): Promise<MailResult> {
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
      // Alleen status en foutcode. De body kan het adres van de aanvrager herhalen.
      const raw = await res.text()
      let code = ''
      try {
        const data = JSON.parse(raw) as { name?: unknown; code?: unknown }
        code = [data.name, data.code].filter((v) => typeof v === 'string').join(',')
      } catch {
        code = ''
      }
      console.error(`[lead] Resend status ${res.status}${code ? ` code=${code}` : ''}`)
      const retry = res.status >= 400 && res.status < 500 ? 'client' : 'none'
      return { ok: false, reason: `resend-http-${res.status}`, retry }
    }
    return { ok: true }
  } catch (err) {
    console.error('[lead] Resend verzenden mislukt:', err)
    return { ok: false, reason: 'resend-network', retry: 'none' }
  }
}

export type LeadResponse =
  | { ok: true }
  | {
      ok: false
      error: string
      /**
       * `client`: de mail is aantoonbaar niet verstuurd. De browser mag dan
       * één keer zelf naar FormSubmit posten. `none`: niet nog eens proberen
       * (validatie, timeout, of een antwoord dat al een mail kan zijn).
       */
      retry: 'client' | 'none'
    }

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

    // Zelfde trim en maximum als de browser-retry. De spamval valt eruit.
    const params = schoneVelden(incoming)

    // Minimale inhoudscheck: zonder contactgegevens is het geen lead.
    const phone = params.get('telefoon') ?? params.get('tel')
    if (!params.get('email') && !phone) {
      log(`afgekeurd: geen e-mail of telefoon (pagina: ${params.get('_pagina') ?? 'onbekend'})`)
      return { ok: false, error: 'Vul een e-mailadres of telefoonnummer in.', retry: 'none' }
    }

    log(
      `inzending ontvangen van ${maskContact(params.get('email') ?? phone ?? '')} ` +
        `(pagina: ${params.get('_pagina') ?? 'onbekend'}, velden: ${[...params.keys()].join(', ')})`,
    )

    // Via globalThis, zodat dit bestand geen @types/node nodig heeft — de
    // Lovable-repo heeft die niet in zijn tsconfig staan.
    const env = (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env
    const mailEndpoint = env?.MO_LEAD_MAIL_ENDPOINT ?? DEFAULT_MAIL_ENDPOINT

    // E-mailvariant: zelfde velden, plus FormSubmit-opties voor een leesbare
    // tabel en het antwoordadres van de aanvrager.
    const mailParams = new URLSearchParams(params)
    mailParams.set('_template', 'table')
    mailParams.set('_captcha', 'false')
    // FormSubmit raadt `_url` aan als de Referer alleen het domein is of
    // onderweg wordt gestript. Zelfde vaste oorsprong als MAIL_REFERER, zodat
    // een preview-URL geen tweede, niet-geactiveerd formulier wordt.
    mailParams.set('_url', MAIL_REFERER)
    if (params.get('email')) mailParams.set('_replyto', params.get('email')!)

    async function post(
      url: string,
      body: string,
      label: string,
      opts: {
        headers?: Record<string, string>
        /** Geeft een reden terug als de body een weigering is, anders null. */
        verify?: (html: string) => FormSubmitWeigering | null
      } = {},
    ): Promise<MailResult> {
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
        if (!res.ok && res.status >= 400) {
          const detail = httpWeigering(res.status, await res.text().catch(() => ''))
          logError(`${label} gaf status ${res.status} (${detail.reason})`)
          return { ok: false, reason: detail.reason, retry: detail.retry }
        }
        if (opts.verify) {
          const reden = opts.verify(await res.text())
          if (reden) {
            logError(`${label} geweigerd (status ${res.status}): ${reden.detail}`)
            return { ok: false, reason: reden.reason, retry: reden.retry }
          }
        }
        return { ok: true }
      } catch (err) {
        logError(`${label} verzenden mislukt:`, err)
        return { ok: false, reason: 'network', retry: 'none' }
      }
    }

    // Resend zodra de sleutel er is; anders blijft FormSubmit de mailroute.
    // Er is geen tweede bestemming. De bezoeker wacht alleen op deze mail.
    const resendKey = env?.MO_RESEND_API_KEY
    const mailRoute = resendKey ? 'Resend' : 'FormSubmit'
    const mailOk = resendKey
      ? await mailViaResend(resendKey, params, env)
      : await post(mailEndpoint, mailParams.toString(), 'e-mail (FormSubmit)', {
          headers: { Referer: MAIL_REFERER, Origin: 'https://megaonline.io' },
          verify: formSubmitWeigering,
        })

    if (!mailOk.ok) {
      // Gestructureerd, zonder de inhoud van de aanvraag, zodat een mislukte
      // mail in de Lovable-logs op één regel te vinden is.
      console.error(`[lead-failed] id=${leadId} route=${mailRoute} reason=${mailOk.reason}`)
      logError(`mail (${mailRoute}) ✗`)
      return {
        ok: false,
        error: `Je aanvraag is niet automatisch verstuurd. Of mail direct naar ${LEAD_CONTACT.mail}.`,
        retry: mailOk.retry,
      }
    }

    log(`mail (${mailRoute}) verstuurd ✓`)
    return { ok: true }

  })
