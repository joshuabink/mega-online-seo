import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { sendLead, type LeadResult } from '@/lib/lead'
import { track } from '@/lib/analytics'
import { LEAD_CONTACT } from '@/lib/lead-contact'
import { useReveal } from './Reveal'

type LeadFailure = { error: string; mailto?: string }

function LeadFallback({ mailto }: { mailto: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.scrollIntoView({ block: 'center' })
    el.focus({ preventScroll: true })
  }, [])

  return (
    <div className="form__fallback" role="alert" data-lead-fallback="">
      <h3 ref={headingRef} tabIndex={-1} className="form__fallback-title">
        Je aanvraag is niet automatisch verstuurd.
      </h3>
      <p>Je antwoorden blijven hier staan.</p>
      <a className="btn btn-primary" href={mailto}>
        Verstuur via je eigen mail
      </a>
      <p className="form__fallback-alt">
        Of bel <a href={`tel:${LEAD_CONTACT.phone}`}>{LEAD_CONTACT.phoneText}</a>, stuur een{' '}
        <a href={LEAD_CONTACT.whatsappUrl} target="_blank" rel="noopener">
          WhatsApp
        </a>{' '}
        of mail direct naar <a href={`mailto:${LEAD_CONTACT.mail}`}>{LEAD_CONTACT.mail}</a>.
      </p>
    </div>
  )
}

function LeadSendNotice({ failure }: { failure: LeadFailure | null }) {
  if (!failure) return null
  if (failure.mailto) return <LeadFallback mailto={failure.mailto} />
  return (
    <p className="form__error" role="alert">
      {failure.error}
    </p>
  )
}

function failureFrom(result: LeadResult): LeadFailure | null {
  if (result.ok) return null
  return { error: result.error, mailto: result.mailto }
}

type OkProps = { ok?: ReactNode }

/**
 * Formulier-events voor statistieken. Alleen veldnamen, nooit waarden.
 * - form_start: eerste focus of invoer, één keer per paginaweergave
 * - form_step_view: bij elke stapwissel, en stap 1 zodra het formulier in beeld komt
 */
function useFormTracking(
  formRef: React.RefObject<HTMLFormElement | null>,
  subject: string | undefined,
  step: number,
  totalSteps: number,
) {
  const base = () => ({
    form: subject || (typeof location !== 'undefined' ? location.pathname : ''),
    path: typeof location !== 'undefined' ? location.pathname : '',
  })
  const baseRef = useRef(base)
  baseRef.current = base
  const zichtbaar = useRef(false)

  useEffect(() => {
    const form = formRef.current
    if (!form) return
    let started = false
    const onStart = () => {
      if (started) return
      started = true
      track('form_start', baseRef.current())
    }
    form.addEventListener('focusin', onStart)
    form.addEventListener('input', onStart)
    return () => {
      form.removeEventListener('focusin', onStart)
      form.removeEventListener('input', onStart)
    }
  }, [formRef])

  useEffect(() => {
    if (!totalSteps) return
    if (zichtbaar.current) {
      track('form_step_view', { ...baseRef.current(), step: step + 1, total_steps: totalSteps })
      return
    }
    const form = formRef.current
    if (!form || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return
      io.disconnect()
      zichtbaar.current = true
      track('form_step_view', { ...baseRef.current(), step: step + 1, total_steps: totalSteps })
    })
    io.observe(form)
    return () => io.disconnect()
  }, [formRef, step, totalSteps])

  return base
}

function DefaultOk() {
  return (
    <>
      <div className="ic">✓</div>
      <h3>Bedankt. Aanvraag ontvangen.</h3>
      <p style={{ color: 'var(--muted)', marginTop: 10 }}>
        We nemen gemiddeld binnen 2 werkdagen contact met je op.
      </p>
    </>
  )
}

/**
 * Meerstaps scan-/offerteformulier (was `#scanForm` + `#leadForm` in app.js).
 *
 * De DOM-structuur volgt exact het prototype — `head` staat binnen
 * `.form__inner` maar buiten het `<form>`, omdat de CSS daarop selecteert
 * (`.form__inner > p`). De stapmarkup blijft verbatim als children staan,
 * zodat copy en vormgeving identiek blijven; deze shell levert het gedrag.
 */
