import { createFileRoute } from '@tanstack/react-router'
import { ConceptForm } from '@/components/ConceptForm'
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
        </div>
      </section>
    </main>
  )
}
