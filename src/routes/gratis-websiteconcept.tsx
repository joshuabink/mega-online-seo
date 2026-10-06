import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ConceptForm } from '@/components/ConceptForm'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

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
const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Wat is een gratis websiteconcept?',
    a: 'Je vult het formulier in over je bedrijf en je website. MegaOnline kijkt daarna zelf naar je bedrijf en maakt een eerste websiteconcept, met persoonlijk advies over hoe je website meer aanvragen en boekingen kan opleveren. Het is geen automatisch rapport.',
  },
  {
    q: 'Is het websiteconcept echt gratis?',
    a: 'Ja. Het websiteconcept is gratis en vrijblijvend. Je zit nergens aan vast.',
  },
  {
    q: 'Wat gebeurt er nadat ik de vragen heb beantwoord?',
    a: 'MegaOnline maakt een eerste websiteconcept voor je bedrijf. Daarna neemt MegaOnline contact met je op om het concept en het advies te bespreken.',
  },
  {
    q: 'Kan ik een concept aanvragen als ik nog geen website heb?',
    a: 'Ja. In het formulier kun je aangeven dat je nog geen website hebt.',
  },
  {
    q: 'Wat doen jullie met mijn gegevens?',
    a: (
      <>
        MegaOnline gebruikt je gegevens alleen voor je concept en advies. Meer lees je in de{' '}
        <Link to="/privacyverklaring">privacyverklaring</Link>.
      </>
    ),
  },
]

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
            persoonlijk advies over hoe je website meer aanvragen en boekingen kan opleveren. Je vult
            het formulier in. Daarna neemt MegaOnline contact met je op om het te bespreken. Het is
            vrijblijvend. Je krijgt geen automatisch rapport.
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
            {FAQ_ITEMS.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
