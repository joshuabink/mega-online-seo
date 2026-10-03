import { useEffect, useId, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { SteppedLeadForm } from './LeadForm'

/**
 * Klikformulier voor het gratis websiteconcept.
 *
 * Stap 1 tot en met 3 en stap 5 zijn alleen klikken. Typen begint bij het
 * bedrijf en eindigt bij de contactgegevens. Gebouwd op SteppedLeadForm,
 * zodat honeypot, stapnavigatie en Enter-gedrag hetzelfde blijven.
 */

const SUBJECT = 'Nieuwe aanvraag gratis websiteconcept - MegaOnline.io'

const GEEN_WEBSITE = 'Ik heb nog geen website'

const KNELPUNTEN = [
  'Er komen te weinig aanvragen of boekingen binnen',
  'Mijn website ziet er verouderd uit',
  'Klanten kunnen niet makkelijk online boeken of reserveren',
  'Ik word slecht gevonden in Google',
  'Mijn website werkt niet goed op mobiel',
  'Ik kan mijn website moeilijk zelf aanpassen',
  GEEN_WEBSITE,
] as const

const DOELEN = [
  'Meer offerteaanvragen',
  'Meer boekingen of reserveringen',
  'Meer vertrouwen bij nieuwe klanten',
  'Minder handwerk, bijvoorbeeld minder vragen per mail of telefoon',
  'Beter gevonden worden in Google',
  'Weet ik nog niet, denk met me mee',
] as const

const BRANCHES = [
  'Activiteiten / Recreatie',
  'Verhuur',
  'Zakelijke dienstverlening',
  'Transport / Verhuizing',
  'Rijschool',
  'Horeca / Catering',
  'Anders',
] as const

const STARTEN = [
  'Zo snel mogelijk',
  'Binnen 3 maanden',
  'Over 3 tot 6 maanden',
  'Ik oriënteer me nog',
] as const

function toggleLimited(current: string[], value: string, max = 2) {
  if (current.includes(value)) return current.filter((v) => v !== value)
  if (current.length >= max) return current
  return [...current, value]
}

function ChoiceTiles({
  legend,
  help,
  name,
  options,
  selected,
  onToggle,
  max,
  type,
  labelledBy,
}: {
  legend: string
  help?: string
  name: string
  options: readonly string[]
  selected: string[]
  onToggle?: (value: string) => void
  max?: number
  type: 'checkbox' | 'radio'
  labelledBy: string
}) {
  const full = max != null && selected.length >= max
  const helpId = `${labelledBy}-help`
  const countId = `${labelledBy}-count`
  const limitId = `${labelledBy}-limit`
  const errorId = `${labelledBy}-error`
  const described = [help ? helpId : '', errorId].filter(Boolean).join(' ')

  return (
    <fieldset
      className="choices"
      data-min="1"
      data-max={max ? String(max) : undefined}
      data-error="Kies minimaal één antwoord."
      data-step-focus
      tabIndex={-1}
      aria-describedby={described}
    >
      <legend className="choice__legend">
        <span className="choice__q">{legend}</span>
        {max ? (
          <span id={countId} className="choice__count" aria-live="polite">
            {selected.length} van {max} gekozen
          </span>
        ) : null}
      </legend>
      {help ? (
        <p id={helpId} className="choice__help">
          {help}
        </p>
      ) : null}
      <div className="choice__grid">
        {options.map((option) => {
          const on = selected.includes(option)
          const locked = type === 'checkbox' && full && !on
          return (
            <label key={option} className={`choice${type === 'radio' ? ' choice--radio' : ''}`}>
              <input
                type={type}
                name={name}
                value={option}
                checked={on}
                disabled={locked}
                onChange={() => onToggle?.(option)}
              />
              <span className="choice__mark" aria-hidden="true" />
              <span className="choice__label">{option}</span>
            </label>
          )
        })}
      </div>
      {max ? (
        <p id={limitId} className="choice__limit" aria-live="polite">
          {full ? 'Je hebt er al twee gekozen. Haal er eerst één weg.' : ''}
        </p>
      ) : null}
      <p id={errorId} className="field__error" role="alert" hidden />
    </fieldset>
  )
}

function FieldError({ id }: { id: string }) {
  return <p id={`${id}-error`} className="field__error" role="alert" hidden />
}

export function ConceptForm({
  className = '',
  subject = SUBJECT,
  showIntro = true,
}: {
  className?: string
  subject?: string
  /** Kop, subtekst en zekerheden in de kaart. Op de conceptpagina staan die erboven. */
  showIntro?: boolean
}) {
  const uid = useId().replace(/:/g, '')
  const id = (name: string) => `${uid}-${name}`

  const [knelpunt, setKnelpunt] = useState<string[]>([])
  const [doel, setDoel] = useState<string[]>([])
  const [branche, setBranche] = useState('')
  const [start, setStart] = useState('')
  const [geenWebsite, setGeenWebsite] = useState(false)
  const [url, setUrl] = useState('')
  const geenStondAan = useRef(false)

  // Stap 1 zet het vinkje aan op het moment dat die keuze erbij komt.
  // Uitvinken in stap 4 blijft staan en maakt het websiteveld weer actief.
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
      className={`concept ${className}`.trim()}
      subject={subject}
      head={
        showIntro ? (
          <>
            <span className="form__head-note">
              <span className="form__dot" />
              Gratis websiteconcept
            </span>
            <h3>Ontvang een gratis websiteconcept met persoonlijk advies</h3>
            <p>
              Beantwoord zes korte vragen. Daarna kijken we persoonlijk naar je bedrijf en laten we
              zien hoe je website meer aanvragen en boekingen kan opleveren.
            </p>
            <ul className="concept__ticks">
              <li>Persoonlijk advies</li>
              <li>Vrijblijvend</li>
              <li>Reactie binnen 2 werkdagen</li>
            </ul>
          </>
        ) : null
      }
      ok={
        <>
          <div className="ic">✓</div>
          <h3>Bedankt. We gaan aan de slag.</h3>
          <p>
            We maken een eerste websiteconcept voor je bedrijf. Binnen 2 werkdagen nemen we contact
            met je op om het concept en ons advies te bespreken. Vragen in de tussentijd? Mail naar{' '}
            <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
          </p>
        </>
      }
    >
      {(current) => (
      <>
      <div className="form__progress">
        <span className="form__step-label" aria-live="polite" aria-atomic="true">
          Stap <b>{current + 1}</b> van 6
        </span>
        <div className="form__bar" aria-hidden="true">
          <i style={{ width: `${((current + 1) / 6) * 100}%` }} />
        </div>
      </div>

      <div className="fstep" data-step="1" hidden={current !== 0}>
        <ChoiceTiles
          legend="Waar loop je nu het meest tegenaan?"
          help="Kies maximaal twee antwoorden."
          name="knelpunt"
          options={KNELPUNTEN}
          selected={knelpunt}
          max={2}
          type="checkbox"
          labelledBy={id('knelpunt')}
          onToggle={(value) => setKnelpunt((current) => toggleLimited(current, value))}
        />
        <button className="btn btn-primary" type="button" data-next="">
          Volgende <span className="arr">→</span>
        </button>
      </div>

      <div className="fstep" data-step="2" hidden={current !== 1}>
        <ChoiceTiles
          legend="Wat moet je nieuwe website vooral opleveren?"
          help="Kies maximaal twee antwoorden."
          name="doel"
          options={DOELEN}
          selected={doel}
          max={2}
          type="checkbox"
          labelledBy={id('doel')}
          onToggle={(value) => setDoel((current) => toggleLimited(current, value))}
        />
        <div className="form__nav">
          <button className="btn btn-ghost" type="button" data-prev="">
            ← Terug
          </button>
          <button className="btn btn-primary" type="button" data-next="">
            Volgende <span className="arr">→</span>
          </button>
        </div>
      </div>

      <div className="fstep" data-step="3" hidden={current !== 2}>
        <ChoiceTiles
          legend="In welke branche werk je?"
          name="branche"
          options={BRANCHES}
          selected={branche ? [branche] : []}
          type="radio"
          labelledBy={id('branche')}
          onToggle={setBranche}
        />
        <div className="form__nav">
          <button className="btn btn-ghost" type="button" data-prev="">
            ← Terug
          </button>
          <button className="btn btn-primary" type="button" data-next="">
            Volgende <span className="arr">→</span>
          </button>
        </div>
      </div>

      <div className="fstep" data-step="4" hidden={current !== 3}>
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
          <FieldError id={id('bedrijf')} />
        </div>
        <div className="field">
          <label htmlFor={id('omschrijving')}>Wat doet je bedrijf en voor wie? (optioneel)</label>
          <textarea
            id={id('omschrijving')}
            name="omschrijving"
            rows={3}
            maxLength={500}
            placeholder="Bijvoorbeeld: we verhuren springkussens aan particulieren en bedrijven in de regio Gouda."
          />
        </div>
        <div className="field">
          <label htmlFor={id('url')}>Huidige website (optioneel)</label>
          <input
            id={id('url')}
            name="url"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="jouwwebsite.nl"
            value={url}
            disabled={geenWebsite}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
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
        <div className="form__nav">
          <button className="btn btn-ghost" type="button" data-prev="">
            ← Terug
          </button>
          <button className="btn btn-primary" type="button" data-next="">
            Volgende <span className="arr">→</span>
          </button>
        </div>
      </div>

      <div className="fstep" data-step="5" hidden={current !== 4}>
        <ChoiceTiles
          legend="Wanneer wil je starten?"
          name="start"
          options={STARTEN}
          selected={start ? [start] : []}
          type="radio"
          labelledBy={id('start')}
          onToggle={setStart}
        />
        <div className="form__nav">
          <button className="btn btn-ghost" type="button" data-prev="">
            ← Terug
          </button>
          <button className="btn btn-primary" type="button" data-next="">
            Volgende <span className="arr">→</span>
          </button>
        </div>
      </div>

      <div className="fstep" data-step="6" hidden={current !== 5}>
        <h3 className="fstep__title" tabIndex={-1} data-step-focus>
          Waar sturen we het concept heen?
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
          <FieldError id={id('naam')} />
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
          <FieldError id={id('email')} />
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
        <div className="form__nav">
          <button className="btn btn-ghost" type="button" data-prev="">
            ← Terug
          </button>
          <button className="btn btn-primary" type="submit">
            Vraag mijn gratis concept aan
          </button>
        </div>
        <p className="form__disc">
          We gebruiken je gegevens alleen voor je concept en advies. Je komt niet op een
          mailinglijst.{' '}
          <Link to="/privacyverklaring">Privacyverklaring</Link>
        </p>
      </div>
      </>
      )}
    </SteppedLeadForm>
  )
}
