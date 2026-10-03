import { createFileRoute, redirect } from '@tanstack/react-router'

/**
 * De oude scanpagina blijft bestaan als adres. Elke aanvraag gaat naar het
 * websiteconcept. De 301 houdt links uit de header, offertes en Google in leven.
 */
export const Route = createFileRoute('/gratis-websitescan')({
  beforeLoad: () => {
    throw redirect({
      to: '/gratis-websiteconcept',
      statusCode: 301,
    })
  },
})
