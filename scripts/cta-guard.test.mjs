import assert from 'node:assert/strict'
import test from 'node:test'
import {
  beoordeelHtml,
  classificeerHref,
  exitCode,
  leesCtaScan,
  normaliseer,
  rapporteer,
  striktAan,
} from './cta-guard.mjs'

const CTA = leesCtaScan()

function eind(html, pad = '/') {
  return beoordeelHtml({
    pad,
    ctaScan: CTA,
    html: `<section class="section final" data-screen-label="Afsluitende CTA">${html}</section>`,
  })
}

function overtredingen(bevindingen) {
  return bevindingen.filter((item) => item.ernst === 'overtreding')
}

test('CTA_SCAN komt uit src/lib/cta.ts', () => {
  assert.equal(leesCtaScan(`export const CTA_SCAN = 'voorbeeldtekst'\n`), 'voorbeeldtekst')
  assert.equal(CTA, normaliseer(CTA))
  assert.notEqual(CTA, 'Vraag je gratis homepageontwerp aan')
})

test('strikt staat alleen aan bij CTA_GUARD_STRICT=1', () => {
  assert.equal(striktAan({}), false)
  assert.equal(striktAan({ CTA_GUARD_STRICT: '0' }), false)
  assert.equal(striktAan({ CTA_GUARD_STRICT: '1' }), true)
})

test('waarschuwen geeft exitcode 0 bij verkeerde tekst', () => {
  const bevindingen = eind(`<a class="btn btn-primary" href="/gratis-websitescan">Vraag je gratis homepageontwerp aan</a>`)
  assert.equal(overtredingen(bevindingen).length, 1)
  assert.equal(overtredingen(bevindingen)[0].soort, 'tekst')
  assert.equal(overtredingen(bevindingen)[0].rol, 'eindknop')
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
})

test('strikt faalt bij verkeerde tekst', () => {
  const bevindingen = eind(`<a class="btn btn-primary" href="/gratis-websitescan">Vraag je gratis homepageontwerp aan</a>`)
  assert.equal(exitCode(bevindingen, { strict: true }), 1)
})

test('waarschuwen geeft exitcode 0 bij verkeerde link', () => {
  const bevindingen = eind(`<a class="btn btn-primary" href="#ontwerp">${CTA}</a>`, '/diensten/conversie-website')
  assert.deepEqual(overtredingen(bevindingen).map((item) => item.soort), ['link'])
  assert.equal(overtredingen(bevindingen)[0].href, '#ontwerp')
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
})

test('strikt faalt bij verkeerde link', () => {
  const bevindingen = eind(`<a class="btn btn-primary" href="/contact">${CTA}</a>`)
  assert.equal(overtredingen(bevindingen)[0].soort, 'link')
  assert.equal(exitCode(bevindingen, { strict: true }), 1)
})

test('juiste tekst en scanlink slagen in beide modi', () => {
  const bevindingen = eind(`<a class="btn btn-primary" href="/gratis-websitescan">${CTA} <span class="arr">→</span></a>`)
  assert.equal(overtredingen(bevindingen).length, 0)
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
  assert.equal(exitCode(bevindingen, { strict: true }), 0)
})

test('stapnavigatie is geen CTA-knop', () => {
  const html = `
    <form>
      <button class="btn btn-primary" type="button" data-next="">Volgende stap <span class="arr">→</span></button>
      <button class="btn btn-ghost" type="button" data-prev="">← Terug</button>
      <button class="btn btn-primary" type="submit">${CTA}</button>
    </form>`
  const bevindingen = beoordeelHtml({ pad: '/gratis-websitescan', html, ctaScan: CTA })
  assert.equal(overtredingen(bevindingen).length, 0)
})

test('verkeerde verstuurtekst faalt alleen strikt', () => {
  const html = `<form><button class="btn btn-primary" type="submit">Vraag je gratis homepageontwerp aan</button></form>`
  const bevindingen = beoordeelHtml({ pad: '/', html, ctaScan: CTA })
  assert.equal(overtredingen(bevindingen).length, 1)
  assert.equal(overtredingen(bevindingen)[0].rol, 'formulier')
  assert.equal(overtredingen(bevindingen)[0].href, '')
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
  assert.equal(exitCode(bevindingen, { strict: true }), 1)
})

