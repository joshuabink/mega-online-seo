import { LEAD_CONTACT } from './lead-contact.ts'

/**
 * FormSubmit-bestemming als Resend niet is ingesteld en
 * `MO_LEAD_MAIL_ENDPOINT` ontbreekt. Een lege of witruimte-waarde telt niet
 * als route: dan is de mail niet geconfigureerd.
 */
export const DEFAULT_MAIL_ENDPOINT = `https://formsubmit.co/${LEAD_CONTACT.mail}`

export type LeadEnv = Record<string, string | undefined>

export type LeadRouteOordeel =
  | { ok: true; route: 'Resend' | 'FormSubmit'; endpoint: string }
  | { ok: false; error: 'geen-contact' | 'geen-mailroute' }

/**
 * Zelfde poort als een echte inzending, zonder iets te versturen.
 * Eerst een e-mailadres of telefoonnummer, daarna een mailroute: een gevulde
 * Resend-sleutel, of anders een FormSubmit-adres.
 */
export function beoordeelLeadRoute(params: URLSearchParams, env: LeadEnv): LeadRouteOordeel {
  const email = params.get('email') ?? params.get('mail')
  const phone = params.get('telefoon') ?? params.get('tel')
  if (!email && !phone) return { ok: false, error: 'geen-contact' }

  const resend = env.MO_RESEND_API_KEY?.trim() ?? ''
  if (resend) return { ok: true, route: 'Resend', endpoint: '' }

  const opgegeven = env.MO_LEAD_MAIL_ENDPOINT
  const endpoint = (opgegeven === undefined ? DEFAULT_MAIL_ENDPOINT : opgegeven).trim()
  if (!endpoint) return { ok: false, error: 'geen-mailroute' }
  return { ok: true, route: 'FormSubmit', endpoint }
}
