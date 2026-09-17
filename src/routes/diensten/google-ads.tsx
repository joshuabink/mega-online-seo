import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'
import '@/styles/pages/diensten-google-ads.css'

const TITLE = 'Google Ads beheer | Aanvragen uit advertenties | MegaOnline.io'
const DESCRIPTION =
  'Google Ads die aanvragen en boekingen opleveren, niet alleen klikken. We richten je campagnes in, sturen elke maand bij en zorgen dat de pagina achter de advertentie klopt.'

export const Route = createFileRoute('/diensten/google-ads')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: 'https://megaonline.io/diensten/google-ads' },
    ],
    links: [{ rel: 'canonical', href: 'https://megaonline.io/diensten/google-ads' }],
  }),
  component: GoogleAds,
})

function GoogleAds() {
  return (
    <main id="top" data-page="diensten-google-ads">
      {/* ===================== HERO ===================== */}
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero · Google Ads">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>{' '}
                <Link to="/" hash="diensten">Diensten</Link>
                <span className="sep">/</span> <b>Google Ads</b>
              </Reveal>{' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Google Ads · na de livegang
                </span>
              </Reveal>{' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Bovenaan in Google. Vandaag al,{' '}
                <em>niet pas over een half jaar.</em>
              </Reveal>{' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Met Google Ads sta je direct in beeld bij iemand die op dit moment zoekt naar wat jij doet. Wij richten je campagnes in, sturen ze elke maand bij en zorgen dat de pagina achter de advertentie iemand overtuigt. We sturen op aanvragen, niet op klikken.
              </Reveal>{' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/contact">
                  Plan een kennismaking
                </Link>{' '}
                <Link className="tlink" to="/gratis-websitescan">
                  Vraag je gratis scan aan
                </Link>
              </Reveal>
            </div>{' '}
            <Reveal as="div" className="hvis reveal" data-d="2">
              <div className="hvis__frame">
                <Media id="sfeer-overleg" fit="cover" alt="Overleg over advertentiecampagnes" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEEM ===================== */}
      <section className="section section--tight" data-theme="paper" data-screen-label="Waar het misgaat">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar het misgaat</span>{' '}
            <h2 className="h2">
              Klikken kopen is makkelijk. Aanvragen kopen <em>niet.</em>
            </h2>{' '}
            <p className="lead">
              Een campagne aanzetten kost een middag. Een campagne die elke maand meer oplevert dan hij kost, vraagt aandacht. Daar gaat het meestal mis.
            </p>
          </Reveal>{' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
              <Reveal as="div" className="miniprob reveal">
                <h4>Budget op brede zoektermen</h4>
                <p>Je advertentie verschijnt bij mensen die iets heel anders zoeken.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Klikken naar de homepage</h4>
                <p>De bezoeker moet zelf zoeken wat hij wilde en haakt af.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Geen idee wat het oplevert</h4>
                <p>Er wordt niet gemeten welke klik een aanvraag of boeking werd.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Betalen voor je eigen naam</h4>
                <p>Budget gaat op aan mensen die je toch al zouden vinden.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Eén keer ingesteld</h4>
                <p>Daarna kijkt niemand meer, terwijl concurrenten wel bijsturen.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Advertentie en site los van elkaar</h4>
                <p>De advertentie belooft iets wat de pagina niet laat zien.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INZICHT ===================== */}
      <section className="section" data-theme="dark" data-screen-label="De advertentie is de helft">
        <div className="wrap">
          <div className="why">
            <Reveal as="div" className="shead reveal" style={{ maxWidth: 'none' }}>
              <span className="label">Waarom wij</span>{' '}
              <h2 className="h2">
                De advertentie is maar de helft. <em>De pagina doet de rest.</em>
              </h2>{' '}
              <p className="lead">
                Google brengt iemand naar je website. Wat daarna gebeurt, bepaalt of je geld terugverdient. Een bureau dat alleen advertenties beheert, kan aan die tweede helft niets doen.
              </p>{' '}
              <p className="lead">
                Wij bouwen websites die op aanvragen zijn ingericht. Daardoor kijken we niet alleen naar de campagne, maar ook naar de pagina waar de klik op landt. Past die niet, dan passen we hem aan.
              </p>
            </Reveal>{' '}
            <Reveal as="aside" className="panel reveal" data-d="1">
              <p className="panel__quote">
                Elke klik kost geld. <em>Elke afhaker ook.</em>
              </p>{' '}
              <p className="panel__support">Een goede landingspagina voor een advertentie:</p>{' '}
              <ul className="considlist" style={{ gridTemplateColumns: '1fr', marginTop: '18px' }}>
                <li>Herhaalt wat de advertentie beloofde</li>{' '}
                <li>Laat direct zien wat het kost of hoe je boekt</li>{' '}
                <li>Wekt vertrouwen voordat iemand twijfelt</li>{' '}
                <li>Vraagt niet meer dan nodig in het formulier</li>{' '}
                <li>Werkt net zo goed op de telefoon</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== WAT WE DOEN ===================== */}
      <section className="section section--tight" data-theme="light" data-screen-label="Wat we doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we doen</span>{' '}
            <h2 className="h2">
              Van zoekwoord tot <em>aanvraag.</em>
            </h2>{' '}
            <p className="lead">
              Eén traject waarin campagne, meting en website op elkaar aansluiten. Zo weet je niet alleen wat je uitgeeft, maar ook wat het oplevert.
            </p>
          </Reveal>{' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox"><Icon name="compass" /></span>
              <h4>Zoekwoordenonderzoek</h4>
              <p>We zoeken uit waar je klanten op zoeken als ze klaar zijn om te kopen of te boeken.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox"><Icon name="settings" /></span>
              <h4>Campagnes inrichten</h4>
              <p>Een heldere opbouw per dienst of product, met budget waar de kansen liggen.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox"><Icon name="file-text" /></span>
              <h4>Advertentieteksten</h4>
              <p>Teksten die zeggen wat je doet, voor wie en waarom bij jou.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox"><Icon name="layout" /></span>
              <h4>Landingspagina</h4>
              <p>De pagina achter de advertentie sluit aan op de zoekvraag en leidt naar een aanvraag.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox"><Icon name="activity" /></span>
              <h4>Conversies meten</h4>
              <p>We meten formulieren, belletjes en boekingen, zodat je ziet welke klik iets opleverde.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox"><Icon name="filter" /></span>
              <h4>Verspilling eruit</h4>
              <p>Zoektermen die geld kosten zonder iets op te leveren, sluiten we uit.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox"><Icon name="map-pin" /></span>
              <h4>Lokaal adverteren</h4>
              <p>Alleen zichtbaar in de regio waar je werkt, op de momenten dat het telt.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox"><Icon name="bar-chart-2" /></span>
              <h4>Heldere rapportage</h4>
              <p>Elke maand zwart op wit: wat het kostte en hoeveel aanvragen het opleverde.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox"><Icon name="user-check" /></span>
              <h4>Eén vast aanspreekpunt</h4>
              <p>Geen accountmanager ertussen, maar iemand die je bedrijf en je campagnes kent.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== CYCLUS ===================== */}
      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe het werkt (cyclus)">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Hoe het werkt</span>{' '}
            <h2 className="h2">
              Elke maand een beetje <em>scherper.</em>
            </h2>{' '}
            <p className="lead">
              Een campagne wordt beter naarmate hij langer draait. Elke maand zien we welke zoektermen aanvragen opleveren en welke alleen geld kosten. Daar sturen we op bij.
            </p>
          </Reveal>{' '}
          <Reveal as="div" className="cycle reveal">
            <div className="cyclestep cyclestep--rec">
              <h4>Onderzoek</h4>
              <p>Zoekwoorden, concurrenten en de pagina's waar de klikken op landen.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Live</h4>
              <p>Campagnes staan aan en de meting van aanvragen werkt vanaf dag één.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Meten</h4>
              <p>Welke klik werd een aanvraag, een belletje of een boeking?</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Bijsturen</h4>
              <p>Budget naar wat werkt, verspilling eruit, pagina's verbeterd.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Herhalen</h4>
              <p>Volgende maand opnieuw, met wat de vorige maand ons leerde.</p>
            </div>
          </Reveal>{' '}
          <Reveal as="div" className="cycle__return reveal" data-d="1">
            <Icon name="refresh-cw" /> Elke maand opnieuw, steeds op de plek waar de meeste winst zit
          </Reveal>
        </div>
      </section>

      {/* ===================== ADS EN SEO ===================== */}
      <section className="section" data-theme="paper" data-screen-label="Google Ads naast SEO">
        <div className="wrap">
          <div className="vision">
            <Reveal as="div" className="vision__media reveal">
              <Media id="kantoor-wide" fit="cover" alt="Werkplek van MegaOnline" />
            </Reveal>{' '}
            <Reveal as="div" className="vision__body reveal" data-d="1">
              <span className="label">Ads of SEO?</span>{' '}
              <h2 className="h2">
                Adverteren is huren. SEO is <em>kopen.</em>
              </h2>{' '}
              <p>
                Met Google Ads sta je morgen bovenaan, maar zodra je stopt met betalen ben je weg. Met SEO bouw je posities op die blijven, maar dat kost maanden.
              </p>{' '}
              <p>
                Daarom werken ze het best samen. Ads brengen aanvragen binnen terwijl je vindbaarheid groeit. En de zoektermen die in je campagnes goed werken, laten zien welke pagina's het waard zijn om te schrijven.
              </p>{' '}
              <div className="pullnote" style={{ marginTop: '24px' }}>
                Ads laten zien waar de vraag zit. SEO zorgt dat je daar <em>blijft.</em>
              </div>{' '}
              <Link className="tlink" to="/diensten/seo" style={{ marginTop: '22px' }}>
                Bekijk SEO en GEO
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== VOOR WIE ===================== */}
      <section className="section section--tight" data-theme="light" data-screen-label="Voor wie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>{' '}
            <h2 className="h2">
              Voor wie werkt dit <em>goed?</em>
            </h2>{' '}
            <p className="lead">
              Google Ads werkt het best voor bedrijven waar iemand actief zoekt en snel beslist. Precies de bedrijven waar wij websites voor bouwen.
            </p>
          </Reveal>{' '}
          <Reveal as="div" className="exgrid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            <Link className="exchip" to="/branches/activiteitenbedrijven">
              <span className="iconbox iconbox--sm"><Icon name="ticket" /></span>
              Activiteitenbedrijven met lege doordeweekse dagen
            </Link>{' '}
            <Link className="exchip" to="/branches/verhuurbedrijven">
              <span className="iconbox iconbox--sm"><Icon name="package" /></span>
              Verhuurbedrijven met seizoenspieken
            </Link>{' '}
            <Link className="exchip" to="/branches/offerteaanvragen">
              <span className="iconbox iconbox--sm"><Icon name="file-text" /></span>
              Bedrijven die leven van offerteaanvragen
            </Link>{' '}
            <Link className="exchip" to="/branches/reserveringen">
              <span className="iconbox iconbox--sm"><Icon name="calendar-check" /></span>
              Bedrijven met reserveringen
            </Link>{' '}
            <Link className="exchip" to="/branches/dienstverleners">
              <span className="iconbox iconbox--sm"><Icon name="briefcase" /></span>
              Lokale dienstverleners
            </Link>{' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm"><Icon name="rocket" /></span>
              Nieuwe websites die nog geen posities hebben
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== KOSTEN ===================== */}
      <section className="section section--tight" data-theme="dark" data-screen-label="Wat het kost">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: '660px' }}>
            <span className="label">Wat het kost</span>{' '}
            <h2 className="h2">
              Twee potjes. <em>Allebei zichtbaar.</em>
            </h2>{' '}
            <p className="lead">
              Je betaalt ons voor het beheer. Het advertentiebudget betaal je rechtstreeks aan Google. Zo zie je altijd precies wat er naar advertenties gaat en wat naar het werk eromheen.
            </p>
          </Reveal>{' '}
          <Reveal as="div" className="consider reveal" data-d="1" style={{ marginTop: 'clamp(24px,3vw,34px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(24px,3vw,40px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                  Hoeveel advertentiebudget zinvol is, hangt af van je branche, je regio en wat een aanvraag je waard is. Dat rekenen we vooraf samen uit, zodat je niet begint met een bedrag dat te klein is om iets te leren of te groot om te verantwoorden.
                </p>{' '}
                <ul className="considlist" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', marginTop: '20px' }}>
                  <li>Inrichting van campagnes</li>{' '}
                  <li>Meting van aanvragen</li>{' '}
                  <li>Maandelijks bijsturen</li>{' '}
                  <li>Landingspagina's</li>{' '}
                  <li>Maandelijkse rapportage</li>
                </ul>{' '}
                <p className="brand__tag" style={{ marginTop: '22px', paddingTop: '0' }}>
                  Advertentiebudget komt er apart bovenop en gaat rechtstreeks naar Google.
                </p>
              </div>{' '}
              <div style={{ border: '1px solid var(--line)', borderRadius: '16px', background: 'var(--card-2)', boxShadow: 'var(--elev)', padding: 'clamp(24px,2.6vw,32px)', textAlign: 'center' }}>
                <span className="form__head-note" style={{ justifyContent: 'center' }}>Google Ads beheer</span>{' '}
                {/* TODO Joshua: prijs invullen, en daarna ook in src/lib/schema.ts (SERVICES) zetten */}
                <div className="svcprice" style={{ fontSize: '2.2rem', marginTop: '6px' }}>
                  Op maat
                </div>{' '}
                <p style={{ color: 'var(--faint)', fontSize: '0.86rem', marginTop: '8px', lineHeight: '1.5' }}>
                  Na een korte kennismaking weet je precies wat het beheer kost en welk budget we adviseren.
                </p>{' '}
                <Link className="tlink" to="/contact" style={{ marginTop: '18px', justifyContent: 'center' }}>
                  Plan een kennismaking
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section" id="faq" data-theme="paper" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: '680px' }}>
            <span className="label">Veelgestelde vragen</span>{' '}
            <h2 className="h2">Wat je misschien nog wil weten</h2>
          </Reveal>{' '}
          <div className="faq">
            <Qa question="Hoe snel zie ik resultaat van Google Ads?" className="reveal">
              Je advertenties zijn zichtbaar zodra de campagne live staat. De eerste weken gebruiken we vooral om te leren welke zoektermen aanvragen opleveren. Daarna sturen we het budget steeds gerichter naar wat werkt.
            </Qa>{' '}
            <Qa question="Hoeveel advertentiebudget heb ik nodig?" className="reveal">
              Dat hangt af van je branche, je regio en wat een aanvraag je oplevert. We rekenen het vooraf met je uit. Het budget betaal je rechtstreeks aan Google, los van ons beheer.
            </Qa>{' '}
            <Qa question="Waarom niet gewoon zelf een campagne aanzetten?" className="reveal">
              Dat kan. Google maakt het bewust makkelijk om te beginnen. Het verschil zit in wat daarna gebeurt: zoektermen uitsluiten die niets opleveren, meten welke klik een aanvraag werd en de pagina aanpassen waar mensen afhaken. Zonder dat betaal je vooral voor klikken.
            </Qa>{' '}
            <Qa question="Moet ik ook SEO doen als ik adverteer?" className="reveal">
              Het hoeft niet, maar het is wel verstandig. Advertenties stoppen zodra je stopt met betalen. Vindbaarheid via SEO blijft. Samen brengen ze nu aanvragen binnen en bouwen ze aan later.
            </Qa>{' '}
            <Qa question="Kunnen jullie ook mijn bestaande campagnes overnemen?" className="reveal">
              Ja. We kijken eerst wat er nu draait, wat het kost en wat het oplevert. Daarna hoor je wat we zouden houden, wat we zouden stoppen en wat we anders zouden inrichten.
            </Qa>{' '}
            <Qa question="Moet mijn website door MegaOnline gebouwd zijn?" className="reveal">
              Nee. Wel kijken we altijd eerst naar de pagina's waar je advertenties op landen. Levert die pagina geen aanvragen op, dan heeft meer budget weinig zin. In dat geval hoor je dat eerlijk van ons, met wat eraan te doen is.
            </Qa>{' '}
            <Qa question="Wat zie ik elke maand terug?" className="reveal">
              Wat de campagnes kostten, hoeveel aanvragen en boekingen ze opleverden en wat we de komende maand gaan aanpassen. In gewone taal, zonder een dashboard vol getallen.
            </Qa>
          </div>
        </div>
      </section>

      {/* ===================== EIND-CTA ===================== */}
      <section className="section" id="scan" data-theme="dark" data-screen-label="Eind-CTA + scan-formulier">
        <div className="wrap">
          <div className="endcta__grid">
            <div className="endcta__copy">
              <Reveal as="h2" className="display reveal">
                Adverteren werkt pas als de pagina erachter klopt.
              </Reveal>{' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Wil je weten of jouw website klaar is voor advertenties? We kijken er kosteloos naar en sturen je de punten die we zien.
              </Reveal>{' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2" style={{ marginTop: '28px' }}>
                <Link className="btn btn-primary" to="/contact">
                  Plan een kennismaking
                </Link>{' '}
                <Link className="tlink" to="/gratis-websitescan">
                  Vraag je gratis scan aan
                </Link>
              </Reveal>{' '}
              <Reveal as="div" className="endcta__trust reveal" data-d="2" style={{ marginTop: '24px' }}>
                <span>Budget rechtstreeks naar Google</span>{' '}
                <span>Eén vast aanspreekpunt</span>{' '}
                <span>Elke maand bijgestuurd</span>
              </Reveal>
            </div>{' '}
            <SteppedLeadForm
              className="reveal"
              subject="Nieuwe websitescan-aanvraag (Google Ads) - MegaOnline.io"
              head={
                <>
                  <span className="form__head-note">
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-text)', display: 'inline-block' }} />
                    Gratis websitescan
                  </span>{' '}
                  <h3>Vraag je websitescan aan</h3>{' '}
                  <p>Begin met je website-adres. De rest volgt in twee korte stappen.</p>
                </>
              }
              ok={
                <>
                  <div className="ic">✓</div> <h3>Bedankt. Aanvraag ontvangen.</h3>{' '}
                  <p style={{ color: 'var(--muted)', marginTop: '10px' }}>
                    We nemen gemiddeld binnen 2 werkdagen contact met je op. Geen automatisch gegenereerd rapport.
                  </p>
                </>
              }
            >
              <div className="form__progress">
                <span className="form__step-label">
                  Stap <b id="stepNum">1</b> van 3
                </span>{' '}
                <div className="form__bar"><i id="stepBar" /></div>
              </div>{' '}
              <div className="fstep" data-step="1">
                <div className="field">
                  <label htmlFor="f-url">Wat is je website nu?</label>{' '}
                  <input id="f-url" name="url" type="text" inputMode="url" placeholder="jouwwebsite.nl" required />
                </div>{' '}
                <button className="btn btn-primary" type="button" data-next="">
                  Volgende <span className="arr">→</span>
                </button>
              </div>{' '}
              <div className="fstep" data-step="2" hidden>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-naam">Je naam</label>{' '}
                    <input id="f-naam" name="naam" type="text" placeholder="Voor- en achternaam" required />
                  </div>{' '}
                  <div className="field">
                    <label htmlFor="f-bedrijf">Bedrijfsnaam</label>{' '}
                    <input id="f-bedrijf" name="bedrijf" type="text" placeholder="Bedrijfsnaam" required />
                  </div>
                </div>{' '}
                <div className="form__nav">
                  <button className="btn btn-ghost" type="button" data-prev="">← Terug</button>{' '}
                  <button className="btn btn-primary" type="button" data-next="">
                    Volgende <span className="arr">→</span>
                  </button>
                </div>
              </div>{' '}
              <div className="fstep" data-step="3" hidden>
                <div className="field">
                  <label htmlFor="f-email">E-mailadres</label>{' '}
                  <input id="f-email" name="email" type="email" placeholder="jij@bedrijf.nl" required />
                </div>{' '}
                <div className="field">
                  <label htmlFor="f-doel">Wat wil je bereiken?</label>{' '}
                  <select id="f-doel" name="doel" required defaultValue="">
                    <option value="" disabled>Kies je belangrijkste doel</option>{' '}
                    <option value="Starten met Google Ads">Starten met Google Ads</option>{' '}
                    <option value="Bestaande campagnes laten beheren">Bestaande campagnes laten beheren</option>{' '}
                    <option value="Meer aanvragen / boekingen">Meer aanvragen / boekingen</option>{' '}
                    <option value="Meer inzicht in wat advertenties opleveren">Meer inzicht in wat advertenties opleveren</option>
                  </select>
                </div>{' '}
                <div className="form__nav">
                  <button className="btn btn-ghost" type="button" data-prev="">← Terug</button>{' '}
                  <button className="btn btn-primary" type="submit">Stuur mijn gratis scan</button>
                </div>{' '}
                <p className="form__disc">
                  We nemen binnen twee werkdagen contact op om te kijken of het past. Zonder verkooppraatje.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
