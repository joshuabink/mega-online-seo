/**
 * Smoketest-bewaker voor doorlooptijden en de we-vorm.
 *
 * Zichtbare tekst mag geen bouwtijd of reactietermijn noemen. Title, meta en
 * JSON-LD evenmin, behalve de scanbelofte 'binnen 5 werkdagen'. Losse woorden
 * we, wij, ons en onze in de zichtbare tekst ook, behalve in een blockquote.
 *
 * /algemene-voorwaarden slaat de termijncontrole over. Dat is een bewuste
 * blinde vlek: de juridische tekst over indicatieve opleveringstermijnen en
 * 'binnen 30 dagen' blijft daar staan en wordt niet mee gecontroleerd. De
 * controle op we, wij, ons en onze geldt op die pagina wel.
 */

const VERBODEN = ['4 tot 8 weken', 'enkele weken', 'twee werkdagen', '2 werkdagen', 'vlot', 'snel live']
const MAAND =
  /binnen\s+(?:\d+|een|twee|drie|vier|vijf|zes|zeven|acht|negen|tien|elf|twaalf|enkele|paar)\s+maanden|na\s+(?:\d+|een|twee|drie|vier|vijf|zes|zeven|acht|negen|tien|elf|twaalf|enkele|paar)\s+maanden/i
const KOP = /weken|werkdagen|dagen|maanden?\s+live|vlot|snel live/i
const STEM = /(^|[^\p{L}])(we|wij|ons|onze)(?=[^\p{L}]|$)/iu
const DAGEN_UITZONDERING =
  /rustige dagen|stille dagen|doordeweekse dagen|drukke dagen|feestdagen|contentdagen|sluitingsdagen|dagen per week/gi

const LLMS = ['/llms.txt', '/llms-full.txt', '/llms.md']

export async function beoordeelTermijnBestanden(pg, xml, base) {
  const fouten = []
  const sitemapTreffer = xml.match(KOP)
  if (sitemapTreffer) fouten.push(`sitemap bevat "${sitemapTreffer[0]}"`)
  for (const bestand of LLMS) {
    const llms = await pg.request.get(base + bestand)
    if (llms.status() !== 200) continue
    const treffer = (await llms.text()).match(KOP)
    if (treffer) fouten.push(`${bestand} bevat "${treffer[0]}"`)
  }
  return fouten
}

export async function beoordeelTermijnPagina(pg, pad) {
  const data = await pg.evaluate(() => {
    const meta = (sel) => document.querySelector(sel)?.getAttribute('content') ?? ''
    const koppen = [
      document.title,
      meta('meta[name="description"]'),
      meta('meta[property="og:title"]'),
      meta('meta[property="og:description"]'),
    ]
    // innerText van de live pagina: verborgen stappen en de bedanktekst
    // (display:none) tellen niet mee, placeholders evenmin.
    let stemBody = document.body.innerText
    for (const quote of document.querySelectorAll('blockquote')) {
      const stuk = quote.innerText
      if (stuk) stemBody = stemBody.replace(stuk, ' ')
    }
    const zichtbaar = [document.body.innerText, ...koppen].join('\n')
    const stem = [stemBody, ...koppen].join('\n')
    const headSchema = [
      ...koppen,
      ...[...document.querySelectorAll('script[type="application/ld+json"]')].map((n) => n.textContent || ''),
    ].join('\n')
    return { zichtbaar, stem, headSchema }
  })
  return beoordeelTermijnTekst(pad, data)
}

export function beoordeelTermijnTekst(pad, data) {
  const fouten = []
  if (pad !== '/algemene-voorwaarden') {
    const laag = data.zichtbaar.toLowerCase()
    for (const verboden of VERBODEN) {
      if (laag.includes(verboden)) fouten.push(`${pad} bevat "${verboden}"`)
    }
    const maandTermijn = data.zichtbaar.match(MAAND)
    if (maandTermijn) fouten.push(`${pad} bevat "${maandTermijn[0]}"`)
    const kopZonderScan = data.headSchema
      .replace(/binnen 5 werkdagen/gi, '')
      .replace(DAGEN_UITZONDERING, '')
    const kopTreffer = kopZonderScan.match(KOP)
    if (kopTreffer) {
      const van = Math.max(0, kopTreffer.index - 40)
      fouten.push(
        `${pad} head/JSON-LD bevat "${kopTreffer[0]}" in "${kopZonderScan.slice(van, kopTreffer.index + 80).replace(/\s+/g, ' ')}"`,
      )
    }
  }
  const stemTreffer = data.stem.match(STEM)
  if (stemTreffer) {
    const van = Math.max(0, stemTreffer.index - 30)
    fouten.push(
      `${pad} bevat "${stemTreffer[2]}" in "${data.stem.slice(van, stemTreffer.index + 70).replace(/\s+/g, ' ')}"`,
    )
  }
  return fouten
}
