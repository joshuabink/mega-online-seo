import { Link } from '@tanstack/react-router'

const DIENSTEN = [
  ['/diensten/conversie-website', 'Conversie Website'],
  ['/diensten/website-redesign', 'Website Redesign'],
  ['/diensten/website-optimalisatie', 'Website Optimalisatie'],
  ['/diensten/starter-website', 'Starter Website'],
  ['/diensten/werken-bij-websites', 'Werken-bij Website'],
  ['/diensten/groei-partnership', 'Groei Partnership'],
] as const

const BRANCHES = [
  ['/branches/activiteitenbedrijven', 'Activiteitenbedrijven'],
  ['/branches/verhuurbedrijven', 'Verhuurbedrijven'],
  ['/branches/dienstverleners', 'Dienstverleners'],
  ['/branches/reserveringen', 'Bedrijven met reserveringen'],
  ['/branches/offerteaanvragen', 'Bedrijven met offerteaanvragen'],
  ['/branches/non-profits', 'Non-profits'],
] as const

const BEDRIJF = [
  ['/over-megaonline', 'Over MegaOnline'],
  ['/gratis-websitescan', 'Gratis websitescan'],
  ['/contact', 'Contact'],
] as const

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              MegaOnline<span className="dot">.io</span>
            </Link>
            <p className="footer__tagline">
              Websites die zorgen voor meer aanvragen, reserveringen en boekingen voor
              jouw bedrijf.
            </p>
            <Link className="footer__scan" to="/gratis-websitescan">
              Vraag je gratis scan aan <span className="arr">→</span>
            </Link>
          </div>

          <div className="footer__col">
            <span className="footer__head">Diensten</span>
            {DIENSTEN.map(([to, label]) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <span className="footer__head">Branches</span>
            {BRANCHES.map(([to, label]) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <span className="footer__head">Bedrijf</span>
            {BEDRIJF.map(([to, label]) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © 2026 MegaOnline.io. Websites die werken voor jouw bedrijf.
          </span>
          <nav className="footer__legal" aria-label="Juridisch">
            <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
            <Link to="/privacyverklaring">Privacyverklaring</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

/**
 * Compacte funnel-footer voor de Gratis Websitescan: bewust zonder
 * uitgangen, zodat niets met het formulier concurreert.
 */
export function FunnelFooter() {
  return (
    <footer className="ffooter" data-theme="dark">
      <div className="wrap">
        <Link to="/" className="logo">
          MegaOnline<span className="dot">.io</span>
        </Link>
        <span className="ffooter__copy">© 2026 MegaOnline.io · Gratis websitescan</span>
      </div>
    </footer>
  )
}
