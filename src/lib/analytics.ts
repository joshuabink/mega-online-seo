/**
 * Statistieken. PostHog en Google Analytics 4 laden alleen in de browser
 * en alleen nadat de bezoeker de cookiecategorie "statistieken" heeft
 * geaccepteerd. Zonder die toestemming gaat er geen request naar
 * googletagmanager.com. Stuur nooit veldwaarden uit formulieren mee,
 * alleen veldnamen.
 */
import type { PostHog } from 'posthog-js'

export const POSTHOG_KEY = "phc_mkPhVY7ETCZn89DFwyrhGYLcem6Q5nBzkRMBfRg4QbzK"

/** Eén meting-ID, sitewide. De tag zelf staat in de head van de root-route. */
export const GA_MEASUREMENT_ID = "G-DCZS4D0PFM"

const GA_CONSENT_DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
} as const

/**
 * Consent Mode v2, default denied. Dit script doet zelf geen netwerkverzoek.
 * gtag.js wordt pas in `startGoogleAnalytics` aan de head toegevoegd.
 */
export const GA_CONSENT_DEFAULT_SNIPPET = `/* GA4 ${GA_MEASUREMENT_ID}: gtag.js laadt pas na toestemming voor statistieken. */
(function(){
  if (window.__moGaConsentDefault) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
  window.gtag('consent', 'default', ${JSON.stringify(GA_CONSENT_DENIED)});
  window.__moGaConsentDefault = true;
})();`

type GaWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  __moGaConsentDefault?: boolean
}

let ph: PostHog | null = null
let loading: Promise<void> | null = null
let clickListener = false
let gaActive = false
let gaScriptInserted = false
let lastGaPath = ""

function gaWindow(): GaWindow | null {
  if (typeof window === "undefined") return null
  return window as GaWindow
}

function installGtag(w: GaWindow) {
  w.dataLayer = w.dataLayer || []
  if (typeof w.gtag !== "function") {
    w.gtag = function gtag() {
      w.dataLayer?.push(arguments)
    }
  }
  if (!w.__moGaConsentDefault) {
    w.gtag("consent", "default", GA_CONSENT_DENIED)
    w.__moGaConsentDefault = true
  }
}

function setGaDisabled(w: GaWindow, disabled: boolean) {
  ;(w as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled
}

function startGoogleAnalytics() {
  const w = gaWindow()
  if (!w) return
  setGaDisabled(w, false)
  if (gaActive) return
  installGtag(w)
  w.gtag?.("consent", "update", { analytics_storage: "granted" })
  if (!gaScriptInserted && !w.document.querySelector(`script[data-ga4="${GA_MEASUREMENT_ID}"]`)) {
    w.gtag?.("js", new Date())
    w.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false })
    const script = w.document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.dataset.ga4 = GA_MEASUREMENT_ID
    w.document.head.appendChild(script)
    gaScriptInserted = true
  }
  gaActive = true
  trackPageView()
}

function stopGoogleAnalytics() {
  const w = gaWindow()
  gaActive = false
  lastGaPath = ""
  if (!w) return
  setGaDisabled(w, true)
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    })
  }
}

function onContactClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
  if (!a) return
  const href = a.getAttribute('href') ?? ''
  let method: 'phone' | 'email' | 'whatsapp' | null = null
  if (/^tel:/i.test(href)) method = 'phone'
  else if (/^mailto:/i.test(href)) method = 'email'
  else if (/(wa\.me|api\.whatsapp\.com)/i.test(href)) method = 'whatsapp'
  if (method) track('contact_click', { method, path: location.pathname })
}

export function trackPageView(path?: string): void {
  if (!gaActive || typeof window === "undefined") return
  const pagePath = path || location.pathname + location.search
  if (pagePath === lastGaPath) return
  lastGaPath = pagePath
  const w = gaWindow()
  w?.gtag?.("event", "page_view", {
    page_path: pagePath,
    page_location: location.href,
    page_title: document.title,
  })
}

