import { Children, isValidElement, type ReactNode } from 'react'
import { useLocation } from '@tanstack/react-router'
import { Qa } from './Qa'
import { absoluteUrl } from '@/lib/schema'

/**
 * FAQPage-markup uit de vragen die al op de pagina staan.
 *
 * Wikkel het blok met `<Qa>`-items in `<FaqSchema>`. Het component loopt de
 * JSX-boom van zijn children langs (zonder te renderen), pakt elke `<Qa>` en
 * zet `question` plus de zichtbare tekst van het antwoord in een FAQPage.
 * Zo kan de markup nooit iets anders zeggen dan de pagina: er is maar één
 * bron. Het resultaat is puur een functie van de props, dus server en client
 * geven dezelfde uitvoer en er is geen hydration-verschil.
 *
 * Alleen `<Qa>`-elementen die rechtstreeks in de JSX staan (ook via `.map`)
 * worden gevonden. Niet gebruiken op pagina's waar `schema.ts` de FAQPage al
 * levert (kennisbankartikelen, /gratis-websitescan) of op de homepage, die
 * haar eigen FAQ_SCHEMA heeft. Dan staat dezelfde FAQ er twee keer.
 */
export function FaqSchema({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const vragen = verzamelVragen(children)
  if (!vragen.length) return <>{children}</>

  const pad = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const url = absoluteUrl(pad)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    inLanguage: 'nl-NL',
    isPartOf: { '@id': `${url}#webpage` },
    mainEntity: vragen.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
    </>
  )
}

/** Alle `<Qa>`-elementen in de boom, in de volgorde waarin ze op de pagina staan. */
export function verzamelVragen(node: ReactNode): { q: string; a: string }[] {
  const uit: { q: string; a: string }[] = []
  const loop = (n: ReactNode) => {
    Children.forEach(n, (kind) => {
      if (!isValidElement(kind)) return
      const props = kind.props as { question?: ReactNode; children?: ReactNode }
      if (kind.type === Qa) {
        const q = zichtbareTekst(props.question)
        const a = zichtbareTekst(props.children)
        if (q && a) uit.push({ q, a })
        return
      }
      loop(props.children)
    })
  }
  loop(node)
  return uit
}

const BLOK = new Set(['p', 'div', 'li', 'ul', 'ol', 'br'])

/** Platte tekst zoals de bezoeker hem leest: links worden hun ankertekst. */
export function zichtbareTekst(node: ReactNode): string {
  const delen: string[] = []
  const loop = (n: ReactNode) => {
    Children.forEach(n, (kind) => {
      if (kind == null || typeof kind === 'boolean') return
      if (typeof kind === 'string' || typeof kind === 'number') {
        delen.push(String(kind))
        return
      }
      if (!isValidElement(kind)) return
      // Blokelementen staan op de pagina los van elkaar. Zonder spatie
      // plakken twee alinea's aan elkaar vast.
      const blok = typeof kind.type === 'string' && BLOK.has(kind.type)
      if (blok) delen.push(' ')
      loop((kind.props as { children?: ReactNode }).children)
      if (blok) delen.push(' ')
    })
  }
  loop(node)
  return delen.join('').replace(/\s+/g, ' ').trim()
}
