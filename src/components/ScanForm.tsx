import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useReveal } from './Reveal'
import { sendLead, type LeadResult } from '@/lib/lead'
import { LEAD_CONTACT } from '@/lib/lead-contact'
import {
  GENERATE_LEAD_BIJ_BROWSER_FALLBACK,
  track,
  trackGenerateLead,
  trackLeadBrowserFallback,
  trackLeadFallbackGetoond,
} from '@/lib/analytics'
import { CTA_SCAN } from '@/lib/cta'
import { SCAN_REACTIETIJD, SCAN_SUBJECT } from '@/lib/scan'

const FORM_NAME = 'scan'
const BEDANK_HASH = '#aanvraag-verstuurd'

const MIS = [
  ['aanvragen', 'Er komen te weinig aanvragen of boekingen binnen'],
  ['verouderd', 'Mijn website ziet er verouderd uit'],
  ['boeken', 'Klanten kunnen niet makkelijk online boeken of aanvragen'],
  ['google', 'Ik word slecht gevonden in Google'],
  ['mobiel', 'Mijn website werkt niet goed op mobiel'],
  ['aanpassen', 'Ik kan mijn website moeilijk zelf aanpassen'],
] as const

const DOEL = [
  ['aanvragen', 'Meer aanvragen of offerteaanvragen'],
  ['boekingen', 'Meer boekingen of reserveringen'],
  ['vindbaar', 'Beter gevonden worden'],
  ['vertrouwen', 'Meer vertrouwen bij nieuwe klanten'],
] as const

const FOUT = {
  site: '⚠ Vul het adres van je website in, zoals jouwbedrijf.nl',
  mis: '⚠ Kies minstens één punt, of beschrijf het in het veld hieronder',
  doel: '⚠ Kies wat je site vooral moet opleveren',
  naam: '⚠ Vul je naam in',
  mail: '⚠ Vul een e-mailadres in, zoals naam@bedrijf.nl',
} as const

type FoutSleutel = keyof typeof FOUT

function zetBedankAnker() {
  if (typeof history === 'undefined' || typeof location === 'undefined') return
  if (location.hash === BEDANK_HASH) return
  const next = `${location.pathname}${location.search}${BEDANK_HASH}`
  const x = window.scrollX
  const y = window.scrollY
  History.prototype.replaceState.call(history, history.state, '', next)
  if (window.scrollX !== x || window.scrollY !== y) window.scrollTo(x, y)
}

function verwerkMeting(result: LeadResult) {
  if (!result.ok) {
    if (result.mailto) trackLeadFallbackGetoond(FORM_NAME)
    return
  }
  if (result.via === 'server') {
    trackGenerateLead(FORM_NAME)
    return
  }
  if (result.route !== 'FormSubmit') return
  trackLeadBrowserFallback(FORM_NAME)
  if (GENERATE_LEAD_BIJ_BROWSER_FALLBACK) trackGenerateLead(FORM_NAME, { route: 'fallback' })
}

function leesFouten(form: HTMLFormElement): Partial<Record<FoutSleutel, string>> {
  const data = new FormData(form)
  const fout: Partial<Record<FoutSleutel, string>> = {}
  if (!String(data.get('site') ?? '').trim()) fout.site = FOUT.site
  const mis = data.getAll('mis').some((value) => String(value).trim())
  const toelichting = String(data.get('toelichting') ?? '').trim()
  if (!mis && !toelichting) fout.mis = FOUT.mis
  if (!String(data.get('doel') ?? '').trim()) fout.doel = FOUT.doel
  if (!String(data.get('naam') ?? '').trim()) fout.naam = FOUT.naam
  const mail = String(data.get('mail') ?? '').trim()
  if (!mail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) fout.mail = FOUT.mail
  return fout
}

/**
 * Eén pagina, zonder stappen. Minstens één vinkje óf een toelichting:
 * dat kan `required` op elk vakje niet uitdrukken, dus die groep gebruikt
 * `aria-required` en een eigen controle. De overige verplichte velden
 * hebben `required` én `aria-required`.
 */
