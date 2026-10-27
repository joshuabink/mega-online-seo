import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/dienst.css'

const TITEL = 'Online boeken en reserveren op je website | MegaOnline.io'
const OMSCHRIJVING =
  "Laat klanten zelf online boeken, ook 's avonds en in het weekend. Van een belafspraak tot een ticket met extra's, op je eigen website en gekoppeld aan je agenda."

export const Route = createFileRoute('/diensten/online-boeken')({
  head: () => ({
    meta: [
      { title: TITEL },
      { name: 'description', content: OMSCHRIJVING },
      { property: 'og:title', content: TITEL },
      { property: 'og:description', content: OMSCHRIJVING },
      { property: 'og:url', content: 'https://megaonline.io/diensten/online-boeken' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/diensten/online-boeken' }],
  }),
  component: OnlineBoeken,
})

const PROBLEMEN = [
  { t: 'Alleen boeken via de telefoon', p: 'Wie buiten openingstijden wil boeken, kan dat niet. Dan boekt hij bij een ander.' },
  { t: 'Te veel stappen', p: 'Elk extra scherm of verplicht veld is een moment waarop iemand afhaakt.' },
  { t: 'Onduidelijke beschikbaarheid', p: 'Een klant die niet ziet wat er vrij is, stuurt een vraag in plaats van te boeken.' },
  { t: 'Dubbele boekingen', p: 'Losse agenda’s voor website, telefoon en balie lopen uit de pas.' },
  { t: 'Niet komen opdagen', p: 'Zonder bevestiging en herinnering vergeten klanten hun afspraak.' },
  { t: 'Handwerk achteraf', p: 'Bevestigen, overtypen en factureren kost elke boeking opnieuw tijd.' },
]

const BELANGRIJK: { icon: string; t: string; p: string; punten: string[] }[] = [
  {
    icon: 'zap',
    t: 'Snel',
    p: 'Een boeking moet in een paar tikken klaar zijn, ook op een telefoon.',
    punten: ['Boekknop op elke pagina', 'Alleen de velden die echt nodig zijn', 'Werkt net zo goed op mobiel'],
  },
  {
    icon: 'eye',
    t: 'Duidelijk',
    p: 'Een klant boekt pas als hij weet waar hij aan toe is.',
    punten: ['Wat het kost, vóór de laatste stap', 'Wat vrij is, in één oogopslag', 'Wat er na de boeking gebeurt'],
  },
  {
    icon: 'shield-check',
    t: 'Betrouwbaar',
    p: 'Wat online vrij staat, moet ook echt vrij zijn.',
    punten: ['Eén agenda voor alle kanalen', 'Direct een bevestiging per mail', 'Een herinnering vóór de afspraak'],
  },
]

const SOORTEN = [
  { t: 'Belafspraak of intake', p: 'Een kennismaking of adviesgesprek, direct in je agenda.' },
  { t: 'Afspraak of behandeling', p: 'Per dienst een eigen duur, prijs en medewerker.' },
  { t: 'Tafel of plek', p: 'Reserveren voor een tijdstip en aantal personen.' },
  { t: 'Activiteit of tijdslot', p: 'Groepen boeken een moment met een maximum aantal plekken.' },
  { t: 'Verhuur', p: 'Per dag of dagdeel, met ophalen en terugbrengen erbij.' },
  { t: "Tickets met extra's", p: 'Een ticket met keuzes als lunch, materiaal of een upgrade.' },
]

const STAPPEN = [
  { t: 'Kiezen wat je wilt boeken', p: 'De klant kiest een dienst, activiteit of product. Met prijs en duur erbij.' },
  { t: 'Datum en tijd', p: 'Alleen de momenten die echt vrij zijn, rechtstreeks uit je agenda.' },
  { t: 'Gegevens en betalen', p: 'Een kort formulier en, als je dat wilt, direct betalen of aanbetalen.' },
  { t: 'Bevestiging en herinnering', p: 'Meteen een bevestiging en vóór de afspraak een herinnering.' },
]

const NA_DE_BOEKING = [
  'De boeking staat meteen in je agenda',
  'Klantgegevens gaan direct je CRM in',
  'Een melding op je telefoon via WhatsApp',
  'Een herinnering de dag voor de afspraak',
  'Na afloop een vraag om een review',
  'De factuur staat klaar zonder overtypen',
]

const VOOR_WIE = [
  { to: '/branches/reserveringen', t: 'Website met reserveringssysteem laten maken', p: 'Voor horeca, salons, praktijken en locaties waar een plek of moment wordt gereserveerd.' },
  { to: '/branches/activiteitenbedrijven', t: 'Website laten maken voor activiteitenbedrijven', p: 'Escaperooms, klimhallen en kartbanen die doordeweeks voller willen.' },
  { to: '/branches/verhuurbedrijven', t: 'Website laten maken voor verhuurbedrijven', p: 'Beschikbaarheid en prijs direct zichtbaar, zodat klanten niet hoeven te bellen.' },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Moet ik hiervoor een nieuwe website laten maken?',
    a: 'Niet altijd. Online boeken kan ook op je bestaande website. Een nieuwe site is zinvol als bezoekers afhaken voordat ze bij de boekknop zijn, bijvoorbeeld omdat informatie ontbreekt of de site slecht werkt op mobiel.',
  },
  {
    q: 'Kan ik mijn huidige boekingssysteem houden?',
    a: 'Vaak wel. Kan je systeem op een eigen website worden geplaatst, met een module, een knop of een koppeling, dan bouwt MegaOnline de website eromheen. In de gratis website scan kijkt MegaOnline wat bij jouw systeem kan.',
  },
  {
    q: 'Kunnen klanten direct online betalen of aanbetalen?',
    a: 'Ja, als je dat wilt. Zet dan vóór de betaalstap wat het kost en wat je annuleringsvoorwaarden zijn, zodat de klant niet voor verrassingen komt te staan.',
  },
  {
    q: 'Hoe voorkom je dubbele boekingen?',
    a: 'Door één agenda te gebruiken voor alle boekingen: van de website, de telefoon en andere kanalen. Een moment dat bezet is, staat dan nergens meer als vrij.',
  },
  {
    q: 'Kan ik zelf tijden, prijzen en vrije dagen aanpassen?',
    a: 'Ja. Dat beheer je op één plek. De website laat zien wat daar staat, dus je hoeft niets dubbel bij te houden.',
  },
  {
    q: 'Wat kost online boeken?',
    a: 'Dat hangt af van wat je wilt laten boeken en welke koppelingen er nodig zijn. Na de gratis website scan weet je wat bij jou past en wat het kost.',
  },
]

function OnlineBoeken() {
  return (
    <main id="top" data-page="online-boeken" data-dienst>
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Online boeken en reserveren</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Online boeken en reserveren
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Klanten boeken zelf, ook als jij <em>dicht</em> bent.
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Een belafspraak, een behandeling, een tafel of een ticket met extra's. MegaOnline richt online boeken in op jouw diensten en zet het op je eigen website, zodat een klant zonder te bellen zijn moment kiest.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Boeken op je eigen website, ook op mobiel</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Altijd de actuele beschikbaarheid</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Gekoppeld aan je agenda, CRM of WhatsApp</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="scan" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Het probleem">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Waar boekingen weglekken</span>
              <h2 className="h2">
                Elke drempel kost je een <em>boeking.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                De meeste klanten willen boeken op het moment dat ze eraan denken. Vaak is dat 's avonds of in het weekend. Lukt het dan niet in een paar tikken, dan kijken ze verder.
              </p>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {PROBLEMEN.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Wat belangrijk is">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Wat belangrijk is</span>
              <h2 className="h2">
                Snel, duidelijk en <em>betrouwbaar.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Een goed boekingssysteem merk je niet. De klant kiest, boekt en weet wat er daarna gebeurt.</p>
            </div>
          </Reveal>
          <ul className="cw-pijlers">
            {BELANGRIJK.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-card reveal" data-d={String(i)}>
                <span className="cw-incl__ico">
                  <Icon name={x.icon} />
                </span>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
                <ul className="cw-list">
                  {x.punten.map((v) => (
                    <li key={v}>
                      <Icon name="check" className="ck" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Wat we maken">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Wat MegaOnline kan maken</span>
              <h2 className="h2">
                Ingericht op wat jij <em>verkoopt.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Geen standaardformulier, maar een boeking die past bij jouw diensten, je openingstijden en je manier van werken.</p>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {SOORTEN.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="zo-werkt-het" data-theme="dark" data-screen-label="Zo ziet het eruit">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zo ziet het eruit</span>
            <h2 className="h2">
              Van kiezen tot bevestiging in <em>vier stappen.</em>
            </h2>
            <p className="lead">Kort voor de klant, compleet voor jou. Elke stap is ingericht op jouw aanbod.</p>
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

      <section className="section" data-theme="paper" data-screen-label="Na de boeking">
        <div className="wrap">
          <div className="cw-duo">
            <Reveal as="div" className="cw-card reveal">
              <span className="cw-card__tag">Na de boeking</span>
              <h2>De rest loopt vanzelf.</h2>
              <p>
                Een boeking is pas het begin. Met koppelingen en automatiseringen landt elke boeking op de goede plek en krijgt de klant op het juiste moment bericht.
              </p>
              <Link className="tlink" to="/diensten/integraties">
                Bekijk koppelingen en automatiseringen <span className="arr">&rarr;</span>
              </Link>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <ul className="cw-list">
                {NA_DE_BOEKING.map((x) => (
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
            <h2 className="h2">Voor bedrijven die leven van boekingen.</h2>
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
            Laat klanten boeken wanneer het hen uitkomt.
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Vraag een gratis website scan aan. Je ziet waar boekingen nu weglekken en hoe online boeken er bij jou uit kan zien.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
