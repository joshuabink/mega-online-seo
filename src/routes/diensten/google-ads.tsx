import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/dienst.css'

const TITLE = 'Google Ads beheer | Zichtbaar op het moment dat je klant zoekt | MegaOnline.io'
const DESC =
  'Google Ads gemeten op aanvragen en boekingen, niet op klikken. MegaOnline richt je campagnes in, stemt de pagina erachter af en stuurt elke maand bij.'

export const Route = createFileRoute('/diensten/google-ads')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESC },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESC },
      { property: 'og:url', content: 'https://megaonline.io/diensten/google-ads' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/diensten/google-ads' }],
  }),
  component: GoogleAds,
})

const LEKKEN = [
  { t: 'Betalen voor de verkeerde zoekers', p: 'Je advertentie verschijnt bij zoekopdrachten van mensen die iets anders zoeken.' },
  { t: 'Klikken zonder aanvragen', p: 'Bezoekers landen op je homepage en moeten zelf uitzoeken waar ze moeten zijn.' },
  { t: 'Niemand meet de aanvraag', p: 'Je ziet klikken en kosten, maar niet wat er aan offertes of boekingen uitkwam.' },
  { t: 'Ingesteld en vergeten', p: 'De campagne draait al maanden in dezelfde vorm, terwijl de markt verschuift.' },
  { t: 'Buiten je werkgebied', p: "Je betaalt voor klikken uit regio's waar je helemaal niet komt." },
  { t: 'Budget op de verkeerde momenten', p: 'Het dagbudget is op voordat de uren beginnen waarin mensen echt boeken.' },
]

const CONTROLE = [
  'Of in één oogopslag duidelijk is wat je doet en voor wie',
  'Of de pagina aansluit op de zoekopdracht',
  'Of het formulier kort genoeg is',
  'Of boeken of bellen op de telefoon soepel werkt',
  'Of een aanvraag ook echt gemeten wordt',
]

const WAT_WE_DOEN: { icon: string; t: string }[] = [
  { icon: 'compass', t: 'Zoekwoorden en plan' },
  { icon: 'settings', t: 'Campagnes per dienst of product' },
  { icon: 'edit-3', t: 'Advertentieteksten' },
  { icon: 'layout', t: 'Pagina erachter afstemmen' },
  { icon: 'calendar-check', t: 'Aanvragen en boekingen meten' },
  { icon: 'filter', t: 'Verspilling uitsluiten' },
  { icon: 'map-pin', t: 'Regio en tijden instellen' },
  { icon: 'bar-chart-2', t: 'Maandelijkse rapportage' },
]

const METEN = ['Formulieren', 'Telefoontjes', 'Boekingen', 'Offerteaanvragen']

const STAPPEN = [
  { t: 'Inrichten', p: 'Zoekwoorden, campagnes, teksten, meting en de pagina erachter.' },
  { t: 'Meten', p: 'Welke zoekopdrachten, advertenties en tijden leveren aanvragen op?' },
  { t: 'Kansen zoeken', p: 'Waar lekt budget weg en waar zit ruimte om meer te halen?' },
  { t: 'Bijsturen', p: 'Uitsluiten, verschuiven, teksten testen of de pagina verbeteren.' },
  { t: 'Herhalen', p: 'Volgende maand opnieuw, met de lessen van de vorige maand.' },
]

