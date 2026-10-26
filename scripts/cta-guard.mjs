/**
 * TK-321. CTA-bewaker die waarschuwt.
 *
 * Een CTA-knop is een bediening die de bezoeker naar de enige toegestane
 * actie moet brengen. De tekst komt uit `CTA_SCAN` in `src/lib/cta.ts`.
 * Een link daarbij hoort naar /gratis-websitescan. Op de scanpagina zelf
 * mag het anker #formulier of #scan.
 *
 * Wat telt als CTA-knop:
 * - eindknop: een .btn in section.final, of in een section met
 *   data-screen-label die "CTA" bevat (Afsluitende CTA, Eind-CTA).
 *   Ghost-knoppen niet.
 * - hero: een .btn-primary in een hero-section, buiten een formulier.
 * - formulier: de verstuurknop (button[type=submit].btn) van een leadformulier.
 * - navigatie: de .btn in .nav__cta.
 * - footer: de link .footer__scan.
 * - overig: een .btn-primary elders waarvan de tekst exact CTA_SCAN is,
 *   of waarin "homepageontwerp" staat (prijsblokken).
 *
 * Telt niet: stapnavigatie (data-next, data-prev, "Volgende", "Volgende stap",
 * "← Terug"), de menuknop, mailto-fallbacks, sollicitatie en /werken-bij.
 * Een "Bekijk …"-link naar een andere dienst is geen CTA-knop.
 *
 * Echte tekst- en linkovertredingen geven exitcode 0, met ::warning::.
 * CTA_GUARD_STRICT=1 geeft exitcode 1. tel:- en wa.me-links worden alleen
 * gemeld en laten ook de strikte modus slagen.
 *
 * De oudere controle in scripts/smoke.mjs (controleerCtaTeksten) blijft
 * onaangeroerd.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])

export function leesCtaScan(src = fs.readFileSync(path.join(ROOT, 'src/lib/cta.ts'), 'utf8')) {
  const m = src.match(/export const CTA_SCAN = '([^']*)'/)
  if (!m) throw new Error('CTA_SCAN ontbreekt in src/lib/cta.ts')
  return m[1]
}

export function striktAan(env = process.env) {
  return env.CTA_GUARD_STRICT === '1'
}

export function normaliseer(waarde) {
  return decode(String(waarde ?? '').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .replace(/\s*(?:→|->|›)\s*$/u, '')
    .trim()
}

function decode(waarde) {
  return waarde
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
}

function attr(raw, naam) {
  const m = raw.match(new RegExp(`\\b${naam}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s"'>]+))`, 'i'))
  if (!m) return null
  return decode(m[2] ?? m[3] ?? m[4] ?? '')
}

function classes(raw) {
  return (attr(raw, 'class') ?? '').split(/\s+/).filter(Boolean)
}

function isStap(raw, tekst) {
  if (/\bdata-next\b/i.test(raw) || /\bdata-prev\b/i.test(raw)) return true
  return tekst === 'Volgende' || tekst === 'Volgende stap' || tekst === '← Terug' || tekst === 'Terug'
}

export function classificeerHref(href, pad) {
  if (!href) return { soort: 'geen', pad: '' }
  if (/^mailto:/i.test(href)) return { soort: 'mailto', pad: href }
  if (/^tel:/i.test(href)) return { soort: 'tel', pad: href }
  if (/wa\.me|api\.whatsapp\.com|whatsapp/i.test(href)) return { soort: 'whatsapp', pad: href }
  let url
  try {
    url = new URL(href, 'https://megaonline.io')
  } catch {
    return { soort: 'anders', pad: href }
  }
  const pathNaam = url.pathname.replace(/\/$/, '') || '/'
  const hier = (pad || '/').replace(/\/$/, '') || '/'
  const hash = url.hash
  const zichtbaar = `${pathNaam}${url.search}${hash}`
  if (pathNaam === '/gratis-websitescan' && (hash === '' || hash === '#formulier' || hash === '#scan')) {
    return { soort: 'scan', pad: hash ? `${pathNaam}${hash}` : pathNaam }
  }
  const zelfde = pathNaam === hier || href.startsWith('#')
  if (zelfde && (hash === '#formulier' || hash === '#scan') && hier === '/gratis-websitescan') {
    return { soort: 'anker', pad: hash }
  }
  return { soort: 'anders', pad: href.startsWith('#') ? href : zichtbaar }
}

function bepaalRol({ tag, raw, tekst, stack, pad, ctaScan }) {
  if (!tekst || isStap(raw, tekst)) return null
  if (pad.startsWith('/werken-bij')) return null
  if (stack.some((item) => item.sollicitatie)) return null
  const klassen = classes(raw)
  if (klassen.includes('nav__menu-btn') || klassen.includes('mmenu__close')) return null
  const href = attr(raw, 'href') || ''
  if (/^mailto:/i.test(href)) return null

  const isBtn = klassen.includes('btn')
  const isPrimary = klassen.includes('btn-primary')
  const isGhost = klassen.includes('btn-ghost')
  const type = (attr(raw, 'type') || '').toLowerCase()
  const inFormulier = stack.some((item) => item.tag === 'form')
  const section = [...stack].reverse().find((item) => item.tag === 'section')
  const sectionKlassen = section?.classes ?? []
  const label = section?.label ?? ''
  const inHero = sectionKlassen.some((naam) => naam === 'hero' || naam.includes('hero'))
  const inEind = sectionKlassen.includes('final') || /cta/i.test(label)
  const inNav = stack.some((item) => item.classes.includes('nav__cta'))

  if (tag === 'button' && inFormulier && isBtn && !isGhost && type !== 'button' && type !== 'reset') return 'formulier'
  if (inEind && isBtn && !isGhost) return 'eindknop'
  if (inHero && isPrimary && !inFormulier) return 'hero'
  if (inNav && isBtn) return 'navigatie'
  if (klassen.includes('footer__scan')) return 'footer'
  if (isPrimary && (tekst === ctaScan || /homepageontwerp/i.test(tekst))) return 'overig'
  return null
}

function zonderRuis(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
}

function eindeTag(html, vanaf) {
  const einde = html.indexOf('>', vanaf)
  return einde < 0 ? html.length : einde + 1
}

function vindSluit(html, vanaf, tag) {
  let diepte = 1
  let i = vanaf
  const open = new RegExp(`^<${tag}\\b`, 'i')
  const dicht = new RegExp(`^</${tag}\\b`, 'i')
  while (i < html.length && diepte > 0) {
    const lt = html.indexOf('<', i)
    if (lt < 0) return { start: html.length, end: html.length }
    const rest = html.slice(lt)
    if (dicht.test(rest)) {
      diepte -= 1
      const end = eindeTag(html, lt)
      if (diepte === 0) return { start: lt, end }
      i = end
      continue
    }
    if (open.test(rest)) {
      diepte += 1
      i = eindeTag(html, lt)
      continue
    }
    i = lt + 1
  }
  return { start: html.length, end: html.length }
}

function verzamel(html) {
  const schoon = zonderRuis(html)
  const stack = []
  const knoppen = []
  const ankers = []
  let i = 0
  while (i < schoon.length) {
    const lt = schoon.indexOf('<', i)
    if (lt < 0) break
    const rest = schoon.slice(lt)
    if (rest.startsWith('</')) {
      const m = /^<\/([a-zA-Z0-9]+)/.exec(rest)
      const tag = m ? m[1].toLowerCase() : ''
      const end = eindeTag(schoon, lt)
      if (tag) {
        for (let n = stack.length - 1; n >= 0; n -= 1) {
          if (stack[n].tag === tag) {
            stack.splice(n)
            break
          }
        }
      }
      i = end
      continue
    }
    const open = /^<([a-zA-Z0-9]+)([^>]*)>/.exec(rest)
    if (!open) {
      i = lt + 1
      continue
    }
    const tag = open[1].toLowerCase()
    const raw = open[2] ?? ''
    const zelf = /\/\s*$/.test(raw) || VOID.has(tag)
    if (tag === 'a' || tag === 'button') {
      const sluit = vindSluit(schoon, lt + open[0].length, tag)
      const inner = schoon.slice(lt + open[0].length, sluit.start)
      const tekst = normaliseer(inner)
      knoppen.push({ tag, raw, tekst, stack: stack.map((item) => ({ ...item, classes: [...item.classes] })) })
      if (tag === 'a') {
        const href = attr(raw, 'href')
        if (href) ankers.push(href)
      }
      i = sluit.end
      continue
    }
    if (!zelf) {
      const frame = {
        tag,
        classes: classes(raw),
        label: attr(raw, 'data-screen-label') || '',
        sollicitatie: false,
      }
      if (tag === 'form') {
        const hoger = [...stack].reverse().find((item) => item.sollicitatie)
        frame.sollicitatie = Boolean(hoger)
      }
      stack.push(frame)
    }
    if (tag === 'input' || tag === 'textarea') {
      const naam = attr(raw, 'name') || attr(raw, 'id') || ''
      if (naam === 'motivatie' || naam === 's-motivatie') {
        const formulier = [...stack].reverse().find((item) => item.tag === 'form')
        if (formulier) formulier.sollicitatie = true
      }
    }
    i = lt + open[0].length
  }
  return { knoppen, ankers }
}

function routeBestand(pad) {
  if (pad === '/' || pad === '') return 'src/routes/index.tsx'
  if (pad.startsWith('/kennisbank/')) return 'src/routes/kennisbank/$slug.tsx'
  if (pad.startsWith('/concepten/')) return 'src/routes/concepten/$slug.tsx'
  if (pad.startsWith('/werken-bij/')) return 'src/routes/werken-bij/$slug.tsx'
  return `src/routes${pad}.tsx`
}

let bronCache
function leesBronnen() {
  if (bronCache) return bronCache
  const bestanden = []
  const stapel = ['src']
  while (stapel.length) {
    const rel = stapel.pop()
    const abs = path.join(ROOT, rel)
    if (!fs.existsSync(abs)) continue
    for (const naam of fs.readdirSync(abs)) {
      const kind = path.join(rel, naam)
      const stat = fs.statSync(path.join(ROOT, kind))
      if (stat.isDirectory()) stapel.push(kind)
      else if (/\.(tsx|ts)$/.test(naam)) bestanden.push(kind)
    }
  }
  const regels = []
  for (const bestand of bestanden) {
    const lijnen = fs.readFileSync(path.join(ROOT, bestand), 'utf8').split('\n')
    lijnen.forEach((regel, index) => {
      regels.push({ file: bestand, line: index + 1, tekst: regel })
    })
  }
  bronCache = regels
  return regels
}

function bestandRegels(bestand) {
  return leesBronnen().filter((regel) => regel.file === bestand)
}

function ctaLabelRegel(regels) {
  const index = regels.findIndex((regel) => /data-screen-label="[^"]*CTA/i.test(regel.tekst) || /section final/.test(regel.tekst))
  return index >= 0 ? regels[index].line : 0
}

function openingVoor(regels, index) {
  for (let i = index; i >= Math.max(0, index - 5); i -= 1) {
    if (/\bbtn\b/.test(regels[i].tekst) && /<(?:Link|a|button|Reveal)\b/.test(regels[i].tekst)) return regels[i]
  }
  return regels[index]
}

function inRolBereik(rol, regel, labelRegel) {
  if (!labelRegel) return true
  if (rol === 'eindknop') return regel >= labelRegel
  if (rol === 'hero' || rol === 'overig') return regel < labelRegel
  return true
}

function bronVoor(pad, bevinding) {
  const pagina = routeBestand(pad)
  const paginaRegels = bestandRegels(pagina)
  const labelRegel = ctaLabelRegel(paginaRegels)
  const href = bevinding.href || ''
  const hits = []
  const gezien = new Set()
  const voeg = (regel) => {
    if (!regel || !inRolBereik(bevinding.rol, regel.line, labelRegel)) return
    const sleutel = `${regel.file}:${regel.line}`
    if (gezien.has(sleutel)) return
    gezien.add(sleutel)
    hits.push({ file: regel.file, line: regel.line, tekst: regel.tekst })
  }
  if (bevinding.rol === 'formulier') {
    for (let i = 0; i < paginaRegels.length; i += 1) {
      const regel = paginaRegels[i]
      if (regel.tekst.includes('soort="ontwerp"')) voeg(regel)
      else if (regel.tekst.includes(bevinding.tekst)) {
        const opening = openingVoor(paginaRegels, i)
        if (/<button\b/.test(opening.tekst) && /type="submit"/.test(opening.tekst)) voeg(opening)
      }
    }
    if (/homepageontwerp/i.test(bevinding.tekst)) {
      for (const regel of bestandRegels('src/components/AanvraagKort.tsx')) {
        if (regel.tekst.includes(`knop: '${bevinding.tekst}'`) || regel.tekst.includes('{knop}')) voeg(regel)
      }
    }
  } else {
    for (let i = 0; i < paginaRegels.length; i += 1) {
      const regel = paginaRegels[i]
      if (regel.tekst.includes('mlink__name')) continue
      if (regel.tekst.includes(bevinding.tekst)) {
        const opening = openingVoor(paginaRegels, i)
        if (/\bbtn\b/.test(opening.tekst)) voeg(opening)
      }
      if (href.startsWith('#') && regel.tekst.includes(`href="${href}"`) && /\bbtn\b/.test(regel.tekst)) voeg(regel)
    }
  }
  hits.sort((a, b) => {
    const score = (item) => {
      let waarde = 0
      if (href && (item.tekst.includes(`href="${href}"`) || item.tekst.includes(`to="${href}"`))) waarde += 5
      if (item.tekst.includes(bevinding.tekst)) waarde += 2
      if (item.tekst.includes('soort="ontwerp"')) waarde += bevinding.rol === 'formulier' ? 4 : 0
      if (item.tekst.includes(`knop: '${bevinding.tekst}'`)) waarde += 4
      if (item.tekst.includes('{knop}')) waarde += 1
      return waarde
    }
    return score(b) - score(a) || a.line - b.line
  })
  return hits.slice(0, 6).map(({ file, line }) => ({ file, line }))
}

export function beoordeelHtml({ pad, html, ctaScan }) {
  const { knoppen, ankers } = verzamel(html)
  const bevindingen = []
  for (const knop of knoppen) {
    const rol = bepaalRol({ ...knop, pad, ctaScan })
    if (!rol) continue
    const href = attr(knop.raw, 'href') || ''
    const basis = { pad, rol, tekst: knop.tekst, ernst: 'overtreding' }
    if (rol === 'formulier') {
      if (knop.tekst !== ctaScan) bevindingen.push({ ...basis, soort: 'tekst', href: '' })
      continue
    }
    if (knop.tekst !== ctaScan) bevindingen.push({ ...basis, soort: 'tekst', href })
    const klas = classificeerHref(href, pad)
    if (klas.soort !== 'scan' && klas.soort !== 'anker') {
      bevindingen.push({ ...basis, soort: 'link', href: klas.pad || href || 'geen' })
    }
  }
  for (const href of ankers) {
    const klas = classificeerHref(href, pad)
    if (klas.soort !== 'tel' && klas.soort !== 'whatsapp') continue
    bevindingen.push({
      pad,
      rol: 'link',
      soort: klas.soort,
      tekst: href,
      href,
      ernst: 'melding',
    })
  }
  return bevindingen
}

export function exitCode(bevindingen, { strict }) {
  if (!strict) return 0
  return bevindingen.some((item) => item.ernst === 'overtreding') ? 1 : 0
}

function waarschuwing(bevinding) {
  const bron = (bevinding.bron ?? []).map((item) => `${item.file}:${item.line}`).join(', ')
  const eerste = bevinding.bron?.[0]
  const loc = eerste ? ` file=${eerste.file},line=${eerste.line}` : ''
  const titel = bevinding.ernst === 'melding' ? 'CTA-melding' : 'CTA-bewaker'
  const bericht = `${bevinding.pad} [${bevinding.rol}] ${bevinding.soort}: tekst "${bevinding.tekst}" link "${bevinding.href || 'geen'}"${bron ? ` bron ${bron}` : ''}`
  return `::warning${loc} title=${titel}::${bericht.replace(/[\r\n]+/g, ' ')}`
}

export function samenvatting(bevindingen, { strict }) {
  const overtredingen = bevindingen.filter((item) => item.ernst === 'overtreding')
  const meldingen = bevindingen.filter((item) => item.soort === 'tel' || item.soort === 'whatsapp')
  const paginas = new Set(overtredingen.map((item) => item.pad))
  const knoppen = new Set(overtredingen.map((item) => [item.pad, item.rol, item.tekst, item.href].join('\n')))
  const modus = strict
    ? 'strikt (CTA_GUARD_STRICT=1, exitcode 1 bij tekst of link)'
    : 'waarschuwen (exitcode 0; CTA_GUARD_STRICT=1 laat dezelfde overtredingen falen)'
  return `CTA-bewaker: ${knoppen.size} knoppen met een afwijking (${overtredingen.length} tekst- of linkafwijkingen) op ${paginas.size} pagina's, ${meldingen.length} tel/wa.me-melding(en). Modus: ${modus}.`
}

function groepeer(bevindingen) {
  const uit = []
  const perKnop = new Map()
  for (const item of bevindingen) {
    if (item.ernst !== 'overtreding') {
      uit.push(item)
      continue
    }
    const sleutel = [item.pad, item.rol, item.tekst, item.href].join('\n')
    const bestaand = perKnop.get(sleutel)
    if (!bestaand) {
      const kopie = { ...item }
      perKnop.set(sleutel, kopie)
      uit.push(kopie)
    } else if (!bestaand.soort.split('+').includes(item.soort)) {
      bestaand.soort = `${bestaand.soort}+${item.soort}`
    }
  }
  return uit
}

export function rapporteer(bevindingen, { strict, schrijf = console.log }) {
  const gegroepeerd = groepeer(bevindingen).map((item) => (
    item.bron ? item : { ...item, bron: item.ernst === 'overtreding' ? bronVoor(item.pad, item) : [] }
  ))
  for (const item of gegroepeerd) schrijf(waarschuwing(item))
  const tekst = samenvatting(bevindingen, { strict })
  schrijf(tekst)
  const ontwerp = gegroepeerd.filter((item) => /homepageontwerp/i.test(item.tekst))
  if (ontwerp.length) {
    schrijf('Gratis homepageontwerp, per pagina:')
    for (const item of ontwerp) {
      const bron = (item.bron ?? []).map((regel) => `${regel.file}:${regel.line}`).join(', ')
      schrijf(`- ${item.pad} [${item.rol}] ${item.soort}: "${item.tekst}" link "${item.href || 'geen'}"${bron ? ` (${bron})` : ''}`)
    }
  }
  return tekst
}

export async function controleerSite({ base, strict = striktAan(), ctaScan = leesCtaScan(), schrijf = console.log }) {
  const basis = base.replace(/\/$/, '')
  let xml
  try {
    const antwoord = await fetch(`${basis}/sitemap.xml`, { signal: AbortSignal.timeout(30000) })
    xml = await antwoord.text()
    if (!antwoord.ok) throw new Error(`sitemap status ${antwoord.status}`)
  } catch (error) {
    const fout = error instanceof Error ? error.message : String(error)
    schrijf(`::warning title=CTA-bewaker::sitemap niet gelezen: ${fout}`)
    return { gelezen: false, fout, bevindingen: [], exitCode: 0, samenvatting: fout }
  }
  const paden = [...xml.matchAll(/<loc>https:\/\/megaonline\.io([^<]*)<\/loc>/g)].map((m) => m[1] || '/')
  if (paden.length === 0) {
    schrijf('::warning title=CTA-bewaker::sitemap bevat geen paden')
    return { gelezen: false, fout: 'geen paden', bevindingen: [], exitCode: 0, samenvatting: 'geen paden' }
  }
  const perPagina = await mapPool(paden, 4, async (pad) => {
    try {
      const antwoord = await fetch(`${basis}${pad}`, { signal: AbortSignal.timeout(30000) })
      const html = await antwoord.text()
      if (!antwoord.ok) {
        return [{ pad, rol: 'pagina', soort: 'lezen', tekst: `status ${antwoord.status}`, href: '', ernst: 'melding' }]
      }
      return beoordeelHtml({ pad, html, ctaScan })
    } catch (error) {
      const fout = error instanceof Error ? error.message : String(error)
      return [{ pad, rol: 'pagina', soort: 'lezen', tekst: fout, href: '', ernst: 'melding' }]
    }
  })
  const bevindingen = perPagina.flat()
  const tekst = rapporteer(bevindingen, { strict, schrijf })
  return { gelezen: true, bevindingen, exitCode: exitCode(bevindingen, { strict }), samenvatting: tekst }
}

async function mapPool(items, limit, fn) {
  const uit = new Array(items.length)
  let cursor = 0
  async function werker() {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      uit[index] = await fn(items[index], index)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => werker()))
  return uit
}

const direct = process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
if (direct) {
  const basis = process.env.BASE ?? 'http://127.0.0.1:3000'
  const strict = striktAan()
  const uit = await controleerSite({ base: basis, strict })
  process.exitCode = uit.exitCode
}
