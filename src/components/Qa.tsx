import { useRef, useState, type ReactNode } from 'react'
import { useReveal } from './Reveal'

/**
 * FAQ-accordeon. Reproduceert exact het hoogte-patroon uit `assets/app.js`:
 * openen zet de expliciete `scrollHeight` in px en schakelt op `transitionend`
 * naar `height: auto`; sluiten zet eerst `scrollHeight` en pas in de volgende
 * frame `0px`. Een naïeve `max-height`-truc geeft een andere timing.
 */
export function Qa({
  question,
  children,
  className = '',
  delay,
}: {
  question: ReactNode
  children: ReactNode
  className?: string
  delay?: string
}) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const reveal = useReveal(className)

  function toggle() {
    const panel = panelRef.current
    if (!panel) return

    if (open) {
      panel.style.height = panel.scrollHeight + 'px'
      requestAnimationFrame(() => {
        panel.style.height = '0px'
      })
      setOpen(false)
    } else {
      setOpen(true)
      panel.style.height = panel.scrollHeight + 'px'
      const onEnd = () => {
        // Alleen naar auto als hij intussen niet weer gesloten is.
        if (panel.style.height !== '0px') panel.style.height = 'auto'
        panel.removeEventListener('transitionend', onEnd)
      }
      panel.addEventListener('transitionend', onEnd)
    }
  }

  return (
    <div
      ref={reveal.ref as React.RefObject<HTMLDivElement>}
      className={`qa ${open ? 'open' : ''} ${reveal.className}`.trim()}
      data-d={delay}
    >
      <button className="qa__q" type="button" aria-expanded={open} onClick={toggle}>
        {question}
        <span className="pm" />
      </button>{' '}
      <div className="qa__a" ref={panelRef}>
        <div className="qa__a-inner">{children}</div>
      </div>
    </div>
  )
}
