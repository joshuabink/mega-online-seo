import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

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
 * TanStack Router normaliseert een trailing slash in `beforeLoad` via
 * `redirect({ href })`. Die helper gebruikt standaard status 307, en de
 * check gebeurt vóór de route. Daardoor is `/pad/` een tijdelijke redirect,
 * en wordt `/gratis-websitescan/` eerst 307 en daarna pas 301.
 * Hier lossen we dat af vóór de router: permanent, in één hop, querystring
 * blijft staan.
 */
function trailingSlashRedirect(request: Request): Response | null {
  const { pathname, search } = new URL(request.url);
  if (pathname.length <= 1 || !pathname.endsWith("/")) return null;

  const stripped = pathname.replace(/\/+$/, "") || "/";
  if (stripped === "/gratis-websitescan") {
    return new Response(null, {
      status: 301,
      headers: { Location: `/gratis-websiteconcept${search}` },
    });
  }

  return new Response(null, {
    status: 308,
    headers: { Location: `${stripped}${search}` },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const slashRedirect = trailingSlashRedirect(request);
      if (slashRedirect) return slashRedirect;

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
