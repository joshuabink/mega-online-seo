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
    p: 'Je systemen praten met elkaar. Wat op je website binnenkomt, staat meteen in je CRM, agenda of mailbox. Niets meer overtypen.',
    voorbeelden: ['Aanvraag direct in je CRM', 'Boeking meteen in je agenda', 'Melding via WhatsApp, Slack of Teams', 'Betaling gekoppeld aan de boeking'],
  },
  {
    icon: 'workflow',
    t: 'Automatiseringen',
    p: 'Werk dat je nu zelf moet onthouden, gebeurt vanzelf. Op het juiste moment en elke keer op dezelfde manier.',
    voorbeelden: ['Offerte opvolgen na drie dagen', 'Reviewverzoek na een afspraak', 'Rapportages klaarzetten', 'Herinnering sturen de dag voor een afspraak'],
  },
  {
    icon: 'bot',
    t: 'AI-agents',
    p: 'Een assistent die zelf aan de slag gaat. Je praat ermee in je eigen chat of plant een taak voor hem in. Jij houdt de controle.',
    voorbeelden: ['Praat met je via Slack, Telegram, Linear of Discord', 'Voert ingeplande taken zelf uit', 'Start workflows en roept subagents aan', 'Werkt met je tools, skills en eigen kennisbank'],
  },
]

const VOORBEELDEN: { img: string; w: number; h: number; tag: string; t: string; p: string; levert: string[] }[] = [
  {
    img: '/images/n8n-websiteaanvraag.webp',
    w: 1200,
    h: 718,
    tag: 'Koppeling',
    t: 'Van websiteaanvraag naar CRM, sheet, WhatsApp en mail',
    p: 'Iemand vult het formulier op je website in. De gegevens worden netjes klaargezet en gaan in één keer naar je CRM, je overzicht in Google Sheets, je WhatsApp en je mailbox.',
    levert: ['Niets meer overtypen', 'Direct een melding op je telefoon', 'Alle aanvragen op één plek'],
  },
  {
    img: '/images/n8n-verhuur.webp',
    w: 1200,
    h: 771,
    tag: 'Automatisering',
    t: 'Van boeking tot factuur, zonder dat je eraan hoeft te denken',
    p: 'Een klant boekt via je website. Daarna krijgt hij op het juiste moment de ophaalinstructies en een inleverherinnering. Zodra het materiaal terug is, staat de factuur klaar.',
    levert: ['Instructies precies op het juiste moment', 'Een herinnering voor het inleveren', 'Factuur klaar zodra het terug is'],
  },
  {
    img: '/images/n8n-agent.webp',
    w: 1200,
    h: 750,
    tag: 'AI-agent',
    t: 'Een agent die praat, plant en zelf aan de slag gaat',
    p: 'Je geeft de agent instructies in gewone taal. Hij werkt met je eigen tools en kennisbank, voert ingeplande taken uit en zet workflows of andere agents aan het werk.',
    levert: ['Bereikbaar in Slack, Telegram, Linear of Discord', 'Taken op een vast moment, zonder dat jij eraan denkt', 'Antwoorden uit je eigen kennisbank'],
  },
]

const STAPPEN = [
  { t: 'In kaart brengen', p: 'MegaOnline kijkt met welke systemen je werkt en waar je het meeste handwerk kwijt bent.' },
  { t: 'Route kiezen', p: 'Per situatie bepaalt MegaOnline de slimste oplossing: een directe koppeling, een automatisering of een AI-agent.' },
  { t: 'Bouwen en testen', p: 'MegaOnline bouwt de flow in n8n en controleert of alles op de juiste plek belandt.' },
  { t: 'Uitbreiden', p: 'MegaOnline begint met wat het meeste oplevert en breidt uit wanneer jij daar klaar voor bent.' },
]

