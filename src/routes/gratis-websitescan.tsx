import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * De oude scanpagina blijft bestaan als adres. Elke aanvraag gaat naar het
 * websiteconcept. De 301 houdt links uit de header, offertes en Google in leven.
 */
export const Route = createFileRoute("/gratis-websitescan")({
  beforeLoad: ({ location }) => {
    // searchStr bevat de oorspronkelijke query, inclusief het vraagteken.
    // Zonder dit valt `?utm=mail` weg op de 301.
    const search = location.searchStr || "";
    throw redirect({
      href: `/gratis-websiteconcept${search}`,
      statusCode: 301,
    });
  },
});
