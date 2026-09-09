import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { OPEN_VACATURES } from '@/lib/vacatures'

const TITEL = 'Werken bij MegaOnline | Stages en freelance opdrachten'
const OMSCHRIJVING =
  'Stages en freelance plekken bij MegaOnline in Gouda: SEO, SEA, webdesign, webdevelopment, AI-ontwikkeling, consultancy en architectuur. Klein team, echt klantwerk.'

export const Route = createFileRoute('/werken-bij/')({
  head: () => ({
    meta: [
      { title: TITEL },
      { name: 'description', content: OMSCHRIJVING },
      { property: 'og:title', content: TITEL },
      { property: 'og:description', content: OMSCHRIJVING },
      { property: 'og:url', content: 'https://megaonline.io/werken-bij' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/werken-bij' }],
  }),
  component: WerkenBij,
})

function WerkenBij() {
  return (
    <main id="top">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label="Hero — Werken bij"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Werken bij</b>
              </Reveal>
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Werken bij MegaOnline
                </span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Leren door het{' '}
                <em>echt te doen.</em>
              </Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Wij bouwen websites voor bedrijven die leven van aanvragen en boekingen. Klein
                bureau, echte klanten, korte lijnen. Wat jij maakt gaat live en wordt afgerekend
                op wat het oplevert.
              </Reveal>
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a className="btn btn-primary" href="#vacatures">
                  Bekijk de openstaande plekken
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Waarom hier"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom hier</span>
            <h2 className="h2">
              Geen koffie halen. Je werkt aan{' '}
              <em>echte klanten.</em>
            </h2>
            <p className="lead">
              We zijn met weinig mensen. Dat betekent dat er geen bedacht stageproject voor je
              klaarligt. Je pakt werk op dat anders blijft liggen en dat merkt een klant.
            </p>
          </Reveal>
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
              <Reveal as="div" className="miniprob reveal">
                <h4>Direct contact</h4>
                <p>
                  Je werkt naast Joshua, de oprichter. Geen laag ertussen die jouw vragen
                  doorgeeft.
                </p>
              </Reveal>
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Je ziet wat het doet</h4>
                <p>
                  We meten aanvragen, niet bezoekers. Na een aanpassing weet je binnen een maand
                  of het hielp.
                </p>
              </Reveal>
              <Reveal as="div" className="miniprob reveal">
                <h4>Fouten mogen</h4>
                <p>
                  We kijken alles na voordat het live gaat. Iets proberen is dus goedkoper dan
                  niets proberen.
                </p>
              </Reveal>
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Je leert het geheel</h4>
                <p>
                  Ook als je voor één vak komt, zie je hoe strategie, ontwerp, techniek en
                  vindbaarheid samenhangen.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        data-theme="light"
        data-screen-label="Openstaande plekken"
        id="vacatures"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Openstaande plekken</span>
            <h2 className="h2">
              Wat we op dit moment{' '}
              <em>zoeken.</em>
            </h2>
            <p className="lead">
              Staat jouw richting er niet bij, maar denk je dat je iets toevoegt? Stuur alsnog een
              bericht. We kijken serieus naar een open sollicitatie.
            </p>
          </Reveal>
          <div className="bento">
            {OPEN_VACATURES.map((v, i) => (
              <Reveal
                as={Link}
                key={v.slug}
                className="bcell reveal"
                data-d={String((i % 3) + 1)}
                to="/werken-bij/$slug"
                params={{ slug: v.slug }}
              >
                <div className="bcell__top">
                  <span className="bcell__no">{v.vorm}</span>
                  <span className="iconbox iconbox--sm">
                    <Icon name={v.icon} />
                  </span>
                </div>
                <h3>{v.titel}</h3>
                <p>{v.kort}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Zo gaat solliciteren"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zo gaat het</span>
            <h2 className="h2">
              Drie stappen. Geen{' '}
              <em>brievenbus.</em>
            </h2>
          </Reveal>
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
              <Reveal as="div" className="miniprob reveal">
                <h4>1 · Je stuurt een bericht</h4>
                <p>
                  Wie je bent, wat je zoekt en waarom dit je aanspreekt. Een cv mag. Een link naar
                  iets dat je hebt gemaakt is beter.
                </p>
              </Reveal>
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>2 · We bellen of drinken koffie</h4>
                <p>
                  Een half uur. Geen assessments, geen strikvragen. We willen weten hoe je denkt.
                </p>
              </Reveal>
              <Reveal as="div" className="miniprob reveal">
                <h4>3 · Je loopt een dag mee</h4>
                <p>
                  Je werkt aan iets echts. Daarna weten we allebei of het past. Je krijgt hoe dan
                  ook antwoord.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-theme="dark" data-screen-label="Solliciteren">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Solliciteren</span>
            <h2 className="h2">
              Stuur gerust een{' '}
              <em>bericht.</em>
            </h2>
            <p className="lead">
              Ook als je twijfelt of je genoeg kunt. Dat is precies de reden dat er stageplekken
              zijn.
            </p>
          </Reveal>
          <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ marginTop: '28px' }}>
            <a className="btn btn-primary" href="mailto:info@megaonline.io?subject=Sollicitatie">
              Mail naar info@megaonline.io
            </a>
            <a
              className="tlink"
              href="https://wa.me/31634388938"
              target="_blank"
              rel="noopener noreferrer"
            >
              Of app naar 06 34388938
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
