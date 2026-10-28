import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import '@/styles/pages/dienst.css'

export const Route = createFileRoute('/diensten/starter-website')({
  head: () => ({
    meta: [
      { title: "Website laten maken voor starters | MegaOnline" },
      { name: 'description', content: "Een professionele maatwerkwebsite voor starters. Compact, snel live en voordelig. Een eerlijke instapoptie vanaf €1.500." },
      { property: 'og:title', content: "Website laten maken voor starters | MegaOnline" },
      { property: 'og:description', content: "Een professionele maatwerkwebsite voor starters. Compact, snel live en voordelig. Een eerlijke instapoptie vanaf €1.500." },
      { property: 'og:url', content: "https://megaonline.io/diensten/starter-website" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/starter-website" },
    ],
  }),
  component: StarterWebsite,
})

const SITUATIES = [
  { t: 'Je bent net gestart', p: 'Je hebt een nette online plek nodig, maar nog geen groot budget.' },
  { t: 'Je wilt snel online', p: 'Je wilt niet maanden wachten, maar binnen afzienbare tijd live staan.' },
  { t: 'Je aanbod is overzichtelijk', p: "Een paar diensten of producten, geen website met tientallen pagina's." },
  { t: 'Je wilt gevonden worden', p: 'Wie je naam hoort, moet je makkelijk kunnen vinden en bereiken.' },
  { t: 'Je wilt een helder budget', p: 'Vooraf weten waar je aan toe bent, zonder verrassingen achteraf.' },
  { t: 'Je wilt later kunnen groeien', p: 'Doorgroeien naar een grotere website moet gewoon mogelijk blijven.' },
]

const INBEGREPEN: { icon: string; t: string }[] = [
  { icon: 'files', t: "Tot ongeveer 5 pagina's" },
  { icon: 'palette', t: 'Jouw kleuren en logo' },
  { icon: 'smartphone', t: 'Werkt goed op mobiel' },
  { icon: 'mail', t: 'Contactformulier' },
  { icon: 'search-check', t: 'Technische basis voor Google' },
  { icon: 'gauge', t: 'Snel en veilig' },
  { icon: 'pen-tool', t: 'Zelf teksten en foto’s aanpassen' },
  { icon: 'trending-up', t: 'Later uit te breiden' },
]

const VOORDELEN = ['Ontwerp op maat', 'Compact in omvang', 'Eén feedbackronde', 'Sneller live']

const STAPPEN = [
  { t: 'Intake', p: "We bespreken wat je doet, wat je nodig hebt en welke pagina's er moeten komen." },
  { t: 'Aanleveren', p: "Jij levert je teksten, je logo en een paar foto's aan. We denken mee waar dat nodig is." },
  { t: 'Ontwerpen en bouwen', p: 'We ontwerpen en bouwen je website op maat, in jouw huisstijl.' },
  { t: 'Bijschaven', p: 'Je bekijkt het resultaat en we verwerken je opmerkingen in één gerichte ronde.' },
  { t: 'Live', p: 'Je website gaat online. Teksten en foto’s pas je daarna zelf aan.' },
]

const STARTER_WEL = [
  'Ontwerp en bouw op maat',
  'Duidelijke prijs vooraf en snel live',
  'In jouw kleuren, met jouw teksten en logo',
]
const STARTER_NIET = [
  "Compact in omvang, tot ongeveer 5 pagina's",
  'Eén feedbackronde in plaats van meerdere',
  'Geen diepgaande strategie voor doelgroep en aanvragen',
]
const CONVERSIE = [
  'Strategie voor je doelgroep, je aanvragen en je vindbaarheid',
  'Geen vaste grens aan omvang en opbouw',
  'Meerdere ontwerp- en feedbackrondes',
  'Gericht op meer aanvragen, reserveringen en boekingen',
]

const VOOR_WIE = [
  { to: '/branches/dienstverleners', t: 'Dienstverleners', p: 'Net begonnen in advies, installatie of techniek en toe aan een serieuze uitstraling.' },
  { to: '/branches/non-profits', t: 'Stichtingen en verenigingen', p: 'Een sterk verhaal met een beperkt budget, dat online net zo goed moet landen.' },
  { to: '/branches/offerteaanvragen', t: 'Offerteaanvragen', p: 'Eén goed aanvraagformulier is soms alles wat je nodig hebt om te beginnen.' },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Waarom is een Starter Website goedkoper?',
    a: "Omdat de website compacter is: tot ongeveer 5 pagina's, één feedbackronde en een kortere voorbereiding. Het ontwerp en de bouw blijven maatwerk. Minder uren betekent een lagere prijs.",
  },
  {
    q: 'Wordt mijn website dan hetzelfde als die van anderen?',
    a: "Nee. Ook een Starter Website ontwerpen en bouwen we op maat, in jouw huisstijl en met jouw teksten en foto's.",
  },
  {
    q: 'Wat kost een Starter Website precies?',
    a: "Een Starter Website begint vanaf € 1.500. De exacte prijs hangt af van het aantal pagina's en wat je zelf aanlevert aan teksten en beeld. Je weet vooraf waar je aan toe bent.",
  },
  {
    q: 'Kan ik later uitbreiden of doorgroeien?',
    a: (
      <>
        Zeker. Je kunt later pagina's toevoegen of doorgroeien naar een{' '}
        <Link to="/diensten/conversie-website">Conversie Website</Link> met meer pagina's en strategie.
      </>
    ),
  },
  {
    q: 'Voor wie is de Starter Website bedoeld?',
    a: "Vooral voor startende ondernemers en zzp'ers met een overzichtelijk aanbod die professioneel online willen. Wil je echt sturen op meer aanvragen, dan past de Conversie Website beter. Dat zeggen we je ook eerlijk.",
  },
  {
    q: 'Hoe snel staat mijn website online?',
    a: (
      <>
        Doordat de website compacter is, gaat het sneller dan bij een groter traject. Zodra je{' '}
        <Link to="/kennisbank/$slug" params={{ slug: 'wat-lever-je-aan-nieuwe-website' }}>
          teksten, logo en beeld
        </Link>{' '}
        hebt aangeleverd, sta je doorgaans binnen enkele weken live.
      </>
    ),
  },
  {
    q: 'Twijfel je tussen een freelancer en een bureau?',
    a: (
      <>
        Lees dan{' '}
        <Link to="/kennisbank/$slug" params={{ slug: 'freelance-webdesigner-of-webbureau' }}>
          freelance webdesigner of webbureau: wat past bij jou?
        </Link>
      </>
    ),
  },
]

