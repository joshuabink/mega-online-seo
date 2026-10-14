/**
 * Bestemming van een lead. Eén bron voor de mailroute, de mailto-fallback
 * en de contactregel onder de verzendknop.
 */
/** Reactietijd voor een gewone vraag. De website scan heeft een eigen termijn. */
export const CONTACT_REACTIETIJD = 'binnen 2 werkdagen'

export const LEAD_CONTACT = {
  mail: 'zakelijk@joshuabink.nl',
  /** Zichtbare tekst. Het nummer is geen link. */
  phoneText: '06 34 38 89 38',
  phone: '+31634388938',
  whatsappUrl: 'https://wa.me/31634388938',
} as const