test('#formulier en #scan zijn alleen op de scanpagina toegestaan', () => {
  const knop = `<section class="section hero"><a class="btn btn-primary" href="#formulier">${CTA}</a></section>`
  const opScan = beoordeelHtml({ pad: '/gratis-websitescan', html: knop, ctaScan: CTA })
  const elders = beoordeelHtml({ pad: '/diensten/seo', html: knop.replace('#formulier', '#scan'), ctaScan: CTA })
  assert.equal(overtredingen(opScan).length, 0)
  assert.equal(overtredingen(elders)[0].soort, 'link')
  assert.equal(classificeerHref('#scan', '/gratis-websitescan').soort, 'anker')
  assert.equal(classificeerHref('#scan', '/diensten/seo').soort, 'anders')
  assert.equal(classificeerHref('/gratis-websitescan', '/').soort, 'scan')
})

test('tel en wa.me worden gemeld en laten strikt slagen', () => {
  const html = `
    <a href="tel:+31600000000">Bel</a>
    <a href="https://wa.me/31600000000">WhatsApp</a>
    <section class="section final"><a class="btn btn-primary" href="/gratis-websitescan">${CTA}</a></section>`
  const bevindingen = beoordeelHtml({ pad: '/contact', html, ctaScan: CTA })
  assert.equal(overtredingen(bevindingen).length, 0)
  assert.deepEqual(bevindingen.map((item) => item.soort).sort(), ['tel', 'whatsapp'])
  assert.equal(exitCode(bevindingen, { strict: true }), 0)
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
})

test('een Bekijk-link is geen CTA-knop', () => {
  const html = `<a class="btn btn-primary" href="/diensten/conversie-website">Bekijk de Conversie Website</a>`
  const bevindingen = beoordeelHtml({ pad: '/diensten/starter-website', html, ctaScan: CTA })
  assert.equal(bevindingen.length, 0)
})

test('bron van een hero-knop wijst niet naar een menulink', () => {
  const html = `<section class="section svc-hero"><a class="btn btn-primary" href="/contact">Plan een kennismaking</a></section>`
  const bevindingen = beoordeelHtml({ pad: '/over-megaonline', html, ctaScan: CTA })
  const regels = []
  rapporteer(bevindingen.filter((item) => item.rol === 'hero'), { strict: false, schrijf: (regel) => regels.push(regel) })
  const waarschuwing = regels.find((regel) => regel.includes('[hero]'))
  assert.match(waarschuwing, /over-megaonline\.tsx:57/)
  assert.doesNotMatch(waarschuwing, /SiteHeader/)
})

test('hero-knop met andere tekst is een overtreding', () => {
  const html = `<section class="section svc-hero"><a class="btn btn-primary" href="/contact">Plan een kennismaking</a></section>`
  const bevindingen = beoordeelHtml({ pad: '/over-megaonline', html, ctaScan: CTA })
  assert.deepEqual(overtredingen(bevindingen).map((item) => item.soort).sort(), ['link', 'tekst'])
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
  assert.equal(exitCode(bevindingen, { strict: true }), 1)
})

test('rapportage zet ::warning:: en blijft exitcode 0', () => {
  const bevindingen = eind(`<a class="btn btn-primary" href="#ontwerp">Vraag je gratis homepageontwerp aan</a>`)
  const regels = []
  rapporteer(bevindingen, { strict: false, schrijf: (regel) => regels.push(regel) })
  const kop = regels.find((regel) => regel.startsWith('CTA-bewaker:'))
  assert.ok(regels.some((regel) => regel.startsWith('::warning')))
  assert.match(kop, /exitcode 0/)
  assert.match(kop, /CTA_GUARD_STRICT=1/)
  assert.ok(regels.some((regel) => regel.startsWith('Gratis homepageontwerp')))
  assert.equal(exitCode(bevindingen, { strict: false }), 0)
})