const VOOR_WIE = [
  { to: '/branches/offerteaanvragen', t: 'Bedrijven die leven van offerteaanvragen', p: 'Mensen zoeken al naar wat je doet. Ze moeten alleen bij jou uitkomen.' },
  { to: '/branches/activiteitenbedrijven', t: 'Activiteitenbedrijven', p: 'Met advertenties vul je juist de lege doordeweekse dagen.' },
  { to: '/branches/verhuurbedrijven', t: 'Verhuurbedrijven', p: 'Zichtbaar zijn op het moment dat de seizoenspiek begint.' },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Hoeveel advertentiebudget heb ik nodig?',
    a: 'Dat verschilt per branche en regio. Wat een klik kost, hangt af van hoeveel bedrijven op dezelfde zoekopdracht adverteren. We kijken eerst wat mensen in jouw markt zoeken en wat een klik daar ongeveer kost. Op basis daarvan adviseren we een startbudget dat groot genoeg is om te leren wat werkt.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Je advertenties zijn zichtbaar zodra de campagne is goedgekeurd. De eerste weken gebruiken we om te leren welke zoekopdrachten aanvragen opleveren. Daarna sturen we gericht bij. Hoeveel aanvragen het oplevert, kunnen we vooraf niet beloven. Wel zie je elke maand wat het deed.',
  },
  {
    q: 'Wat is het verschil met SEO?',
    a: (
      <>
        Met Google Ads betaal je per klik en ben je direct zichtbaar. Met <Link to="/diensten/seo">SEO</Link> betaal je niet per bezoeker, maar bouw je vindbaarheid op over maanden. Ads is snel en stopt zodra jij stopt. SEO is traag en blijft. Veel bedrijven combineren ze.
      </>
    ),
  },
  {
    q: 'Van wie is het advertentieaccount?',
    a: 'Van jou. Het account staat op jouw naam en het budget betaal je rechtstreeks aan Google. Wij krijgen toegang om het te beheren. Stop je met de samenwerking, dan houd je alles.',
  },
  {
    q: 'Ik adverteer al zelf. Kunnen jullie meekijken?',
    a: 'Ja. We beginnen dan met een blik op je huidige campagnes: waar gaat het budget naartoe, meet het account aanvragen en klopt de pagina erachter? Vaak zit de grootste winst in wat je nu betaalt zonder dat het iets oplevert.',
  },
  {
    q: 'Moet mijn website door MegaOnline gebouwd zijn?',
    a: 'Nee. Wel kijken we eerst of de pagina waar de advertentie naartoe gaat goed genoeg is. Een campagne op een pagina die geen aanvragen oplevert, is weggegooid geld. Is daar werk nodig, dan laten we je weten wat en waarom.',
  },
  {
    q: 'Hoe weet ik wat het oplevert?',
    a: 'We meten aanvragen, telefoontjes en boekingen die via je advertenties binnenkomen. Elke maand krijg je een overzicht van wat het kostte, wat het opleverde en wat we de volgende maand aanpassen.',
  },
]

