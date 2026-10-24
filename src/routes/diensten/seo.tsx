import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/dienst.css'

export const Route = createFileRoute('/diensten/seo')({
  head: () => ({
    meta: [
      { title: "SEO en GEO | Gevonden worden in Google en in AI | MegaOnline.io" },
      { name: 'description', content: "Elke maand nieuwe pagina's die je vindbaar maken in Google en in AI-zoekmachines. 250 euro opstart, daarna 150 euro per maand. Geen trucjes, wel een plan." },
      { property: 'og:title', content: "SEO en GEO | Gevonden worden in Google en in AI | MegaOnline.io" },
      { property: 'og:description', content: "Elke maand nieuwe pagina's die je vindbaar maken in Google en in AI-zoekmachines. 250 euro opstart, daarna 150 euro per maand. Geen trucjes, wel een plan." },
      { property: 'og:url', content: "https://megaonline.io/diensten/seo" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/seo" },
    ],
  }),
  component: Seo,
})

/**
 * Eén bron voor de zichtbare vragen op deze pagina.
 * Feitenblok staat hier niet in. Geen FAQPage-markup (TK-86).
 */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Wat is GEO en wat is het verschil met SEO?",
    a: "SEO is beter gevonden worden in Google, op de zoekopdrachten waar je klanten op zoeken. GEO hoort bij hetzelfde Groei Partnership en gaat over AI-zoekmachines.",
  },
  {
    q: "Wat kost SEO per maand bij MegaOnline?",
    a: "Je betaalt € 250 eenmalig voor het zoekwoordenonderzoek en het contentplan. Daarna kost het € 150 per maand. Daarvoor publiceren we elke maand nieuwe pagina's: blogs en landingspagina's.",
  },
  {
    q: "Wat krijg ik voor 150 euro per maand?",
    a: "Elke maand nieuwe pagina's die gericht zijn op vindbaarheid: blogs en landingspagina's, geschreven, opgebouwd en gepubliceerd. Elke pagina wordt geoptimaliseerd voor Google en krijgt heldere FAQ's, zodat je ook naar voren komt in AI-zoekmachines. Welk type pagina er wanneer komt, ligt vooraf vast in je contentplan.",
  },
  {
    q: "Hoeveel pagina's komen er per maand bij?",
    a: "Dat hangt af van wat je wilt bereiken en hoe snel. In je contentplan leggen we vooraf vast welke pagina's er wanneer live gaan. Wil je sneller opschalen, dan kijken we samen wat past.",
  },
  {
    q: "Hoe lang duurt het voordat ik iets merk van SEO?",
    a: "SEO is geen knop die je omzet. De eerste verbeteringen zijn vaak binnen enkele weken zichtbaar, maar blijvende posities bouw je op over maanden. Daarom werken we met een contentplan voor twaalf maanden in plaats van losse acties.",
  },
  {
    q: "Kan MegaOnline een plek bovenaan in Google garanderen?",
    a: "Nee. Een plek bovenaan in Google of een vermelding in AI-antwoorden kan niemand garanderen. Wat wel vastligt: welke pagina's er komen, staat in je contentplan en elke maand gaan er nieuwe pagina's live. Je ziet welke pagina's live zijn gegaan en wat ze hebben opgeleverd.",
  },
  {
    q: "Kom ik met MegaOnline ook in ChatGPT en andere AI-zoekmachines?",
    a: "Elke pagina krijgt heldere FAQ's voor AI-zoekmachines zoals ChatGPT. Dat hoort bij het Groei Partnership, net als vindbaarheid in Google. Een vermelding kan niemand garanderen.",
  },
  {
    q: "Is lokale vindbaarheid ook zinvol voor een klein bedrijf?",
    a: "Juist dan. Lokaal is vaak de snelste winst: je concurreert in je eigen regio in plaats van met heel Nederland. We zorgen dat je verschijnt wanneer iemand in de buurt zoekt naar wat jij doet.",
  },
  {
    q: "Wat gebeurt er iedere maand?",
    a: "We publiceren de pagina die voor die maand in het contentplan staat, controleren de website technisch op SEO en GEO en kijken wat de eerder geplaatste pagina's doen. Waar nodig sturen we het plan bij.",
  },
  {
    q: "Moet mijn website door MegaOnline gebouwd zijn?",
    a: "In de basis wel. Goed gevonden worden begint bij de techniek van je website. Zit die verkeerd in elkaar, dan kun je nog zulke goede pagina's maken, maar dan worden ze niet gevonden. Daarom draait het partnership op een website die wij hebben gebouwd.",
  },
  {
    q: "Ik heb al een website. Kan het dan ook?",
    a: "Dat kijken we eerst na. We beoordelen je bestaande website technisch en laten je weten wat er nodig is. Is de basis in orde, dan starten we gewoon. Zo niet, dan brengen we die eerst op orde en daarna loopt het partnership normaal door.",
  },
  {
    q: "Voor wie is het Groei Partnership bedoeld?",
    a: "Voor bedrijven waarvoor de website iets moet opleveren, zoals aanvragen, reserveringen of boekingen. Het partnership past als je elke maand wilt bouwen aan je vindbaarheid in Google en in AI-zoekmachines.",
  },
  {
    q: "Is het Groei Partnership verplicht?",
    a: "Nee. Sommige klanten kiezen voor een eenmalige website en regelen het beheer zelf of via een andere partij. We raden het partnership wel aan, omdat een website die regelmatig wordt bijgestuurd niet stil blijft staan terwijl de rest beweegt.",
  },
  {
    q: "Hoe vaak is er contact?",
    a: "In de basis spreken we elke maand de analyse en verbeterpunten door. Daarnaast zijn de lijnen kort: heb je tussendoor een vraag of een wijziging, dan staan we voor je klaar. Je hebt één vast aanspreekpunt dat je bedrijf kent.",
  },
  {
    q: "Kan ik opzeggen?",
    a: "Het partnership loopt twaalf maanden en is daarna maandelijks opzegbaar. Die eerste periode is nodig omdat vindbaarheid zich over maanden opbouwt: na twee maanden is er nog weinig te zien, na acht maanden wel.",
  },
  {
    q: "Doet MegaOnline ook technische ondersteuning?",
    a: "Zeker. Updates, beveiliging, back-ups en snelheid horen er gewoon bij. Binnen het Groei Partnership gaat dat samen met actieve optimalisatie. Heb je alleen het technische deel nodig, dan kan dat ook via de lichtere onderhoudsoptie.",
  },
  {
    q: "Wat als ik alleen onderhoud wil?",
    a: "Dat kan. We bieden een lichtere onderhoudsoptie vanaf € 50 per maand. Daarmee blijft je website veilig en up-to-date, zonder actieve doorontwikkeling. Dat is bewust iets anders dan het Groei Partnership, waarbij we je website juist maand na maand verbeteren.",
  },
]

