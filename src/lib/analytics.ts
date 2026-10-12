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

export function track(event: string, props?: Record<string, unknown>): void {
  if (!ph) return
  ph.capture(event, props)
}

export function optOut(): void {
  stopGoogleAnalytics()
  if (!ph) return
  ph.opt_out_capturing()
}
