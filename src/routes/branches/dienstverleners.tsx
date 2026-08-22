import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/branches/dienstverleners')({
  head: () => ({
    meta: [
      { title: "Websites voor dienstverleners | MegaOnline.io" },
      { name: 'description', content: "Een website voor dienstverleners die vertrouwen wekt en aanvragen oplevert: heldere propositie, bewezen expertise en een duidelijke route naar contact." },
      { property: 'og:title', content: "Websites voor dienstverleners | MegaOnline.io" },
      { property: 'og:description', content: "Een website voor dienstverleners die vertrouwen wekt en aanvragen oplevert: heldere propositie, bewezen expertise en een duidelijke route naar contact." },
      { property: 'og:url', content: "https://megaonline.io/branches/dienstverleners" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/branches/dienstverleners" },
    ],
  }),
  component: Dienstverleners,
})

function Dienstverleners() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Dienstverleners">
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
                <b>Dienstverleners</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Dienstverleners
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Laat je website het
                {' '}
                <em>vertrouwen</em>
                {' '}
                wekken dat jij verdient.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Als dienstverlener verkoop je geen product, maar jezelf en je expertise. Wij bouwen een website die in één oogopslag duidelijk maakt wat je doet, voor wie, en waarom mensen juist jou moeten kiezen.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/gratis-websitescan">
                  Vraag je gratis scan aan
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
              Een dienst is
              {' '}
              <em>abstract.</em>
              {' '}
              Vertrouwen maakt het concreet.
            </h2>
            {' '}
            <p className="lead">
              We werken voor adviseurs, bureaus en specialisten. Die markt verkoopt op vertrouwen, en daar richten we de hele website op in.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Onzichtbare waarde</h4>
                <p>
                  Je werk is niet tastbaar. Bezoekers moeten 'm voelen voordat ze 'm snappen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Vertrouwen eerst</h4>
                <p>
                  Mensen kiezen een partij, geen product. Geloofwaardigheid is je belangrijkste asset.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Lange beslistrajecten</h4>
                <p>
                  Vaak beslist niet één persoon, en wordt er vergeleken voordat men contact opneemt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Expertise bewijzen</h4>
                <p>
                  'Waarom jij?' moet beantwoord zijn voordat iemand de telefoon pakt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Aanvragen, geen verkoop</h4>
                <p>
                  Je hebt geen webshop nodig, maar een soepele route naar een goed gesprek.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Referenties tellen</h4>
                <p>
                  Cases, cijfers en reviews doen vaak meer dan welke mooie tekst dan ook.
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
              We maken je
              {' '}
              <em>waarde</em>
              {' '}
              meteen duidelijk.
            </h2>
            {' '}
            <p className="lead">
              Een website die niet om jou draait, maar om het probleem dat je voor je klant oplost, en die laat zien dat je dat kunt.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="target" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Een propositie die in seconden landt</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  Bezoekers begrijpen direct wat je doet, voor wie en wat het oplevert. Geen vakjargon, wel herkenning bij precies de klant die je zoekt.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Bezoekers snappen meteen
                {' '}
                <em>waarom</em>
                {' '}
                ze juist jou moeten kiezen.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="award" />
                </span>
              </div>
              {' '}
              <h3>Expertise & cases</h3>
              {' '}
              <p>Concreet bewijs dat je levert wat je belooft.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="shield-check" />
                </span>
              </div>
              {' '}
              <h3>Vertrouwenssignalen</h3>
              {' '}
              <p>Reviews, logo's en cijfers op de juiste plek.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="mail" />
                </span>
              </div>
              {' '}
              <h3>Heldere aanvraagroute</h3>
              {' '}
              <p>Eén duidelijke volgende stap, zonder drempels.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="search" />
                </span>
              </div>
              {' '}
              <h3>Gevonden op je dienst</h3>
              {' '}
              <p>Vindbaar bij mensen die actief naar jouw expertise zoeken.</p>
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
              Wat een goede dienstverlenerswebsite
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Gericht op vertrouwen en kwalitatieve aanvragen, niet op zoveel mogelijk klikken.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="target" />
              </span>
              <h4>Scherpe propositie</h4>
              <p>Duidelijk wat je doet en voor wie, meteen op de homepage.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="award" />
              </span>
              <h4>Cases & resultaten</h4>
              <p>Echte voorbeelden die je expertise onderbouwen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="quote" />
              </span>
              <h4>Reviews & referenties</h4>
              <p>Sociale bewijskracht die twijfel wegneemt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>Het gezicht erachter</h4>
              <p>Mensen doen zaken met mensen. Laat zien wie je bent.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="mail" />
              </span>
              <h4>Duidelijke aanvraag</h4>
              <p>Een laagdrempelige route naar een eerste gesprek.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>Vindbaar op je dienst</h4>
              <p>Een gezonde SEO-basis op de termen die jouw klant gebruikt.</p>
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
            <Qa question="Ik heb geen tastbaar product. Hoe maak je dat aantrekkelijk?" className="reveal">
                Door te focussen op het probleem dat je oplost en het resultaat dat je levert. We vertalen je expertise naar herkenbare situaties en concreet bewijs, zodat de waarde meteen voelbaar is.
            </Qa>
            {' '}
            <Qa question="Heb ik cases nodig als ik net begin?" className="reveal">
                Niet per se. Ook zonder uitgebreide cases bouwen we vertrouwen op met een sterke propositie, een helder verhaal en de juiste vertrouwenssignalen. Cases voegen we later eenvoudig toe.
            </Qa>
            {' '}
            <Qa question="Levert dit echt meer aanvragen op?" className="reveal">
                Een website die vertrouwen wekt en een duidelijke volgende stap biedt, verlaagt de drempel om contact op te nemen. Met een gratis websitescan laten we zien waar je nu aanvragen misloopt.
            </Qa>
            {' '}
            <Qa question="Wat kost zo'n website?" className="reveal">
                Dat hangt af van de omvang en je wensen. Begin vrijblijvend met een gratis websitescan, dan brengen we het samen in kaart.
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
            <h2 className="display">Vertrouwen win je voordat de telefoon gaat.</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien hoe je website meer van de juiste klanten kan aantrekken.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag je gratis scan aan
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
