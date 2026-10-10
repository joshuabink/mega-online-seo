/**
 * PostHog-statistieken. Laadt alleen in de browser en alleen nadat de
 * bezoeker de cookiecategorie "statistieken" heeft geaccepteerd.
 * Met een lege POSTHOG_KEY gebeurt er niets en zijn alle functies no-ops.
 * Stuur nooit veldwaarden uit formulieren mee, alleen veldnamen.
 */
import type { PostHog } from 'posthog-js'

export const POSTHOG_KEY = "phc_mkPhVY7ETCZn89DFwyrhGYLcem6Q5nBzkRMBfRg4QbzK"

let ph: PostHog | null = null
let loading: Promise<void> | null = null
let clickListener = false

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

export function initAnalytics(): void {
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
  if (!ph) return
  ph.opt_out_capturing()
}
