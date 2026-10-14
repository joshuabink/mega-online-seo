import { createFileRoute, redirect } from '@tanstack/react-router'

/**
 * Oud adres van de aanvraag. Elke bezoeker gaat door naar de website scan.
 * De 301 houdt links uit de header, offertes en Google in leven.
 * De server doet dezelfde hop eerder, inclusief de querystring.
 */
export const Route = createFileRoute('/gratis-websiteconcept')({
  beforeLoad: ({ location }) => {
    const search = location.searchStr || ''
    throw redirect({
      href: `/gratis-websitescan${search}`,
      statusCode: 301,
    })
  },
})
