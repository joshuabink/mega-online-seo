import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

/**
 * Scroll-reveal — port van `assets/app.js`.
 *
 * Elementen krijgen `.in` zodra ze in beeld komen, waarna ze niet meer
 * geobserveerd worden: ze animeren dus één keer en niet heen-en-weer.
 *
 * Belangrijk verschil met het prototype: daar zette een los script de klasse
 * rechtstreeks op het DOM-element. In React mag dat niet — als de klasse tijdens
 * hydration wordt toegevoegd klopt de server-HTML niet meer met wat React
 * verwacht, en kan React de klasse er bij een re-render weer af gooien (het
 * element klapt dan terug naar onzichtbaar). Daarom is zichtbaarheid hier
 * gewone React-state.
 *
 * Eén gedeelde IntersectionObserver voor de hele pagina, in plaats van één per
 * element.
 */

type Callback = () => void

let observer: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, Callback>()

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        observer?.unobserve(entry.target)
        callbacks.delete(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

/**
 * Geeft een ref en de className terug waar `in` aan toegevoegd is zodra het
 * element in beeld is gekomen.
 */
export function useReveal(baseClassName = '') {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return

    // Zonder IntersectionObserver, of als de bezoeker minder beweging wil:
    // meteen zichtbaar.
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const io = getObserver()
    callbacks.set(el, () => setShown(true))
    io.observe(el)

    return () => {
      io.unobserve(el)
      callbacks.delete(el)
    }
  }, [shown])

  const className = shown ? `${baseClassName} in`.trim() : baseClassName
  return { ref, className, shown }
}

type RevealProps = {
  as?: ElementType
  className?: string
  children?: ReactNode
} & Record<string, unknown>

/** Wrapper die het opgegeven element rendert en `in` toevoegt zodra het in beeld komt. */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }: RevealProps) {
  const { ref, className: cls } = useReveal(className)
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
