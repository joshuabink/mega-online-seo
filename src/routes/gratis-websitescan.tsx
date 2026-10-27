import { createFileRoute, Link } from '@tanstack/react-router'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { Icon } from '@/components/Icon'
import { SCAN_DESCRIPTION, SCAN_FAQ, SCAN_H1, SCAN_OPLEVERING, SCAN_REACTIETIJD, SCAN_TITLE } from '@/lib/scan'
import '@/styles/pages/scan.css'

export const Route = createFileRoute('/gratis-websitescan')({
  head: () => ({
    meta: [
      { title: SCAN_TITLE },
      { name: 'description', content: SCAN_DESCRIPTION },
      { property: 'og:title', content: SCAN_TITLE },
      { property: 'og:description', content: SCAN_DESCRIPTION },
      { property: 'og:url', content: 'https://megaonline.io/gratis-websitescan' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/gratis-websitescan' }],
  }),
  component: GratisWebsitescan,
})

const CASES = [
  {
    id: 'case-enevents',
    naam: 'EN Events',
    sub: 'Event- en weddingplanning door Eva',
    vraag:
      'Bruiloften, particuliere feesten en private dining vragen elk een eigen plek, met een kennismaking als vervolgstap.',
    bouwde:
      "Aparte pagina's voor de drie belevingen, plus portfolio, traject, prijzen, vragen en contact.",
    href: 'https://enevents.nl/',
    label: 'enevents.nl bekijken',
    alt: 'Homepage van enevents.nl',
  },
  {
    id: 'case-qteam',
    naam: 'Q-Team Solutions',
    sub: 'Apps voor Microsoft Dynamics 365 Business Central',
    vraag: 'De site liet onvoldoende zien welke apps het bedrijf ontwikkelt en wat ze klanten opleveren.',
    bouwde: 'Een duidelijke boodschap en een structuur met een eigen pagina per app.',
    href: 'https://q-team.nl/',
    label: 'q-team.nl bekijken',
    alt: 'Homepage van q-team.nl',
  },
  {
    id: 'case-guestroom',
    naam: 'Guest Room Utrecht',
    sub: 'Bed & breakfast in Utrecht',
    vraag: 'De site bracht de sfeer van het verblijf onvoldoende over.',
    bouwde: 'Een visuele site met kamers, faciliteiten en een boekingsroute.',
    href: 'https://guestroomutrecht.nl/',
    label: 'guestroomutrecht.nl bekijken',
    alt: 'Homepage van guestroomutrecht.nl',
  },
] as const

const STAPPEN = [
  {
    titel: 'Gratis website scan',
    tekst:
      'MegaOnline bekijkt je huidige site en leest wat jij ervan vindt. In een gesprek hoor je wat er misgaat en wat het eerst moet.',
    punten: [
      'Jouw antwoorden uit het formulier',
      'Een eerlijke blik op je site',
      'Een gesprek met concreet advies',
    ],
  },
  {
    titel: 'Begrijpen',
    tekst: 'Pas als MegaOnline je bedrijf kent, is duidelijk wat je site moet doen.',
    punten: [
      'Deep dive in je bedrijf',
      "Doelgroepanalyse met persona's",
      'Concurrentieonderzoek',
      'Contentplan',
    ],
  },
  {
    titel: 'Bouwen',
    tekst:
      'Een site die vertrouwen wekt en bezoekers naar een aanvraag of boeking leidt.',
    punten: ['Ontwerp', 'Development', 'Aanvraagflows', 'Tracking'],
  },
  {
    titel: 'Verbeteren',
    tekst: 'Na de livegang kijkt MegaOnline wat bezoekers echt doen en stuurt bij.',
    punten: [
      'Bezoekersdata bekijken',
      'Bezoekersgedrag analyseren',
      'De website daarop aanpassen',
      'Onderhoud',
    ],
  },
] as const

const VERGELIJKING = [
  {
    label: 'Doel',
    ander: 'Een site die er goed uitziet.',
    mega: 'Een site die aanvragen en boekingen oplevert.',
  },
  {
    label: 'Na de livegang',
    ander: 'Project af, factuur verstuurd.',
    mega: 'Doorlopend bijsturen op de grootste groeikans.',
  },
] as const

const KENNIS = [
  {
    slug: 'waar-boekingen-weglekken',
    titel: 'Waar lekken boekingen weg op je website?',
    tekst: 'Tien plekken waar het misgaat en hoe je elk lek zelf checkt.',
  },
  {
    slug: 'website-levert-geen-aanvragen-op',
    titel: 'Waarom levert je website geen aanvragen op?',
    tekst: 'Zes plekken waar het weglekt en hoe je vindt welke het bij jou is.',
  },
] as const

function GratisWebsitescan() {
  return (
    <main id="top" data-page="scan">
      <section className="section hero scan-hero" id="formulier" data-theme="dark" data-screen-label="Hero + scanformulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="p" className="v2-eyebrow reveal">
                Gratis website scan
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                {SCAN_H1}
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                MegaOnline bekijkt je site en vertelt je eerlijk wat je nu aanvragen en boekingen kost en wat het eerst moet.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Persoonlijk advies, geen standaardrapport</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Rapport {SCAN_REACTIETIJD}</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Toelichting in een videogesprek</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="scan" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section section--tight" id="scan" data-theme="light" data-screen-label="Wat de scan bekijkt">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Wat de scan bekijkt</span>
              <h2 className="h2">Waar haken bezoekers af op weg naar een aanvraag?</h2>
            </div>
            <div className="v2-head__side">
              <p>
                MegaOnline kijkt waar bezoekers afhaken op weg naar een aanvraag of boeking en wat daar beter
                kan. Jouw antwoorden in het formulier bepalen waar MegaOnline het eerst naar kijkt.
              </p>
              <p>{SCAN_OPLEVERING}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="werk" data-theme="paper" data-screen-label="Werk">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Werk dat live staat.</h2>
            <p className="lead">Drie sites die MegaOnline bouwde. Klik door en kijk zelf.</p>
          </Reveal>
          <div className="cases scan-cases">
            {CASES.map((c, i) => (
              <Reveal as="article" className="case reveal" data-d={String(i % 3)} key={c.id}>
                <div className="case__media">
                  <Media id={c.id} fit="cover" alt={c.alt} placeholder={c.naam} />
                </div>
                <div className="case__body">
                  <h3 className="case__name">{c.naam}</h3>
                  <p className="case__context">{c.sub}</p>
                  <div className="case__steps">
                    <div className="case__step">
                      <span className="k">Vraag</span>
                      <p>{c.vraag}</p>
                    </div>
                    <div className="case__step">
                      <span className="k">Wat MegaOnline bouwde</span>
                      <p>{c.bouwde}</p>
                    </div>
                  </div>
                  <a className="tlink" href={c.href}>
                    {c.label}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="werkwijze" data-theme="light" data-screen-label="Werkwijze">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Zo verloopt de scan</h2>
            <p className="lead">
              Een mooie site zonder onderzoek levert weinig op. Daarom leert MegaOnline eerst je bedrijf en je
              klanten kennen, bouwt pas daarna en blijft na de livegang verbeteren. Je werkt
              direct met de mensen die het doen, zonder tussenlagen.
            </p>
          </Reveal>
          <ol className="v2-steps v2-steps--4">
            {STAPPEN.map((stap, i) => (
              <Reveal as="li" className="v2-step reveal" data-d={String(i % 3)} key={stap.titel}>
                <span className="v2-step__no">0{i + 1}</span>
                <h3>{stap.titel}</h3>
                <p>{stap.tekst}</p>
                <ul className="v2-step__list">
                  {stap.punten.map((punt) => (
                    <li key={punt}>{punt}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
          <Reveal as="div" className="reveal">
            <a className="tlink" href="#formulier">
              Begin met de gratis website scan
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section" id="waarom" data-theme="dark" data-screen-label="Vergelijking">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het verschil</span>
            <h2 className="h2">
              Een websitebouwer maakt wat jij vraagt. MegaOnline bouwt voor jouw doelgroep. Met één doel: dat je bezoeker <em>actie onderneemt.</em>
            </h2>
          </Reveal>
          <Reveal as="div" className="v2-table reveal" data-d="1">
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Onderdeel</span>
                  </th>
                  <th scope="col">Gemiddelde websitebouwer</th>
                  <th scope="col" className="us">MegaOnline</th>
                </tr>
              </thead>
              <tbody>
                {VERGELIJKING.map((rij) => (
                  <tr key={rij.label}>
                    <th scope="row">{rij.label}</th>
                    <td>{rij.ander}</td>
                    <td className="us">{rij.mega}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section" id="vragen" data-theme="paper" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Veelgestelde vragen over de website scan</h2>
          </Reveal>
          <div className="faq">
            {SCAN_FAQ.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kennis" data-theme="light" data-screen-label="Kennisbank">
        <div className="wrap">
          <Reveal as="h3" className="scan-kennis__kop reveal">
            Zelf alvast checken
          </Reveal>
          <div className="scan-kennis">
            {KENNIS.map((item, i) => (
              <Reveal as="div" className="reveal" data-d={String(i)} key={item.slug}>
                <h4>
                  <Link to="/kennisbank/$slug" params={{ slug: item.slug }}>
                    {item.titel}
                  </Link>
                </h4>
                <p>{item.tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
