import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/branches/reserveringen')({
  head: () => ({
    meta: [
      { title: "Websites voor bedrijven met reserveringen — MegaOnline.io" },
      { name: 'description', content: "Een website voor bedrijven met reserveringen die gasten 24/7 laat boeken: realtime beschikbaarheid, bevestigingen, minder no-shows en minder telefoon." },
      { property: 'og:title', content: "Websites voor bedrijven met reserveringen — MegaOnline.io" },
      { property: 'og:description', content: "Een website voor bedrijven met reserveringen die gasten 24/7 laat boeken: realtime beschikbaarheid, bevestigingen, minder no-shows en minder telefoon." },
      { property: 'og:url', content: "https://megaonline.io/branches/reserveringen" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/branches/reserveringen" },
    ],
  }),
  component: Reserveringen,
})

function Reserveringen() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Bedrijven met reserveringen">
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
                <b>Bedrijven met reserveringen</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Bedrijven met reserveringen
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Laat gasten reserveren wanneer het
                {' '}
                <em>hén</em>
                {' '}
                uitkomt.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Restaurant, B&B, salon of praktijk: je gasten willen boeken op het moment dat ze eraan denken — vaak 's avonds op de bank. Wij bouwen een website die dat moeiteloos opvangt, dag en nacht.
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
              Reserveren gebeurt steeds vaker
              {' '}
              <em>buiten</em>
              {' '}
              je openingstijden.
            </h2>
            {' '}
            <p className="lead">
              We werken voor bedrijven waar een plek of moment gereserveerd wordt. Die markt heeft eigen knelpunten — en daar bouwen we de oplossing omheen.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Buiten openingstijden</h4>
                <p>
                  Mensen boeken 's avonds laat, juist als jij dicht bent en niet opneemt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Telefoon overbelast</h4>
                <p>
                  Elke reservering via de telefoon kost je personeel kostbare tijd.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>No-shows</h4>
                <p>
                  Onbevestigde boekingen leiden tot lege tafels, kamers of plekken.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Capaciteit bewaken</h4>
                <p>
                  Dubbele boekingen en overboekingen wil je koste wat kost voorkomen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Beleving verkoopt</h4>
                <p>
                  Sfeer en foto's bepalen vaak of iemand bij jou of de buurman boekt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Vaste gasten</h4>
                <p>
                  Terugkerend bezoek is goud waard. Dat wil je makkelijk maken.
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
              We maken reserveren
              {' '}
              <em>moeiteloos</em>
              {' '}
              — voor je gast én voor jou.
            </h2>
            {' '}
            <p className="lead">
              Een website die boekingen binnenhaalt op de momenten dat jij er niet bij kunt zijn, en je planning beschermt.
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
                <h3 style={{ marginTop: "18px" }}>Direct reserveren via je site</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  Gasten boeken in seconden een tafel, kamer of afspraak, met realtime beschikbaarheid. Gekoppeld aan je bestaande systeem, zodat je planning altijd klopt.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Boekingen binnen, dag en nacht —
                {' '}
                <em>zonder</em>
                {' '}
                dat jij erbij hoeft te zijn.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="clock" />
                </span>
              </div>
              {' '}
              <h3>24/7 beschikbaar</h3>
              {' '}
              <p>Boekingen komen binnen, ook als jij gesloten bent.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="bell" />
                </span>
              </div>
              {' '}
              <h3>Bevestiging & herinnering</h3>
              {' '}
              <p>Automatische berichten die no-shows flink terugdringen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="images" />
                </span>
              </div>
              {' '}
              <h3>Beleving in beeld</h3>
              {' '}
              <p>Sfeerbeeld dat gasten over de streep trekt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="smartphone" />
                </span>
              </div>
              {' '}
              <h3>Reserveren op mobiel</h3>
              {' '}
              <p>In een paar tikken geboekt, zonder gedoe.</p>
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
              Wat een goede reserveringswebsite
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Gericht op meer boekingen, minder telefoon en een planning die altijd klopt.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="calendar-check" />
              </span>
              <h4>Online reserveren</h4>
              <p>Realtime beschikbaarheid, direct bevestigd.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="plug" />
              </span>
              <h4>Koppeling met je systeem</h4>
              <p>
                Werkt samen met je bestaande reserverings- of kassasoftware.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="bell" />
              </span>
              <h4>Bevestiging & herinnering</h4>
              <p>Minder no-shows door automatische berichten.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="images" />
              </span>
              <h4>Sfeer & beleving</h4>
              <p>Beeld dat laat voelen waarom men juist bij jou boekt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Mobiel-first</h4>
              <p>De meeste reserveringen komen via de telefoon binnen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="repeat" />
              </span>
              <h4>Terugkerende gasten</h4>
              <p>Eenvoudig opnieuw boeken voor wie vaker komt.</p>
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
            <Qa question="Werkt dit samen met mijn huidige reserveringssysteem?" className="reveal">
                In veel gevallen wel. We koppelen waar mogelijk aan je bestaande systeem, zodat je niet dubbel werk hebt en je beschikbaarheid altijd actueel is.
            </Qa>
            {' '}
            <Qa question="Helpt dit echt tegen no-shows?" className="reveal">
                Ja. Automatische bevestigingen en herinneringen verlagen het aantal no-shows merkbaar, omdat gasten hun boeking makkelijk kunnen nakomen of tijdig wijzigen.
            </Qa>
            {' '}
            <Qa question="Kan ik mijn beschikbaarheid en sluitingsdagen zelf beheren?" className="reveal">
                Zeker. Je beheert zelf je tijden, capaciteit en uitzonderingen, zodat de website altijd toont wat klopt.
            </Qa>
            {' '}
            <Qa question="Wat kost zo'n website?" className="reveal">
                Dat hangt af van het reserveringssysteem en de koppelingen die je wilt. Met een gratis websitescan brengen we het vrijblijvend in kaart.
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
            <h2 className="display">Klaar om dag en nacht reserveringen op te vangen?</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien hoeveel boekingen je nu buiten openingstijden misloopt.
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
