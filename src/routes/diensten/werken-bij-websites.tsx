import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import '@/styles/pages/dienst.css'

export const Route = createFileRoute('/diensten/werken-bij-websites')({
  head: () => ({
    meta: [
      { title: 'Werken-bij website laten maken | MegaOnline.io' },
      {
        name: 'description',
        content:
          'Een werken-bij website laten maken die laat zien hoe het echt is. Lees wat erop moet, hoe vacatures op je site komen en wat Google met vacatures doet.',
      },
      { property: 'og:title', content: 'Werken-bij website laten maken | MegaOnline.io' },
      {
        property: 'og:description',
        content:
          'Een werken-bij website laten maken die laat zien hoe het echt is. Lees wat erop moet, hoe vacatures op je site komen en wat Google met vacatures doet.',
      },
      { property: 'og:url', content: 'https://megaonline.io/diensten/werken-bij-websites' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/diensten/werken-bij-websites' }],
  }),
  component: WerkenBijWebsites,
})

/** Enige bron van de zichtbare vragen. Antwoorden staan in de HTML, niet in schema. */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Heb ik een aparte werken-bij website nodig?',
    a: 'Niet per se. Soms is een werken-bij sectie op je bestaande website genoeg, soms werkt een aparte website beter omdat die volledig om sfeer, mensen en solliciteren draait. We kijken samen wat voor jouw situatie het slimst is.',
  },
  {
    q: 'Kunnen vacatures automatisch worden bijgewerkt?',
    a: 'Dat kan als je wervingssysteem (ATS) een koppeling of vacaturelijst voor websites aanbiedt. Anders beheer je de vacatures zelf op de website, zonder technische kennis.',
  },
  {
    q: 'Kunnen mijn vacatures in Google verschijnen?',
    a: 'Ze kunnen in aanmerking komen voor de vacatureresultaten van Google als elke vacature een eigen pagina met JobPosting-gegevens heeft. Of ze verschijnen, bepaalt Google. Dat kan niemand garanderen.',
  },
  {
    q: "Helpen jullie ook met foto's en video?",
    a: "Ja. Bij werken-bij websites is beeld vaak belangrijker dan tekst. We helpen met teamfoto's, werkdagbeelden, interviews en bedrijfsvideo's, eenmalig bij de bouw of periodiek.",
  },
  {
    q: 'Kunnen medewerkers hun verhaal delen?',
    a: 'Ja. Op de website komt ruimte voor portretten, quotes en interviews, zodat sollicitanten een eerlijk beeld krijgen van hoe het is om bij je te werken.',
  },
  {
    q: 'Wat kost een werken-bij website laten maken?',
    a: 'Dat hangt af van de vorm (een sectie of een aparte website), het aantal vacatures en of de vacatures uit een wervingssysteem moeten komen. Na een eerste gesprek krijg je een duidelijke prijs voor jouw situatie.',
  },
]

const AFHAKERS = [
  { t: 'Geen idee hoe het is', p: 'Een sollicitant ziet niet hoe het is om bij je te werken.' },
  { t: 'Alleen een lijstje vacatures', p: 'Functietitels en eisen, maar geen verhaal erachter.' },
  { t: 'Solliciteren kost te veel moeite', p: 'Lange formulieren en onduidelijke stappen.' },
  { t: "Geen echte foto's", p: 'Stockbeelden in plaats van het team en de werkvloer.' },
]

const NODIG: { icon: string; t: string }[] = [
  { icon: 'users', t: "Echte mensen en verhalen van collega's" },
  { icon: 'camera', t: 'Een eerlijk beeld van de werkvloer' },
  { icon: 'list-checks', t: 'Heldere verwachtingen over het werk' },
  { icon: 'send', t: 'Een kort sollicitatieformulier' },
  { icon: 'award', t: 'Wie je bent en waarom mensen blijven' },
  { icon: 'smartphone', t: 'Solliciteren werkt goed op mobiel' },
  { icon: 'phone-call', t: 'Even appen of bellen kan ook' },
  { icon: 'file-text', t: 'Vacatures zelf bijhouden' },
]

const STAPPEN = [
  { t: 'Je bedrijf begrijpen', p: "Wat maakt het werk leuk, waarom blijven collega's en wat maakt je anders dan de werkgever verderop?" },
  { t: 'De mensen die je zoekt', p: 'Wat hebben zij nodig om te solliciteren? Waar twijfelen ze?' },
  { t: 'Structuur bepalen', p: 'Welke informatie en welk beeld nodig zijn en hoe iemand naar de sollicitatie gaat.' },
  { t: 'Bouwen', p: 'Een website die solliciteren makkelijker maakt en die je zelf bijhoudt.' },
]