function StarterWebsite() {
  return (
    <main id="top" data-page="starter" data-dienst>
      <section className="section hero" id="ontwerp" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Starter Website</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Voor starters
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Website laten maken als je <em>net begint</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Ook een Starter Website is volledig maatwerk. Alleen compacter, zodat je als starter professioneel online staat zonder groot budget.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Vanaf € 1.500, vooraf een duidelijke prijs</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Doorgaans binnen enkele weken live</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Teksten en foto’s pas je gemakkelijk zelf aan</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="ontwerp" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Voor wie">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Eerlijk vanaf het begin</span>
              <h2 className="h2">
                Een <em>bewust voordeligere</em> optie. Dat zeggen we er gewoon bij.
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Een rommelige doe-het-zelfsite doet je tekort, maar een groot traject met veel pagina's past vaak nog niet. De Starter Website is maatwerk in een compacte vorm. Past dit bij jou?
              </p>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {SITUATIES.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Wat je krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je krijgt</span>
            <h2 className="h2">
              Compact in omvang. <em>Compleet</em> in wat je nodig hebt.
            </h2>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Standaard in elke Starter Website</h3>
              <ul className="cw-incl">
                {INBEGREPEN.map((x) => (
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
              <h3>Waarom het voordeliger kan</h3>
              <p>
                Ook de Starter Website ontwerpen en bouwen we op maat. Het verschil zit in de omvang: minder pagina's, één feedbackronde en een kortere voorbereiding. Daardoor kost het minder uren.
              </p>
              <ul className="cw-chips">
                {VOORDELEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Minder uren, niet minder zorg</h3>
              <p>Dat zie je terug in de prijs.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Traject">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het traject</span>
            <h2 className="h2">
              Een kort, helder traject. <em>Snel</em> live.
            </h2>
            <p className="lead">Een compacte website vraagt minder uren. Dat scheelt tijd. En dus geld.</p>
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

      <section className="section" data-theme="light" data-screen-label="Starter vs Conversie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerlijk vergelijken</span>
            <h2 className="h2">
              Wat je inlevert. En wat je <em>ervoor terugkrijgt.</em>
            </h2>
          </Reveal>
          <div className="cw-duo">
            <Reveal as="div" className="cw-card reveal">
              <span className="cw-card__tag">Starter Website · vanaf € 1.500</span>
              <h3>Voordelig en snel</h3>
              <ul className="cw-list">
                {STARTER_WEL.map((x) => (
                  <li key={x}>
                    <Icon name="check" className="ck" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <ul className="cw-list cw-list--min">
                {STARTER_NIET.map((x) => (
                  <li key={x}>
                    <span className="min" aria-hidden="true">·</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="cw-card cw-card--dark reveal" data-d="1">
              <span className="cw-card__tag">Conversie Website · vanaf € 2.500</span>
              <h3>Volledig gericht op aanvragen</h3>
              <ul className="cw-list">
                {CONVERSIE.map((x) => (
                  <li key={x}>
                    <Icon name="check" className="ck" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <Link className="btn btn-primary" to="/diensten/conversie-website">
                Bekijk de Conversie Website
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="prijs" data-theme="paper" data-screen-label="Prijs">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Investering</span>
            <h2 className="h2">Een eerlijke instapprijs, vooraf duidelijk.</h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Starter Website</span>
              <p className="cw-prijs__bedrag">vanaf € 1.500</p>
              <p className="cw-prijs__uitleg">De prijs hangt af van het aantal pagina's en wat je zelf aanlevert. Je krijgt vooraf een vaste prijs.</p>
              <ul className="hero__ticks">
                <li><Icon name="check" className="ck" /><span>Inrichting, technische basis voor Google en livegang</span></li>
                <li><Icon name="check" className="ck" /><span>Eén feedbackronde</span></li>
                <li><Icon name="check" className="ck" /><span>Alles wat standaard inbegrepen is</span></li>
              </ul>
              <a className="btn btn-primary" href="#ontwerp">
                Vraag je gratis homepageontwerp aan
              </a>
            </Reveal>
            <div className="cw-prijs__na">
              <Reveal as="div" className="cw-card reveal" data-d="1">
                <span className="cw-card__tag">Optioneel</span>
                <h3>Onderhoud &amp; Support</h3>
                <p>Hosting, updates, beveiliging en back-ups geregeld. Gaat er toch iets mis, dan heb je direct iemand die het oplost.</p>
                <p className="cw-card__prijs">vanaf € 50 per maand</p>
              </Reveal>
              <Reveal as="div" className="cw-card reveal" data-d="2">
                <span className="cw-card__tag">Later</span>
                <h3>Later uitbreiden</h3>
                <p>Groeit je bedrijf, dan breiden we je website uit of groei je door naar een Conversie Website met strategie voor je doelgroep en aanvragen.</p>
                <Link className="tlink" to="/diensten/conversie-website">Bekijk de Conversie Website <span className="arr">&rarr;</span></Link>
              </Reveal>
            </div>
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
            <h2 className="h2">Wie het vaakst voor de Starter Website kiest.</h2>
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
            Je eerste website hoeft geen gok te zijn.
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
