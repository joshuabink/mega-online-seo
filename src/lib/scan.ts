/**
 * Teksten van /gratis-websitescan. De pagina en de FAQPage-markup lezen
 * hieruit, zodat de zichtbare vragen en het schema hetzelfde blijven.
 */

export const SCAN_TITLE = 'Gratis website scan voor je bedrijfswebsite | MegaOnline'
export const SCAN_DESCRIPTION =
  'Vraag een gratis website scan aan. Vertel wat er volgens jou misgaat op je site en ontvang persoonlijk advies over aanvragen en boekingen.'
export const SCAN_H1 = 'Vraag een gratis website scan aan'
export const SCAN_SUBJECT = 'Gratis website scan aanvraag'

/** TODO: inhoud, vorm en reactietijd volgen van Joshua (TK-304) */
export const PLACEHOLDER_SCAN_OPLEVERING = 'Je ontvangt persoonlijk advies over je site.'

/** TODO (TK-304) */
export const PLACEHOLDER_SCAN_REACTIETIJD = 'Je hoort zo snel mogelijk van ons.'

export const SCAN_FAQ: { q: string; a: string }[] = [
  {
    q: 'Wat is de gratis website scan?',
    a: 'Een persoonlijke analyse van je huidige website door MegaOnline. De scan kijkt waar bezoekers afhaken op weg naar een aanvraag of boeking en wat daar beter kan.',
  },
  {
    q: 'Is de website scan echt gratis?',
    a: 'Ja. De scan is gratis en vrijblijvend. Er zit geen verplichting aan vast.',
  },
  {
    q: 'Waarom vraagt het formulier wat er volgens mij misgaat?',
    a: 'Je kent je klanten en je site het best. Met jouw beeld kan de scan gericht kijken en sluit het advies aan op wat je wilt bereiken.',
  },
  {
    q: 'Voor welke websites is de scan bedoeld?',
    a: 'Voor websites van mkb-bedrijven die aanvragen, reserveringen of boekingen willen krijgen, zoals dienstverleners, verhuur- en activiteitenbedrijven.',
  },
  {
    q: 'Hoe snel ontvang ik de uitkomst?',
    a: PLACEHOLDER_SCAN_REACTIETIJD,
  },
]
