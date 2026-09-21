import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'
import '@/styles/pages/diensten-google-ads.css'

const TITLE = 'Google Ads beheer | Zichtbaar op het moment dat je klant zoekt | MegaOnline.io'
const DESC =
  'Google Ads die gemeten worden op aanvragen en boekingen, niet op klikken. We richten je campagnes in, stemmen de pagina erachter af en sturen elke maand bij.'

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
                <span className="sep">/</span>{' '}
                <b>Google Ads</b>
              </Reveal>{' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Google Ads · gemeten op aanvragen
                </span>
              </Reveal>{' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Zichtbaar op het moment dat je klant zoekt.{' '}
                <em>Niet pas over een half jaar.</em>
              </Reveal>{' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Vindbaarheid via SEO bouw je op over maanden. Met Google Ads sta je in beeld
                zodra de campagne draait, bij precies de zoekopdrachten die we kiezen. We richten
                de campagnes in, zorgen dat de pagina erachter aanvragen oplevert en sturen elke
                maand bij op wat het echt opbrengt.
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

      {/* ===================== WAAR HET MISGAAT ===================== */}
      <section className="section section--tight" data-theme="paper" data-screen-label="Waar het misgaat">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar het misgaat</span>{' '}
            <h2 className="h2">
              Adverteren is makkelijk. Adverteren dat iets <em>oplevert</em> niet.
            </h2>{' '}
            <p className="lead">
              Een campagne aanzetten kost een middag. Het geld lekt weg in de details die
              niemand bijhoudt.
            </p>
          </Reveal>{' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
              <Reveal as="div" className="miniprob reveal">
                <h4>Betalen voor de verkeerde zoekers</h4>
                <p>Je advertentie verschijnt bij zoekopdrachten van mensen die iets anders zoeken.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Klikken zonder aanvragen</h4>
                <p>Bezoekers landen op je homepage en moeten zelf uitzoeken waar ze moeten zijn.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Niemand meet de aanvraag</h4>
                <p>Je ziet klikken en kosten, maar niet wat er aan offertes of boekingen uitkwam.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Ingesteld en vergeten</h4>
                <p>De campagne draait al maanden in dezelfde vorm, terwijl de markt verschuift.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Buiten je werkgebied</h4>
                <p>Je betaalt voor klikken uit regio's waar je helemaal niet komt.</p>
              </Reveal>{' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Budget op de verkeerde momenten</h4>
                <p>Het dagbudget is op voordat de uren beginnen waarin mensen echt boeken.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DE PAGINA ERACHTER ===================== */}
      <section className="section" data-theme="dark" data-screen-label="De pagina achter de advertentie">
        <div className="wrap">
          <div className="why">
            <Reveal as="div" className="shead reveal" style={{ maxWidth: 'none' }}>
              <span className="label">Eerst de basis</span>{' '}
              <h2 className="h2">
                Een advertentie is zo goed als de <em>pagina erachter.</em>
              </h2>{' '}
              <p className="lead">
                Google brengt de bezoeker tot aan je voordeur. Of hij binnenkomt, beslist je
                website. Een onduidelijke pagina maakt elke klik duurder, hoe goed de campagne
                ook is ingericht.
              </p>{' '}
              <p className="lead">
                Daarom kijken we vóór de eerste euro naar de pagina waar de advertentie naartoe
                gaat. Soms is dat een bestaande pagina die een paar aanpassingen nodig heeft. Soms
                is een aparte landingspagina de betere keuze.
              </p>
            </Reveal>{' '}
            <Reveal as="aside" className="panel reveal" data-d="1">
              <p className="panel__quote">
                Een klik kost geld. <em>Een aanvraag</em> levert het op.
              </p>{' '}
              <p className="panel__support">Voordat een campagne live gaat, controleren we:</p>{' '}
              <ul className="considlist" style={{ gridTemplateColumns: '1fr', marginTop: '18px' }}>
                <li>Of in één oogopslag duidelijk is wat je doet en voor wie</li>{' '}
                <li>Of de pagina aansluit op de zoekopdracht</li>{' '}
                <li>Of het formulier kort genoeg is</li>{' '}
                <li>Of boeken of bellen op de telefoon soepel werkt</li>{' '}
                <li>Of een aanvraag ook echt gemeten wordt</li>
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
              Geen losse campagne die we aanzetten en overdragen. We beheren het geheel: wat je
              adverteert, waar het naartoe leidt en wat het oplevert.
            </p>
          </Reveal>{' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox"><Icon name="compass" /></span>
              <h4>Zoekwoorden en plan</h4>
              <p>We zoeken uit waar jouw klanten op zoeken als ze klaar zijn om aan te vragen of te boeken.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox"><Icon name="settings" /></span>
              <h4>Campagnes inrichten</h4>
              <p>Een heldere opbouw per dienst of product, zodat je ziet wat elk onderdeel kost en oplevert.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox"><Icon name="edit-3" /></span>
              <h4>Advertentieteksten</h4>
              <p>Teksten die zeggen wat je doet, waar en voor welke prijs of werkwijze. Zo klikt de juiste bezoeker.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox"><Icon name="layout" /></span>
              <h4>Pagina afstemmen</h4>
              <p>De pagina achter de advertentie sluit aan op de zoekopdracht en maakt de volgende stap makkelijk.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox"><Icon name="calendar-check" /></span>
              <h4>Aanvragen meten</h4>
              <p>We meten formulieren, telefoontjes en boekingen. Niet alleen klikken.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox"><Icon name="filter" /></span>
              <h4>Verspilling uitsluiten</h4>
              <p>Zoekopdrachten die geld kosten maar niets opleveren sluiten we elke maand uit.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox"><Icon name="map-pin" /></span>
              <h4>Regio en tijden</h4>
              <p>Je advertenties verschijnen waar je werkt, op de momenten dat mensen aanvragen doen.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox"><Icon name="bar-chart-2" /></span>
              <h4>Heldere rapportage</h4>
              <p>Elke maand zwart op wit: wat het kostte, hoeveel aanvragen het opleverde en wat we aanpassen.</p>
            </Reveal>{' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox"><Icon name="user-check" /></span>
              <h4>Eén vast aanspreekpunt</h4>
              <p>Geen ticketsysteem, maar iemand die je bedrijf en je campagnes kent.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== CYCLUS ===================== */}
      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe het beheer loopt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Doorlopend beheer</span>{' '}
            <h2 className="h2">
              Elke maand een stukje <em>minder verspilling.</em>
            </h2>{' '}
            <p className="lead">
              De eerste weken leren we wat werkt. Daarna wordt het beheer steeds preciezer: minder
              budget naar zoekopdrachten die niets doen, meer naar de zoekopdrachten die aanvragen
              opleveren.
            </p>
          </Reveal>{' '}
          <Reveal as="div" className="cycle reveal">
            <div className="cyclestep cyclestep--rec">
              <h4>Inrichten</h4>
              <p>Zoekwoorden, campagnes, teksten, meting en de pagina erachter.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Meten</h4>
              <p>Welke zoekopdrachten, advertenties en tijden leveren aanvragen op.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Kansen zoeken</h4>
              <p>Waar lekt budget weg en waar zit ruimte om meer te halen.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Bijsturen</h4>
              <p>Uitsluiten, verschuiven, teksten testen of de pagina verbeteren.</p>
              <span className="cyclestep__arr"><Icon name="arrow-right" /></span>
            </div>{' '}
            <div className="cyclestep">
              <h4>Herhalen</h4>
              <p>Volgende maand opnieuw, met wat de vorige maand ons leerde.</p>
            </div>
          </Reveal>{' '}
          <Reveal as="div" className="cycle__return reveal" data-d="1">
            <Icon name="refresh-cw" /> Elke maand bijgestuurd op aanvragen, niet op klikken
          </Reveal>
        </div>
      </section>

      {/* ===================== ADS EN SEO ===================== */}
      <section className="section" data-theme="paper" data-screen-label="Google Ads en SEO samen">
        <div className="wrap">
          <div className="vision">
            <Reveal as="div" className="vision__media reveal">
              <Media id="gp-samenwerking" fit="cover" alt="Samenwerken aan vindbaarheid" />
            </Reveal>{' '}
            <Reveal as="div" className="vision__body reveal" data-d="1">
              <span className="label">Ads en SEO</span>{' '}
              <h2 className="h2">
                Adverteren is huren. SEO is <em>kopen.</em>
              </h2>{' '}
              <p>
                Met Google Ads betaal je voor elke bezoeker. Stop je met adverteren, dan stopt
                ook de zichtbaarheid. Met SEO bouw je iets op dat blijft, maar dat kost maanden.
              </p>{' '}
              <p>
                Samen werken ze het beste. Ads brengen direct aanvragen binnen en laten zien welke
                zoekopdrachten echt klanten opleveren. Die kennis gebruiken we om te bepalen welke
                pagina's we voor SEO als eerste maken.
              </p>{' '}
              <div className="pullnote" style={{ marginTop: '24px' }}>
                Wat vandaag aanvragen oplevert via Ads, bouwen we morgen op via{' '}
                <Link to="/diensten/seo"><em>SEO.</em></Link>
              </div>
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
              Voor wie is Google Ads <em>interessant?</em>
            </h2>{' '}
            <p className="lead">
              Google Ads werkt het beste als mensen al zoeken naar wat je aanbiedt. Je hoeft ze
              niet te overtuigen dat ze iets nodig hebben, alleen dat ze bij jou moeten zijn.
            </p>
          </Reveal>{' '}
          <Reveal as="div" className="exgrid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            <Link className="exchip" to="/branches/offerteaanvragen">
              <span className="iconbox iconbox--sm"><Icon name="file-text" /></span>
              Bedrijven die leven van offerteaanvragen
            </Link>{' '}
            <Link className="exchip" to="/branches/activiteitenbedrijven">
              <span className="iconbox iconbox--sm"><Icon name="ticket" /></span>
              Activiteitenbedrijven met lege doordeweekse dagen
            </Link>{' '}
            <Link className="exchip" to="/branches/verhuurbedrijven">
              <span className="iconbox iconbox--sm"><Icon name="package" /></span>
              Verhuurbedrijven met seizoenspieken
            </Link>{' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm"><Icon name="map-pin" /></span>
              Bedrijven die regionaal werken
            </div>{' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm"><Icon name="sprout" /></span>
              Nieuwe websites die nog niet gevonden worden
            </div>{' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm"><Icon name="trending-up" /></span>
              Bedrijven die snel meer aanvragen nodig hebben
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== WAT HET KOST ===================== */}
      <section className="section section--tight" data-theme="dark" data-screen-label="Wat het kost">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: '660px' }}>
            <span className="label">Wat het kost</span>{' '}
            <h2 className="h2">
              Beheer per maand. <em>Budget apart.</em>
            </h2>{' '}
            <p className="lead">
              Je betaalt twee dingen: ons beheer en je advertentiebudget. Het budget betaal je
              rechtstreeks aan Google, zonder opslag van ons. Zo zie je altijd precies waar elke
              euro naartoe gaat.
            </p>
          </Reveal>{' '}
          <Reveal as="div" className="consider reveal" data-d="1" style={{ marginTop: 'clamp(24px,3vw,34px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(24px,3vw,40px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                  Hoeveel budget zinvol is hangt af van je branche, je regio en hoeveel
                  concurrenten op dezelfde zoekopdrachten adverteren. Een klik voor een
                  installateur kost iets heel anders dan een klik voor een escaperoom. Daarom
                  noemen we geen standaardbedrag, maar kijken we eerst wat er in jouw markt
                  gezocht wordt.
                </p>{' '}
                <ul className="considlist" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', marginTop: '20px' }}>
                  <li>Campagnes inrichten</li>{' '}
                  <li>Pagina afstemmen</li>{' '}
                  <li>Aanvragen meten</li>{' '}
                  <li>Maandelijks bijsturen</li>{' '}
                  <li>Maandelijkse rapportage</li>
                </ul>{' '}
                <p className="brand__tag" style={{ marginTop: '22px', paddingTop: '0' }}>
                  Het advertentieaccount staat op jouw naam. Stoppen we ooit met samenwerken, dan
                  houd je alle campagnes en alle gegevens.
                </p>
              </div>{' '}
              <div style={{ border: '1px solid var(--line)', borderRadius: '16px', background: 'var(--card-2)', boxShadow: 'var(--elev)', padding: 'clamp(24px,2.6vw,32px)', textAlign: 'center' }}>
                <span className="form__head-note" style={{ justifyContent: 'center' }}>Google Ads beheer</span>{' '}
                <div className="svcprice" style={{ fontSize: '2.2rem', marginTop: '6px' }}>
                  Op maat
                </div>{' '}
                <p style={{ color: 'var(--faint)', fontSize: '0.86rem', marginTop: '8px', lineHeight: '1.5' }}>
                  Na een korte blik op je markt krijg je een voorstel voor het beheer en een advies
                  voor je startbudget.
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
            <Qa question="Hoeveel advertentiebudget heb ik nodig?" className="reveal">
              Dat verschilt per branche en regio. Wat een klik kost hangt af van hoeveel bedrijven
              op dezelfde zoekopdracht adverteren. We kijken eerst wat er in jouw markt gezocht
              wordt en wat een klik daar ongeveer kost. Op basis daarvan adviseren we een
              startbudget dat groot genoeg is om te leren wat werkt.
            </Qa>{' '}
            <Qa question="Hoe snel zie ik resultaat?" className="reveal">
              Je advertenties zijn zichtbaar zodra de campagne is goedgekeurd. De eerste weken
              gebruiken we om te leren welke zoekopdrachten aanvragen opleveren. Daarna sturen we
              gericht bij. Hoeveel aanvragen het oplevert kunnen we vooraf niet beloven, wel dat je
              elke maand ziet wat het deed.
            </Qa>{' '}
            <Qa question="Wat is het verschil met SEO?" className="reveal">
              Met Google Ads betaal je per klik en ben je direct zichtbaar. Met SEO betaal je niet
              per bezoeker, maar bouw je vindbaarheid op over maanden. Ads is snel en stopt zodra
              je stopt. SEO is traag en blijft. Veel bedrijven combineren ze.
            </Qa>{' '}
            <Qa question="Van wie is het advertentieaccount?" className="reveal">
              Van jou. Het account staat op jouw naam en het budget betaal je rechtstreeks aan
              Google. Wij krijgen toegang om het te beheren. Stop je met de samenwerking, dan houd
              je alles.
            </Qa>{' '}
            <Qa question="Ik adverteer al zelf. Kunnen jullie meekijken?" className="reveal">
              Ja. We beginnen dan met een blik op je huidige campagnes: waar gaat het budget
              naartoe, wordt een aanvraag gemeten en klopt de pagina erachter. Vaak zit de
              grootste winst in wat je nu betaalt zonder dat het iets oplevert.
            </Qa>{' '}
            <Qa question="Moet mijn website door MegaOnline gebouwd zijn?" className="reveal">
              Nee. Wel kijken we eerst of de pagina waar de advertentie naartoe gaat goed genoeg
              is. Een campagne op een pagina die geen aanvragen oplevert is weggegooid geld. Is
              daar werk nodig, dan laten we je weten wat en waarom.
            </Qa>{' '}
            <Qa question="Hoe weet ik wat het oplevert?" className="reveal">
              We meten aanvragen, telefoontjes en boekingen die via je advertenties binnenkomen.
              Elke maand krijg je een overzicht van wat het kostte, wat het opleverde en wat we
              de volgende maand aanpassen.
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
                Betaal voor aanvragen. Niet voor klikken die nergens heen gaan.
              </Reveal>{' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Wil je weten of Google Ads voor jouw bedrijf zinvol is? Begin met de gratis scan.
                We kijken of je website klaar is om advertentiebezoekers om te zetten in aanvragen.
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
                <span>Account op jouw naam</span>{' '}
                <span>Budget zonder opslag</span>{' '}
                <span>Eén vast aanspreekpunt</span>
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
                  <div className="ic">✓</div>{' '}
                  <h3>Bedankt. Aanvraag ontvangen.</h3>{' '}
                  <p style={{ color: 'var(--muted)', marginTop: '10px' }}>
                    We nemen gemiddeld binnen 2 werkdagen contact met je op. Geen automatisch
                    gegenereerd rapport.
                  </p>
                </>
              }
            >
              <div className="form__progress">
                <span className="form__step-label">
                  Stap <b id="stepNum">1</b> van 3
                </span>{' '}
                <div className="form__bar">
                  <i id="stepBar" />
                </div>
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
                    <option value="Google Ads en SEO combineren">Google Ads en SEO combineren</option>
                  </select>
                </div>{' '}
                <div className="form__nav">
                  <button className="btn btn-ghost" type="button" data-prev="">← Terug</button>{' '}
                  <button className="btn btn-primary" type="submit">
                    Stuur mijn gratis scan
                  </button>
                </div>{' '}
                <p className="form__disc">
                  We nemen binnen twee werkdagen contact op om te kijken of het past. Zonder
                  verkooppraatje.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
