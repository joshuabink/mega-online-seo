import { useRef, useState, type RefObject } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ConceptForm } from '@/components/ConceptForm'
import { Reveal, useReveal } from '@/components/Reveal'

export const Route = createFileRoute('/gratis-websiteconcept')({
  head: () => ({
    meta: [
      { title: 'Gratis websiteconcept | MegaOnline.io' },
      {
        name: 'description',
        content:
          'Ontvang een gratis websiteconcept met persoonlijk advies. Beantwoord zes korte vragen. Vrijblijvend en reactie binnen 2 werkdagen.',
      },
      { property: 'og:title', content: 'Gratis websiteconcept | MegaOnline.io' },
      {
        property: 'og:description',
        content:
          'Ontvang een gratis websiteconcept met persoonlijk advies. Beantwoord zes korte vragen. Vrijblijvend en reactie binnen 2 werkdagen.',
      },
      { property: 'og:url', content: 'https://megaonline.io/gratis-websiteconcept' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/gratis-websiteconcept' }],
  }),
  component: GratisWebsiteconcept,
})

/**
 * Eén bron voor de zichtbare vragen op deze pagina.
 * Feitenblok staat hier niet in. Geen FAQPage-markup (TK-86).
 */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Wat is een gratis websiteconcept?',
    a: 'Je beantwoordt zes korte vragen over je bedrijf en je website. MegaOnline kijkt daarna zelf naar je bedrijf en maakt een eerste websiteconcept, met persoonlijk advies over hoe je website meer aanvragen en boekingen kan opleveren. Het is geen automatisch rapport.',
  },
  {
    q: 'Is het websiteconcept echt gratis?',
    a: 'Ja. Het websiteconcept is gratis en vrijblijvend. Je zit nergens aan vast.',
  },
  {
    q: 'Wat gebeurt er nadat ik de vragen heb beantwoord?',
    a: 'MegaOnline maakt een eerste websiteconcept voor je bedrijf. Daarna neemt MegaOnline persoonlijk contact met je op om het concept en het advies te bespreken. Vragen in de tussentijd? Mail naar [info@megaonline.io](mailto:info@megaonline.io).',
  },
  {
    q: 'Kan ik een concept aanvragen als ik nog geen website heb?',
    a: 'Ja. In het formulier kun je aangeven dat je nog geen website hebt.',
  },
  {
    q: 'Wat doen jullie met mijn gegevens?',
    a: 'MegaOnline gebruikt je gegevens alleen voor je concept en advies. Je komt niet op een mailinglijst. Meer lees je in de privacyverklaring.',
  },
]

function FaqAnswer({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter((part) => part !== '')
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!match) return <span key={i}>{part}</span>
        const label = match[1]
        const href = match[2]
        if (href === 'https://megaonline.io/gratis-websiteconcept') {
          return (
            <Link key={i} to="/gratis-websiteconcept">
              {label}
            </Link>
          )
        }
        return (
          <a key={i} href={href}>
            {label}
          </a>
        )
      })}
    </>
  )
}

function FaqRow({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const reveal = useReveal('reveal')
  const id = `faq-${index}`

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
        if (panel.style.height !== '0px') panel.style.height = 'auto'
        panel.removeEventListener('transitionend', onEnd)
      }
      panel.addEventListener('transitionend', onEnd)
    }
  }

  return (
    <div
      ref={reveal.ref as RefObject<HTMLDivElement>}
      className={`qa ${open ? 'open' : ''} ${reveal.className}`.trim()}
    >
      <h3 className="qa__h">
        <button
          className="qa__q"
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={toggle}
        >
          {item.q}
          <span className="pm" />
        </button>
      </h3>
      <div id={id} className="qa__a" ref={panelRef}>
        <div className="qa__a-inner">
          <FaqAnswer text={item.a} />
        </div>
      </div>
    </div>
  )
}

function GratisWebsiteconcept() {
  return (
    <main id="top">
      <section className="section hero concept-hero" data-theme="dark" data-screen-label="Gratis websiteconcept">
        <div className="wrap">
          <div className="concept-page">
            <div className="concept-page__copy">
              <Reveal as="div" className="hero__badge reveal">
                <span className="badge">
                  <span className="gdot" />
                  Gratis websiteconcept
                </span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Ontvang een gratis websiteconcept met <em>persoonlijk advies</em>
              </Reveal>
              <Reveal as="p" className="lead reveal" data-d="2">
                Beantwoord zes korte vragen. Daarna kijken we persoonlijk naar je bedrijf en laten we
                zien hoe je website meer aanvragen en boekingen kan opleveren.
              </Reveal>
              <Reveal as="ul" className="concept__ticks reveal" data-d="2">
                <li>Persoonlijk advies</li>
                <li>Vrijblijvend</li>
                <li>Reactie binnen 2 werkdagen</li>
              </Reveal>
            </div>
            <ConceptForm className="hero__form reveal" showIntro={false} />
          </div>
          <p className="feitenblok">
            Het gratis websiteconcept van MegaOnline is een eerste websiteconcept voor je bedrijf, met
            persoonlijk advies over hoe je website meer aanvragen en boekingen kan opleveren. Je
            beantwoordt zes korte vragen. Daarna neemt MegaOnline persoonlijk contact met je op om het te
            bespreken. Het is vrijblijvend. Je krijgt geen automatisch rapport en komt niet op een
            mailinglijst.
          </p>
        </div>
      </section>
      <section className="section" id="faq" data-theme="paper" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: '680px' }}>
            <span className="label">Veelgestelde vragen</span>
            <h2 className="h2">Wat je misschien nog wil weten</h2>
          </Reveal>
          <div className="faq">
            {FAQ_ITEMS.map((item, index) => (
              <FaqRow key={item.q} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
