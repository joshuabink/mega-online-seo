import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-diensten-systeemkoppelingen.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/diensten/systeemkoppelingen')({
  head: () => ({
    meta: [
      { title: "" },
      { property: 'og:title', content: "" },
      { property: 'og:url', content: "https://megaonline.io/concept/diensten/systeemkoppelingen" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/diensten/systeemkoppelingen" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: Systeemkoppelingen,
})

function Systeemkoppelingen() {
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
                  <a href="../MegaOnline Landing Page.html#diensten">Diensten</a>
                  {' '}
                  <span className="sep">›</span>
                  {' '}
                  <span>Systeemkoppelingen</span>
                </Reveal>
                {' '}
                <Reveal as="div" className="dienst-badge reveal">
                  <div className="dienst-badge-dot" />
                  {' '}
                  <span className="label" style={{ color: "var(--green)" }}>Dienst</span>
                </Reveal>
                {' '}
                <Reveal as="h1" className="reveal reveal-delay-1">Systeemkoppelingen</Reveal>
                {' '}
                <Reveal as="p" className="lead reveal reveal-delay-2">
                  CRM, ERP, webshop, boekhouding, planning: wij laten je systemen met elkaar praten via slimme API-koppelingen en data-integraties. Minder handmatig werk, minder fouten.
                </Reveal>
                {' '}
                <Reveal as="div" className="hero-ctas reveal reveal-delay-3">
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary btn-lg">Plan een groei-call →</a>
                  {' '}
                  <a href="#features" className="btn btn-ghost btn-lg">Wat we doen</a>
                </Reveal>
              </div>
              {' '}
              <Reveal as="div" className="dienst-hero-visual reveal reveal-delay-2">
                <div className="dienst-hero-visual-num">06</div>
                {' '}
                <div style={{ position: "absolute", top: "20px", right: "20px", width: "56px", height: "56px", borderRadius: "14px", background: "var(--green-light)", border: "1px solid rgba(26,77,46,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="link" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="features" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ marginBottom: "48px" }}>
              <Reveal as="div" className="label reveal">Wat je krijgt</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Wat we doen bij systeemkoppelingen</Reveal>
            </div>
            {' '}
            <div className="features-grid">
              <Reveal as="div" className="feature-card reveal reveal-delay-1">
                <div className="feature-icon">
                  <Icon name="refresh-cw" />
                </div>
                {' '}
                <h3>Realtime sync</h3>
                {' '}
                <p>Data altijd up-to-date in alle gekoppelde systemen.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-2">
                <div className="feature-icon">
                  <Icon name="shield-check" />
                </div>
                {' '}
                <h3>Betrouwbaar & veilig</h3>
                {' '}
                <p>Foutafhandeling, logging en monitoring ingebakken.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-3">
                <div className="feature-icon">
                  <Icon name="plug" />
                </div>
                {' '}
                <h3>Breed platform-aanbod</h3>
                {' '}
                <p>Exact, Salesforce, HubSpot, Shopify, SAP en meer.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-1">
                <div className="feature-icon">
                  <Icon name="code-2" />
                </div>
                {' '}
                <h3>Maatwerk API</h3>
                {' '}
                <p>Geen kant-en-klare koppeling? Wij bouwen hem zelf.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-2">
                <div className="feature-icon">
                  <Icon name="activity" />
                </div>
                {' '}
                <h3>Monitoring</h3>
                {' '}
                <p>Realtime inzicht in koppelingsverkeer en fouten.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-3">
                <div className="feature-icon">
                  <Icon name="wrench" />
                </div>
                {' '}
                <h3>Onderhoud & support</h3>
                {' '}
                <p>Doorlopend beheer van koppelingen na oplevering.</p>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section className="dienst-steps">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <Reveal as="div" className="label reveal">Onze aanpak</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Zo werken we</Reveal>
            </div>
            {' '}
            <div className="steps-row">
              <Reveal as="div" className="step-item reveal reveal-delay-1">
                <div className="step-num">01</div>
                {' '}
                <div>
                  <h3>Analyse</h3>
                  {' '}
                  <p>Welke systemen, welke data, welk doel</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-2">
                <div className="step-num">02</div>
                {' '}
                <div>
                  <h3>Architectuur</h3>
                  {' '}
                  <p>Data-model en koppelingsstrategie</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-3">
                <div className="step-num">03</div>
                {' '}
                <div>
                  <h3>Bouw & test</h3>
                  {' '}
                  <p>Koppelingen bouwen, testen op fouten</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-4">
                <div className="step-num">04</div>
                {' '}
                <div>
                  <h3>Live</h3>
                  {' '}
                  <p>Productie-launch + monitoring activeren</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "var(--bg)" }}>
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
                  Met welke systemen werken jullie?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Exact, AFAS, Salesforce, HubSpot, WooCommerce, Shopify, SAP, Google Workspace en meer. Vraag gerust naar jouw specifieke situatie.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Wat als er geen kant-en-klare koppeling is?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Dan bouwen we een maatwerk integratie via de beschikbare API of via bestandsuitwisseling (CSV/XML/SFTP).
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Wat als een koppeling uitvalt?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    We bouwen met foutafhandeling en alerts. Bij een storing krijg jij direct een notificatie en lossen we het op.
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
              <h2>Klaar om je systemen te verbinden?</h2>
              {' '}
              <p>
                Vertel ons welke systemen je gebruikt, wij kijken wat mogelijk is.
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