const PROBLEMEN = [
  { t: 'Onvindbaar in je regio', p: 'Klanten zoeken lokaal, maar je concurrent staat bovenaan.' },
  { t: 'Verkeer zonder aanvragen', p: 'Bezoekers komen binnen, maar nemen geen contact op.' },
  { t: 'Verkeerde zoekwoorden', p: 'Je scoort op termen waar je klant niet op zoekt.' },
  { t: 'Trage, zwakke basis', p: 'Snelheid en techniek drukken je posities omlaag.' },
  { t: "Dunne pagina's", p: 'Te weinig inhoud om Google te overtuigen dat je relevant bent.' },
  { t: 'Geen overzicht', p: 'Je weet niet waar je staat of wat een verbetering oplevert.' },
]

const STAPPEN = [
  { t: 'Website live', p: 'Het startpunt. Vanaf hier begint het echte werk pas.' },
  { t: 'Meten', p: 'We verzamelen gegevens over bezoekers en zoekverkeer.' },
  { t: 'Kansen zoeken', p: 'We zetten de grootste kansen op een rij en kiezen waar we deze maand op inzetten.' },
  { t: 'Uitvoeren', p: 'We pakken die kans aan: nieuwe pagina's, een verbetering of de techniek.' },
  { t: 'Herhalen', p: 'Volgende maand opnieuw, met de lessen van de vorige.' },
]

const IN_TRAJECT: { icon: string; t: string }[] = [
  { icon: 'compass', t: 'Zoekwoordenonderzoek en contentplan' },
  { icon: 'search-check', t: 'Beter gevonden in Google' },
  { icon: 'target', t: 'Heldere FAQ’s voor AI-zoekmachines' },
  { icon: 'file-text', t: "Elke maand nieuwe blogs en landingspagina's" },
  { icon: 'sliders-horizontal', t: 'Meer aanvragen uit dezelfde bezoekers' },
  { icon: 'bar-chart-2', t: 'Elke maand zien wat het oplevert' },
  { icon: 'shield-check', t: 'Snelheid, veiligheid en updates' },
  { icon: 'user-check', t: 'Eén vast aanspreekpunt' },
]

const VERANDERT = [
  'Doelgroepen veranderen',
  'Concurrenten verbeteren',
  'Bezoekers gedragen zich anders',
  'Nieuwe kansen ontstaan',
  'Je bedrijf groeit',
]

const WE_KIJKEN = [
  'Waar bezoekers afhaken',
  "Welke pagina's goed werken",
  "Welke pagina's minder presteren",
  'Welke vragen mensen hebben',
]

const PAKKET = [
  "Elke maand nieuwe pagina's",
  "Blogs en landingspagina's",
  'Vindbaar in Google en AI',
  'Maandelijkse terugkoppeling',
]

const VOOR_WIE = [
  { to: '/branches/dienstverleners', t: 'Dienstverleners', p: 'Concurrenten staan hoger in Google terwijl jouw werk beter is.' },
  { to: '/branches/activiteitenbedrijven', t: 'Activiteitenbedrijven', p: 'Wie een uitje zoekt begint bij Google, niet bij jouw bedrijfsnaam.' },
  { to: '/branches/verhuurbedrijven', t: 'Verhuurbedrijven', p: 'Gevonden worden op wat je verhuurt, niet alleen op hoe je heet.' },
] as const

function Seo() {
  return (
    <main id="top" data-page="diensten-seo" data-dienst>
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + scanformulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>SEO en GEO</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                SEO en GEO · elke maand nieuwe pagina's
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Gevonden worden in Google. En in de <em>antwoorden van AI.</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Elke maand publiceren we nieuwe pagina's die je beter vindbaar maken, in Google en in AI-zoekmachines zoals ChatGPT en Gemini. Welke pagina's dat worden, ligt vooraf vast in je contentplan.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Elke maand nieuwe blogs en landingspagina's</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Vooraf een contentplan voor twaalf maanden</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>€ 250 opstart, daarna € 150 per maand</span>
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
              <span className="label">Waar het misgaat</span>
              <h2 className="h2">
                Onderaan in Google is net zo erg als <em>onzichtbaar.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                De meeste websites laten vindbaarheid liggen. Niet door slechte teksten, maar door te weinig focus op de juiste zoekwoorden en een gezonde basis.
              </p>
              <Link className="tlink" to="/kennisbank/$slug" params={{ slug: 'website-levert-geen-aanvragen-op' }}>
                Waarom meer bezoek pas helpt als je site al aanvragen oplevert <span className="arr">&rarr;</span>
              </Link>
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
            <span className="label">Een continu proces</span>
            <h2 className="h2">
              Elke maand de grootste <em>groeikans.</em>
            </h2>
            <p className="lead">
              We kijken elke maand opnieuw waar de meeste winst te halen valt, kiezen daar één of twee dingen uit en voeren die uit. Geen lijst met taken die nooit afkomt, maar steeds de stap die op dat moment het meeste oplevert.
            </p>
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

      <section className="section" data-theme="paper" data-screen-label="Wat we doen">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">In het partnership</span>
              <h2 className="h2">
                Wat we binnen het traject <em>doen.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Het Groei Partnership is de SEO- en GEO-dienst van MegaOnline: elke maand nieuwe pagina's, gericht op vindbaarheid in Google en in AI-zoekmachines. Bij de start doen we zoekwoordenonderzoek en leggen we een contentplan voor twaalf maanden vast.
              </p>
              <p>
                Hoe AI-zoekmachines bedrijven kiezen om te noemen, lees je in <Link to="/kennisbank/$slug" params={{ slug: 'gevonden-worden-in-chatgpt' }}>gevonden worden in ChatGPT als mkb'er</Link>.
              </p>
            </div>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Standaard in het Groei Partnership</h3>
              <ul className="cw-incl">
                {IN_TRAJECT.map((x) => (
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
              <h3>Een website die stilstaat, gaat achteruit</h3>
              <p>Niet omdat de website slechter wordt, maar omdat de wereld eromheen vooruit gaat.</p>
              <ul className="cw-chips">
                {VERANDERT.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Niet gokken. Meten.</h3>
              <p>De eerste versie van je website is een goede aanname. Zodra echte bezoekers hem gebruiken, zien we wat er werkelijk gebeurt:</p>
              <ul className="cw-chips cw-chips--line">
                {WE_KIJKEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="prijs" data-theme="light" data-screen-label="Wat het kost">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat het kost</span>
            <h2 className="h2">250 euro opstart, daarna 150 euro per maand.</h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">SEO en GEO abonnement</span>
              <p className="cw-prijs__bedrag">€ 150 per maand</p>
              <p className="cw-prijs__uitleg">
                Eenmalig € 250 opstart voor het zoekwoordenonderzoek, een technische check van je website en het contentplan.
              </p>
              <ul className="hero__ticks">
                {PAKKET.map((x) => (
                  <li key={x}><Icon name="check" className="ck" /><span>{x}</span></li>
                ))}
              </ul>
              <a className="btn btn-primary" href="#scan">
                {CTA_SCAN}
              </a>
            </Reveal>
            <div className="cw-prijs__na">
              <Reveal as="div" className="cw-card reveal" data-d="1">
                <span className="cw-card__tag">Looptijd</span>
                <h3>Twaalf maanden, daarna maandelijks opzegbaar</h3>
                <p>Die looptijd is er niet om je vast te zetten: vindbaarheid bouwt zich op over maanden. Korter dan een jaar krijgt het plan de kans niet.</p>
              </Reveal>
              <Reveal as="div" className="cw-card reveal" data-d="2">
                <span className="cw-card__tag">Lichtere optie</span>
                <h3>Alleen onderhoud &amp; support</h3>
                <p>Updates, beveiliging, back-ups, kleine wijzigingen en technische ondersteuning. Je website blijft veilig en up-to-date, maar we verbeteren hem niet actief.</p>
                <p className="cw-card__prijs">vanaf € 50 per maand</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq" data-theme="paper" data-screen-label="FAQ">
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

      <section className="section section--tight" data-theme="light" data-screen-label="Voor wie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>
            <h2 className="h2">Voor wie we aan vindbaarheid werken.</h2>
            <p className="lead">Voor bedrijven waarvoor de website iets moet opleveren: aanvragen, reserveringen of boekingen.</p>
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
            Een website is nooit af. Dat is juist het punt.
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Een betere website ontstaat niet in één dag, maar door te meten, te leren en te verbeteren. Begin met een eerlijke blik op je huidige vindbaarheid.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
