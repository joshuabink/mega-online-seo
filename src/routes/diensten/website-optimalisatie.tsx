import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/dienst.css'

export const Route = createFileRoute('/diensten/website-optimalisatie')({
  head: () => ({
    meta: [
      { title: "Website laten optimaliseren voor meer aanvragen | MegaOnline" },
      { name: 'description', content: "Je website staat online, maar haalt er nog niet alles uit. Ontdek waar bezoekers afhaken en welke verbeteringen meer aanvragen opleveren." },
      { property: 'og:title', content: "Website laten optimaliseren voor meer aanvragen | MegaOnline" },
      { property: 'og:description', content: "Je website staat online, maar haalt er nog niet alles uit. Ontdek waar bezoekers afhaken en welke verbeteringen meer aanvragen opleveren." },
      { property: 'og:url', content: "https://megaonline.io/diensten/website-optimalisatie" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/website-optimalisatie" },
    ],
  }),
  component: WebsiteOptimalisatie,
})

const SIGNALEN = [
  { t: 'Je website ziet er nog goed uit', p: 'De uitstraling is prima. Volledig vervangen voelt onnodig en zonde.' },
  { t: 'Bezoekers, maar weinig aanvragen', p: 'Het verkeer is er wel, maar het zet niet om in contact of een boeking.' },
  { t: 'De structuur voelt onduidelijk', p: 'Bezoekers moeten zoeken naar wat ze nodig hebben en haken daardoor af.' },
  { t: 'Formulieren worden weinig ingevuld', p: 'Mensen komen tot het formulier, maar maken de laatste stap niet af.' },
  { t: 'Bezoekers verlaten de site snel', p: 'Dat wijst vaak op twijfel of een onduidelijke volgende stap.' },
  { t: 'Je weet niet wat bezoekers doen', p: 'Zonder inzicht in gedrag blijft verbeteren gokken in plaats van weten.' },
]

const STAPPEN = [
  { t: 'Analyseren', p: 'MegaOnline brengt in kaart waar bezoekers binnenkomen, waar ze afhaken en welke kansen blijven liggen.' },
  { t: 'Verbeterpunten', p: 'MegaOnline benoemt concreet welke knelpunten en kansen er op je website zitten.' },
  { t: 'Prioriteren', p: 'MegaOnline begint bij wat de meeste impact heeft voor de minste moeite.' },
  { t: 'Verbeteren', p: 'MegaOnline voert de verbeteringen gericht door, zonder je website overhoop te halen.' },
  { t: 'Meten', p: 'MegaOnline kijkt wat de aanpassingen opleveren en stuurt bij waar dat nodig is.' },
]

const ONDERDELEN: { icon: string; t: string }[] = [
  { icon: 'layout', t: 'Structuur en pagina-opbouw' },
  { icon: 'compass', t: 'Navigatie' },
  { icon: 'mouse-pointer-click', t: 'Knoppen naar de volgende stap' },
  { icon: 'file-text', t: 'Formulieren' },
  { icon: 'calendar-check', t: 'Boekingsroutes' },
  { icon: 'smartphone', t: 'Mobiele ervaring' },
  { icon: 'gauge', t: 'Snelheid' },
  { icon: 'search-check', t: 'Technische basis voor Google' },
]

const PATRONEN = [
  'Onduidelijke homepage',
  'Geen duidelijke volgende stap',
  'Te veel informatie tegelijk',
  'Te weinig vertrouwen',
  'Slechte mobiele ervaring',
  'Verborgen contactmogelijkheden',
]

const OPNIEUW = [
  'De techniek is niet meer veilig of houdbaar',
  'Je bedrijf is gegroeid, maar de website kan niet meegroeien',
  'De structuur klopt fundamenteel niet',
  'Aanpassen kost steeds meer moeite',
  'De website past niet meer bij wie je nu bent',
  'Er zitten al zoveel losse pleisters op dat opnieuw beginnen rustiger is',
]

const VOOR_WIE = [
  { to: '/branches/offerteaanvragen', t: 'Offerteaanvragen', p: 'Een formulier dat te veel of te vroeg vraagt, kost je de aanvraag.' },
  { to: '/branches/reserveringen', t: 'Reserveringen', p: 'Elke extra stap in het reserveren kost je een deel van je gasten.' },
  { to: '/branches/dienstverleners', t: 'Dienstverleners', p: "Bezoekers komen wel, alleen wekken je pagina's te weinig vertrouwen." },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Heb ik een nieuwe website nodig?',
    a: 'Vaak niet. Ziet je website er nog goed uit en is hij technisch in orde, dan zit de winst meestal in gerichte verbeteringen. Een nieuwe website is alleen slimmer als het fundament technisch of strategisch echt verouderd is. De gratis website scan maakt dat onderscheid voor je helder.',
  },
  {
    q: 'Hoe weet ik of optimaliseren genoeg is?',
    a: 'Dat begint met een analyse van bezoekersgedrag, knelpunten en kansen. Daaruit blijkt of gerichte verbeteringen voldoende zijn, of dat de basis te veel beperkingen heeft. MegaOnline adviseert geen nieuwe website als het niet nodig is.',
  },
  {
    q: 'Kan MegaOnline mijn bestaande website verbeteren?',
    a: 'Ja. De meeste websites zijn goed te verbeteren. MegaOnline pakt structuur, formulieren, snelheid, de mobiele ervaring en de technische basis voor Google aan zonder je website opnieuw te bouwen.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Sommige verbeteringen, zoals een duidelijkere knop of een korter formulier, kunnen al snel merkbaar zijn. Andere, zoals je vindbaarheid in Google, hebben meer tijd nodig. MegaOnline stuurt op wat gemeten wordt, niet op gevoel.',
  },
  {
    q: 'Werkt MegaOnline ook aan websites die MegaOnline niet zelf gebouwd heeft?',
    a: 'Zeker. Veel optimalisatietrajecten gaan juist over websites die door iemand anders zijn gebouwd. MegaOnline kijkt eerst wat er staat en bepaalt daarna wat de slimste verbeteringen zijn.',
  },
  {
    q: 'Kan ik zelf alvast iets doen?',
    a: (
      <>
        Ja. Lees{' '}
        <Link to="/kennisbank/$slug" params={{ slug: 'website-levert-geen-aanvragen-op' }}>
          waarom je website geen aanvragen oplevert
        </Link>{' '}
        en loop de punten na op je eigen site.
      </>
    ),
  },
]