export function SteppedLeadForm({
  head,
  children,
  className = '',
  subject,
  ok,
}: {
  head?: ReactNode
  /** Stappen. Een functie krijgt het huidige stapnummer (0-based) zodat
   *  `hidden` bij een re-render klopt en niet door de effect wordt weggevaagd. */
  children: ReactNode | ((step: number) => ReactNode)
  className?: string
  subject?: string
} & OkProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const reveal = useReveal(className)
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [failure, setFailure] = useState<LeadFailure | null>(null)
  const vorigeStap = useRef<number | null>(null)
  const busy = useRef(false)
  const [totalSteps, setTotalSteps] = useState(0)
  useLayoutEffect(() => {
    setTotalSteps(formRef.current?.querySelectorAll('.fstep').length ?? 0)
  }, [])
  const base = useFormTracking(formRef, subject, step, totalSteps)

  const stepEls = () =>
    formRef.current
      ? Array.from(formRef.current.querySelectorAll<HTMLElement>('.fstep'))
      : []

  // Stap-zichtbaarheid, teller en voortgangsbalk synchroon houden met `step`.
  // De stappen zetten `hidden` zelf via de children-functie. Dit effect houdt
  // de balk, de teller en de focus bij, en zet `hidden` nog eens zodat een
  // stap niet zichtbaar blijft als de markup het attribuut mist.
  useLayoutEffect(() => {
    const all = stepEls()
    if (!all.length) return

    all.forEach((el, i) => {
      el.hidden = i !== step
    })

    // Een foutmelding hoort bij de stap waarop hij ontstond. Bleef hij staan,
    // dan las een bezoeker op stap 1 een klacht over stap 3.
    setFailure(null)

    const bar = formRef.current?.querySelector<HTMLElement>('.form__bar i')
    if (bar) bar.style.width = `${((step + 1) / all.length) * 100}%`

    const num = formRef.current?.querySelector<HTMLElement>('.form__step-label b')
    if (num) num.textContent = String(step + 1)

    // Strict mode draait dit effect twee keer bij de mount. Alleen een echte
    // stapwissel mag scrollen, anders springt de hero bij het laden.
    const veranderd = vorigeStap.current !== null && vorigeStap.current !== step
    vorigeStap.current = step
    if (!veranderd) return

    // De header is fixed. Zonder offset verdwijnt de stapkop eronder.
    // scroll-behavior op html is smooth, dus een kale scrollTop-toewijzing
    // animeert en leest meteen daarna nog de oude positie. Even uitzetten.
    const navH = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
    )
    const offset = (Number.isFinite(navH) ? navH : 80) + 16
    const anchor =
      formRef.current?.querySelector<HTMLElement>('.form__progress') ?? all[step]
    if (anchor) {
      const top = anchor.getBoundingClientRect().top
      if (top < offset || top > window.innerHeight * 0.4) {
        const root = document.documentElement
        const previous = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        const scroller = document.scrollingElement ?? root
        scroller.scrollTop = Math.max(0, scroller.scrollTop + top - offset)
        root.style.scrollBehavior = previous
      }
    }

    // Stap 1 krijgt geen focus. Op mobiel opent dat het toetsenbord en
    // springt de pagina. Vanaf stap 2 gaat de focus naar de vraagkop.
    // preventScroll: de positie hierboven blijft staan, ook als de browser
    // het gefocuste element anders naar y=0 trekt, onder de header.
    if (step === 0) return
    const focusEl = all[step]?.querySelector<HTMLElement>('[data-step-focus]')
    if (!focusEl) return
    const t = setTimeout(() => focusEl.focus({ preventScroll: true }), 60)
    return () => clearTimeout(t)
  }, [step])

  function showFieldError(field: HTMLElement, message: string) {
    field.setAttribute('aria-invalid', 'true')
    const described = field.getAttribute('aria-describedby') ?? ''
    const errId = described.split(/\s+/).find((id) => id.endsWith('-error'))
    const err = errId ? document.getElementById(errId) : null
    if (err) {
      err.hidden = false
      err.textContent = message
    }
  }

  function validStep(i: number) {
    const el = stepEls()[i]
    if (!el) return true

    el.querySelectorAll<HTMLElement>('.field__error').forEach((n) => {
      n.hidden = true
      n.textContent = ''
    })
    el.querySelectorAll<HTMLElement>('[aria-invalid="true"]').forEach((n) => {
      n.removeAttribute('aria-invalid')
    })

    let ok = true
    let first: HTMLElement | null = null
    const failed: string[] = []

    // Keuzegroepen: data-min telt aangevinkte opties. De fout hoort bij de
    // groep, niet bij een los vakje.
    for (const group of el.querySelectorAll<HTMLFieldSetElement>('fieldset[data-min]')) {
      const min = Number(group.dataset.min || '1')
      const checked = group.querySelectorAll('input:checked').length
      if (checked < min) {
        ok = false
        showFieldError(group, group.dataset.error || 'Kies minimaal één antwoord.')
        failed.push(
          group.name ||
            group.querySelector<HTMLInputElement>('input[name]')?.name ||
            group.id ||
            'fieldset',
        )
        first ??= group
      }
    }

    for (const f of el.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      'input, select, textarea',
    )) {
      if (f.disabled || f.type === 'hidden' || f.type === 'checkbox' || f.type === 'radio') continue
      if (f.name === 'website_hp') continue
      if (!f.checkValidity()) {
        ok = false
        showFieldError(f, f.dataset.error || 'Vul dit veld in.')
        failed.push(f.name || f.id || f.type)
        first ??= f
      }
    }

    if (!ok) {
      track('form_validation_error', {
        ...base(),
        step: i + 1,
        fields: [...new Set(failed)],
      })
    }
    if (!ok && first) first.focus()
    return ok
  }

  function onClick(e: React.MouseEvent<HTMLFormElement>) {
    const target = e.target as HTMLElement
    if (target.closest('[data-next]')) {
      if (validStep(step)) {
        track('form_step_complete', { ...base(), step: step + 1 })
        setStep((s) => Math.min(s + 1, stepEls().length - 1))
      }
    } else if (target.closest('[data-prev]')) {
      track('form_step_back', { ...base(), step: step + 1 })
      setStep((s) => Math.max(s - 1, 0))
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy.current || !formRef.current || !validStep(step)) return

    /* Enter in een invoerveld verstuurt een formulier impliciet, ook als de
       bezoeker nog op stap 1 staat: de browser activeert dan de submitknop
       die verderop in het formulier staat. De inzending vertrok daardoor
       zonder e-mailadres en de bezoeker kreeg op stap 1 de melding "Vul een
       e-mailadres of telefoonnummer in" te zien, met geen enkele manier om
       dat op te lossen.

       Enter betekent hier dus "volgende stap", en pas op de laatste stap
       "versturen". Dat is ook wat een bezoeker verwacht. */
    const laatste = stepEls().length - 1
    if (step < laatste) {
      track('form_step_complete', { ...base(), step: step + 1 })
      setStep((s) => Math.min(s + 1, laatste))
      return
    }

    busy.current = true
    setStatus('sending')
    setFailure(null)
    let verstuurd = false
    try {
      const result = await sendLead(formRef.current, { subject })
      if (result.ok) {
        verstuurd = true
        setStatus('sent')
        track('form_submit_success', base())
      } else {
        setFailure(failureFrom(result))
        track('form_submit_fail', { ...base(), reason: result.mailto ? 'mailto_fallback' : 'error' })
      }
    } catch {
      track('form_submit_fail', { ...base(), reason: 'error' })
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
      className={`form ${reveal.className} ${status === 'sent' ? 'sent' : ''}`.trim()}
    >
      <div className="form__inner">
        {head}{' '}
        <form
          ref={formRef}
          noValidate
          onClick={onClick}
          onSubmit={onSubmit}
          aria-busy={status === 'sending'}
        >
          {/* Honeypot: onzichtbaar voor bezoekers, bots vullen hem wel in. */}
          <input
            type="text"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />
          {typeof children === 'function' ? children(step) : children}
          <LeadSendNotice failure={failure} />
        </form>
      </div>{' '}
      <div className="form__ok">{ok ?? <DefaultOk />}</div>
    </div>
  )
}

