import { createFileRoute, Link } from '@tanstack/react-router'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { ScanForm } from '@/components/ScanForm'
import { CTA_SCAN } from '@/lib/cta'
import { PLACEHOLDER_SCAN_OPLEVERING, SCAN_DESCRIPTION, SCAN_FAQ, SCAN_H1, SCAN_TITLE } from '@/lib/scan'
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
      'We bekijken je huidige site en lezen wat jij ervan vindt. In een gesprek hoor je wat er misgaat en wat het eerst moet.',
    punten: [
      'Jouw antwoorden uit het formulier',
      'Een eerlijke blik op je site',
      'Een gesprek met concreet advies',
    ],
  },
  {
    titel: 'Begrijpen',
    tekst: 'Pas als we je bedrijf kennen, weten we wat je site moet doen.',
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
      'Een site die vertrouwen wekt en bezoekers naar een aanvraag of boeking leidt. Meestal 4 tot 8 weken.',
    punten: ['Ontwerp', 'Development', 'Aanvraagflows', 'Tracking'],
  },
  {
    titel: 'Verbeteren',
    tekst: 'Na de livegang kijken we wat bezoekers echt doen en sturen we bij.',
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
    wij: 'Een site die aanvragen en boekingen oplevert.',
  },
  {
    label: 'Na de livegang',
    ander: 'Project af, factuur verstuurd.',
    wij: 'Doorlopend bijsturen op de grootste groeikans.',
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
      <section className="section hero scan-hero" data-theme="dark" data-screen-label="Hero">
        <div className="wrap">
          <Reveal as="h1" className="display reveal">
            {SCAN_H1}
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            We bekijken je site en vertellen je eerlijk wat je nu aanvragen en boekingen kost, en wat het eerst moet.
          </Reveal>
          <Reveal as="div" className="scan-hero__actions reveal" data-d="2">
            <a className="btn btn-primary" href="#formulier">
              {CTA_SCAN}
            </a>
            <a className="tlink" href="#werk">
              Bekijk ons werk
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section" id="scan" data-theme="light" data-screen-label="Scanformulier">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Wat de website scan bekijkt</h2>
            <p className="lead">
              We kijken waar bezoekers afhaken op weg naar een aanvraag of boeking, en wat daar beter
              kan. Jouw antwoorden hieronder bepalen waar we het eerst naar kijken.
            </p>
          </Reveal>
          <div className="scan-layout">
            <Reveal as="div" className="reveal" data-d="1">
              <h2 className="h2">Wat gaat er volgens jou mis?</h2>
              <p className="lead">
                Vijf korte vragen. Je antwoorden gebruiken we in het gesprek over je site.
              </p>
              <ScanForm />
            </Reveal>
            <Reveal as="aside" className="scan-side reveal" data-d="2">
              <h3>Wat je na de scan ontvangt</h3>
              <p>{PLACEHOLDER_SCAN_OPLEVERING}</p>
              <p className="scan-side__mail">
                Liever eerst mailen?{' '}
                <a href="mailto:info@megaonline.io">info@megaonline.io</a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="werk" data-theme="paper" data-screen-label="Werk">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Werk dat live staat.</h2>
            <p className="lead">Drie sites die we bouwden. Klik door en kijk zelf.</p>
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
              Een mooie site zonder onderzoek levert weinig op. Daarom leren we eerst je bedrijf en je
              klanten kennen, bouwen we pas daarna en blijven we na de livegang verbeteren. Je werkt
              direct met de mensen die het doen, zonder tussenlagen.
            </p>
          </Reveal>
          <ol className="scan-steps">
            {STAPPEN.map((stap, i) => (
              <Reveal as="li" className="reveal" data-d={String(i % 3)} key={stap.titel}>
                <span className="scan-steps__no">{i + 1}</span>
                <div>
                  <h3>{stap.titel}</h3>
                  <p>{stap.tekst}</p>
                  <ul>
                    {stap.punten.map((punt) => (
                      <li key={punt}>{punt}</li>
                    ))}
                  </ul>
                </div>
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
          <Reveal as="h2" className="h2 reveal">
            Een websitebouwer maakt wat je vraagt. Wij bouwen wat je klant laat aanvragen.
          </Reveal>
          <Reveal as="div" className="scan-table-wrap reveal" data-d="1">
            <table className="scan-table">
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">Gemiddelde websitebouwer</th>
                  <th scope="col">MegaOnline</th>
                </tr>
              </thead>
              <tbody>
                {VERGELIJKING.map((rij) => (
                  <tr key={rij.label}>
                    <th scope="row">{rij.label}</th>
                    <td>{rij.ander}</td>
                    <td>{rij.wij}</td>
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
