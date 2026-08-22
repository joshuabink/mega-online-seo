import { useEffect, useRef, useState, type ReactNode } from 'react'
import { sendLead } from '@/lib/lead'
import { useReveal } from './Reveal'

type OkProps = { ok?: ReactNode }

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
  children: ReactNode
  className?: string
  subject?: string
} & OkProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const reveal = useReveal(className)
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [error, setError] = useState<string | null>(null)

  const stepEls = () =>
    formRef.current
      ? Array.from(formRef.current.querySelectorAll<HTMLElement>('.fstep'))
      : []

  // Stap-zichtbaarheid, teller en voortgangsbalk synchroon houden met `step`.
  useEffect(() => {
    const all = stepEls()
    if (!all.length) return

    all.forEach((el, i) => {
      el.hidden = i !== step
    })

    // Een foutmelding hoort bij de stap waarop hij ontstond. Bleef hij staan,
    // dan las een bezoeker op stap 1 een klacht over stap 3.
    setError(null)

    const bar = formRef.current?.querySelector<HTMLElement>('.form__bar i')
    if (bar) bar.style.width = `${((step + 1) / all.length) * 100}%`

    const num = formRef.current?.querySelector<HTMLElement>('.form__step-label b')
    if (num) num.textContent = String(step + 1)

    if (step > 0) {
      const first = all[step]?.querySelector<HTMLElement>('input, select, textarea')
      if (first) {
        const t = setTimeout(() => first.focus(), 60)
        return () => clearTimeout(t)
      }
    }
  }, [step])

  function validStep(i: number) {
    const el = stepEls()[i]
    if (!el) return true
    for (const f of el.querySelectorAll<HTMLInputElement>(
      'input, select, textarea',
    )) {
      if (!f.checkValidity()) {
        f.reportValidity()
        return false
      }
    }
    return true
  }

  function onClick(e: React.MouseEvent<HTMLFormElement>) {
    const target = e.target as HTMLElement
    if (target.closest('[data-next]')) {
      if (validStep(step)) setStep((s) => Math.min(s + 1, stepEls().length - 1))
    } else if (target.closest('[data-prev]')) {
      setStep((s) => Math.max(s - 1, 0))
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current || !validStep(step)) return

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
      setStep((s) => Math.min(s + 1, laatste))
      return
    }

    setStatus('sending')
    setError(null)
    const result = await sendLead(formRef.current, { subject })

    if (result.ok) setStatus('sent')
    else {
      setStatus('idle')
      setError(result.error)
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
          {children}
          {error && (
            <p className="form__error" role="alert">
              {error}
            </p>
          )}
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
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    for (const f of form.querySelectorAll<HTMLInputElement>(
      'input, select, textarea',
    )) {
      if (!f.checkValidity()) {
        f.reportValidity()
        return
      }
    }

    setStatus('sending')
    setError(null)
    const result = await sendLead(form, { subject })

    if (result.ok) setStatus('sent')
    else {
      setStatus('idle')
      setError(result.error)
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
          {error && (
            <p className="form__error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>{' '}
      <div className="form__ok">{ok ?? <DefaultOk />}</div>
    </div>
  )
}
