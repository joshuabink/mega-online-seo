import { useEffect, useId, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { LEAD_CONTACT } from '@/lib/lead-contact'
import { CTA_SCAN } from '@/lib/cta'
import { SCAN_OPLEVERING, SCAN_REACTIETIJD, SCAN_SUBJECT } from '@/lib/scan'
import { SteppedLeadForm } from './LeadForm'

/**
 * Kort aanvraagformulier in vier stappen, in twee soorten:
 *
 * - `ontwerp`: het gratis homepageontwerp (homepage). Wie nog geen website
 *   heeft, beschrijft in stap 2 wat het bedrijf doet en voor wie.
 * - `scan`: de gratis website scan (/gratis-websitescan). Daar is een
 *   websiteadres nodig, dus geen keuze voor "nog geen website".
 *
 * Gebouwd op SteppedLeadForm, zodat honeypot, stapnavigatie, meting en
 * verzending hetzelfde blijven als bij de andere formulieren.
 */

export type AanvraagSoort = 'ontwerp' | 'scan'

const GEEN_WEBSITE = 'Ik heb nog geen website'

const KNELPUNTEN_BASIS = [
  'Te weinig aanvragen of boekingen',
  'Website ziet er verouderd uit',
  'Slecht vindbaar in Google',
  'Online boeken gaat lastig',
  'Werkt niet goed op mobiel',
] as const

const DOELEN = [
  'Meer offerteaanvragen',
  'Meer boekingen of reserveringen',
  'Meer vertrouwen bij nieuwe klanten',
  'Beter gevonden worden in Google',
  'Minder handwerk',
  'Weet ik nog niet',
] as const

const STAPPEN = 4

const TEKST = {
  ontwerp: {
    subject: 'Gratis homepageontwerp aanvraag',
    formName: 'concept',
    kop: 'Gratis homepageontwerp',
    ticks: 'Gemaakt voor jouw bedrijf · Gratis · Vrijblijvend',
    stap4: 'Waar mogen we het ontwerp heen sturen?',
    knop: 'Vraag je gratis homepageontwerp aan',
    privacy: 'MegaOnline gebruikt je gegevens alleen voor je homepageontwerp.',
  },
  scan: {
    subject: SCAN_SUBJECT,
    formName: 'scan',
    kop: 'Gratis website scan',
    ticks: `Persoonlijk advies · Vrijblijvend · Reactie ${SCAN_REACTIETIJD}`,
    stap4: 'Waar mag de scan heen?',
    knop: CTA_SCAN,
    privacy: 'MegaOnline gebruikt je gegevens alleen voor je website scan en advies.',
  },
} as const

function toggleLimited(current: string[], value: string, max = 2) {
  if (current.includes(value)) return current.filter((v) => v !== value)
  if (current.length >= max) return current
  return [...current, value]
}

function Tiles({
  legend,
  name,
  options,
  selected,
  onToggle,
  baseId,
}: {
  legend: string
  name: string
  options: readonly string[]
  selected: string[]
  onToggle: (value: string) => void
  baseId: string
}) {
  const full = selected.length >= 2
  const errorId = `${baseId}-error`
  return (
    <fieldset
      className="choices"
      data-min="1"
      data-max="2"
      data-error="Kies minimaal één antwoord."
      data-step-focus
      tabIndex={-1}
      aria-describedby={errorId}
    >
      <legend className="choice__legend">
        <span className="choice__q">{legend}</span>
        <span className="choice__count" aria-live="polite">
          {selected.length} van 2
        </span>
      </legend>
      <div className="choice__grid">
        {options.map((option) => {
          const on = selected.includes(option)
          return (
            <label key={option} className="choice">
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={on}
                disabled={full && !on}
                onChange={() => onToggle(option)}
              />
              <span className="choice__mark" aria-hidden="true" />
              <span className="choice__label">{option}</span>
            </label>
          )
        })}
      </div>
      <p id={errorId} className="field__error" role="alert" hidden />
    </fieldset>
  )
}

function Nav({ knop }: { knop?: string }) {
  return (
    <div className="form__nav">
      <button className="btn btn-ghost" type="button" data-prev="">
        ← Terug
      </button>
      {knop ? (
        <button className="btn btn-primary" type="submit">
          {knop}
        </button>
      ) : (
        <button className="btn btn-primary" type="button" data-next="">
          Volgende <span className="arr">→</span>
        </button>
      )}
    </div>
  )
}

export function AanvraagKort({
  soort = 'ontwerp',
  className = '',
}: {
  soort?: AanvraagSoort
  className?: string
}) {
  const uid = useId().replace(/:/g, '')
  const id = (name: string) => `${uid}-${name}`
  const t = TEKST[soort]
  const metGeenWebsite = soort === 'ontwerp'
  const knelpunten = metGeenWebsite ? [...KNELPUNTEN_BASIS, GEEN_WEBSITE] : KNELPUNTEN_BASIS

  const [knelpunt, setKnelpunt] = useState<string[]>([])
  const [doel, setDoel] = useState<string[]>([])
  const [geenWebsite, setGeenWebsite] = useState(false)
  const geenUitStap1 = knelpunt.includes(GEEN_WEBSITE)
  const [url, setUrl] = useState('')
  const geenStondAan = useRef(false)

  useEffect(() => {
    const aan = knelpunt.includes(GEEN_WEBSITE)
    if (aan && !geenStondAan.current) setGeenWebsite(true)
    geenStondAan.current = aan
  }, [knelpunt])

  useEffect(() => {
    if (geenWebsite) setUrl('')
  }, [geenWebsite])

  return (
    <SteppedLeadForm
      className={`concept scankort ${className}`.trim()}
      subject={t.subject}
      formName={t.formName}
      ok={
        <>
          <div className="ic">✓</div>
          <h3>Bedankt. Je aanvraag is binnen.</h3>
          {soort === 'ontwerp' ? (
            <p>
              We ontwerpen een homepage voor je bedrijf, zodat je ziet wat we voor je kunnen maken.
              Teksten en foto's zijn nog een eerste invulling: het ontwerp geeft een beeld, het
              eindresultaat bouwen we samen. We nemen contact met je op zodra het klaar is. Vragen in de
              tussentijd? Mail naar <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
            </p>
          ) : (
            <p>
              {SCAN_OPLEVERING} Vragen in de tussentijd? Mail naar{' '}
              <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
            </p>
          )}
        </>
      }
    >
      {(current) => (
        <>
          <div className="scankort__top">
            <span className="form__head-note">
              <span className="form__dot" />
              {t.kop}
            </span>
            <span className="form__step-label" aria-live="polite" aria-atomic="true">
              Stap <b>{current + 1}</b> van {STAPPEN}
            </span>
          </div>
          <div className="form__bar" aria-hidden="true">
            <i style={{ width: `${((current + 1) / STAPPEN) * 100}%` }} />
          </div>

          <div className="fstep" data-step="1" hidden={current !== 0}>
            <Tiles
              legend="Waar loop je nu het meest tegenaan?"
              name="knelpunt"
              options={knelpunten}
              selected={knelpunt}
              baseId={id('knelpunt')}
              onToggle={(v) => setKnelpunt((c) => toggleLimited(c, v))}
            />
            <button className="btn btn-primary" type="button" data-next="">
              Volgende stap <span className="arr">→</span>
            </button>
            <p className="scankort__ticks">{t.ticks}</p>
          </div>

          <div className="fstep" data-step="2" hidden={current !== 1}>
            <h3 className="fstep__title" tabIndex={-1} data-step-focus>
              Over je bedrijf
            </h3>
            <div className="field">
              <label htmlFor={id('bedrijf')}>Bedrijfsnaam</label>
              <input
                id={id('bedrijf')}
                name="bedrijf"
                type="text"
                autoComplete="organization"
                placeholder="Bedrijfsnaam"
                required
                data-error="Vul je bedrijfsnaam in."
                aria-describedby={`${id('bedrijf')}-error`}
              />
              <p id={`${id('bedrijf')}-error`} className="field__error" role="alert" hidden />
            </div>
            {metGeenWebsite && geenWebsite ? (
              <div className="field">
                <label htmlFor={id('omschrijving')}>Wat doet je bedrijf en voor wie?</label>
                <textarea
                  id={id('omschrijving')}
                  name="omschrijving"
                  rows={3}
                  maxLength={500}
                  required
                  data-error="Vertel kort wat je bedrijf doet."
                  aria-describedby={`${id('omschrijving')}-error`}
                  placeholder="Bijvoorbeeld: we verhuren springkussens aan particulieren en bedrijven in de regio Gouda."
                />
                <p id={`${id('omschrijving')}-error`} className="field__error" role="alert" hidden />
              </div>
            ) : (
              <div className="field">
                <label htmlFor={id('url')}>
                  {metGeenWebsite ? 'Huidige website (optioneel)' : 'Adres van je website'}
                </label>
                <input
                  id={id('url')}
                  name="url"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="jouwwebsite.nl"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required={!metGeenWebsite}
                  data-error={metGeenWebsite ? undefined : 'Vul het adres van je website in, zoals jouwbedrijf.nl.'}
                  aria-describedby={metGeenWebsite ? undefined : `${id('url')}-error`}
                />
                {metGeenWebsite ? null : (
                  <p id={`${id('url')}-error`} className="field__error" role="alert" hidden />
                )}
              </div>
            )}
            {!metGeenWebsite ? null : geenUitStap1 ? (
              <input type="hidden" name="geen_website" value="ja" />
            ) : (
              <label className="checkline">
                <input
                  type="checkbox"
                  name="geen_website"
                  value="ja"
                  checked={geenWebsite}
                  onChange={(e) => setGeenWebsite(e.target.checked)}
                />
                <span>Ik heb nog geen website</span>
              </label>
            )}
            <Nav />
          </div>

          <div className="fstep" data-step="3" hidden={current !== 2}>
            <Tiles
              legend="Wat moet je website vooral opleveren?"
              name="doel"
              options={DOELEN}
              selected={doel}
              baseId={id('doel')}
              onToggle={(v) => setDoel((c) => toggleLimited(c, v))}
            />
            <Nav />
          </div>

          <div className="fstep" data-step="4" hidden={current !== 3}>
            <h3 className="fstep__title" tabIndex={-1} data-step-focus>
              {t.stap4}
            </h3>
            <div className="field">
              <label htmlFor={id('naam')}>Je naam</label>
              <input
                id={id('naam')}
                name="naam"
                type="text"
                autoComplete="name"
                placeholder="Voor- en achternaam"
                required
                data-error="Vul je naam in."
                aria-describedby={`${id('naam')}-error`}
              />
              <p id={`${id('naam')}-error`} className="field__error" role="alert" hidden />
            </div>
            <div className="field">
              <label htmlFor={id('email')}>E-mailadres</label>
              <input
                id={id('email')}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jij@bedrijf.nl"
                required
                data-error="Vul een geldig e-mailadres in."
                aria-describedby={`${id('email')}-error`}
              />
              <p id={`${id('email')}-error`} className="field__error" role="alert" hidden />
            </div>
            <div className="field">
              <label htmlFor={id('telefoon')}>Telefoonnummer (optioneel)</label>
              <input
                id={id('telefoon')}
                name="telefoon"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="06 12345678"
              />
            </div>
            <Nav knop={t.knop} />
            <p className="form__direct">
              Liever direct contact? Mail <a href={`mailto:${LEAD_CONTACT.mail}`}>{LEAD_CONTACT.mail}</a>.
            </p>
            <p className="form__disc">
              {t.privacy} Je komt niet op een mailinglijst. <Link to="/privacyverklaring">Privacyverklaring</Link>
            </p>
          </div>
        </>
      )}
    </SteppedLeadForm>
  )
}
