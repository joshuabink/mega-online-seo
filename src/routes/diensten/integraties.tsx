import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/dienst.css'

export const Route = createFileRoute('/diensten/integraties')({
  head: () => ({
    meta: [
      { title: "Integraties & koppelingen | MegaOnline.io" },
      { name: 'description', content: "Koppel je website aan je CRM, boekingssysteem, agenda en WhatsApp. Minder overtypen, geen gemiste aanvragen en alles automatisch op de juiste plek." },
      { property: 'og:title', content: "Integraties & koppelingen | MegaOnline.io" },
      { property: 'og:description', content: "Koppel je website aan je CRM, boekingssysteem, agenda en WhatsApp. Minder overtypen, geen gemiste aanvragen en alles automatisch op de juiste plek." },
      { property: 'og:url', content: "https://megaonline.io/diensten/integraties" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/integraties" },
    ],
  }),
  component: Integraties,
})

const PROBLEMEN = [
  { t: 'Overtypen van gegevens', p: 'Aanvragen handmatig in je CRM zetten kost tijd en geeft fouten.' },
  { t: 'Gemiste aanvragen', p: 'Een formulier in een mailbox raakt zoek of blijft liggen.' },
  { t: 'Dubbele boekingen', p: 'Losse agenda’s die niet syncen leiden tot overlap.' },
  { t: 'Trage opvolging', p: 'Hoe later je reageert, hoe groter de kans dat de klant afhaakt.' },
  { t: 'Versnipperd overzicht', p: 'Klantinfo verspreid over mail, agenda en losse lijstjes.' },
  { t: 'Handwerk dat blijft groeien', p: 'Hoe drukker het wordt, hoe meer tijd je kwijt bent aan administratie.' },
]

const STAPPEN = [
  { t: 'In kaart brengen', p: 'We kijken met welke tools je nu werkt en waar je het meeste handwerk kwijt bent.' },
  { t: 'Koppeling kiezen', p: 'Per situatie bepalen we de slimste route: een directe integratie of een tussenstap.' },
  { t: 'Koppelen en testen', p: 'We verbinden je website met je systemen en controleren of alles op de juiste plek belandt.' },
  { t: 'Uitbreiden', p: 'We beginnen met wat het meeste oplevert en breiden uit wanneer jij daar klaar voor bent.' },
]

const KOPPELINGEN: { icon: string; t: string }[] = [
  { icon: 'users', t: 'CRM-systemen' },
  { icon: 'calendar-clock', t: 'Boekingssystemen en agenda' },
  { icon: 'message-circle', t: 'WhatsApp en chat' },
  { icon: 'credit-card', t: 'Betaaldiensten' },
  { icon: 'mail', t: 'Nieuwsbrief en marketing' },
  { icon: 'plug', t: 'Maatwerkkoppelingen' },
]

const RESULTAAT = ['Minder handwerk', 'Snellere opvolging', 'Geen gemiste aanvragen', 'Geen dubbele boekingen', 'Alles op één plek']

const VOOR_WIE = [
  { to: '/branches/reserveringen', t: 'Website met reserveringssysteem laten maken', p: 'Reserveringen die direct in je agenda staan zonder overtypen.' },
  { to: '/branches/verhuurbedrijven', t: 'Website laten maken voor verhuurbedrijven', p: 'Beschikbaarheid uit je verhuursoftware live op de website.' },
  { to: '/branches/activiteitenbedrijven', t: 'Website laten maken voor activiteitenbedrijven', p: 'Boekingen, betalingen en cadeaubonnen die elkaar automatisch bijwerken.' },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Werkt dit met de systemen die ik nu gebruik?',
    a: 'Vaak wel. We sluiten aan op veelgebruikte CRM-, boekings- en betaalsystemen en kijken per situatie wat de slimste koppeling is. Soms via een directe integratie, soms via een tussenstap.',
  },
  {
    q: 'Wat als mijn systeem geen standaardkoppeling heeft?',
    a: 'Dan zoeken we naar een maatwerkoplossing. Niet alles kan, maar vaak is er meer mogelijk dan je denkt. We zijn eerlijk over wat haalbaar en zinvol is.',
  },
  {
    q: 'Kan ik koppelingen later toevoegen?',
    a: 'Zeker. Je hoeft niet alles in één keer te koppelen. We beginnen met wat het meeste oplevert en breiden uit wanneer jij daar klaar voor bent.',
  },
  {
    q: 'Is een integratie los van een website af te nemen?',
    a: 'Ja. We kunnen koppelingen ook toevoegen aan je bestaande website. Begin met een gratis website scan, dan kijken we waar je het meeste handwerk kunt wegnemen.',
  },
]

function Integraties() {
  return (
    <main id="top" data-page="integraties" data-dienst>
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Integraties &amp; koppelingen</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Integraties &amp; koppelingen
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Laat je website <em>samenwerken</em> met je systemen.
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Een aanvraag die in je mailbox blijft hangen, een boeking die je handmatig overtypt: dat kost tijd en levert fouten op. Wij koppelen je website aan de systemen waar je al mee werkt.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Aanvragen automatisch in je CRM of agenda</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Ook voor je bestaande website</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Begin klein, breid later uit</span>
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
              <span className="label">Waar het schuurt</span>
              <h2 className="h2">
                Los van elkaar werkende systemen kosten je <em>tijd.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Veel bedrijven hebben prima tools, maar ze praten niet met elkaar. Dat betekent dubbel werk, overtypen en aanvragen die tussen wal en schip vallen.
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

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De aanpak</span>
            <h2 className="h2">
              Eén soepel geheel, <em>automatisch</em> bijgewerkt.
            </h2>
            <p className="lead">We verbinden je website met de tools die je al gebruikt, zodat gegevens vanzelf op de juiste plek belanden en niets meer blijft liggen.</p>
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

      <section className="section" data-theme="paper" data-screen-label="Wat we koppelen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we koppelen</span>
            <h2 className="h2">
              Koppelingen die je <em>tijd</em> besparen.
            </h2>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Waar we je website aan koppelen</h3>
              <p>We sluiten aan op de tools die je al gebruikt, of adviseren wat het beste past.</p>
              <ul className="cw-incl">
                {KOPPELINGEN.map((x) => (
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
              <h3>Je website als kloppend hart van je proces</h3>
              <p>
                Een aanvraag of boeking komt binnen en gaat automatisch door naar je CRM, agenda of inbox. Jij houdt overzicht en tijd over, je klant krijgt een snelle, professionele opvolging.
              </p>
              <ul className="cw-chips">
                {RESULTAAT.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Een specifiek systeem?</h3>
              <p>Dan kijken we naar de mogelijkheden. Niet alles kan, maar vaak is er meer mogelijk dan je denkt.</p>
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
            <h2 className="h2">Voor wie koppelingen het meeste werk wegnemen.</h2>
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
            Dit hoef je niet zelf te blijven overtypen.
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Vraag een gratis website scan aan. Je ziet welke koppelingen jou het meeste tijd besparen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
