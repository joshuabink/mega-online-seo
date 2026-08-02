import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/branches/activiteitenbedrijven')({
  head: () => ({
    meta: [
      { title: "Websites voor activiteitenbedrijven — MegaOnline.io" },
      { name: 'description', content: "Een website voor activiteitenbedrijven die ook op rustige dagen vol boekt: online reserveren, arrangementen, groepen en cadeaubonnen die verkopen." },
      { property: 'og:title', content: "Websites voor activiteitenbedrijven — MegaOnline.io" },
      { property: 'og:description', content: "Een website voor activiteitenbedrijven die ook op rustige dagen vol boekt: online reserveren, arrangementen, groepen en cadeaubonnen die verkopen." },
      { property: 'og:url', content: "https://megaonline.io/branches/activiteitenbedrijven" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/branches/activiteitenbedrijven" },
    ],
  }),
  component: Activiteitenbedrijven,
})

function Activiteitenbedrijven() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Activiteitenbedrijven">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <Link to="/" hash="diensten">Branches</Link>
                <span className="sep">/</span>
                {' '}
                <b>Activiteitenbedrijven</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Activiteitenbedrijven
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Vol geboekt, ook op de
                {' '}
                <em>rustige dagen.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Of je nu een escaperoom, klimhal, indoor speeltuin of kartbaan runt: je verdient aan de momenten dat het druk is. Wij bouwen een website die ook de stille doordeweekse dagen helpt vullen.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/gratis-websitescan">
                  Vraag een gratis websitescan aan
                  {' '}
                  <span className="arr">→</span>
                </Link>
                {' '}
                <Link className="tlink" to="/contact">
                  Plan een kennismaking
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="We kennen jouw markt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">We kennen jouw markt</span>
            {' '}
            <h2 className="h2">
              Bij activiteiten draait alles om
              {' '}
              <em>beleving</em>
              {' '}
              en het juiste moment.
            </h2>
            {' '}
            <p className="lead">
              We werken voor bedrijven waar mensen komen voor een ervaring. Die markt kent z'n eigen ritme — en daar bouwen we omheen.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Pieken en dalen</h4>
                <p>
                  Weekenden zitten vol, doordeweeks blijft het stil. Daar valt omzet te winnen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Mensen beslissen snel</h4>
                <p>
                  Een uitje wordt vaak last-minute geboekt. Wie dan moet bellen, haakt af.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Groepen en arrangementen</h4>
                <p>
                  Bedrijfsuitjes, kinderfeestjes en vrijgezellenfeesten vragen om duidelijke pakketten.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Seizoen en weer</h4>
                <p>
                  Vakanties en regen bepalen de drukte. Je website kan daar slim op inspelen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Veel telefoon en mail</h4>
                <p>
                  Vragen over beschikbaarheid en prijzen kosten je team uren per week.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Beleving verkoopt</h4>
                <p>
                  Mensen kiezen op sfeer, foto's en reviews. Dat moet meteen voelbaar zijn.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="light" data-screen-label="Onze oplossing">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze oplossing</span>
            {' '}
            <h2 className="h2">
              We vertalen jouw beleving naar
              {' '}
              <em>boekingen.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen website die alleen laat zien dát je bestaat, maar één die bezoekers van 'leuk' naar 'gereserveerd' brengt.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="calendar-check" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Online reserveren met realtime beschikbaarheid</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  Bezoekers boeken direct een tijdslot, ook 's avonds laat als jij dicht bent. Gekoppeld aan je agenda, zodat dubbele boekingen niet kunnen.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Minder telefoon,
                {' '}
                <em>meer</em>
                {' '}
                boekingen — ook als jij dicht bent.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="package" />
                </span>
              </div>
              {' '}
              <h3>Arrangementen helder</h3>
              {' '}
              <p>
                Pakketten voor groepen, feestjes en bedrijven, met duidelijke prijzen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="gift" />
                </span>
              </div>
              {' '}
              <h3>Cadeaubonnen verkopen</h3>
              {' '}
              <p>
                Een extra inkomstenbron die het hele jaar doorloopt, automatisch geregeld.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="percent" />
                </span>
              </div>
              {' '}
              <h3>Doordeweekse acties</h3>
              {' '}
              <p>
                Stille dagen vullen met aanbiedingen die je zelf eenvoudig aanzet.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="images" />
                </span>
              </div>
              {' '}
              <h3>Beleving in beeld</h3>
              {' '}
              <p>
                Foto's en reviews die de sfeer overbrengen en twijfelaars overtuigen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat zo'n website nodig heeft">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Op maat voor jouw branche</span>
            {' '}
            <h2 className="h2">
              Wat een goede activiteitenwebsite
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen overbodige toeters, wel alles wat bezoekers nodig hebben om te boeken.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="calendar-check" />
              </span>
              <h4>Online reserveringssysteem</h4>
              <p>
                Direct een tijdslot boeken, gekoppeld aan je beschikbaarheid.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>Groepsaanvragen</h4>
              <p>
                Eenvoudig een uitje of feestje aanvragen met de juiste info ineen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="gift" />
              </span>
              <h4>Cadeaubonnen</h4>
              <p>Verkoop bonnen online, ook buiten openingstijden.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="info" />
              </span>
              <h4>Praktische info</h4>
              <p>Tijden, prijzen, route en huisregels in één oogopslag.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Mobiel-first</h4>
              <p>
                De meeste boekingen komen via de telefoon. Daar bouwen we op.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="star" />
              </span>
              <h4>Reviews & beleving</h4>
              <p>Sfeerbeeld en ervaringen die vertrouwen geven.</p>
            </Reveal>
          </div>
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
            <Qa question="Kan het reserveringssysteem aan mijn bestaande agenda gekoppeld worden?" className="reveal">
                In veel gevallen wel. We kijken naar het systeem dat je nu gebruikt en koppelen daarop aan, zodat beschikbaarheid altijd klopt en dubbele boekingen niet voorkomen.
            </Qa>
            {' '}
            <Qa question="Kan ik zelf acties en prijzen aanpassen?" className="reveal">
                Ja. Je beheert zelf eenvoudig je prijzen, arrangementen en doordeweekse acties, zonder dat je ons daarvoor nodig hebt.
            </Qa>
            {' '}
            <Qa question="Verkopen cadeaubonnen echt?" className="reveal">
                Voor veel activiteitenbedrijven zijn online cadeaubonnen een vaste, jaarrond inkomstenbron, juist rond feestdagen. We zetten ze prominent en makkelijk vindbaar neer.
            </Qa>
            {' '}
            <Qa question="Wat kost zo'n website?" className="reveal">
                Dat hangt af van wat je nodig hebt aan reserveringen en koppelingen. Begin met een gratis websitescan, dan brengen we het vrijblijvend voor je in kaart.
            </Qa>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Aan de slag</span>
            {' '}
            <h2 className="display">Klaar om ook de stille dagen te vullen?</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien waar je nu boekingen misloopt en hoe je dat omdraait.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag een gratis websitescan aan
                {' '}
                <span className="arr">→</span>
              </Link>
              {' '}
              <Link className="tlink" to="/contact">
                Plan een kennismaking
                {' '}
                <span className="arr">→</span>
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
