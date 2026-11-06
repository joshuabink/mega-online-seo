import type { LeadResult } from './lead'

/**
 * Welke meting hoort bij een afgeronde verzending.
 * Een klik, een validatiefout of een mislukte mail geeft geen generate_lead.
 * Sollicitaties geven nooit generate_lead.
 * Een geslaagde serverreactie wel. Een geslaagde FormSubmit-terugval uit de
 * browser ook, als `fallbackTeltAlsLead` aan staat: dat is dan een echte
 * response, geen klik.
 */
export type LeadMeting =
  | { event: 'generate_lead'; formName: string; route?: 'fallback' }
  | { event: 'lead_browser_fallback'; formName: string }
  | { event: 'lead_fallback_getoond'; formName: string }
  | { event: 'sollicitatie_verzonden' }

export function metingenVoorResultaat(
  result: LeadResult,
  formName: string,
  soort: 'lead' | 'sollicitatie',
  fallbackTeltAlsLead: boolean,
): LeadMeting[] {
  const naam = soort === 'sollicitatie' ? 'sollicitatie' : formName
  if (!result.ok) {
    if (result.mailto) return [{ event: 'lead_fallback_getoond', formName: naam }]
    return []
  }
  if (result.via === 'server') {
    if (soort === 'sollicitatie') return [{ event: 'sollicitatie_verzonden' }]
    return [{ event: 'generate_lead', formName }]
  }
  if (result.route !== 'FormSubmit') return []
  const uit: LeadMeting[] = [{ event: 'lead_browser_fallback', formName: naam }]
  if (soort === 'lead' && fallbackTeltAlsLead) {
    uit.push({ event: 'generate_lead', formName, route: 'fallback' })
  }
  return uit
}
