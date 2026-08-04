import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-diensten-webapps.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/diensten/webapps')({
  head: () => ({
    meta: [
      { title: "" },
      { property: 'og:title', content: "" },
      { property: 'og:url', content: "https://megaonline.io/concept/diensten/webapps" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/diensten/webapps" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: Webapps,
})

function Webapps() {
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
                  <span>Webapps</span>
                </Reveal>
                {' '}
                <Reveal as="div" className="dienst-badge reveal">
                  <div className="dienst-badge-dot" />
                  {' '}
                  <span className="label" style={{ color: "var(--green)" }}>Dienst</span>
                </Reveal>
                {' '}
                <Reveal as="h1" className="reveal reveal-delay-1">Webapps</Reveal>
                {' '}
                <Reveal as="p" className="lead reveal reveal-delay-2">
                  Standaardsoftware past niet altijd. Wij bouwen webapplicaties op maat voor jouw specifieke werkproces, schaalbaar, veilig en prettig in gebruik.
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
                <div className="dienst-hero-visual-num">04</div>
                {' '}
                <div style={{ position: "absolute", top: "20px", right: "20px", width: "56px", height: "56px", borderRadius: "14px", background: "var(--green-light)", border: "1px solid rgba(26,77,46,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="settings-2" />
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
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Wat we doen bij webapps</Reveal>
            </div>
            {' '}
            <div className="features-grid">
              <Reveal as="div" className="feature-card reveal reveal-delay-1">
                <div className="feature-icon">
                  <Icon name="code-2" />
                </div>
                {' '}
                <h3>Volledig op maat</h3>
                {' '}
                <p>Geen compromis: de app werkt precies zoals jij dat wilt.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-2">
                <div className="feature-icon">
                  <Icon name="users" />
                </div>
                {' '}
                <h3>Rollen & rechten</h3>
                {' '}
                <p>
                  Meerdere gebruikers met eigen dashboards en toegangsniveaus.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-3">
                <div className="feature-icon">
                  <Icon name="link" />
                </div>
                {' '}
                <h3>API-koppelingen</h3>
                {' '}
                <p>Verbind met je bestaande systemen: CRM, ERP, boekhouding.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-1">
                <div className="feature-icon">
                  <Icon name="shield" />
                </div>
                {' '}
                <h3>Veilig & schaalbaar</h3>
                {' '}
                <p>Cloudhosting met automatische schaalbaarheid en backups.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-2">
                <div className="feature-icon">
                  <Icon name="layout-dashboard" />
                </div>
                {' '}
                <h3>Admin dashboard</h3>
                {' '}
                <p>Overzichtelijk beheerportaal voor jou en je team.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-3">
                <div className="feature-icon">
                  <Icon name="activity" />
                </div>
                {' '}
                <h3>Realtime data</h3>
                {' '}
                <p>Live dashboards, notificaties en rapportages.</p>
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
                  <p>Processen en requirements in kaart</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-2">
                <div className="step-num">02</div>
                {' '}
                <div>
                  <h3>Architectuur</h3>
                  {' '}
                  <p>Tech-stack en data-model bepalen</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-3">
                <div className="step-num">03</div>
                {' '}
                <div>
                  <h3>Sprints</h3>
                  {' '}
                  <p>Agile bouwen, elke sprint een demo</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-4">
                <div className="step-num">04</div>
                {' '}
                <div>
                  <h3>Overdracht</h3>
                  {' '}
                  <p>Live + training + documentatie</p>
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
                  Voor welke bedrijven bouwen jullie webapps?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Van ZZP'er tot MKB, als je een specifiek werkproces wil automatiseren of een product wil bouwen.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Kan de webapp koppelen met mijn huidige software?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Vrijwel altijd. Wij koppelen via API's met Exact, Salesforce, HubSpot, Google Workspace en veel meer.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Wie heeft de broncode?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Jij altijd. We leveren met volledige broncode, documentatie en liefst ook kennis-overdracht aan je eigen team.
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
              <h2>Een webapp die jouw werkproces versnelt?</h2>
              {' '}
              <p>Vertel ons het probleem, wij bedenken de oplossing.</p>
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
