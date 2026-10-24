import { createFileRoute, redirect } from '@tanstack/react-router'

/**
 * MegaSmart staat niet meer op de site. Oude links gaan door naar
 * Koppelingen en automatiseringen, waar boeken en opvolgen nu onder valt.
 */
export const Route = createFileRoute('/megasmart')({
  beforeLoad: () => {
    throw redirect({ href: '/diensten/integraties', statusCode: 301 })
  },
})
