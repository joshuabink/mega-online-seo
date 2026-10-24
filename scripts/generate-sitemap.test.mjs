import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  contentFingerprint,
  lastmodFromManifest,
  parseLaatstBijgewerkt,
  pickContentDate,
} from "./generate-sitemap.mjs";

test("Laatst bijgewerkt: 24 juni 2026 wordt 2026-06-24", () => {
  assert.equal(parseLaatstBijgewerkt("Laatst bijgewerkt: 24 juni 2026"), "2026-06-24");
  assert.equal(parseLaatstBijgewerkt("bijgewerkt op 1 januari 2026"), null);
});

test("privacy en voorwaarden noemen 24 juni 2026", () => {
  for (const file of ["src/routes/algemene-voorwaarden.tsx", "src/routes/privacyverklaring.tsx"]) {
    const src = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    assert.match(src, /Laatst bijgewerkt: 24 juni 2026/);
    assert.equal(parseLaatstBijgewerkt(src), "2026-06-24");
  }
});

test("fingerprint negeert className, data-attributen, imports en witruimte", () => {
  const base = [
    "import { Link } from '@tanstack/react-router'",
    "export function Pagina() {",
    '  return <a href="/scan" to="/scan" className="btn" data-theme="dark">Hallo</a>',
    "}",
  ].join("\n");
  const opmaak = [
    "import { Andere } from './andere'",
    "// alleen opmaak",
    "export function Pagina() {",
    '  return <a   href="/scan"   to="/scan" className="btn primary" data-theme="light" style={{ margin: 0 }}>Hallo</a>',
    "}",
  ].join("\n");
  const tekst = base.replace(">Hallo<", ">Hallo daar<");
  const href = base.replace('href="/scan"', 'href="/ander"');
  assert.equal(contentFingerprint(base), contentFingerprint(opmaak));
  assert.notEqual(contentFingerprint(base), contentFingerprint(tekst));
  assert.notEqual(contentFingerprint(base), contentFingerprint(href));
});

test("pickContentDate volgt de nieuwste inhoudelijke hash", () => {
  assert.equal(
    pickContentDate([
      { date: "2026-10-20", ignored: true, contentHash: "nieuw" },
      { date: "2026-10-18", ignored: false, contentHash: "zelfde" },
      { date: "2026-10-03", ignored: false, contentHash: "zelfde" },
      { date: "2026-09-01", ignored: false, contentHash: "oud" },
    ]),
    "2026-10-03",
  );
  assert.equal(
    pickContentDate([
      { date: "2026-10-18", ignored: false, contentHash: "nieuw" },
      { date: "2026-10-03", ignored: false, contentHash: "oud" },
    ]),
    "2026-10-18",
  );
});

test("manifest houdt lastmod bij dezelfde hash en zet vandaag bij een wijziging", () => {
  assert.equal(
    lastmodFromManifest("abc", { hash: "abc", lastmod: "2026-06-24" }, "2026-10-23"),
    "2026-06-24",
  );
  assert.equal(
    lastmodFromManifest("def", { hash: "abc", lastmod: "2026-06-24" }, "2026-10-23"),
    "2026-10-23",
  );
  assert.equal(lastmodFromManifest("abc", undefined, "2026-10-23"), "2026-10-23");
});

test("manifest bewaart de paginadatum van privacy en voorwaarden", () => {
  const manifest = JSON.parse(
    fs.readFileSync(new URL("./sitemap-content-hashes.json", import.meta.url), "utf8"),
  );
  for (const file of ["src/routes/algemene-voorwaarden.tsx", "src/routes/privacyverklaring.tsx"]) {
    const src = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    assert.equal(manifest[file].lastmod, "2026-06-24");
    assert.equal(manifest[file].hash, contentFingerprint(src));
  }
});

test("sitemap lastmod van de juridische pagina's is 2026-06-24", () => {
  const xml = fs.readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  for (const pad of ["/algemene-voorwaarden", "/privacyverklaring"]) {
    const block = xml.match(new RegExp(`<url>[\\s\\S]*?megaonline\\.io${pad}<\\/loc>[\\s\\S]*?<\\/url>`));
    assert.ok(block, pad);
    assert.match(block[0], /<lastmod>2026-06-24<\/lastmod>/);
  }
});
