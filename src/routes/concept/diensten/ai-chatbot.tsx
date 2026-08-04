import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-diensten-ai-chatbot.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/diensten/ai-chatbot')({
  head: () => ({
    meta: [
      { title: "" },
      { property: 'og:title', content: "" },
      { property: 'og:url', content: "https://megaonline.io/concept/diensten/ai-chatbot" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/diensten/ai-chatbot" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: AiChatbot,
})

function AiChatbot() {
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
                  <span>AI Chatbot</span>
                </Reveal>
                {' '}
                <Reveal as="div" className="dienst-badge reveal">
                  <div className="dienst-badge-dot" />
                  {' '}
                  <span className="label" style={{ color: "var(--green)" }}>Nieuw</span>
                </Reveal>
                {' '}
                <Reveal as="h1" className="reveal reveal-delay-1">AI Chatbot</Reveal>
                {' '}
                <Reveal as="p" className="lead reveal reveal-delay-2">
                  Een slimme AI chatbot op je website die vragen beantwoordt, leads kwalificeert en afspraken inplant, altijd beschikbaar, nooit ziek, volledig op maat getraind voor jouw bedrijf.
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
                <div className="dienst-hero-visual-num">08</div>
                {' '}
                <div style={{ position: "absolute", top: "20px", right: "20px", width: "56px", height: "56px", borderRadius: "14px", background: "var(--green)", borderColor: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="bot" />
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
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Wat we doen bij ai chatbot</Reveal>
            </div>
            {' '}
            <div className="features-grid">
              <Reveal as="div" className="feature-card reveal reveal-delay-1">
                <div className="feature-icon">
                  <Icon name="message-circle" />
                </div>
                {' '}
                <h3>Altijd beschikbaar</h3>
                {' '}
                <p>
                  24/7 klaar om bezoekers te helpen, ook buiten kantoortijden.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-2">
                <div className="feature-icon">
                  <Icon name="brain" />
                </div>
                {' '}
                <h3>Getraind op jouw content</h3>
                {' '}
                <p>
                  De chatbot kent je producten, diensten en veelgestelde vragen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-3">
                <div className="feature-icon">
                  <Icon name="user-plus" />
                </div>
                {' '}
                <h3>Lead kwalificatie</h3>
                {' '}
                <p>Filtert serieuze leads en stuurt ze door naar jouw team.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-1">
                <div className="feature-icon">
                  <Icon name="calendar" />
                </div>
                {' '}
                <h3>Afspraken inplannen</h3>
                {' '}
                <p>Directe integratie met je agenda, bezoekers boeken zelf.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-2">
                <div className="feature-icon">
                  <Icon name="languages" />
                </div>
                {' '}
                <h3>Meertalig</h3>
                {' '}
                <p>Nederlands, Engels en meer, automatische taaldetectie.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="feature-card reveal reveal-delay-3">
                <div className="feature-icon">
                  <Icon name="sliders" />
                </div>
                {' '}
                <h3>Volledig aanpasbaar</h3>
                {' '}
                <p>Toon, avatar, kleuren en gedrag volledig naar jouw merk.</p>
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
                  <h3>Intake</h3>
                  {' '}
                  <p>Jouw vragen, doelen en doelgroep</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-2">
                <div className="step-num">02</div>
                {' '}
                <div>
                  <h3>Training</h3>
                  {' '}
                  <p>Chatbot trainen op jouw content</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-3">
                <div className="step-num">03</div>
                {' '}
                <div>
                  <h3>Integratie</h3>
                  {' '}
                  <p>Inbouwen op website, testen</p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="step-item reveal reveal-delay-4">
                <div className="step-num">04</div>
                {' '}
                <div>
                  <h3>Live</h3>
                  {' '}
                  <p>Launch + doorlopende optimalisatie</p>
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
                  Welke AI-technologie gebruiken jullie?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    We bouwen op GPT-4 en aanverwante modellen, aangevuld met jouw eigen kennisbank voor nauwkeurige antwoorden.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Kan de chatbot ook afspraken inplannen?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Ja, met een koppeling naar Calendly, Google Calendar of jouw eigen systeem.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Wat als de chatbot een vraag niet weet?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Hij geeft dat eerlijk aan en biedt de optie om te escaleren naar een medewerker via chat of e-mail.
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
              <h2>Klaar voor 24/7 klantenservice?</h2>
              {' '}
              <p>
                Vraag een gratis demo aan, wij laten zien wat een chatbot voor jouw website kan doen.
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
