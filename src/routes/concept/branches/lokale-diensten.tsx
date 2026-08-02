import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-branches-lokale-diensten.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/branches/lokale-diensten')({
  head: () => ({
    meta: [
      { title: "MegaOnline · Lokale servicebedrijven" },
      { property: 'og:title', content: "MegaOnline · Lokale servicebedrijven" },
      { property: 'og:url', content: "https://megaonline.io/concept/branches/lokale-diensten" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/branches/lokale-diensten" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: LokaleDiensten,
})

function LokaleDiensten() {
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
                  <span>Lokale diensten</span>
                </Reveal>
                {' '}
                <Reveal as="div" className="branche-badge reveal">
                  <div className="branche-badge-dot" />
                  {' '}
                  <span className="label" style={{ color: "var(--green)" }}>Voor lokale servicebedrijven</span>
                </Reveal>
                {' '}
                <Reveal as="h1" className="reveal reveal-delay-1">Lokaal vindbaar, makkelijk te boeken</Reveal>
                {' '}
                <Reveal as="p" className="lead reveal reveal-delay-2">
                  Voor de glashandelaren, hoveniers, kappers en kleine specialisten. Een site die in jouw regio top-of-mind staat — gekoppeld aan een agenda die zichzelf vult.
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
                <div className="branche-hero-deco tl">L</div>
                {' '}
                <div className="branche-hero-deco br">L</div>
                {' '}
                <div className="branche-hero-icon-big">
                  <Icon name="map-pin" />
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
                  <Icon name="search-x" />
                </div>
                {' '}
                <h3>Concurrentie bovenin</h3>
                {' '}
                <p>
                  Klanten Googlen jouw vak + plaats. Een ander staat bovenaan, niet jij.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="pain-card reveal reveal-delay-2">
                <div className="pain-icon">
                  <Icon name="phone-call" />
                </div>
                {' '}
                <h3>Simpele vragen</h3>
                {' '}
                <p>
                  De helft van de telefoontjes zijn "zijn jullie open?" en "wat kost het?".
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="pain-card reveal reveal-delay-3">
                <div className="pain-icon">
                  <Icon name="star" />
                </div>
                {' '}
                <h3>Geen reviews</h3>
                {' '}
                <p>
                  Reviews verzamelen lukt niet. Terwijl ze cruciaal zijn voor vertrouwen lokaal.
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
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>Onze aanpak voor lokale servicebedrijven</Reveal>
            </div>
            {' '}
            <div className="builds-grid">
              <Reveal as="div" className="build-card reveal reveal-delay-1">
                <div className="build-icon">
                  <Icon name="map" />
                </div>
                {' '}
                <div>
                  <h3>Lokale SEO-website</h3>
                  {' '}
                  <p>
                    Gericht op jouw vak + regio. Snelle, vindbare site die direct lokaal scoort.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="build-card reveal reveal-delay-2">
                <div className="build-icon">
                  <Icon name="calendar-plus" />
                </div>
                {' '}
                <div>
                  <h3>Online boeking</h3>
                  {' '}
                  <p>
                    Klanten boeken hun afspraak of vragen een offerte aan — direct in je agenda.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="build-card reveal reveal-delay-3">
                <div className="build-icon">
                  <Icon name="star" />
                </div>
                {' '}
                <div>
                  <h3>Automatische review-flow</h3>
                  {' '}
                  <p>
                    Na elke klus automatisch een vraag naar een review op Google. Vertrouwen op autopilot.
                  </p>
                </div>
              </Reveal>
              {' '}
              <Reveal as="div" className="build-card reveal reveal-delay-4">
                <div className="build-icon">
                  <Icon name="message-circle" />
                </div>
                {' '}
                <div>
                  <h3>WhatsApp-integratie</h3>
                  {' '}
                  <p>
                    Klanten chatten op de manier die ze gewend zijn. Centraal in één inbox.
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
                <div className="case-stat">Top 3</div>
                {' '}
                <div className="case-stat-label">in Google voor "jouw vak + jouw stad"</div>
              </Reveal>
              {' '}
              <Reveal as="div" className="case-body reveal reveal-delay-1">
                <div className="label">Resultaat</div>
                {' '}
                <h2>Lokaal top-of-mind</h2>
                {' '}
                <p>
                  Lokale SEO-website, automatische reviews en online boeking. Een vakman is binnen 4 maanden top-3 voor de belangrijkste lokale zoektermen — zonder dure Ads.
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
              <Reveal as="h2" className="reveal reveal-delay-1" style={{ marginTop: "8px" }}>FAQ — Lokale servicebedrijven</Reveal>
            </div>
            {' '}
            <Reveal as="div" className="faq-list reveal reveal-delay-2">
              <div className="faq-item">
                <div className="faq-q">
                  Past dit ook bij een éénmanszaak?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Juist. We schalen de site en systemen naar jouw situatie. Vaak start je met een simpele lead-site + boeking, en groei je daarna mee.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Kunnen we WhatsApp Business koppelen?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Ja. WhatsApp-berichten, chat op de website en e-mail komen samen in één eenvoudige inbox.
                  </div>
                </div>
              </div>
              {' '}
              <div className="faq-item">
                <div className="faq-q">
                  Werkt SEO ook voor mijn kleine plaats?
                  {' '}
                  <span className="faq-icon">+</span>
                </div>
                {' '}
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Vooral dan. Lokale SEO is goed te beïnvloeden, ook met klein budget. We focussen op de zoektermen waar jij wel kan winnen.
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
