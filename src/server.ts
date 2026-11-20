import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { leadDryCheck } from "./lib/lead-dry-check.ts";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

/**
 * TanStack Router normaliseert een afwijkend pad in `beforeLoad` via
 * `redirect({ href })` (standaard 307), en die check loopt vóór de route.
 * Een pad als `//evil.com/` of `/\evil.com/` wordt daarbij een
 * protocol-relatieve Location. Hier normaliseren we eerst: backslashes
 * worden slashes, herhaalde slashes vallen samen, een trailing slash gaat
 * eraf. De Location is altijd een same-origin pad met precies één leidende
 * `/`. `/gratis-websiteconcept` gaat in dezelfde hop met 301 door naar
 * `/gratis-websitescan`, inclusief de querystring.
 */
function canonicalPathname(pathname: string): string {
  const collapsed = pathname.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  const withSlash = collapsed.startsWith("/") ? collapsed : `/${collapsed}`;
  const stripped =
    withSlash.length > 1 && withSlash.endsWith("/") ? withSlash.replace(/\/+$/, "") : withSlash;
  if (stripped.startsWith("/") && !stripped.startsWith("//") && !stripped.includes("\\")) {
    return stripped;
  }
  return "/";
}

function sameOriginLocation(origin: string, path: string, search: string): string | null {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.includes("\\") ||
    path.includes("//")
  ) {
    return null;
  }
  const query = search.startsWith("?") && !/[\s\\]/.test(search) ? search : "";
  const location = `${path}${query}`;
  try {
    const resolved = new URL(location, origin);
    if (resolved.origin !== origin || resolved.pathname !== path) return null;
  } catch {
    return null;
  }
  return location;
}

function canonicalRedirect(request: Request): Response | null {
  let url: URL;
  try {
    url = new URL(request.url);
  } catch {
    return null;
  }

  const canonical = canonicalPathname(url.pathname);
  const search = url.search;

  // Korte links voor social bio's. Bewust 302 (tijdelijk): het doel kan later
  // wijzigen zonder dat browsers of zoekmachines de oude bestemming vasthouden.
  const SHORT_LINKS: Record<string, string> = {
    "/ig": "/?utm_source=instagram&utm_medium=social&utm_campaign=bio",
    "/li": "/?utm_source=linkedin&utm_medium=social&utm_campaign=profiel",
  };
  const shortTarget = SHORT_LINKS[canonical];
  if (shortTarget) {
    const [path, query] = shortTarget.split("?");
    const location = sameOriginLocation(url.origin, path, query ? `?${query}` : "");
    if (!location) return null;
    return new Response(null, { status: 302, headers: { Location: location } });
  }

  if (canonical === "/gratis-websiteconcept") {
    const location = sameOriginLocation(url.origin, "/gratis-websitescan", search);
    if (!location) return null;
    return new Response(null, { status: 301, headers: { Location: location } });
  }

  if (canonical === url.pathname) return null;

  const location = sameOriginLocation(url.origin, canonical, search);
  if (!location) return null;
  return new Response(null, { status: 308, headers: { Location: location } });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const slashRedirect = canonicalRedirect(request);
      if (slashRedirect) return slashRedirect;

      // Leadmonitor: alleen als het pad én het omgevingssegment kloppen.
      // Verkeerd of ontbrekend segment blijft een 404, vóór de pagina-router.
      const dryCheck = await leadDryCheck(request, env);
      if (dryCheck) return dryCheck;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