function GoogleAds() {
  return (
    <main id="top" data-page="diensten-google-ads" data-dienst>
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Google Ads</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Google Ads · gemeten op aanvragen
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Zichtbaar op het moment dat je klant zoekt. <em>Niet pas over een half jaar.</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Met Google Ads sta je in beeld zodra de campagne draait. We richten de campagnes in, zorgen dat de pagina erachter aanvragen oplevert en sturen elke maand bij op wat het echt opbrengt.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Gemeten op aanvragen en boekingen, niet op klikken</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Account op jouw naam, budget zonder opslag</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Elke maand bijgestuurd en gerapporteerd</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="scan" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Waar het misgaat">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Waar het misgaat</span>
              <h2 className="h2">
                Adverteren is makkelijk. Adverteren dat iets <em>oplevert</em> niet.
              </h2>
            </div>
            <div className="v2-head__side">
              <p>Een campagne aanzetten kost een middag. Het geld lekt weg in de details die niemand bijhoudt.</p>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {LEKKEN.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="De pagina achter de advertentie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerst de basis</span>
            <h2 className="h2">
              Een advertentie is zo goed als de <em>pagina erachter.</em>
            </h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Een klik kost geld. Een aanvraag levert het op.</span>
              <p className="cw-prijs__uitleg">
                Google brengt de bezoeker tot aan je voordeur. Of hij binnenkomt, beslist je website. Een onduidelijke pagina maakt elke klik duurder, hoe goed de campagne ook is ingericht.
              </p>
              <p className="cw-prijs__uitleg">
                Daarom kijken we vóór de eerste euro naar de pagina waar de advertentie naartoe gaat. Soms heeft een bestaande pagina een paar aanpassingen nodig. Soms is een aparte landingspagina de betere keuze.
              </p>
              <Link className="tlink" to="/kennisbank/$slug" params={{ slug: 'website-levert-geen-aanvragen-op' }}>
                Eerst je pagina, dan pas adverteren <span className="arr">&rarr;</span>
              </Link>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <span className="cw-card__tag">Voordat een campagne live gaat, controleren we</span>
              <ul className="cw-list">
                {CONTROLE.map((x) => (
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

      <section className="section" data-theme="light" data-screen-label="Wat we doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we doen</span>
            <h2 className="h2">
              Van zoekwoord tot <em>aanvraag.</em>
            </h2>
            <p className="lead">Geen losse campagne die we aanzetten en overdragen. We beheren het geheel: wat je adverteert, waar het naartoe leidt en wat het oplevert.</p>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Inbegrepen in het beheer</h3>
              <ul className="cw-incl">
                {WAT_WE_DOEN.map((x) => (
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
              <h3>We meten wat het oplevert</h3>
              <p>Niet alleen klikken, maar wat er daarna gebeurt.</p>
              <ul className="cw-chips">
                {METEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Eén vast aanspreekpunt</h3>
              <p>Geen ticketsysteem, maar iemand die je bedrijf en je campagnes kent.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe het beheer loopt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Doorlopend beheer</span>
            <h2 className="h2">
              Elke maand een stukje <em>minder verspilling.</em>
            </h2>
            <p className="lead">
              De eerste weken leren we wat werkt. Daarna wordt het beheer steeds preciezer: minder budget naar zoekopdrachten die niets doen, meer naar zoekopdrachten die aanvragen opleveren.
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

      <section className="section" data-theme="paper" data-screen-label="Google Ads en SEO samen">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Ads en SEO</span>
              <h2 className="h2">
                Adverteren is huren. SEO is <em>kopen.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Met Google Ads betaal je voor elke bezoeker. Stop je met adverteren, dan stopt ook de zichtbaarheid. Met SEO bouw je iets op dat blijft, maar dat kost maanden.
              </p>
              <p>
                Samen werken ze het best. Ads brengen direct aanvragen binnen en laten zien welke zoekopdrachten echt klanten opleveren. Die kennis gebruiken we om te bepalen welke pagina's we voor SEO als eerste maken.
              </p>
              <Link className="tlink" to="/diensten/seo">
                Bekijk SEO <span className="arr">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Wat het kost">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat het kost</span>
            <h2 className="h2">
              Beheer per maand. <em>Budget apart.</em>
            </h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Google Ads beheer</span>
              <p className="cw-prijs__bedrag">Op maat</p>
              <p className="cw-prijs__uitleg">
                Je betaalt twee dingen: ons beheer en je advertentiebudget. Het budget betaal je rechtstreeks aan Google, zonder opslag van ons. Zo zie je altijd waar elke euro naartoe gaat.
              </p>
              <ul className="hero__ticks">
                <li><Icon name="check" className="ck" /><span>Campagnes inrichten en de pagina afstemmen</span></li>
                <li><Icon name="check" className="ck" /><span>Aanvragen meten en maandelijks bijsturen</span></li>
                <li><Icon name="check" className="ck" /><span>Maandelijkse rapportage</span></li>
              </ul>
              <a className="btn btn-primary" href="#scan">
                {CTA_SCAN}
              </a>
            </Reveal>
            <div className="cw-prijs__na">
              <Reveal as="div" className="cw-card reveal" data-d="1">
                <span className="cw-card__tag">Advertentiebudget</span>
                <h3>Geen standaardbedrag</h3>
                <p>
                  Hoeveel budget zinvol is, hangt af van je branche, je regio en hoeveel concurrenten op dezelfde zoekopdrachten adverteren. Een klik voor een installateur kost iets heel anders dan een klik voor een escaperoom. Na een korte blik op je markt krijg je een voorstel en een advies voor je startbudget.
                </p>
              </Reveal>
              <Reveal as="div" className="cw-card reveal" data-d="2">
                <span className="cw-card__tag">Van jou</span>
                <h3>Account op jouw naam</h3>
                <p>Stopt de samenwerking ooit, dan houd je alle campagnes en alle gegevens.</p>
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
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Voor wie</span>
              <h2 className="h2">
                Voor wie is Google Ads <em>interessant?</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Google Ads werkt het best als mensen al zoeken naar wat je aanbiedt. Ook voor bedrijven die regionaal werken, voor nieuwe websites die nog niet gevonden worden en voor wie snel meer aanvragen nodig heeft.
              </p>
            </div>
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
            Betaal voor aanvragen. Niet voor klikken die nergens heen gaan.
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Wil je weten of Google Ads zinvol is voor jouw bedrijf? In de gratis website scan kijken we of je website klaar is om advertentiebezoekers om te zetten in aanvragen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
