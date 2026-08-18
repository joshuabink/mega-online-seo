import { Link, createFileRoute, notFound, redirect } from '@tanstack/react-router'
import { findRedirect } from '@/lib/legacy-urls'

/**
 * Catch-all: vangt de oude `.html`-paden af en stuurt permanent door naar de
 * nieuwe slug. Dit zit bewust in de app (en niet alleen in `vercel.json`),
 * zodat de redirects blijven werken op welke host de site ook draait.
 *
 * Alles wat geen bekend oud pad is, krijgt een nette 404.
 */
export const Route = createFileRoute('/$')({
  beforeLoad: ({ location }) => {
    const target = findRedirect(location.pathname)
    if (target) {
      throw redirect({ to: target, statusCode: 301, throw: true })
    }
    // Geen bekend oud pad: echte 404 (status én pagina), niet een 200 met
    // "niet gevonden"-tekst — dat laatste houdt zoekmachines aan het lijntje.
    throw notFound()
  },
  head: () => ({
    meta: [
      { title: 'Pagina niet gevonden | MegaOnline.io' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  staticData: { lightNav: false },
  component: NotFound,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <main id="top">
      <section className="section" data-theme="dark">
        <div className="wrap">
          <div className="shead shead--center">
            <span className="label">404</span>
            <h1 className="display">Deze pagina bestaat niet meer.</h1>
            <p className="lead">
              Mogelijk is de link verouderd of verkeerd overgenomen. Vanaf hier kom je
              wel verder.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 34,
            }}
          >
            <Link className="btn btn-primary" to="/">
              Naar de homepage <span className="arr">→</span>
            </Link>
            <Link className="btn btn-outline" to="/gratis-websitescan">
              Vraag je gratis scan aan
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
