/**
 * Beslist wat de smoketest met een browserverzoek doet.
 * Puur: geen netwerk, geen Playwright. De smoketest en de controle
 * gebruiken dezelfde functie, zodat een externe post niet kan worden
 * doorgelaten zonder dat de controle rood wordt.
 */

export function hostVan(url) {
  try { return new URL(url).hostname } catch { return '' }
}

export function isLoopbackHost(host) {
  return host === 'localhost' || host === '127.0.0.1' || host === '::1'
}

export function isLoopbackUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' && isLoopbackHost(url.hostname)
  } catch {
    return false
  }
}

export function isMailHost(host) {
  return host === 'formsubmit.co' || host.endsWith('.formsubmit.co') || host === 'api.resend.com'
}

export function isGaUrl(url) {
  return /googletagmanager\.com|google-analytics\.com|analytics\.google\.com/i.test(url)
}

/**
 * @returns {{ actie: 'doorlaten' | 'lokaal' | 'blokkeren', body?: string }}
 * `doorlaten` gaat het netwerk op. Dat mag alleen naar loopback, of een GET
 * van het meetscript. Een POST naar een mailhost krijgt een lokaal antwoord.
 * Elke andere externe POST wordt geblokkeerd.
 */
export function routeBesluit({ url, method = 'GET', body = '' }) {
  const host = hostVan(url)
  if (isLoopbackHost(host)) return { actie: 'doorlaten' }
  if (isMailHost(host)) {
    const tekst = body ?? ''
    const ok = tekst.includes('client-lukt@example.com') || tekst.includes('client-lukt%40example.com')
    return {
      actie: 'lokaal',
      body: JSON.stringify(
        ok
          ? { success: 'true', message: 'submitted successfully', smoke: 'onderschept' }
          : { success: 'false', message: 'Unable to submit form', smoke: 'onderschept' },
      ),
    }
  }
  if (method.toUpperCase() === 'POST') return { actie: 'blokkeren' }
  if (isGaUrl(url)) return { actie: 'doorlaten' }
  return { actie: 'blokkeren' }
}

/** Playwright-route. Externe posts worden nooit doorgelaten. */
export async function pasRouteToe(route, { clientPosts, tegengehouden }) {
  const req = route.request()
  const besluit = routeBesluit({
    url: req.url(),
    method: req.method(),
    body: req.postData() ?? '',
  })
  if (besluit.actie === 'doorlaten') return route.continue()
  tegengehouden.add(req)
  if (besluit.actie === 'lokaal') {
    clientPosts.push({ url: req.url(), body: req.postData() ?? '' })
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: besluit.body,
    })
    return
  }
  await route.abort('blockedbyclient')
}
