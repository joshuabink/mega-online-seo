import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-diensten-content.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/diensten/content')({
  head: () => ({
    meta: [
      { title: "MegaOnline · Foto, video & content" },
      { property: 'og:title', content: "MegaOnline · Foto, video & content" },
      { property: 'og:url', content: "https://megaonline.io/concept/diensten/content" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/diensten/content" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: Content,
})

function Content() {
  return (
    <div className="legacy-concept">
        <nav>
          <a href="../MegaOnline Landing Page.html" className="nav-logo">
            Mega
            <span>Online</span>
          </a>
          {' '}
          <div className="nav-links">
            <div className="nav-item" id="nav-diensten">
              <a href="../MegaOnline Landing Page.html#diensten">
                Wat we bouwen
                {' '}
                <svg className="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </a>
              {' '}
              <div className="mega-menu">
                <div className="mega-grid">
                  <Link className="mega-card" to="/concept/diensten/websites" style={{ background: "var(--green-pale)", borderColor: "rgba(26,77,46,.15)" }}>
                    <div className="mega-icon" style={{ background: "var(--green)", borderColor: "var(--green)" }}>
                      <Icon name="target" />
                    </div>
                    <div className="mega-card-text">
                      <h4>
                        Lead-websites
                        {' '}
                        <span style={{ background: "var(--green)", color: "#fff", fontSize: "9px", padding: "1px 5px", borderRadius: "3px", verticalAlign: "middle" }}>CORE</span>
                      </h4>
                      <p>Bezoekers omzetten in aanvragen.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/diensten/webapps">
                    <div className="mega-icon">
                      <Icon name="layout-dashboard" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Klantportalen</h4>
                      <p>Planning, offertes & service op één plek.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/diensten/content">
                    <div className="mega-icon">
                      <Icon name="camera" />
                    </div>
                    <div className="mega-card-text">
                      <h4>
                        Foto, video & content
                        {' '}
                        <span style={{ background: "var(--green)", color: "#fff", fontSize: "9px", padding: "1px 5px", borderRadius: "3px", verticalAlign: "middle" }}>NIEUW</span>
                      </h4>
                      <p>On-locatie content voor site & social.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/diensten/mobiele-apps">
                    <div className="mega-icon">
                      <Icon name="smartphone" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Mobiele apps</h4>
                      <p>Voor klanten of werknemers op locatie.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/diensten/automatiseringen">
                    <div className="mega-icon">
                      <Icon name="zap" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Automatiseringen</h4>
                      <p>Opvolging, offertes & admin op autopilot.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/diensten/ai-chatbot">
                    <div className="mega-icon">
                      <Icon name="bot" />
                    </div>
                    <div className="mega-card-text">
                      <h4>AI-assistent</h4>
                      <p>Kwalificeert leads, boekt afspraken.</p>
                    </div>
                  </Link>
                </div>
                {' '}
                <div className="mega-footer">
                  <div className="mega-also">
                    <span>Ook:</span>
                    {' '}
                    <Link className="mega-pill" to="/concept/diensten/huisstijl">
                      <Icon name="palette" />
                      {' '}
                      Merk & identiteit
                    </Link>
                    {' '}
                    <Link className="mega-pill" to="/concept/diensten/webshops">
                      <Icon name="shopping-cart" />
                      {' '}
                      Webshops
                    </Link>
                    {' '}
                    <Link className="mega-pill" to="/concept/diensten/systeemkoppelingen">
                      <Icon name="link" />
                      {' '}
                      Systeemkoppelingen
                    </Link>
                  </div>
                  {' '}
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary" style={{ padding: "7px 14px", fontSize: "12px" }}>Plan een groei-call →</a>
                </div>
              </div>
            </div>
            {' '}
            <div className="nav-item" id="nav-branches">
              <Link to="/">
                Branches
                {' '}
                <svg className="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </Link>
              {' '}
              <div className="mega-menu">
                <div className="mega-grid">
                  <Link className="mega-card" to="/concept/branches/zonnepanelen">
                    <div className="mega-icon">
                      <Icon name="sun" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Zonnepanelen</h4>
                      <p>Offerteaanvragen op autopilot.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/branches/installateurs">
                    <div className="mega-icon">
                      <Icon name="wrench" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Installateurs</h4>
                      <p>Service-aanvragen, automatisch gepland.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/branches/sportscholen">
                    <div className="mega-icon">
                      <Icon name="dumbbell" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Sportscholen</h4>
                      <p>Meer leden, minder no-shows.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/branches/bootverhuur">
                    <div className="mega-icon">
                      <Icon name="anchor" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Bootverhuur</h4>
                      <p>24/7 online reserveringen.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/branches/schoonmaakbedrijven">
                    <div className="mega-icon">
                      <Icon name="sparkles" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Schoonmaak</h4>
                      <p>Aanvraag binnen, offerte er meteen uit.</p>
                    </div>
                  </Link>
                  {' '}
                  <Link className="mega-card" to="/concept/branches/detailing-wrap">
                    <div className="mega-icon">
                      <Icon name="car" />
                    </div>
                    <div className="mega-card-text">
                      <h4>Detailing & Wrap</h4>
                      <p>Vakmanschap dat zichzelf verkoopt.</p>
                    </div>
                  </Link>
                </div>
                {' '}
                <div className="mega-footer">
                  <div className="mega-also">
                    <span>Ook:</span>
                    {' '}
                    <Link className="mega-pill" to="/concept/branches/aannemers">
                      <Icon name="hammer" />
                      {' '}
                      Aannemers
                    </Link>
                    {' '}
                    <Link className="mega-pill" to="/concept/branches/agencies">
                      <Icon name="briefcase" />
                      {' '}
                      Agencies
                    </Link>
                    {' '}
                    <Link className="mega-pill" to="/concept/branches/lokale-diensten">
                      <Icon name="map-pin" />
                      {' '}
                      Lokale diensten
                    </Link>
                  </div>
                  {' '}
                  <Link to="/" className="btn btn-primary" style={{ padding: "7px 14px", fontSize: "12px" }}>Alle branches →</Link>
                </div>
              </div>
            </div>
            {' '}
            <a href="../MegaOnline Landing Page.html#werkwijze">Werkwijze</a>
            {' '}
            <a href="../MegaOnline Landing Page.html#portfolio">Cases</a>
            {' '}
            <a href="../MegaOnline Landing Page.html#faq">FAQ</a>
          </div>
          {' '}
          <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>Plan een groei-call</a>
        </nav>
        {' '}
        {' '}
        <section className="dienst-hero">
          <div className="container">
            <div className="dienst-hero-inner">
              <div>
                <Reveal as="div" className="breadcrumb reveal">
                  <a href="../MegaOnline Landing Page.html">Home</a>
                  {' '}
                  <span className="sep">›</span>
                  {' '}
                  <a href="../MegaOnline Landing Page.html#diensten">Wat we bouwen</a>
                  {' '}
                  <span className="sep">›</span>
                  {' '}
                  <span>Foto, video & content</span>
                </Reveal>
                {' '}
                <Reveal as="div" className="dienst-badge reveal">
                  <div className="dienst-badge-dot" />
                  {' '}
                  <span className="label" style={{ color: "var(--green)" }}>Dienst · Nieuw</span>
                </Reveal>
                {' '}
                <Reveal as="h1" className="reveal reveal-delay-1">
                  Beeld dat klanten
                  <br />
                  overtuigt
                </Reveal>
                {' '}
                <Reveal as="p" className="lead reveal reveal-delay-2">
                  Wij komen langs voor foto’s, bedrijfsvideo of social content. Eenmalig bij oplevering van je nieuwe site, of maandelijks als je social agenda altijd vol moet staan. Klaar voor gebruik op je website én alle kanalen.
                </Reveal>
                {' '}
                <Reveal as="div" className="hero-ctas reveal reveal-delay-3">
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary btn-lg">Plan een content-shoot →</a>
                  {' '}
                  <a href="#packages" className="btn btn-ghost btn-lg">Bekijk pakketten</a>
                </Reveal>
              </div>
              {' '}
              <Reveal as="div" className="dienst-hero-visual reveal reveal-delay-2">
                <div className="dienst-hero-visual-num">★</div>
                {' '}
                <div style={{ position: "absolute", top: "20px", right: "20px", width: "56px", height: "56px", borderRadius: "14px", background: "var(--green-light)", border: "1px solid rgba(26,77,46,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="camera" />
                </div>
                {' '}
                <div style={{ position: "absolute", bottom: "20px", left: "20px", display: "flex", gap: "8px" }}>
                  <div style={{ padding: "5px 10px", background: "rgba(255,255,255,.85)", border: "1px solid rgba(26,77,46,.12)", borderRadius: "20px", fontSize: "11px", fontWeight: "600", color: "var(--green)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <Icon name="camera" />
                    {' '}
                    Foto
                  </div>
                  {' '}
                  <div style={{ padding: "5px 10px", background: "rgba(255,255,255,.85)", border: "1px solid rgba(26,77,46,.12)", borderRadius: "20px", fontSize: "11px", fontWeight: "600", color: "var(--green)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <Icon name="video" />
                    {' '}
                    Video
                  </div>
                  {' '}
                  <div style={{ padding: "5px 10px", background: "rgba(255,255,255,.85)", border: "1px solid rgba(26,77,46,.12)", borderRadius: "20px", fontSize: "11px", fontWeight: "600", color: "var(--green)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <Icon name="instagram" />
                    {' '}
                    Social
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="formats" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ marginBottom: "40px", maxWidth: "560px" }}>
              <Reveal as="div" className="label reveal">Wat we leveren</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Content voor elk kanaal</Reveal>
              {' '}
              <Reveal as="p" className="reveal reveal-delay-2" style={{ fontSize: "15px", marginTop: "10px", maxWidth: "520px" }}>
                Je krijgt geen losse bestanden, maar een complete content-bibliotheek, klaar voor je website, social media en advertenties.
              </Reveal>
            </div>
            {' '}
            <div className="formats-grid">
              <Reveal as="div" className="format-card reveal reveal-delay-1">
                <div className="format-icon">
                  <Icon name="camera" />
                </div>
                {' '}
                <h4>Bedrijfs- & portretfoto</h4>
                {' '}
                <p>
                  Team, locatie, sfeer en proces. Editorial-stijl voor je over-ons en cases.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-2">
                <div className="format-icon">
                  <Icon name="film" />
                </div>
                {' '}
                <h4>Bedrijfsvideo</h4>
                {' '}
                <p>
                  1 tot 3 minuten. Wie ben je, wat doe je, waarom kiezen klanten voor jou.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-3">
                <div className="format-icon">
                  <Icon name="instagram" />
                </div>
                {' '}
                <h4>Social reels & shorts</h4>
                {' '}
                <p>
                  Verticale clips voor Instagram, TikTok en YouTube Shorts. Vertical-first.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-1">
                <div className="format-icon">
                  <Icon name="image" />
                </div>
                {' '}
                <h4>Productfoto’s</h4>
                {' '}
                <p>
                  Voor je webshop, configurator of portfolio. Op locatie of in studio.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-2">
                <div className="format-icon">
                  <Icon name="play" />
                </div>
                {' '}
                <h4>Promotievideo</h4>
                {' '}
                <p>
                  Voor advertenties, hero-secties of pitch-decks. Cinematic of vlog-stijl.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-3">
                <div className="format-icon">
                  <Icon name="user" />
                </div>
                {' '}
                <h4>Klant-testimonials</h4>
                {' '}
                <p>
                  Korte interviews on-locatie. Vertrouwen waar je niets aan hoeft te doen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-1">
                <div className="format-icon">
                  <Icon name="map" />
                </div>
                {' '}
                <h4>Drone & locatie</h4>
                {' '}
                <p>
                  Luchtbeelden van je werk, locatie of project. Voor bouw, vastgoed, events.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="format-card reveal reveal-delay-2">
                <div className="format-icon">
                  <Icon name="message-circle" />
                </div>
                {' '}
                <h4>Voice-over & ondertiteling</h4>
                {' '}
                <p>
                  Professionele NL/EN voice-over, hardcoded ondertitels voor social.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="packages" className="dienst-steps">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <Reveal as="div" className="label reveal">Pakketten</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Eenmalig of doorlopend</Reveal>
              {' '}
              <Reveal as="p" className="reveal reveal-delay-2" style={{ fontSize: "15px", marginTop: "10px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
                Drie manieren om met ons te werken. Elk pakket is een vertrekpunt, we passen aan op jouw situatie en doelen.
              </Reveal>
            </div>
            {' '}
            <div className="packages-grid">
              <Reveal as="div" className="pkg-card reveal reveal-delay-1">
                <div>
                  <div className="pkg-price-from">Vanaf</div>
                  {' '}
                  <div className="pkg-price">
                    €1.250
                    {' '}
                    <span className="pkg-price-unit">eenmalig</span>
                  </div>
                </div>
                {' '}
                <h3 className="pkg-name">Launch-shoot</h3>
                {' '}
                <p style={{ fontSize: "14px" }}>
                  Eenmalige content-dag bij oplevering van je nieuwe website. Genoeg materiaal voor hero, over-ons, diensten en cases.
                </p>
                {' '}
                <ul className="pkg-list">
                  <li>1 dag op locatie (max 6 uur)</li>
                  {' '}
                  <li>20+ geretoucheerde foto’s</li>
                  {' '}
                  <li>1 bedrijfsvideo (60–90 sec)</li>
                  {' '}
                  <li>3 social reels (15–30 sec)</li>
                  {' '}
                  <li>Alle bestanden web-optimized</li>
                  {' '}
                  <li>Levering binnen 2 weken</li>
                </ul>
                {' '}
                <div className="pkg-cta">
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Plan launch-shoot →</a>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="pkg-card featured reveal reveal-delay-2">
                <div className="pkg-tag">Populair</div>
                {' '}
                <div>
                  <div className="pkg-price-from">Vanaf</div>
                  {' '}
                  <div className="pkg-price">
                    €795
                    {' '}
                    <span className="pkg-price-unit">/ maand</span>
                  </div>
                </div>
                {' '}
                <h3 className="pkg-name">Content-abonnement</h3>
                {' '}
                <p style={{ fontSize: "14px" }}>
                  We komen elke maand één dag langs en leveren nieuwe content. Jouw social agenda staat altijd vol, zonder erover na te denken.
                </p>
                {' '}
                <ul className="pkg-list">
                  <li>1 shoot-dag per maand</li>
                  {' '}
                  <li>15+ foto’s per shoot</li>
                  {' '}
                  <li>4 social reels per maand</li>
                  {' '}
                  <li>1 langere video per kwartaal</li>
                  {' '}
                  <li>Content-planning & thema’s</li>
                  {' '}
                  <li>Maandelijks opzegbaar</li>
                </ul>
                {' '}
                <div className="pkg-cta">
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Start abonnement →</a>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="pkg-card reveal reveal-delay-3">
                <div>
                  <div className="pkg-price-from">Op aanvraag</div>
                  {' '}
                  <div className="pkg-price" style={{ fontSize: "24px" }}>Maatwerk</div>
                </div>
                {' '}
                <h3 className="pkg-name">Productie op maat</h3>
                {' '}
                <p style={{ fontSize: "14px" }}>
                  Grote bedrijfsvideo, campagne-content of meerdaagse productie. We schalen mee: van concept tot aflevering.
                </p>
                {' '}
                <ul className="pkg-list">
                  <li>Concept & storyboard</li>
                  {' '}
                  <li>Meerdere shoot-dagen</li>
                  {' '}
                  <li>Acteurs, drone, studio op maat</li>
                  {' '}
                  <li>Animatie, motion design</li>
                  {' '}
                  <li>Distributie-strategie</li>
                  {' '}
                  <li>End-to-end projectmanagement</li>
                </ul>
                {' '}
                <div className="pkg-cta">
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Bespreek je project →</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="features" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ marginBottom: "48px", textAlign: "center" }}>
              <Reveal as="div" className="label reveal">Onze aanpak</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Zo werken we op shoot-dag</Reveal>
            </div>
            {' '}
            <div className="steps-row">
              <Reveal as="div" className="step-item reveal reveal-delay-1">
                <div className="step-num">01</div>
                {' '}
                <div>
                  <h3>Voorbereiding</h3>
                  {' '}
                  <p>
                    Shotlist op basis van jouw site en doelen. Locaties & tijden helder.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-2">
                <div className="step-num">02</div>
                {' '}
                <div>
                  <h3>Shoot-dag</h3>
                  {' '}
                  <p>
                    Wij regelen camera, licht en regie. Jij doet je werk, wij vangen het op.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-3">
                <div className="step-num">03</div>
                {' '}
                <div>
                  <h3>Editing</h3>
                  {' '}
                  <p>Selectie, retouche en montage. Eerste versie binnen 1 week.</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-4">
                <div className="step-num">04</div>
                {' '}
                <div>
                  <h3>Levering</h3>
                  {' '}
                  <p>
                    Alle formats web-optimized, klaar voor je site en social kanalen.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "var(--bg-white)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Reveal as="div" className="label reveal">Veelgestelde vragen</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>FAQ</Reveal>
            </div>
            {' '}
            <Reveal as="div" className="faq-list reveal reveal-delay-2">
              <div className="faq-item">
                <div className="faq-q">
                  Wat als ik alleen foto’s wil, geen video?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Geen probleem. We stellen elk pakket op maat samen. Alleen foto’s is goedkoper, vraag een aangepaste offerte aan.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Werken jullie in heel Nederland?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Ja. Binnen 50 km van Amsterdam zonder reiskosten, daarbuiten rekenen we een reisvergoeding. Voor meerdaagse producties komen we overal.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Mag ik de content overal gebruiken?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Ja. Je krijgt volledig gebruiksrecht voor je eigen kanalen (website, social, advertenties, drukwerk). Geen extra licenties of nabetalingen.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Hoe lang duurt het tot ik de content heb?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Foto’s krijg je binnen 1 week na de shoot. Video’s binnen 2 weken (inclusief 1 ronde feedback). Spoed mogelijk in overleg.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Kan dit gecombineerd met een nieuwe website?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Sterker nog: dat raden we aan. Bij een nieuw lead-site traject plannen we vaak een launch-shoot in week 2 of 3 zodat we direct met jouw eigen beeld kunnen ontwerpen, geen stockfoto’s.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        {' '}
        {' '}
        <section className="dienst-cta">
          <div className="container">
            <div className="dienst-cta-inner">
              <div className="label" style={{ color: "rgba(255,255,255,.5)", marginBottom: "12px" }}>Stap 1 is gratis</div>
              {' '}
              <h2>Klaar om jouw verhaal in beeld te zetten?</h2>
              {' '}
              <p>
                Plan een gesprek van 20 minuten. We kijken naar je site, kanalen en doelen, en stellen het juiste pakket voor.
              </p>
              {' '}
              <a href="../MegaOnline Landing Page.html#contact" className="btn btn-white btn-lg">Plan een groei-call →</a>
            </div>
          </div>
        </section>
        {' '}
        <footer>
          <div className="logo-f">
            Mega
            <span>Online</span>
          </div>
          {' '}
          <div style={{ fontSize: "13px" }}>© 2026 MegaOnline · Amsterdam</div>
          {' '}
          <div className="footer-links">
            <a href="#">Privacybeleid</a>
            {' '}
            <a href="#">Algemene voorwaarden</a>
            {' '}
            <a href="#">Werken bij</a>
          </div>
        </footer>
        {' '}
    </div>
  )
}
