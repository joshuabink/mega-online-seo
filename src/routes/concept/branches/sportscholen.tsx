import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-branches-sportscholen.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/branches/sportscholen')({
  head: () => ({
    meta: [
      { title: "MegaOnline · Sportscholen" },
      { property: 'og:title', content: "MegaOnline · Sportscholen" },
      { property: 'og:url', content: "https://megaonline.io/concept/branches/sportscholen" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/branches/sportscholen" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: Sportscholen,
})

function Sportscholen() {
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
        <section className="branche-hero">
          <div className="container">
            <div className="branche-hero-inner">
              <div>
                <Reveal as="div" className="breadcrumb reveal">
                  <a href="../MegaOnline Landing Page.html">Home</a>
                  {' '}
                  <span className="sep">›</span>
                  {' '}
                  <Link to="/">Branches</Link>
                  {' '}
                  <span className="sep">›</span>
                  {' '}
                  <span>Sportscholen</span>
                </Reveal>
                {' '}
                <Reveal as="div" className="branche-badge reveal">
                  <div className="branche-badge-dot" />
                  {' '}
                  <span className="label" style={{ color: "var(--green)" }}>Voor sportscholen & studios</span>
                </Reveal>
                {' '}
                <Reveal as="h1" className="reveal reveal-delay-1">Meer leden, minder no-shows</Reveal>
                {' '}
                <Reveal as="p" className="lead reveal reveal-delay-2">
                  Een lead-site die proefweken verkoopt, gekoppeld aan een ledenportaal waarin leden zelf hun lessen en afspraken regelen. Jij blijft op de vloer, niet achter de balie.
                </Reveal>
                {' '}
                <Reveal as="div" className="hero-ctas reveal reveal-delay-3">
                  <a href="../MegaOnline Landing Page.html#contact" className="btn btn-primary btn-lg">
                    Plan een groei-call
                    {' '}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                  {' '}
                  <a href="#wat-we-bouwen" className="btn btn-ghost btn-lg">Wat we bouwen</a>
                </Reveal>
              </div>
              {' '}
              <Reveal as="div" className="branche-hero-visual reveal reveal-delay-2">
                <div className="branche-hero-deco tl">S</div>
                {' '}
                <div className="branche-hero-deco br">S</div>
                {' '}
                <div className="branche-hero-icon-big">
                  <Icon name="dumbbell" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section>
          <div className="container">
            <div style={{ marginBottom: "48px", maxWidth: "560px" }}>
              <Reveal as="div" className="label reveal">Wat speelt er</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>De bottlenecks die je vast herkent</Reveal>
            </div>
            {' '}
            <div className="pains-grid">
              <Reveal as="div" className="pain-card reveal reveal-delay-1">
                <div className="pain-icon">
                  <Icon name="user-x" />
                </div>
                {' '}
                <h3>Hoge no-show</h3>
                {' '}
                <p>
                  Wachtlijsten voor lessen terwijl 30% van de boekingen niet komt opdagen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="pain-card reveal reveal-delay-2">
                <div className="pain-icon">
                  <Icon name="clipboard" />
                </div>
                {' '}
                <h3>Receptie-overload</h3>
                {' '}
                <p>
                  Balie volledig kwijt aan inschrijvingen, lesboekingen en abonnementsvragen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="pain-card reveal reveal-delay-3">
                <div className="pain-icon">
                  <Icon name="trending-down" />
                </div>
                {' '}
                <h3>Stille opzeggingen</h3>
                {' '}
                <p>
                  Leden die wegglippen zonder dat iemand het doorhad — totdat het te laat is.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="wat-we-bouwen" className="builds-section">
          <div className="container">
            <div style={{ marginBottom: "48px", maxWidth: "560px" }}>
              <Reveal as="div" className="label reveal">Wat we bouwen</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Onze aanpak voor sportscholen</Reveal>
            </div>
            {' '}
            <div className="builds-grid">
              <Reveal as="div" className="build-card reveal reveal-delay-1">
                <div className="build-icon">
                  <Icon name="rocket" />
                </div>
                {' '}
                <div>
                  <h3>Lead-site met proefweek-funnel</h3>
                  {' '}
                  <p>
                    Bezoekers boeken hun proefles direct online. Sneller dan de concurrent.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="build-card reveal reveal-delay-2">
                <div className="build-icon">
                  <Icon name="layout-dashboard" />
                </div>
                {' '}
                <div>
                  <h3>Ledenportaal</h3>
                  {' '}
                  <p>
                    Leden beheren zelf hun abonnement, planning, factuur en pauzes.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="build-card reveal reveal-delay-3">
                <div className="build-icon">
                  <Icon name="calendar-check" />
                </div>
                {' '}
                <div>
                  <h3>Boekingssysteem</h3>
                  {' '}
                  <p>
                    Lessen, PT-sessies en faciliteiten boeken — met wachtlijsten en automatische bevestiging.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="build-card reveal reveal-delay-4">
                <div className="build-icon">
                  <Icon name="bell" />
                </div>
                {' '}
                <div>
                  <h3>Retention-flows</h3>
                  {' '}
                  <p>
                    Automatische check-ins bij stille leden. Voorkom opzeggingen voordat ze gebeuren.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section className="case-banner">
          <div className="container">
            <div className="case-inner">
              <Reveal as="div" className="case-stat-block reveal">
                <div className="case-stat">30%</div>
                {' '}
                <div className="case-stat-label">minder no-shows op groepslessen</div>
              </Reveal>
              {' '}
              <Reveal as="div" className="case-body reveal reveal-delay-1">
                <div className="label">Resultaat</div>
                {' '}
                <h2>FitPlace Gyms</h2>
                {' '}
                <p>
                  Ledenportaal en boekingssysteem zorgen ervoor dat leden zelf hun lessen plannen, met automatische reminders en wachtlijsten. Receptie kreeg 9 uur per week terug.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Reveal as="div" className="label reveal">Veelgestelde vragen</Reveal>
              {' '}
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>FAQ — Sportscholen</Reveal>
            </div>
            {' '}
            <Reveal as="div" className="faq-list reveal reveal-delay-2">
              <div className="faq-item">
                <div className="faq-q">
                  Kunnen we koppelen met onze ledenadministratie (Trainomate, Sportbasic, MyWellness)?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Ja. We koppelen met de grootste ledenadministratie-systemen, of bouwen een eigen ledenportaal als dat beter past.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Werkt het ook voor boutique studios met groepsleden?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Zeker. Voor kleinere studios bouwen we vaak een lichtere oplossing — boekingssysteem + simpel ledenportaal — zonder corporate gym-software.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Kunnen we automatische incasso & opzeggingen verwerken?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Ja. Volledige integratie met Mollie, Stripe of jouw huidige incasso-partner. Opzeggingen verlopen volgens jouw voorwaarden.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        {' '}
        {' '}
        <section className="branche-cta">
          <div className="container">
            <div className="branche-cta-inner">
              <div className="label" style={{ color: "rgba(255,255,255,.45)", marginBottom: "12px" }}>Stap 1 is gratis</div>
              {' '}
              <h2>Klaar voor meer aanvragen in jouw branche?</h2>
              {' '}
              <p>
                Plan een groei-call van 30 minuten. We kijken concreet naar jouw flow en laten zien waar leads, tijd of omzet blijven liggen.
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
