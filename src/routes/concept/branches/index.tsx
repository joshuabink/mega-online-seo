import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concept-branches-index.css'
import '@/styles/legacy.css'

export const Route = createFileRoute('/concept/branches/')({
  head: () => ({
    meta: [
      { title: "MegaOnline · Branches" },
      { property: 'og:title', content: "MegaOnline · Branches" },
      { property: 'og:url', content: "https://megaonline.io/concept/branches/index" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/concept/branches/index" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
      },
    ],
  }),
  staticData: { bare: true },
  component: Index,
})

function Index() {
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
        <section className="branches-hero">
          <div className="container">
            <Reveal as="div" className="label reveal">Voor wie we bouwen</Reveal>
            {' '}
            <Reveal as="h1" className="reveal reveal-delay-1">Voor servicebedrijven die willen groeien</Reveal>
            {' '}
            <Reveal as="p" className="lead reveal reveal-delay-2">
              We werken met servicebedrijven die draaien op aanvragen, boekingen en service-opdrachten. Kies je branche voor een aanpak die past bij jouw situatie.
            </Reveal>
          </div>
        </section>
        {' '}
        <section>
          <div className="container">
            <div className="branches-grid">
              <Link to="/concept/branches/zonnepanelen" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="sun" />
                </div>
                {' '}
                <h3>Zonnepanelen</h3>
                {' '}
                <p>Particulieren vergelijken altijd meerdere aanbieders.</p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/installateurs" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="wrench" />
                </div>
                {' '}
                <h3>Installateurs</h3>
                {' '}
                <p>Storingen en service-aanvragen wachten niet.</p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/sportscholen" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="dumbbell" />
                </div>
                {' '}
                <h3>Sportscholen</h3>
                {' '}
                <p>
                  Een lead-site die proefweken verkoopt, gekoppeld aan een ledenportaal waarin leden zelf hun lessen en afspraken regelen.
                </p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/bootverhuur" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="anchor" />
                </div>
                {' '}
                <h3>Bootverhuur</h3>
                {' '}
                <p>Geen telefoon meer op zondagavond.</p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/schoonmaakbedrijven" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="sparkles" />
                </div>
                {' '}
                <h3>Schoonmaakbedrijven</h3>
                {' '}
                <p>Wie het eerst reageert, krijgt vaak de opdracht.</p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/detailing-wrap" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="car" />
                </div>
                {' '}
                <h3>Detailing & Wrap</h3>
                {' '}
                <p>In jouw vak verkoopt visueel werk zichzelf.</p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/aannemers" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="hammer" />
                </div>
                {' '}
                <h3>Aannemers & klusbedrijven</h3>
                {' '}
                <p>Vertrouwen wint hier.</p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/agencies" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="briefcase" />
                </div>
                {' '}
                <h3>Agencies</h3>
                {' '}
                <p>
                  Een authority-driven website, content-funnels en CRM-automatisering.
                </p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
              {' '}
              <Link to="/concept/branches/lokale-diensten" className="branche-overview-card reveal">
                <div className="bo-icon">
                  <Icon name="map-pin" />
                </div>
                {' '}
                <h3>Lokale servicebedrijven</h3>
                {' '}
                <p>
                  Voor de glashandelaren, hoveniers, kappers en kleine specialisten.
                </p>
                {' '}
                <div className="bo-link">Bekijk aanpak →</div>
              </Link>
            </div>
          </div>
        </section>
        {' '}
        <section className="branche-cta">
          <div className="container">
            <div className="branche-cta-inner">
              <div className="label" style={{ color: "rgba(255,255,255,.45)", marginBottom: "12px" }}>Past jouw branche er niet bij?</div>
              {' '}
              <h2>Geen probleem: plan een groei-call</h2>
              {' '}
              <p>
                We werken met meer dan 50 servicebedrijven in uiteenlopende branches. Vertel ons over jouw situatie en we kijken samen wat haalbaar is.
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