const VOOR_WIE = [
  { to: '/branches/reserveringen', t: 'Website met reserveringssysteem laten maken', p: 'Reserveringen die direct in je agenda staan zonder overtypen.' },
  { to: '/branches/verhuurbedrijven', t: 'Website laten maken voor verhuurbedrijven', p: 'Beschikbaarheid uit je verhuursoftware live op de website.' },
  { to: '/branches/activiteitenbedrijven', t: 'Website laten maken voor activiteitenbedrijven', p: 'Boekingen, betalingen en cadeaubonnen die elkaar automatisch bijwerken.' },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Werkt dit met de systemen die ik nu gebruik?',
    a: 'Vaak wel. MegaOnline sluit aan op veelgebruikte CRM-, boekings-, mail- en betaalsystemen. Heeft jouw systeem een koppeling of API, dan is er bijna altijd iets mogelijk.',
  },
  {
    q: 'Waarom bouwt MegaOnline in n8n?',
    a: 'In n8n bouwt MegaOnline automatiseringen als overzichtelijke flows. Je ziet stap voor stap wat er gebeurt, het koppelt met veel systemen en MegaOnline kan er AI-stappen in opnemen. Zo blijft een automatisering te begrijpen en aan te passen.',
  },
  {
    q: 'Wat is een AI-agent precies?',
    a: 'Een assistent die zelf taken uitvoert of voorbereidt, zoals een aanvraag beoordelen of een conceptantwoord schrijven. Bij belangrijke stappen keur jij eerst goed, zodat er niets zonder jouw akkoord de deur uit gaat.',
  },
  {
    q: 'Wat als mijn systeem geen standaardkoppeling heeft?',
    a: 'Dan zoekt MegaOnline naar een maatwerkoplossing. Niet alles kan, maar vaak is er meer mogelijk dan je denkt. MegaOnline is eerlijk over wat haalbaar en zinvol is.',
  },
  {
    q: 'Kan ik later uitbreiden?',
    a: 'Zeker. Je hoeft niet alles in één keer te doen. MegaOnline begint met wat het meeste oplevert en breidt uit wanneer jij daar klaar voor bent.',
  },
  {
    q: 'Kan dit ook zonder nieuwe website?',
    a: 'Ja. MegaOnline kan koppelingen en automatiseringen ook toevoegen aan je bestaande website en systemen. Begin met een gratis website scan, dan kijkt MegaOnline waar je het meeste handwerk kunt wegnemen.',
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
                MegaOnline koppelt je website aan de systemen waar je al mee werkt, automatiseert terugkerend werk en bouwt AI-agents die werk voor je voorbereiden.
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
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Wat MegaOnline bouwt</span>
              <h2 className="h2">
                Koppelen, automatiseren en <em>laten meedenken.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Een koppeling verplaatst gegevens. Een automatisering neemt een handeling over. Een AI-agent denkt mee.</p>
            </div>
          </Reveal>
          <ul className="cw-pijlers">
            {PIJLERS.map((x, i) => (
              <Reveal as="li" key={x.t} id={x.t === 'AI-agents' ? 'ai-agents' : undefined} className="cw-card reveal" data-d={String(i)}>
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
              <p>Drie voorbeelden zoals MegaOnline ze in n8n bouwt: een koppeling, een automatisering en een AI-agent. Elke stap is zichtbaar en later aan te passen.</p>
            </div>
          </Reveal>
          <div className="cw-shots">
            {VOORBEELDEN.map((v, i) => (
              <Reveal as="article" key={v.t} className="cw-shot reveal" data-d={String(i)}>
                <a className="cw-shot__beeld" href={v.img} target="_blank" rel="noopener" aria-label={`Bekijk de flow "${v.t}" groot`}>
                  <img src={v.img} width={v.w} height={v.h} loading="lazy" alt={`Flow in n8n: ${v.t}`} />
                </a>
                <div className="cw-shot__tekst">
                  <span className="cw-card__tag">{v.tag}</span>
                  <h3>{v.t}</h3>
                  <p>{v.p}</p>
                  <ul className="cw-list">
                    {v.levert.map((x) => (
                      <li key={x}>
                        <Icon name="check" className="ck" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                Waar MegaOnline mee <em>koppelt.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Een greep uit de systemen waar MegaOnline mee werkt. Staat het jouwe er niet tussen? Heeft het een koppeling of API, dan kan het vaak alsnog.</p>
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
            <p className="lead">MegaOnline begint bij het handwerk dat je de meeste tijd kost en bouwt van daaruit verder.</p>
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