export function ScanForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const reveal = useReveal()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [fouten, setFouten] = useState<Partial<Record<FoutSleutel, string>>>({})
  const [failure, setFailure] = useState<{ error: string; mailto?: string } | null>(null)
  const busy = useRef(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (busy.current || !form) return

    const gevonden = leesFouten(form)
    setFouten(gevonden)
    const eerste = (Object.keys(gevonden) as FoutSleutel[])[0]
    if (eerste) {
      track('form_validation_error', {
        form: SCAN_SUBJECT,
        path: location.pathname,
        step: 1,
        fields: Object.keys(gevonden),
      })
      const veld = form.querySelector<HTMLElement>(`[name="${eerste}"]`)
      veld?.focus()
      return
    }

    busy.current = true
    setStatus('sending')
    setFailure(null)
    let verstuurd = false
    try {
      const result = await sendLead(form, { subject: SCAN_SUBJECT })
      verwerkMeting(result)
      if (result.ok) {
        verstuurd = true
        zetBedankAnker()
        setStatus('sent')
        track('form_submit_success', { form: SCAN_SUBJECT, path: location.pathname })
      } else {
        setFailure({ error: result.error, mailto: result.mailto })
        track('form_submit_fail', {
          form: SCAN_SUBJECT,
          path: location.pathname,
          reason: result.mailto ? 'mailto_fallback' : 'error',
        })
      }
    } catch {
      track('form_submit_fail', { form: SCAN_SUBJECT, path: location.pathname, reason: 'error' })
      setFailure({
        error: `Je aanvraag is niet automatisch verstuurd. Mail direct naar ${LEAD_CONTACT.mail}.`,
      })
    } finally {
      busy.current = false
      if (!verstuurd) setStatus('idle')
    }
  }

  return (
    <div
      ref={reveal.ref as React.RefObject<HTMLDivElement>}
      className={`scanform ${reveal.className} ${status === 'sent' ? 'sent' : ''}`.trim()}
      data-scan-form=""
    >
      <div className="form__inner">
        <form id="formulier" ref={formRef} noValidate onSubmit={onSubmit} aria-busy={status === 'sending'}>
          <input
            type="text"
            name="company_hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            defaultValue=""
          />

          <div className="field">
            <label htmlFor="scan-site">Wat is het adres van je website?</label>
            <input
              id="scan-site"
              name="site"
              type="text"
              inputMode="url"
              autoComplete="url"
              required
              aria-required="true"
              aria-invalid={fouten.site ? true : undefined}
              aria-describedby="scan-site-hint scan-site-fout"
            />
            <p id="scan-site-hint" className="scan-hint">
              Bijvoorbeeld jouwbedrijf.nl
            </p>
            {fouten.site ? (
              <p id="scan-site-fout" className="field__error" role="alert">
                {fouten.site}
              </p>
            ) : null}
          </div>

          <fieldset className="scan-group" aria-required="true" aria-describedby="scan-mis-hint">
            <legend>Wat loopt er nu niet goed op je site?</legend>
            <p id="scan-mis-hint" className="scan-hint">
              Kies alles wat past.
            </p>
            {MIS.map(([value, label]) => (
              <label className="checkline" key={value}>
                <input type="checkbox" name="mis" value={value} />
                <span>{label}</span>
              </label>
            ))}
            {fouten.mis ? (
              <p className="field__error" role="alert">
                {fouten.mis}
              </p>
            ) : null}
          </fieldset>

          <div className="field">
            <label htmlFor="scan-toelichting">Wat vind je zelf van je site? (mag kort)</label>
            <textarea id="scan-toelichting" name="toelichting" rows={3} aria-describedby="scan-toelichting-hint" />
            <p id="scan-toelichting-hint" className="scan-hint">
              Bijvoorbeeld: "Mensen bellen liever dan dat ze het formulier invullen."
            </p>
          </div>

          <fieldset
            className="scan-group"
            aria-required="true"
            aria-invalid={fouten.doel ? true : undefined}
          >
            <legend>Wat zou je willen dat je site oplevert?</legend>
            {DOEL.map(([value, label]) => (
              <label className="checkline" key={value}>
                <input type="radio" name="doel" value={value} required aria-required="true" />
                <span>{label}</span>
              </label>
            ))}
            {fouten.doel ? (
              <p className="field__error" role="alert">
                {fouten.doel}
              </p>
            ) : null}
          </fieldset>

          <div className="field">
            <label htmlFor="scan-naam">Naam</label>
            <input
              id="scan-naam"
              name="naam"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={fouten.naam ? true : undefined}
              aria-describedby={fouten.naam ? 'scan-naam-fout' : undefined}
            />
            {fouten.naam ? (
              <p id="scan-naam-fout" className="field__error" role="alert">
                {fouten.naam}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="scan-mail">E-mailadres</label>
            <input
              id="scan-mail"
              name="mail"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={fouten.mail ? true : undefined}
              aria-describedby={fouten.mail ? 'scan-mail-fout' : undefined}
            />
            {fouten.mail ? (
              <p id="scan-mail-fout" className="field__error" role="alert">
                {fouten.mail}
              </p>
            ) : null}
          </div>

          <button className="btn btn-primary" type="submit">
            {CTA_SCAN}
          </button>
          <p className="form__disc">
            MegaOnline gebruikt je gegevens alleen voor de scan en het gesprek erover. Lees de{' '}
            <Link to="/privacyverklaring">privacyverklaring</Link>.
          </p>

          {failure?.mailto ? (
            <div className="form__fallback" role="alert" data-lead-fallback="">
              <h3 className="form__fallback-title" tabIndex={-1}>
                Je aanvraag is niet automatisch verstuurd.
              </h3>
              <p>Je antwoorden blijven hier staan.</p>
              <a className="btn btn-primary" href={failure.mailto}>
                Verstuur via je eigen mail
              </a>
              <p className="form__fallback-alt">
                Of mail naar <a href={`mailto:${LEAD_CONTACT.mail}`}>{LEAD_CONTACT.mail}</a>.
              </p>
            </div>
          ) : failure ? (
            <p className="form__error" role="alert">
              {failure.error}
            </p>
          ) : null}
        </form>
      </div>
      <div className="form__ok" role="status" aria-live="polite">
        <div className="ic">✓</div>
        <h3>Bedankt. Je aanvraag is binnen.</h3>
        <p>
          Je antwoorden komen terug in het gesprek over je site. Je ontvangt de uitkomst van de scan{' '}
          {SCAN_REACTIETIJD} na je aanvraag.
        </p>
      </div>
    </div>
  )
}
