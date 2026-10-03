import { createFileRoute, Link } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'
import { CONCEPTEN } from '@/lib/concepten'
import '@/styles/pages/concepten.css'

const TITLE = 'Concepten | Eigen initiatief van MegaOnline'
const DESCRIPTION = 'Ontwerpen op eigen initiatief waarin één echte websitevraag centraal staat. Bekijk het eerste concept voor NS.'

export const Route = createFileRoute('/concepten/')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://megaonline.io/concepten' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/concepten' }],
  }),
  component: Concepten,
})

function Concepten() {
  return (
    <main id="top" data-page="concepten">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero Concepten">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Concepten</b>
              </Reveal>
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">Concepten</span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">Ontwerpen op eigen initiatief.</Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Ontwerpen op eigen initiatief. Geen opdracht, wel een echte vraag: wat verandert er als je één doel kiest en de hele site daarop afstemt?
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Conceptenoverzicht">
        <div className="wrap">
          <div className="concept-grid">
            {CONCEPTEN.map((concept, index) => (
              <Reveal
                as={Link}
                to="/concepten/$slug"
                params={{ slug: concept.slug }}
                className="concept-card reveal"
                data-d={String(index % 3)}
                key={concept.slug}
              >
                <span className="concept-card__media">
                  <img src={concept.afbeelding} alt={concept.alt} loading="eager" decoding="async" />
                </span>
                <span className="concept-card__body">
                  <span className="concept-card__label">{concept.label}</span>
                  <span className="concept-card__title">{concept.titel}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}