/**
 * Enkelstaps formulier (was `.js-leadform` binnen `.scanform`, uit funnel.js
 * en de inline handler op Contact). Meerdere per pagina is ondersteund.
 */
export function SingleLeadForm({
  head,
  children,
  className = '',
  subject,
  ok,
}: {
  head?: ReactNode
  children: ReactNode
  className?: string
  subject?: string
} & OkProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const reveal = useReveal(className)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [failure, setFailure] = useState<LeadFailure | null>(null)
  const busy = useRef(false)
  const base = useFormTracking(formRef, subject, 0, 1)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (busy.current || !form) return

    const invalid = Array.from(
      form.querySelectorAll<HTMLInputElement>('input, select, textarea'),
    ).filter((f) => !f.checkValidity())
    if (invalid.length) {
      track('form_validation_error', {
        ...base(),
        step: 1,
        fields: [...new Set(invalid.map((f) => f.name || f.id).filter(Boolean))],
      })
      invalid[0].reportValidity()
      return
    }

    busy.current = true
    setStatus('sending')
    setFailure(null)
    let verstuurd = false
    try {
      const result = await sendLead(form, { subject })
      if (result.ok) {
        verstuurd = true
        setStatus('sent')
        track('form_submit_success', base())
      } else {
        setFailure(failureFrom(result))
        track('form_submit_fail', { ...base(), reason: result.mailto ? 'mailto_fallback' : 'error' })
      }
    } catch {
      track('form_submit_fail', { ...base(), reason: 'error' })
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
    >
      <div className="form__inner">
        {head}{' '}
        <form
          ref={formRef}
          className="js-leadform"
          noValidate
          onSubmit={onSubmit}
          aria-busy={status === 'sending'}
        >
          {/* Honeypot: onzichtbaar voor bezoekers, bots vullen hem wel in. */}
          <input
            type="text"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />
          {children}
          <LeadSendNotice failure={failure} />
        </form>
      </div>{' '}
      <div className="form__ok">{ok ?? <DefaultOk />}</div>
    </div>
  )
}
