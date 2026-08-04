import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, FunnelFooter } from "@/components/SiteFooter";

// MegaOnline design system uit de Claude Design-handoff. De volgorde is de
// bron van waarheid: styles → concepts → conversie → over → funnel → megamenu.
// Deze imports komen ná Tailwind (../styles.css wordt hierboven als <link>
// geladen), zodat de huisstijl wint waar beide iets over hetzelfde zeggen.
import "@/styles/styles.css";
import "@/styles/concepts.css";
import "@/styles/conversie.css";
import "@/styles/over.css";
import "@/styles/funnel.css";
import "@/styles/megamenu.css";

/** Per-route vlaggen die de layout aansturen. */
export type RouteMeta = {
  /** Header krijgt `nav--light` (pagina begint met een lichte sectie). */
  lightNav?: boolean;
  /** Compacte funnel-footer i.p.v. de volledige sitefooter. */
  funnelFooter?: boolean;
  /** Geen gedeelde chrome — voor de concept-pagina's met hun eigen stijl. */
  bare?: boolean;
};

function NotFoundComponent() {
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
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 34,
            }}
          >
            <Link className="btn btn-primary" to="/">
              Naar de homepage <span className="arr">→</span>
            </Link>
            <Link className="btn btn-outline" to="/gratis-websitescan">
              Gratis websitescan <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main id="top">
      <section className="section" data-theme="dark">
        <div className="wrap">
          <div className="shead shead--center">
            <span className="label">Er ging iets mis</span>
            <h1 className="h2">Deze pagina laadde niet.</h1>
            <p className="lead">Probeer het opnieuw, of ga terug naar de homepage.</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 34,
            }}
          >
            <button
              className="btn btn-primary"
              onClick={() => {
                router.invalidate();
                reset();
              }}
            >
              Opnieuw proberen
            </button>
            <a className="btn btn-outline" href="/">
              Naar de homepage
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MegaOnline.io | Websites die werken voor jouw bedrijf" },
      {
        name: "description",
        content:
          "MegaOnline bouwt websites die vertrouwen uitstralen en bezoekers richting aanvraag of boeking brengen.",
      },
      { name: "theme-color", content: "#1c2b23" },
      { property: "og:site_name", content: "MegaOnline.io" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/**
 * Fallback voor bezoekers zonder JavaScript.
 *
 * De scroll-reveals uit het ontwerp starten op `opacity: 0` en worden pas
 * zichtbaar gemaakt door script. Zonder JS zou de pagina daardoor blanco zijn,
 * terwijl alle tekst wél in de server-gerenderde HTML staat. Hetzelfde geldt
 * voor de FAQ-antwoorden, die dichtgeklapt op `height: 0` staan.
 *
 * `<noscript>` geldt alleen als JS uit staat, dus dit kost niets voor de
 * gewone bezoeker en geeft geen flits of hydration-conflict.
 */
const NO_JS_FALLBACK = `
  .reveal { opacity: 1 !important; transform: none !important; }
  .qa__a { height: auto !important; }
  .qa__q .pm { display: none; }
`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" data-accent="honey" data-display="geist">
      <head>
        <HeadContent />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NO_JS_FALLBACK }} />
        </noscript>
      </head>
      <body data-hero="split" data-accent="honey" data-display="geist">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const meta = useRouterState({
    select: (s) => (s.matches.at(-1)?.staticData ?? {}) as RouteMeta,
  });

  return (
    <QueryClientProvider client={queryClient}>
      {meta.bare ? (
        // Concept-pagina's brengen hun eigen chrome en stijl mee.
        <Outlet />
      ) : (
        <>
          <SiteHeader light={meta.lightNav} />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          {meta.funnelFooter ? <FunnelFooter /> : <SiteFooter />}
        </>
      )}
    </QueryClientProvider>
  );
}
