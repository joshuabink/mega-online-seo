import { createFileRoute, Link } from '@tanstack/react-router'

import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { SOLLICITATIE_WHATSAPP, VACATURES, sollicitatieMail } from '@/lib/vacatures'

const TITEL = 'Vacatures en stages | Werken bij MegaOnline'
const OMSCHRIJVING =
  'Stages en freelance plekken bij MegaOnline in Gouda: SEO, SEA, webdesign, webdevelopment, AI, consultancy en architectuur. Klein bureau, echte klanten.'
const URL = 'https://megaonline.io/vacatures'

export const Route = createFileRoute('/vacatures/')({
  head: () => ({
    meta: [
      { title: TITEL },
      { name: 'description', content: OMSCHRIJVING },
      { property: 'og:title', content: TITEL },
      { property: 'og:description', content: OMSCHRIJVING },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: Vacatures,
})

const REDENEN = [
  {
    icon: 'users',
    kop: 'Klein team, korte lijnen',
    tekst: 'Je overlegt met de mensen die de strategie bepalen en de site bouwen. Geen tussenlaag.',
  },
  {
    icon: 'rocket',
    kop: 'Je werk gaat live',
    tekst: 'Wat je maakt komt op de site van een echte klant te staan. Meestal binnen weken.',
  },
  {
    icon: 'compass',
    kop: 'Je ziet het hele plaatje',
    tekst: 'Van het eerste klantgesprek tot de cijfers een maand na livegang. Dat leert sneller dan één taak.',
  },
  {
    icon: 'graduation-cap',
    kop: 'Leren mag tijd kosten',
    tekst: 'Je krijgt begeleiding en de ruimte om iets fout te doen. Alles wordt nagekeken voor het live gaat.',
  },
]

function Vacatures() {
  return (
    <main id="top">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label="Hero: Vacatures"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <b>Vacatures</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Werken bij MegaOnline
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Leren door het
                {' '}
                <em>echt te doen.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Wij bouwen websites voor bedrijven die leven van aanvragen en boekingen. Dat werk is te leuk om alleen te doen. Daarom zoeken we stagiairs en freelancers die het vak willen leren of al beheersen.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a className="btn btn-primary" href="#open">
                  Bekijk de open plekken
                </a>
                {' '}
                <a className="tlink" href={SOLLICITATIE_WHATSAPP} target="_blank" rel="noreferrer">
                  Stel eerst een vraag
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Waarom hier">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom hier</span>
            {' '}
            <h2 className="h2">
              Geen koffie halen.
              {' '}
              <em>Gewoon meedraaien.</em>
            </h2>
            {' '}
            <p className="lead">
              We zijn een klein bureau. Dat betekent dat je werk er meteen toe doet en dat je overal bij zit.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            {REDENEN.map((reden, i) => (
              <Reveal
                as="div"
                className="feat reveal"
                key={reden.kop}
                data-d={i === 0 ? undefined : String(i)}
              >
                <span className="iconbox">
                  <Icon name={reden.icon} />
                </span>
                <h4>{reden.kop}</h4>
                <p>{reden.tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {' '}
      <section className="section" id="open" data-theme="light" data-screen-label="Open plekken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Open plekken</span>
            {' '}
            <h2 className="h2">
              Acht plekken.
              {' '}
              <em>Eén team.</em>
            </h2>
            {' '}
            <p className="lead">
              Staat jouw plek er niet bij en denk je toch iets toe te voegen? Stuur dan een open sollicitatie.
            </p>
          </Reveal>
          {' '}
          <div className="svc">
            {VACATURES.map((vacature, i) => (
              <Reveal
                as="div"
                className="svc__card reveal"
                key={vacature.slug}
                data-d={i % 2 === 0 ? undefined : '1'}
              >
                <span className="svc__tag svc__tag--reg">{vacature.type}</span>
                <h3>{vacature.titel}</h3>
                <p>{vacature.kort}</p>
                <div className="svc__foot">
                  <Link className="tlink" to={vacature.pad}>
                    Bekijk deze vacature
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Hoe het gaat">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zo gaat het verder</span>
            {' '}
            <h2 className="h2">
              Van bericht naar
              {' '}
              <em>eerste werkdag.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="steps">
            <Reveal as="div" className="step reveal">
              <span className="step__no">01</span>
              <div className="step__body">
                <h3>Je stuurt een bericht</h3>
                <p>
                  Een paar zinnen over wie je bent en wat je aanspreekt. Een motivatiebrief hoeft niet.
                </p>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="step reveal" data-d="1">
              <span className="step__no">02</span>
              <div className="step__body">
                <h3>We drinken koffie</h3>
                <p>
                  Een gesprek van een uur in Gouda of online. We laten zien waar we mee bezig zijn.
                </p>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="step reveal" data-d="2">
              <span className="step__no">03</span>
              <div className="step__body">
                <h3>Je loopt een dag mee</h3>
                <p>
                  Zo weten we allebei of het klikt voordat we iets afspreken voor langere tijd.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" id="solliciteren" data-theme="dark" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Open sollicitatie</span>
            {' '}
            <h2 className="display">Staat jouw plek er niet bij?</h2>
            {' '}
            <p className="lead">
              Vertel wat je goed kunt en wat je hier zou willen doen. Als het klopt maken we er ruimte voor.
            </p>
            {' '}
            <Reveal
              as="div"
              className="svc-hero__ctas reveal"
              data-d="1"
              style={{ justifyContent: "center", marginTop: "28px" }}
            >
              <a className="btn btn-primary" href={sollicitatieMail('open sollicitatie')}>
                Stuur een open sollicitatie
              </a>
              {' '}
              <Link className="tlink" to="/over-megaonline">
                Lees eerst wie we zijn
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
