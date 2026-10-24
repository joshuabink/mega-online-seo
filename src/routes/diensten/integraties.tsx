import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import { MERKEN } from '@/lib/merklogos'
import '@/styles/pages/dienst.css'

const TITEL = 'Koppelingen en automatiseringen | MegaOnline.io'
const OMSCHRIJVING =
  'Koppel je website aan je CRM, agenda en WhatsApp, automatiseer terugkerend werk en laat AI-agents werk voorbereiden. Gebouwd in n8n.'

export const Route = createFileRoute('/diensten/integraties')({
  head: () => ({
    meta: [
      { title: TITEL },
      { name: 'description', content: OMSCHRIJVING },
      { property: 'og:title', content: TITEL },
      { property: 'og:description', content: OMSCHRIJVING },
      { property: 'og:url', content: 'https://megaonline.io/diensten/integraties' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/diensten/integraties' }],
  }),
  component: Integraties,
})

const PROBLEMEN = [
  { t: 'Overtypen van gegevens', p: 'Aanvragen handmatig in je CRM zetten kost tijd en geeft fouten.' },
  { t: 'Gemiste aanvragen', p: 'Een formulier in een mailbox raakt zoek of blijft liggen.' },
  { t: 'Dubbele boekingen', p: 'Losse agenda’s die niet bijwerken leiden tot overlap.' },
  { t: 'Trage opvolging', p: 'Hoe later je reageert, hoe groter de kans dat de klant afhaakt.' },
  { t: 'Versnipperd overzicht', p: 'Klantinfo verspreid over mail, agenda en losse lijstjes.' },
  { t: 'Handwerk dat blijft groeien', p: 'Hoe drukker het wordt, hoe meer tijd je kwijt bent aan administratie.' },
]

const PIJLERS: { icon: string; t: string; p: string; voorbeelden: string[] }[] = [
  {
    icon: 'link-2',
    t: 'Koppelingen',
    p: 'Je website praat met de systemen waar je al mee werkt. Niets hoeft meer overgetypt te worden.',
    voorbeelden: ['Aanvraag direct in je CRM', 'Boeking meteen in je agenda', 'Melding via WhatsApp, Slack of Teams', 'Betaling gekoppeld aan de boeking'],
  },
  {
    icon: 'workflow',
    t: 'Automatiseringen',
    p: 'Terugkerend werk loopt vanzelf, op het juiste moment en altijd op dezelfde manier.',
    voorbeelden: ['Offerte opvolgen na drie dagen', 'Reviewverzoek na een afspraak', 'Rapportages klaarzetten', 'Gegevens bijwerken in je sheet'],
  },
  {
    icon: 'bot',
    t: 'AI-agents',
    p: 'Een assistent die werk voor je voorbereidt. Jij houdt de controle en keurt goed wat ertoe doet.',
    voorbeelden: ['Aanvragen beoordelen', 'Conceptantwoorden schrijven', 'Een ochtendoverzicht maken', 'Taken vastleggen in Notion'],
  },
]

type Stap = { icon: string; t: string; s: string }
const FLOWS: { tag: string; t: string; p: string; stappen: Stap[] }[] = [
  {
    tag: 'Koppeling',
    t: 'Van aanvraag tot opvolging',
    p: 'Geen aanvraag die in een mailbox blijft liggen.',
    stappen: [
      { icon: 'file-text', t: 'Formulier', s: 'Aanvraag op je website' },
      { icon: 'users', t: 'CRM', s: 'Klant en aanvraag aangemaakt' },
      { icon: 'message-circle', t: 'WhatsApp', s: 'Jij krijgt direct een melding' },
      { icon: 'alarm-clock', t: 'Herinnering', s: 'Na drie dagen, als het nog openstaat' },
    ],
  },
  {
    tag: 'AI-agent',
    t: 'Ochtendbriefing',
    p: 'Elke ochtend één overzicht in plaats van vijf apps doorlopen.',
    stappen: [
      { icon: 'clock', t: 'Elke ochtend', s: 'Start automatisch' },
      { icon: 'list-checks', t: 'Ophalen', s: 'Taken en berichten van gisteren' },
      { icon: 'sparkles', t: 'Samenvatten', s: 'AI zet op een rij wat aandacht nodig heeft' },
      { icon: 'send', t: 'Overzicht', s: 'Klaar in je chat voordat je begint' },
    ],
  },
  {
    tag: 'AI-agent',
    t: 'Alles vastgelegd in Notion',
    p: 'Afspraken en taken raken niet meer kwijt in gesprekken.',
    stappen: [
      { icon: 'message-square-text', t: 'Gesprek', s: 'Bericht of notitie komt binnen' },
      { icon: 'brain', t: 'Herkennen', s: 'AI haalt taken en afspraken eruit' },
      { icon: 'database', t: 'Notion', s: 'De juiste database bijgewerkt' },
      { icon: 'check-circle', t: 'Goedkeuren', s: 'Jij houdt het laatste woord' },
    ],
  },
]

const STAPPEN = [
  { t: 'In kaart brengen', p: 'We kijken met welke systemen je werkt en waar je het meeste handwerk kwijt bent.' },
  { t: 'Route kiezen', p: 'Per situatie bepalen we de slimste oplossing: een directe koppeling, een automatisering of een AI-agent.' },
  { t: 'Bouwen en testen', p: 'We bouwen de flow in n8n en controleren of alles op de juiste plek belandt.' },
  { t: 'Uitbreiden', p: 'We beginnen met wat het meeste oplevert en breiden uit wanneer jij daar klaar voor bent.' },
]

const VOOR_WIE = [
  { to: '/branches/reserveringen', t: 'Website met reserveringssysteem laten maken', p: 'Reserveringen die direct in je agenda staan zonder overtypen.' },
  { to: '/branches/verhuurbedrijven', t: 'Website laten maken voor verhuurbedrijven', p: 'Beschikbaarheid uit je verhuursoftware live op de website.' },
  { to: '/branches/activiteitenbedrijven', t: 'Website laten maken voor activiteitenbedrijven', p: 'Boekingen, betalingen en cadeaubonnen die elkaar automatisch bijwerken.' },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Werkt dit met de systemen die ik nu gebruik?',
    a: 'Vaak wel. We sluiten aan op veelgebruikte CRM-, boekings-, mail- en betaalsystemen. Heeft jouw systeem een koppeling of API, dan is er bijna altijd iets mogelijk.',
  },
  {
    q: 'Waarom bouwen jullie in n8n?',
    a: 'In n8n bouwen we automatiseringen als overzichtelijke flows. Je ziet stap voor stap wat er gebeurt, het koppelt met veel systemen en we kunnen er AI-stappen in opnemen. Zo blijft een automatisering te begrijpen en aan te passen.',
  },
  {
    q: 'Wat is een AI-agent precies?',
    a: 'Een assistent die zelf taken uitvoert of voorbereidt, zoals een aanvraag beoordelen of een conceptantwoord schrijven. Bij belangrijke stappen keur jij eerst goed, zodat er niets zonder jouw akkoord de deur uit gaat.',
  },
  {
    q: 'Wat als mijn systeem geen standaardkoppeling heeft?',
    a: 'Dan zoeken we naar een maatwerkoplossing. Niet alles kan, maar vaak is er meer mogelijk dan je denkt. We zijn eerlijk over wat haalbaar en zinvol is.',
  },
  {
    q: 'Kan ik later uitbreiden?',
    a: 'Zeker. Je hoeft niet alles in één keer te doen. We beginnen met wat het meeste oplevert en breiden uit wanneer jij daar klaar voor bent.',
  },
  {
    q: 'Kan dit ook zonder nieuwe website?',
    a: 'Ja. We kunnen koppelingen en automatiseringen ook toevoegen aan je bestaande website en systemen. Begin met een gratis website scan, dan kijken we waar je het meeste handwerk kunt wegnemen.',
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
                <b>Koppelingen en automatiseringen</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Koppelingen en automatiseringen
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Laat je systemen het werk <em>doen.</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                We koppelen je website aan de systemen waar je al mee werkt, automatiseren terugkerend werk en bouwen AI-agents die werk voor je voorbereiden.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Aanvragen automatisch in je CRM, agenda of WhatsApp</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Gebouwd in n8n, overzichtelijk en aanpasbaar</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Ook voor je bestaande website</span>
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
                Veel bedrijven hebben prima systemen, maar ze praten niet met elkaar. Dat betekent dubbel werk, overtypen en aanvragen die tussen wal en schip vallen.
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

      <section className="section" data-theme="paper" data-screen-label="Wat we bouwen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we bouwen</span>
            <h2 className="h2">
              Koppelen, automatiseren en <em>laten meedenken.</em>
            </h2>
          </Reveal>
          <ul className="cw-pijlers">
            {PIJLERS.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-card reveal" data-d={String(i)}>
                <span className="cw-incl__ico">
                  <Icon name={x.icon} />
                </span>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
                <ul className="cw-list">
                  {x.voorbeelden.map((v) => (
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

      <section className="section" data-theme="dark" data-screen-label="Voorbeelden">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Voorbeelden</span>
              <h2 className="h2">
                Zo ziet een automatisering er <em>uit.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Drie flows die we in n8n gebouwd hebben. Elke stap is zichtbaar en aan te passen.</p>
            </div>
          </Reveal>
          <div className="cw-flows">
            {FLOWS.map((f, i) => (
              <Reveal as="article" key={f.t} className="cw-flow reveal" data-d={String(i)}>
                <div className="cw-flow__kop">
                  <span className="cw-card__tag">{f.tag}</span>
                  <h3>{f.t}</h3>
                  <p>{f.p}</p>
                </div>
                <ol className="cw-flow__stappen">
                  {f.stappen.map((s) => (
                    <li key={s.t} className="cw-flow__stap">
                      <span className="cw-flow__ico">
                        <Icon name={s.icon} />
                      </span>
                      <span className="cw-flow__t">{s.t}</span>
                      <span className="cw-flow__s">{s.s}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Systemen">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Systemen</span>
              <h2 className="h2">
                Waar we mee <em>koppelen.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Een greep uit de systemen waar we mee werken. Staat het jouwe er niet tussen? Heeft het een koppeling of API, dan kan het vaak alsnog.</p>
            </div>
          </Reveal>
          <Reveal as="ul" className="cw-logos reveal" data-d="1">
            {MERKEN.map((m) => (
              <li key={m.naam} className="cw-logo">
                {m.pad ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={m.pad} />
                  </svg>
                ) : null}
                <span>{m.naam}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De aanpak</span>
            <h2 className="h2">
              Klein beginnen, <em>slim</em> uitbreiden.
            </h2>
            <p className="lead">We beginnen bij het handwerk dat je de meeste tijd kost en bouwen van daaruit verder.</p>
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
            Dit hoef je niet zelf te blijven doen.
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Vraag een gratis website scan aan. Je ziet welke koppelingen en automatiseringen jou het meeste tijd besparen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
