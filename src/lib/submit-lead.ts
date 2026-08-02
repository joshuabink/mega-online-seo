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
    const incoming = new URLSearchParams(data)

    // Honeypot: bots vullen dit verborgen veld wel in, mensen niet.
    if ((incoming.get('website_hp') ?? '').trim()) {
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
      return { ok: false, error: 'Vul een e-mailadres of telefoonnummer in.' }
    }

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

    async function post(url: string, body: string, label: string) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
          signal: AbortSignal.timeout(10_000),
        })
        // Apps Script antwoordt met een redirect naar script.googleusercontent.com;
        // fetch volgt die en geeft 200. Alles in de 2xx/3xx-range is goed.
        if (!res.ok && res.status >= 400) {
          console.error(`[lead] ${label} gaf status`, res.status)
          return false
        }
        return true
      } catch (err) {
        console.error(`[lead] ${label} verzenden mislukt:`, err)
        return false
      }
    }

    const [sheetOk, mailOk] = await Promise.all([
      post(endpoint, params.toString(), 'Apps Script'),
      post(mailEndpoint, mailParams.toString(), 'e-mail'),
    ])

    if (!sheetOk && !mailOk) {
      return {
        ok: false,
        error: 'We konden je aanvraag niet verwerken. Probeer het nog eens of mail ons direct.',
      }
    }

    return { ok: true }

  })
