import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/megasmart.css'

export const Route = createFileRoute('/megasmart')({
  head: () => ({
    meta: [
      { title: "MegaSmart | Boekingen, aanvragen en opvolging in een systeem" },
      { name: 'description', content: "MegaSmart is de software van MegaOnline voor bedrijven die werken met aanvragen, boekingen en reserveringen. Agenda, online boeken, klantcontact en opvolging in een omgeving." },
      { property: 'og:title', content: "MegaSmart | Boekingen, aanvragen en opvolging in een systeem" },
      { property: 'og:description', content: "MegaSmart is de software van MegaOnline voor bedrijven die werken met aanvragen, boekingen en reserveringen. Agenda, online boeken, klantcontact en opvolging in een omgeving." },
      { property: 'og:url', content: "https://megaonline.io/megasmart" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/megasmart" },
    ],
  }),
  component: MegaSmart,
})

function MegaSmart() {
  return (
    <main id="top" data-page="megasmart">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — MegaSmart">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <b>MegaSmart</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Nieuw — software van MegaOnline
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Laat klanten zelf
                {' '}
                <em>boeken</em>
                , betalen en terugkomen.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                MegaSmart is ons eigen systeem voor bedrijven die draaien op aanvragen, afspraken en reserveringen. Agenda, online boeken, klantcontact en opvolging zitten in één omgeving, zodat je niet meer heen en weer springt tussen mailbox, agenda en Excel.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/contact">
                  Plan een demo van 30 minuten
                </Link>
                {' '}
                <Link className="tlink" to="/megasmart" hash="functies">
                  Bekijk wat erin zit
                  {' '}
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <div className="proof proof-band" data-theme="paper" data-screen-label="Vertrouwensbalk">
        <div className="wrap">
          <div className="proof__grid">
            <Reveal as="div" className="proof__item reveal">
              <span className="proof__ico">
                <Icon name="calendar-check" />
              </span>
              {' '}
              <p>Klanten boeken en betalen zelf, ook buiten kantooruren</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="proof__item reveal" data-d="1">
              <span className="proof__ico">
                <Icon name="inbox" />
              </span>
              {' '}
              <p>Al je klantcontact in één gespreksgeschiedenis</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="proof__item reveal" data-d="2">
              <span className="proof__ico">
                <Icon name="workflow" />
              </span>
              {' '}
              <p>Bevestigingen en herinneringen gaan automatisch weg</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="proof__item reveal" data-d="3">
              <span className="proof__ico">
                <Icon name="handshake" />
              </span>
              {' '}
              <p>Nederlandse inrichting, uitleg en ondersteuning</p>
            </Reveal>
          </div>
        </div>
      </div>
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Het probleem">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar het schuurt</span>
            {' '}
            <h2 className="h2">
              Boeken kost jou meer tijd dan
              {' '}
              <em>de afspraak zelf.</em>
            </h2>
            {' '}
            <p className="lead">
              De meeste bedrijven hebben prima losse tools. Alleen praten die niet met elkaar, waardoor jij de schakel bent die alles overtypt, terugbelt en nabelt.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <h4>Heen en weer appen</h4>
                <p>Een boeking kost vijf berichten voordat er een datum staat.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Aanvragen in je mailbox</h4>
                <p>Wat ’s avonds binnenkomt, blijft liggen tot je er toevallig langsloopt.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="2">
                <h4>Losse agenda’s</h4>
                <p>Handmatig inplannen leidt vroeg of laat tot een dubbele boeking.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Klantgegevens in Excel</h4>
                <p>Wie wat wanneer geboekt heeft, staat verspreid over vier bestanden.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Betalen achteraf regelen</h4>
                <p>Facturen achteraf sturen kost tijd en levert no-shows op.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="2">
                <h4>Geen opvolging</h4>
                <p>Een klant die één keer boekte, hoort daarna nooit meer iets van je.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" id="functies" data-theme="paper" data-screen-label="Wat er in het systeem zit">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Functies</span>
            {' '}
            <h2 className="h2">
              Alles rondom je klant in
              {' '}
              <em>één</em>
              {' '}
              omgeving.
            </h2>
            {' '}
            <p className="lead">
              MegaSmart vervangt geen boekhouding en geen ERP. Het brengt samen wat er gebeurt vóór en na de verkoop: de aanvraag, het contact, de afspraak en de opvolging.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>Klanten & contacten</h4>
              <p>Alle gegevens, historie en notities op één klantkaart.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="layout-dashboard" />
              </span>
              <h4>Pipeline</h4>
              <p>Van nieuwe aanvraag tot klant, in stappen die je zelf bepaalt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="calendar-days" />
              </span>
              <h4>Agenda & beschikbaarheid</h4>
              <p>Persoonlijke en teamagenda’s met echte beschikbaarheid.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="calendar-check" />
              </span>
              <h4>Online boeken</h4>
              <p>Boekingspagina’s voor afspraken, diensten of accommodaties.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="inbox" />
              </span>
              <h4>Centrale inbox</h4>
              <p>E-mail, WhatsApp, SMS en social in één gesprek per klant.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="workflow" />
              </span>
              <h4>Automatiseringen</h4>
              <p>Bevestigingen, herinneringen en opvolging zonder handwerk.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="credit-card" />
              </span>
              <h4>Betalen & aanbetalen</h4>
              <p>Direct afrekenen of aanbetalen bij het boeken.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="pie-chart" />
              </span>
              <h4>Rapportages</h4>
              <p>Inzicht in aanvragen, bezetting, omzet en reactiesnelheid.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="light" data-screen-label="Zo werkt het">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zo werkt het</span>
            {' '}
            <h2 className="h2">
              Van eerste vraag tot volgende boeking, in
              {' '}
              <em>één doorlopend proces.</em>
            </h2>
            {' '}
            <p className="lead">
              Elke stap die je nu handmatig doet, staat in MegaSmart als vaste route klaar. Jij hoeft alleen nog te doen wat écht persoonlijk moet.
            </p>
          </Reveal>
          {' '}
          <div className="steps">
            <Reveal as="div" className="step reveal">
              <span className="step__no">1</span>
              <div className="step__body">
                <h3>De aanvraag komt binnen</h3>
                <p>
                  Via je website, WhatsApp of de boekingspagina. Het contact wordt aangemaakt, de aanvraag komt in de juiste pipeline en de klant krijgt meteen een bevestiging.
                </p>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="step reveal" data-d="1">
              <span className="step__no">2</span>
              <div className="step__body">
                <h3>De afspraak wordt vastgelegd</h3>
                <p>
                  De klant kiest zelf een moment uit je echte beschikbaarheid en rekent direct af of betaalt aan. Herinneringen gaan automatisch weg, zodat er minder no-shows zijn.
                </p>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="step reveal" data-d="2">
              <span className="step__no">3</span>
              <div className="step__body">
                <h3>De klant blijft in beeld</h3>
                <p>
                  Na afloop volgt een bedankje, een reviewverzoek of een uitnodiging om opnieuw te boeken. De hele geschiedenis blijft op de klantkaart staan.
                </p>
              </div>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="pullnote reveal" data-d="1" style={{ marginTop: "clamp(30px,3.2vw,44px)" }}>
            Jij bepaalt wat automatisch gaat en waar jij
            {' '}
            <em>zelf</em>
            {' '}
            aan tafel schuift.
          </Reveal>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Voor wie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>
            {' '}
            <h2 className="h2">
              Voor bedrijven die werken met afspraken, boekingen en
              {' '}
              <em>reserveringen.</em>
            </h2>
            {' '}
            <p className="lead">
              Hoe verschillend deze bedrijven ook zijn, het proces erachter lijkt sterk op elkaar: iemand vraagt iets aan, jij plant het in en daarna wil je de klant vasthouden.
            </p>
          </Reveal>
          {' '}
          <div className="builtfor">
            <div className="exgrid">
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="home" />
                </span>
                Woning- en vastgoedverhuur
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="map-pin" />
                </span>
                Vakantieverhuur
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="ticket" />
                </span>
                Activiteitenaanbieders
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="ship" />
                </span>
                Boot- en rondvaartbedrijven
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="package" />
                </span>
                Verhuurbedrijven
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="car" />
                </span>
                Rijscholen
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="truck" />
                </span>
                Verhuis- en installatiebedrijven
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="briefcase" />
                </span>
                Zakelijke dienstverleners
              </Reveal>
            </div>
            {' '}
            <Reveal as="div" className="consider reveal" data-d="1">
              <h3>Past het bij jouw manier van werken?</h3>
              <p>
                MegaSmart is het sterkst als je het volgende herkent. Twijfel je, dan kijken we in een demo gewoon mee naar je huidige proces.
              </p>
              <ul className="considlist">
                <li>Je werkt op afspraak of op reservering</li>
                <li>Aanvragen komen via meerdere kanalen binnen</li>
                <li>Meerdere collega’s of locaties plannen mee</li>
                <li>Opvolging gebeurt nu vooral uit het hoofd</li>
                <li>Je administratie zit al in een ander pakket</li>
                <li>Je wilt groeien zonder extra planwerk</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Koppelingen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Koppelingen</span>
            {' '}
            <h2 className="h2">
              Je administratie mag gewoon
              {' '}
              <em>blijven staan.</em>
            </h2>
            {' '}
            <p className="lead">
              MegaSmart is geen boekhoudpakket en geen ERP. Het is de commerciële voorkant van je bedrijf. Wat je al gebruikt voor contracten, facturen en betalingen blijft daar staan en wordt waar nodig gekoppeld.
            </p>
          </Reveal>
          {' '}
          <div className="integ">
            <Reveal as="div" className="integ__item reveal">
              <span className="iconbox">
                <Icon name="building-2" />
              </span>
              <h4>ERP & administratie</h4>
              <p>Business Central, Exact en vergelijkbare pakketten.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="1">
              <span className="iconbox">
                <Icon name="receipt" />
              </span>
              <h4>Boekhouding & facturatie</h4>
              <p>Gegevens door naar het pakket van je boekhouder.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="2">
              <span className="iconbox">
                <Icon name="layout-template" />
              </span>
              <h4>Je website</h4>
              <p>Formulieren en boekingspagina’s rechtstreeks gekoppeld.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="3">
              <span className="iconbox">
                <Icon name="plug" />
              </span>
              <h4>Overige systemen</h4>
              <p>Koppelingen via API, webhooks of een tussenlaag.</p>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="integ__note reveal" data-d="1">
            <span className="iconbox iconbox--sm">
              <Icon name="git-merge" />
            </span>
            <span>
              Een voorbeeld uit de praktijk: MegaSmart verzorgt de aanvraag, de bezichtiging en de opvolging, en zodra de huurder akkoord is, gaan de gegevens door naar het bestaande administratiesysteem. Dat hoeft dus niet vervangen te worden.
            </span>
          </Reveal>
        </div>
      </section>
      {' '}
      <section className="section" id="prijzen" data-theme="paper" data-screen-label="Prijzen">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Prijzen</span>
            {' '}
            <h2 className="h2">
              Van één agenda tot volledige
              {' '}
              <em>automatisering.</em>
            </h2>
            {' '}
            <p className="lead">
              Drie pakketten, allemaal inclusief inrichting, uitleg en Nederlandse ondersteuning. Je zit niet vast aan een lange looptijd.
            </p>
          </Reveal>
          {' '}
          <div className="price-grid">
            <Reveal as="div" className="price-card reveal">
              <span className="price-card__tag">MegaSmart Start</span>
              <div className="price-card__amount">
                <span className="price-card__from">vanaf</span>
                {' '}
                <span className="price-card__num">€ 149</span>
                {' '}
                <span className="price-card__per">per maand</span>
              </div>
              <p className="price-card__note">
                Voor bedrijven die af willen van losse agenda’s en aanvragen in de mailbox.
              </p>
              <ul className="price-card__list">
                <li>
                  <span className="ic">✓</span>
                  Klanten, contacten en pipeline
                </li>
                <li>
                  <span className="ic">✓</span>
                  Agenda en online boekingspagina
                </li>
                <li>
                  <span className="ic">✓</span>
                  Formulieren op je website
                </li>
                <li>
                  <span className="ic">✓</span>
                  Bevestigingen en herinneringen
                </li>
                <li>
                  <span className="ic">✓</span>
                  Centrale inbox voor e-mail
                </li>
              </ul>
              <Link className="btn btn-outline" to="/contact">
                Plan een demo
              </Link>
            </Reveal>
            {' '}
            <Reveal as="div" className="price-card price-card--feat reveal" data-d="1">
              <span className="price-card__flag">Meest gekozen</span>
              <span className="price-card__tag">MegaSmart Groei</span>
              <div className="price-card__amount">
                <span className="price-card__from">vanaf</span>
                {' '}
                <span className="price-card__num">€ 299</span>
                {' '}
                <span className="price-card__per">per maand</span>
              </div>
              <p className="price-card__note">
                Voor bedrijven met meerdere medewerkers, locaties of diensten die opvolging willen automatiseren.
              </p>
              <ul className="price-card__list">
                <li>
                  <span className="ic">✓</span>
                  Alles uit Start
                </li>
                <li>
                  <span className="ic">✓</span>
                  WhatsApp, SMS en social in de inbox
                </li>
                <li>
                  <span className="ic">✓</span>
                  Online betalen en aanbetalen
                </li>
                <li>
                  <span className="ic">✓</span>
                  Uitgebreide automatiseringen
                </li>
                <li>
                  <span className="ic">✓</span>
                  Team-agenda’s en rapportages
                </li>
              </ul>
              <Link className="btn btn-primary" to="/contact">
                Plan een demo
              </Link>
            </Reveal>
            {' '}
            <Reveal as="div" className="price-card reveal" data-d="2">
              <span className="price-card__tag">MegaSmart Maatwerk</span>
              <div className="price-card__amount">
                <span className="price-card__from">vanaf</span>
                {' '}
                <span className="price-card__num">€ 499</span>
                {' '}
                <span className="price-card__per">per maand</span>
              </div>
              <p className="price-card__note">
                Voor bedrijven die MegaSmart willen koppelen aan hun bestaande administratie of ERP.
              </p>
              <ul className="price-card__list">
                <li>
                  <span className="ic">✓</span>
                  Alles uit Groei
                </li>
                <li>
                  <span className="ic">✓</span>
                  Koppeling met je administratiesysteem
                </li>
                <li>
                  <span className="ic">✓</span>
                  Branchespecifieke inrichting
                </li>
                <li>
                  <span className="ic">✓</span>
                  Migratie van je huidige gegevens
                </li>
                <li>
                  <span className="ic">✓</span>
                  Maatwerkautomatiseringen
                </li>
              </ul>
              <Link className="btn btn-outline" to="/contact">
                Plan een demo
              </Link>
            </Reveal>
          </div>
          {' '}
          <Reveal as="p" className="price-fine reveal" data-d="1">
            Prijzen zijn exclusief btw. De eenmalige inrichting hangt af van je situatie: welke koppelingen je nodig hebt en hoeveel er overgezet moet worden. Dat rekenen we in de demo gewoon voor je uit.
          </Reveal>
        </div>
      </section>
      {' '}
      <section className="section" id="faq" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <span className="label">Veelgestelde vragen</span>
            {' '}
            <h2 className="h2">Wat je misschien nog wil weten</h2>
          </Reveal>
          {' '}
          <div className="faq">
            <Qa question="Moet ik mijn huidige boekhouding of ERP vervangen?" className="reveal">
                Nee. MegaSmart is bewust geen boekhoudpakket en geen ERP. Contracten, facturen en betalingen blijven waar ze nu staan. MegaSmart is de laag daarvoor: de aanvraag, het contact, de afspraak en de opvolging. Waar het nuttig is, koppelen we de twee.
            </Qa>
            {' '}
            <Qa question="Werkt MegaSmart ook zonder een website van MegaOnline?" className="reveal">
                Ja. MegaSmart is los af te nemen en werkt naast je bestaande website. Heb je wel een website van ons, dan komen aanvragen en boekingen er rechtstreeks in binnen zonder tussenstap.
            </Qa>
            {' '}
            <Qa question="Hoe lang duurt het voordat we ermee kunnen werken?" className="reveal">
                Een basisinrichting met agenda, boekingspagina en bevestigingen staat meestal binnen enkele weken. Koppelingen met een administratiesysteem duren langer, omdat we eerst willen weten welk systeem waarvoor leidend is.
            </Qa>
            {' '}
            <Qa question="Moeten mijn collega’s hier veel voor leren?" className="reveal">
                We richten het systeem zo in dat iedereen alleen ziet wat hij nodig heeft. De inrichting en uitleg horen bij het abonnement, en je krijgt bij ons een vast aanspreekpunt in plaats van een supportformulier.
            </Qa>
            {' '}
            <Qa question="Wat gebeurt er met mijn klantgegevens?" className="reveal">
                Je gegevens blijven van jou en je kunt ze exporteren. We leggen in een verwerkersovereenkomst vast waar de gegevens staan en wie erbij kan. In de demo lopen we dit punt met je door.
            </Qa>
            {' '}
            <Qa question="Kan ik klein beginnen en later uitbreiden?" className="reveal">
                Dat is de aanbevolen route. Begin met de aanvragen en de agenda, en voeg betalingen, WhatsApp of een koppeling toe zodra dat echt iets oplevert. Overstappen naar een ander pakket kan per maand.
            </Qa>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Aan de slag</span>
            {' '}
            <h2 className="display">Bekijk in 30 minuten hoe MegaSmart voor jouw bedrijf zou werken.</h2>
            {' '}
            <p className="lead">
              We nemen je agenda, je aanvragen en je opvolging door en laten zien wat er in jouw situatie automatisch kan. Geen verkooppraat, wel een eerlijk beeld.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link className="btn btn-primary" to="/contact">
                Plan een demo
              </Link>
              {' '}
              <Link className="tlink" to="/gratis-websitescan">
                Vraag eerst een gratis websitescan aan
                {' '}
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