export function initAnalytics(): void {
  startGoogleAnalytics()
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  if (ph) {
    ph.opt_in_capturing()
    return
  }
  if (loading) return
  loading = import('posthog-js').then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      api_host: 'https://eu.i.posthog.com',
      ui_host: 'https://eu.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: 'history_change',
      capture_pageleave: true,
      autocapture: true,
      enable_heatmaps: true,
      mask_all_text: false,
      session_recording: { maskAllInputs: true, maskTextSelector: '[data-ph-mask]' },
    })
    ph = posthog
    if (!clickListener) {
      document.addEventListener('click', onContactClick, true)
      clickListener = true
    }
  })
}

/**
 * GA4-aanbevolen event na een geslaagde lead. Alleen bij analytics-consent
 * (`gaActive`). Zonder toestemming komt het event niet in de dataLayer, zodat
 * het ook niet alsnog verstuurd wordt als de bezoeker later toestemt.
 * Alleen form_name, page_path en — bij een browser-terugval — route "fallback".
 * Geen naam, e-mail, telefoon of vrije tekst.
 *
 * Bewuste keuze: een geslaagde FormSubmit-terugval uit de browser bereikt
 * MegaOnline echt. Die telt daarom ook als generate_lead, met route "fallback",
 * zodat Theo die inzendingen kan scheiden van een geslaagde serverreactie.
 * Sollicitaties tellen nooit als lead, ook niet via deze constante.
 */
export const GENERATE_LEAD_BIJ_BROWSER_FALLBACK = true

/** Alleen form_name en page_path, plus route bij een browser-terugval. Geen veldwaarden. */
export function generateLeadParams(
  formName: string,
  pagePath: string,
  extra?: { route?: "fallback" },
): Record<string, string> | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(formName)) return null
  const params: Record<string, string> = {
    form_name: formName,
    page_path: pagePath,
  }
  if (extra?.route === "fallback") params.route = "fallback"
  return params
}

/** Zonder toestemming geen event. Met toestemming dezelfde parameters als generateLeadParams. */
export function generateLeadBijToestemming(
  toestemming: boolean,
  formName: string,
  pagePath: string,
  extra?: { route?: "fallback" },
): Record<string, string> | null {
  if (!toestemming) return null
  return generateLeadParams(formName, pagePath, extra)
}

export function trackGenerateLead(formName: string, extra?: { route?: "fallback" }): void {
  if (typeof window === "undefined") return
  const params = generateLeadBijToestemming(gaActive, formName, location.pathname, extra)
  if (!params) return
  const w = gaWindow()
  w?.gtag?.("event", "generate_lead", params)
}

function trackLeadSignaal(event: "lead_browser_fallback" | "lead_fallback_getoond", formName: string): void {
  if (!gaActive || typeof window === "undefined") return
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(formName)) return
  const w = gaWindow()
  w?.gtag?.("event", event, {
    form_name: formName,
    page_path: location.pathname,
  })
}

/** Tweede poging vanuit de browser is geslaagd. Alleen form_name en page_path. */
export function trackLeadBrowserFallback(formName: string): void {
  trackLeadSignaal("lead_browser_fallback", formName)
}

/** De mailto-knop is getoond nadat automatisch versturen niet lukte. */
export function trackLeadFallbackGetoond(formName: string): void {
  trackLeadSignaal("lead_fallback_getoond", formName)
}

/**
 * Sollicitaties zijn geen leads. Alleen bij analytics-consent, en alleen
 * page_path: geen naam, e-mail, telefoon, rol of motivatie.
 */
export function trackSollicitatieVerzonden(): void {
  if (!gaActive || typeof window === "undefined") return
  const w = gaWindow()
  w?.gtag?.("event", "sollicitatie_verzonden", {
    page_path: location.pathname,
  })
}

export function track(event: string, props?: Record<string, unknown>): void {
  if (!ph) return
  ph.capture(event, props)
}

export function optOut(): void {
  stopGoogleAnalytics()
  if (!ph) return
  ph.opt_out_capturing()
}