const VOORBEELD = [
  'Een overzicht met per rol een kaart: het soort rol, één zin over het werk en de ervaring die nodig is.',
  'Per rol een eigen pagina met wat je gaat doen, wat je meebrengt, wat je niet hoeft te hebben en wat je er leert.',
  'Per vacaturepagina gestructureerde gegevens (JobPosting), uit dezelfde bron als de tekst op de pagina.',
  'Een kort sollicitatieformulier waarin een cv niet verplicht is, met mail en WhatsApp als alternatief.',
  'Een procedure in drie stappen: iets sturen, een kort belgesprek en daarna een opdracht met kennismaking.',
]

function WerkenBijWebsites() {
  return (
    <main id="top" data-page="werken-bij-websites" data-dienst>
      <section className="section hero" id="ontwerp" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Werken-bij Websites</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Voor bedrijven die personeel zoeken
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Een werken-bij website laten maken die laat zien hoe het <em>echt</em> is
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Een werken-bij website is een website of een deel van je bedrijfssite waar sollicitanten zien hoe het is om bij je te werken, welke vacatures er zijn en hoe ze solliciteren.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Een sectie op je site of een aparte website</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Vacatures zelf beheren of uit je wervingssysteem</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Solliciteren in een paar klikken, ook op mobiel</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="ontwerp" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Arbeidsmarkt">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Het probleem</span>
              <h2 className="h2">Ligt het alleen aan de arbeidsmarkt?</h2>
            </div>
            <div className="v2-head__side">
              <p>
                Goede mensen vinden is zwaar. Maar het ligt ook aan wat iemand ziet als hij je bedrijf opzoekt. Een twijfelende sollicitant haakt net zo stil af als een twijfelende klant.
              </p>
            </div>
          </Reveal>
          <ul className="cw-problems cw-problems--4">
            {AFHAKERS.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Wat een werken-bij website nodig heeft">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat erop moet</span>
            <h2 className="h2">Wat heeft een goede werken-bij website nodig?</h2>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Wat sollicitanten willen zien</h3>
              <ul className="cw-incl">
                {NODIG.map((x) => (
                  <li key={x.t}>
                    <span className="cw-incl__ico">
                      <Icon name={x.icon} />
                    </span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <h3>Een aparte website of een sectie op je bedrijfssite?</h3>
              <p>Allebei kan. Wat past, hangt af van hoeveel vacatures je hebt en hoeveel je wilt laten zien.</p>
              <ul className="cw-list">
                <li>
                  <Icon name="check" className="ck" />
                  <span><strong>Een sectie op je bedrijfssite</strong>, bijvoorbeeld /werken-bij: één website om bij te houden en sollicitanten zien meteen wat je bedrijf doet.</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span><strong>Een aparte werken-bij website:</strong> alle ruimte voor sfeer, mensen en solliciteren, met een eigen opbouw.</span>
                </li>
              </ul>
              <p>We kijken samen wat voor jouw situatie het slimst is.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="dark" data-screen-label="Foto's en video">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Beeld</span>
            <h2 className="h2">Waarom zijn foto's en video zo belangrijk op een werken-bij website?</h2>
          </Reveal>
          <div className="cw-beeld">
            <Reveal as="div" className="cw-beeld__grid reveal">
              <div><Media id="cw-media-1" fit="cover" placeholder="[ TEAMFOTO ]" alt="Collega's samen aan het werk op kantoor" /></div>
              <div><Media id="cw-media-2" fit="cover" placeholder="[ WERKDAG ]" alt="Monteur aan het werk op locatie" /></div>
              <div><Media id="cw-media-3" fit="cover" placeholder="[ INTERVIEW ]" alt="Gesprek tussen twee collega's" /></div>
              <div><Media id="cw-media-4" fit="cover" placeholder="[ VIDEO / SFEER ]" alt="Medewerker in het magazijn" /></div>
            </Reveal>
            <Reveal as="div" className="cw-beeld__tekst reveal" data-d="1">
              <p>
                Niemand voelt de sfeer van een bedrijf door een vacaturetekst te lezen. Een eerlijke teamfoto of een korte video van een werkdag laat sneller zien hoe het is.
              </p>
              <p>
                Het gaat vaak mis met verouderde foto's, stockbeelden en pagina's zonder gezichten van het team. We helpen met teamfoto's, werkdagbeelden, interviews met collega's en bedrijfsvideo's, eenmalig bij de bouw of periodiek.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Vacatures en Google">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Vacatures</span>
            <h2 className="h2">
              Van vacature tot <em>sollicitatie.</em>
            </h2>
          </Reveal>
          <div className="cw-duo">
            <Reveal as="div" className="cw-card reveal">
              <h2>Hoe komen je vacatures op je werken-bij website?</h2>
              <p>Er zijn twee manieren:</p>
              <ul className="cw-list">
                <li>
                  <Icon name="check" className="ck" />
                  <span><strong>Zelf beheren:</strong> je zet een vacature online of haalt hem weg, zonder technische kennis.</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span><strong>Uit je wervingssysteem (ATS):</strong> dat kan alleen als dat systeem een koppeling of een vacaturelijst voor websites aanbiedt. Dan kijken we per situatie wat de slimste koppeling is.</span>
                </li>
              </ul>
              <p>Sollicitaties kunnen binnenkomen via een kort formulier, per mail of via WhatsApp.</p>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <h2>Kunnen je vacatures in Google verschijnen?</h2>
              <p>
                Google heeft een aparte zoekomgeving voor vacatures, ook in Nederland. Een vacaturepagina kan daarvoor in aanmerking komen als die gestructureerde gegevens heeft (JobPosting) met onder meer de functietitel, een omschrijving, de werkgever, de locatie en de datum van plaatsing.
              </p>
              <ul className="cw-list">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Elke vacature krijgt een eigen pagina. Google wil deze gegevens alleen op een pagina met één vacature.</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Een gesloten vacature gaat offline of krijgt een einddatum.</span>
                </li>
              </ul>
              <p>Of en waar een vacature verschijnt, bepaalt Google. Niemand kan dat garanderen.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De aanpak</span>
            <h2 className="h2">Hoe pakken we een werken-bij website aan?</h2>
            <p className="lead">
              Het doel is niet zoveel mogelijk sollicitaties, maar dat de juiste mensen denken: hier wil ik werken.
            </p>
          </Reveal>
          <ol className="v2-steps v2-steps--4">
            {STAPPEN.map((s, i) => (
              <Reveal as="li" key={s.t} className="v2-step reveal" data-d={String(i % 3)}>
                <span className="v2-step__no">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Voorbeeld MegaOnline">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Voorbeeld</span>
              <h2 className="h2">Hoe ziet een werken-bij pagina eruit? Een voorbeeld van MegaOnline zelf</h2>
            </div>
            <div className="v2-head__side">
              <p>
                Op <Link to="/werken-bij">de vacaturepagina van MegaOnline</Link> staan onze eigen open rollen, van stages tot freelance. Dit is onze eigen website, geen klantvoorbeeld.
              </p>
            </div>
          </Reveal>
          <Reveal as="div" className="cw-card reveal" style={{ marginTop: 'clamp(28px, 3vw, 40px)' }}>
            <h3>Zo is die pagina opgebouwd</h3>
            <ul className="cw-list">
              {VOORBEELD.map((x) => (
                <li key={x}>
                  <Icon name="check" className="ck" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Voor welke bedrijven">
        <div className="wrap">
          <div className="cw-duo">
            <Reveal as="div" className="cw-card reveal">
              <h2>Voor welke bedrijven is een werken-bij website?</h2>
              <p>
                Voor bedrijven die moeite hebben om goede mensen te vinden, zoals installatiebedrijven, bouwbedrijven, transportbedrijven, hoveniers, technische bedrijven en dienstverleners.
              </p>
              <p>
                Zoek je ook meer klanten via je website? Bekijk dan <Link to="/branches/dienstverleners">websites voor dienstverleners</Link>, <Link to="/branches/activiteitenbedrijven">websites voor activiteitenbedrijven</Link> of <Link to="/branches/verhuurbedrijven">websites voor verhuurbedrijven</Link>.
              </p>
            </Reveal>
            <Reveal as="div" className="cw-card cw-card--dark reveal" data-d="1">
              <span className="cw-card__tag">Investering</span>
              <h2>Wat kost een werken-bij website laten maken?</h2>
              <p>
                Dat hangt af van de vorm (een sectie of een aparte website), het aantal vacatures en of de vacatures uit een wervingssysteem moeten komen. Na een eerste gesprek krijg je een duidelijke prijs.
              </p>
              <a className="btn btn-primary" href="#ontwerp">
                Vraag je gratis homepageontwerp aan
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="faq" data-theme="paper" data-screen-label="FAQ">
        <div className="wrap cw-faq">
          <Reveal as="div" className="shead reveal">
            <span className="label">Veelgestelde vragen</span>
            <h2 className="h2">Veelgestelde vragen over <span style={{ whiteSpace: 'nowrap' }}>werken-bij</span> websites</h2>
            <p className="cw-faq__mail">
              Staat je vraag er niet bij? Mail naar <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
            </p>
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

      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">
            Benieuwd hoe jouw website eruit kan zien?
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            We ontwerpen gratis een homepage voor je bedrijf. Zo zie je wat we voor je kunnen maken, zonder verplichtingen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#ontwerp">
            Vraag je gratis homepageontwerp aan
          </Reveal>
        </div>
      </section>
    </main>
  )
}
