/**
 * Bestemming van een lead. Eén bron voor de mailroute, de mailto-fallback
 * en de contactregel onder de verzendknop.
 */
export const LEAD_CONTACT = {
  mail: 'zakelijk@joshuabink.nl',
  /** Zichtbare tekst. De bel-link blijft tel:+31634388938. */
  phoneText: '06 34 38 89 38',
  phone: '+31634388938',
  whatsappUrl: 'https://wa.me/31634388938',
} as const
