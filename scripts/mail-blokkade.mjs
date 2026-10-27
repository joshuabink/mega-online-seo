/**
 * Beslist wat de smoketest met een browserverzoek doet.
 * Puur: geen netwerk, geen Playwright. De smoketest en de controle
 * gebruiken dezelfde functie, zodat een externe post niet kan worden
 * doorgelaten zonder dat de controle rood wordt.
 *
 * `new URL('http://[::1]').hostname` is `[::1]`, niet `::1`.
 * Hoofdletters en een trailing dot horen ook bij loopback.
 */

const GA_HOSTS = ['googletagmanager.com', 'google-analytics.com', 'analytics.google.com']

export function hostVan(url) {
  try { return new URL(url).hostname } catch { return '' }
}

/** Haalt haken, een trailing dot en hoofdletters van een hostname. */
export function normaliseerHost(host) {
  let naam = String(host ?? '').trim().toLowerCase()
  if (naam.startsWith('[') && naam.endsWith(']')) naam = naam.slice(1, -1)
  if (naam.endsWith('.')) naam = naam.slice(0, -1)
  return naam
}

export function isLoopbackHost(host) {
  const naam = normaliseerHost(host)
  return naam === 'localhost' || naam === '127.0.0.1' || naam === '::1'
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
  const naam = normaliseerHost(host)
  return naam === 'formsubmit.co' || naam.endsWith('.formsubmit.co') || naam === 'api.resend.com'
}

/** Alleen de host telt. Een query of pad met de merknaam is geen meetscript. */
export function isGaHost(host) {
  const naam = normaliseerHost(host)
  return GA_HOSTS.some((ga) => naam === ga || naam.endsWith(`.${ga}`))
}

export function isGaUrl(url) {
  return isGaHost(hostVan(url))
}

/**
 * @returns {{ actie: 'doorlaten' | 'lokaal' | 'blokkeren', body?: string }}
 * `doorlaten` gaat het netwerk op. Dat mag alleen naar loopback, of een GET
 * van een GA-host. Een verzoek naar een mailhost krijgt een lokaal antwoord,
 * ook bij PUT. Elke andere methode naar een GA-host, en elk ander extern
 * verzoek, wordt geblokkeerd.
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
  if (String(method || 'GET').toUpperCase() === 'GET' && isGaUrl(url)) return { actie: 'doorlaten' }
  return { actie: 'blokkeren' }
}

/**
 * Elke hop wordt op zijn eigen url beoordeeld. Een redirect van loopback
 * naar een externe host laat die tweede hop niet door.
 */
export function redirectBesluit(vanUrl, naarUrl, method = 'GET') {
  return {
    van: routeBesluit({ url: vanUrl, method }),
    naar: routeBesluit({ url: naarUrl, method }),
  }
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