function WebsiteOptimalisatie() {
  return (
    <main id="top" data-page="optimalisatie" data-dienst>
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Website Optimalisatie</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Voor wie al een website heeft
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Bestaande website laten <em>optimaliseren</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Ontdek waar bezoekers afhaken, welke kansen blijven liggen en hoe gerichte verbeteringen meer aanvragen en boekingen kunnen opleveren. Vaak hoef je niet opnieuw te beginnen.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Eerst analyseren, dan pas aanpassen</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Je website blijft gewoon online</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Ook voor sites die MegaOnline niet zelf bouwde</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="scan" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Signalen">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Verbeteren of vervangen</span>
              <h2 className="h2">
                Misschien hoef je niet <em>opnieuw te beginnen.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Je website is niet kapot. Hij presteert alleen nog niet zoals hij zou kunnen. De vraag is niet of je opnieuw moet beginnen, maar waar bezoekers nu afhaken en wat er nodig is om dat te verhelpen.
              </p>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {SIGNALEN.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De aanpak</span>
            <h2 className="h2">
              Eerst weten waar het misgaat. <em>Dan</em> pas verbeteren.
            </h2>
            <p className="lead">Lukraak knoppen verschuiven levert niets op. De keuzes van MegaOnline rusten op wat bezoekers echt doen, niet op aannames.</p>
          </Reveal>
          <ol className="v2-steps cw-steps">
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

      <section className="section" data-theme="paper" data-screen-label="Wat we optimaliseren">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar MegaOnline naar kijkt</span>
            <h2 className="h2">
              Wat MegaOnline <em>optimaliseert.</em>
            </h2>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>De plekken waar bezoekers afhaken</h3>
              <ul className="cw-incl">
                {ONDERDELEN.map((x) => (
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
              <h3>Herken je deze patronen?</h3>
              <p>Het zijn zelden grote fouten. Het zijn kleine dingen die samen het verschil maken tussen een bezoeker die contact opneemt en een die wegklikt.</p>
              <ul className="cw-chips">
                {PATRONEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Vertrouwen telt mee</h3>
              <p>
                Lees ook{' '}
                <Link to="/kennisbank/$slug" params={{ slug: 'vertrouwen-wekken-zakelijke-website' }}>
                  waar bezoekers op letten voordat ze contact opnemen
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Eerlijk advies">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerlijk advies</span>
            <h2 className="h2">Soms is optimaliseren niet genoeg.</h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Optimaliseren of opnieuw bouwen?</span>
              <p className="cw-prijs__uitleg">
                Niet elke website is het verbeteren waard. Soms is een site technisch of strategisch zo verouderd dat een nieuwe website de betere investering is.
              </p>
              <p className="cw-prijs__uitleg">Verbeteren op een verouderd fundament is dweilen met de kraan open. Dan is opnieuw bouwen slimmer.</p>
              <Link className="btn btn-primary" to="/diensten/conversie-website">
                Bekijk de Conversie Website
              </Link>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <span className="cw-card__tag">Opnieuw bouwen is slimmer als</span>
              <ul className="cw-list">
                {OPNIEUW.map((x) => (
                  <li key={x}>
                    <Icon name="check" className="ck" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="werk" data-theme="paper" data-screen-label="Cases">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Werk van MegaOnline</span>
            <h2 className="h2">
              Gerichte ingrepen, <em>merkbaar</em> verschil.
            </h2>
          </Reveal>
          <div className="cases">
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-qteam" fit="cover" placeholder="[ Q-Team Solutions ]" alt="Website van Q-Team Solutions" />
              </div>
              <div className="case__body">
                <h3 className="case__name">Q-Team Solutions</h3>
                <div className="case__meta">
                  <span className="tag">B2B</span>
                  <span className="tag">Softwarebedrijf</span>
                </div>
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>De website liet onvoldoende zien welke apps het bedrijf ontwikkelt en welke waarde die bieden aan klanten.</p>
                  </div>
                  <div className="case__step">
                    <span className="k">Wat MegaOnline deed</span>
                    <p>MegaOnline bracht de propositie terug naar een duidelijke boodschap en bouwde een structuur die bezoekers sneller naar de juiste informatie leidt.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="Website van GuestRoomUtrecht" />
              </div>
              <div className="case__body">
                <h3 className="case__name">GuestRoomUtrecht</h3>
                <div className="case__meta">
                  <span className="tag">B2C</span>
                  <span className="tag">Bed &amp; Breakfast</span>
                </div>
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>De website bracht de sfeer van het verblijf onvoldoende over.</p>
                  </div>
                  <div className="case__step">
                    <span className="k">Wat MegaOnline deed</span>
                    <p>Een visuele website met een duidelijke boekingsroute en focus op beleving.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="faq" data-theme="light" data-screen-label="FAQ">
        <div className="wrap cw-faq">
          <Reveal as="div" className="shead reveal">
            <span className="label">Veelgestelde vragen</span>
            <h2 className="h2">Wat je misschien nog wil weten</h2>
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

      <section className="section section--tight" data-theme="paper" data-screen-label="Voor wie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>
            <h2 className="h2">Waar optimaliseren het snelst iets oplevert.</h2>
          </Reveal>
          <ul className="cw-problems">
            {VOOR_WIE.map((x, i) => (
              <Reveal as="li" key={x.to} className="cw-problem reveal" data-d={String(i)}>
                <h3>
                  <Link to={x.to}>{x.t}</Link>
                </h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">
            Benieuwd hoeveel er nog in je website zit?
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Vraag een gratis website scan aan en ontdek waar de winst in je huidige website zit, zonder meteen opnieuw te beginnen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
