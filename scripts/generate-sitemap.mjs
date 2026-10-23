/**
 * Schrijft public/sitemap.xml met een echte <lastmod> per URL.
 *
 * Kennisbankartikelen: veld `gewijzigd` in src/lib/kennisbank.ts.
 * /kennisbank: nieuwste `gewijzigd`.
 * Juridische pagina's: de datum achter "Laatst bijgewerkt" op de pagina.
 * Overige URL's: de datum van de nieuwste commit die de tekst van het
 * routebestand verandert. className, style, data-attributen, imports,
 * commentaar en witruimte tellen niet. Commits in
 * scripts/sitemap-ignore-revs.txt ook niet, net als berichten die opmaak
 * of onderhoud zijn (prettier, format, lint, eslint, refactor of style)
 * of de marker [skip-lastmod] bevatten. Typo-fixes blijven wel meetellen.
 *
 * Een shallow clone probeert eerst `git fetch --unshallow`. Lukt dat niet,
 * dan blijft de sitemap niet bevroren: een gelijk gebleven inhoudshash
 * houdt de lastmod uit scripts/sitemap-content-hashes.json, een wijziging
 * zonder geschiedenis krijgt de bouwdatum (UTC).
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const SITEMAP = path.join(ROOT, "public/sitemap.xml");
const IGNORE_FILE = path.join(ROOT, "scripts/sitemap-ignore-revs.txt");
const MANIFEST = path.join(ROOT, "scripts/sitemap-content-hashes.json");
const KENNISBANK = path.join(ROOT, "src/lib/kennisbank.ts");

/**
 * Handmatige inhoudsdatum als die afwijkt van git.
 * Sleutel is het routebestand (repo-relatief), waarde is YYYY-MM-DD.
 * Een "Laatst bijgewerkt"-datum op de pagina gaat hier vóór.
 */
const DATE_OVERRIDES = {
  // "src/routes/voorbeeld.tsx": "2026-01-01",
};

const SKIP_SUBJECT = /\b(?:prettier|format|lint|eslint|refactor|style)\b|\[skip-lastmod\]/i;

const MAANDEN = {
  januari: 1,
  februari: 2,
  maart: 3,
  april: 4,
  mei: 5,
  juni: 6,
  juli: 7,
  augustus: 8,
  september: 9,
  oktober: 10,
  november: 11,
  december: 12,
};

const ROUTE_FILES = {
  "/": "src/routes/index.tsx",
  "/algemene-voorwaarden": "src/routes/algemene-voorwaarden.tsx",
  "/branches/activiteitenbedrijven": "src/routes/branches/activiteitenbedrijven.tsx",
  "/branches/dienstverleners": "src/routes/branches/dienstverleners.tsx",
  "/branches/non-profits": "src/routes/branches/non-profits.tsx",
  "/branches/offerteaanvragen": "src/routes/branches/offerteaanvragen.tsx",
  "/branches/reserveringen": "src/routes/branches/reserveringen.tsx",
  "/branches/verhuurbedrijven": "src/routes/branches/verhuurbedrijven.tsx",
  "/concepten": "src/routes/concepten/index.tsx",
  "/contact": "src/routes/contact.tsx",
  "/diensten/conversie-website": "src/routes/diensten/conversie-website.tsx",
  "/diensten/google-ads": "src/routes/diensten/google-ads.tsx",
  "/diensten/integraties": "src/routes/diensten/integraties.tsx",
  "/diensten/seo": "src/routes/diensten/seo.tsx",
  "/diensten/starter-website": "src/routes/diensten/starter-website.tsx",
  "/diensten/website-optimalisatie": "src/routes/diensten/website-optimalisatie.tsx",
  "/diensten/website-redesign": "src/routes/diensten/website-redesign.tsx",
  "/diensten/werken-bij-websites": "src/routes/diensten/werken-bij-websites.tsx",
  "/gratis-websitescan": "src/routes/gratis-websitescan.tsx",
  "/kennisbank": "src/routes/kennisbank/index.tsx",
  "/megasmart": "src/routes/megasmart.tsx",
  "/over-megaonline": "src/routes/over-megaonline.tsx",
  "/privacyverklaring": "src/routes/privacyverklaring.tsx",
  "/veelgestelde-vragen": "src/routes/veelgestelde-vragen.tsx",
  "/werken-bij": "src/routes/werken-bij/index.tsx",
};

const historyCache = new Map();

function warn(message) {
  console.warn(`sitemap: ${message}`);
}

function git(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" });
}

export function todayUtc(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function parseLaatstBijgewerkt(source) {
  const match = String(source).match(/Laatst bijgewerkt:\s*(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (!match) return null;
  const maand = MAANDEN[match[2].toLowerCase()];
  if (!maand) return null;
  const dag = match[1].padStart(2, "0");
  const mm = String(maand).padStart(2, "0");
  return `${match[3]}-${mm}-${dag}`;
}

function skipSpace(source, index) {
  let i = index;
  while (i < source.length && /\s/.test(source[i])) i++;
  return i;
}

function endOfBrace(source, open) {
  let depth = 0;
  let quote = null;
  for (let i = open; i < source.length; i++) {
    const char = source[i];
    if (quote) {
      if (char === "\\") {
        i++;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") depth++;
    else if (char === "}") {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return source.length;
}

function endOfAttributeValue(source, index) {
  const char = source[index];
  if (char === '"' || char === "'") {
    const end = source.indexOf(char, index + 1);
    return end === -1 ? source.length : end + 1;
  }
  if (char === "{") return endOfBrace(source, index);
  const match = source.slice(index).match(/^[^\s>/]+/);
  return index + (match ? match[0].length : 0);
}

function stripAttributes(source, pattern) {
  let out = "";
  let last = 0;
  for (const match of source.matchAll(pattern)) {
    const valueStart = skipSpace(source, match.index + match[0].length);
    if (valueStart >= source.length) break;
    out += source.slice(last, match.index);
    last = endOfAttributeValue(source, valueStart);
  }
  out += source.slice(last);
  return out;
}

function stripImports(source) {
  return source
    .replace(/^[ \t]*import\b[\s\S]*?from\s+['"][^'"]+['"]\s*;?/gm, " ")
    .replace(/^[ \t]*import\s+['"][^'"]+['"]\s*;?/gm, " ");
}

export function contentFingerprint(source) {
  let text = String(source).replace(/\r\n/g, "\n");
  text = text.replace(/\/\*[\s\S]*?\*\//g, " ");
  text = text.replace(/^[ \t]*\/\/.*$/gm, " ");
  text = stripImports(text);
  text = stripAttributes(text, /(?:^|[\s])(?:className|style|key)\s*=/g);
  text = stripAttributes(text, /(?:^|[\s])data-[A-Za-z0-9-]+\s*=/g);
  text = text.replace(/\s+/g, " ").trim();
  return createHash("sha256").update(text).digest("hex");
}

/**
 * `versions` is nieuwste eerst. `ignored` slaat opmaakcommits over.
 * De datum is de nieuwste overgebleven versie waarvan de hash afwijkt
 * van de eerstvolgende oudere versie.
 */
export function pickContentDate(versions) {
  const relevant = versions.filter((version) => !version.ignored);
  for (let i = 0; i < relevant.length; i++) {
    const older = relevant[i + 1];
    if (!older || relevant[i].contentHash !== older.contentHash) return relevant[i].date;
  }
  return null;
}

export function lastmodFromManifest(currentHash, entry, today) {
  if (
    entry &&
    entry.hash === currentHash &&
    typeof entry.lastmod === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(entry.lastmod)
  ) {
    return entry.lastmod;
  }
  return today;
}

function loadIgnore() {
  if (!fs.existsSync(IGNORE_FILE)) return [];
  const hashes = [];
  for (const raw of fs.readFileSync(IGNORE_FILE, "utf8").split("\n")) {
    const line = raw.replace(/#.*$/, "").trim().toLowerCase();
    if (!line) continue;
    if (!/^[0-9a-f]{7,40}$/.test(line)) {
      warn(`ongeldige regel in sitemap-ignore-revs.txt genegeerd: ${raw.trim()}`);
      continue;
    }
    hashes.push(line);
  }
  return hashes;
}

function isIgnoredHash(hash, ignore) {
  const value = hash.toLowerCase();
  return ignore.some((entry) => value === entry || value.startsWith(entry));
}

function history(file) {
  if (historyCache.has(file)) return historyCache.get(file);
  const out = git(["log", "--follow", "--format=%H%x09%cs%x09%s", "--name-only", "--", file]);
  const commits = [];
  let current = null;
  for (const line of out.split("\n")) {
    if (!line) {
      if (current) commits.push(current);
      current = null;
      continue;
    }
    if (line.includes("\t")) {
      if (current) commits.push(current);
      const [hash, date, ...rest] = line.split("\t");
      current = { hash, date, subject: rest.join("\t"), path: null };
      continue;
    }
    if (current && !current.path) current.path = line.trim();
  }
  if (current) commits.push(current);
  historyCache.set(file, commits);
  return commits;
}

function sourceAt(commit, file) {
  const filePath = commit.path || file;
  try {
    return git(["show", `${commit.hash}:${filePath}`]);
  } catch {
    return null;
  }
}

function gitContentDate(file, ignore) {
  let newer = null;
  for (const commit of history(file)) {
    if (isIgnoredHash(commit.hash, ignore) || SKIP_SUBJECT.test(commit.subject)) continue;
    const source = sourceAt(commit, file);
    if (source == null) continue;
    const contentHash = contentFingerprint(source);
    if (newer && newer.contentHash !== contentHash) return { date: newer.date, hash: newer.hash };
    newer = { date: commit.date, hash: commit.hash, contentHash };
  }
  return newer ? { date: newer.date, hash: newer.hash } : null;
}

function readArtikelen() {
  const src = fs.readFileSync(KENNISBANK, "utf8");
  const start = src.indexOf("export const ARTIKELEN");
  const body = start >= 0 ? src.slice(start) : src;
  const slugs = [...body.matchAll(/slug:\s*"([^"]+)"/g)];
  const artikelen = [];
  for (let i = 0; i < slugs.length; i++) {
    const from = slugs[i].index ?? 0;
    const to = i + 1 < slugs.length ? (slugs[i + 1].index ?? body.length) : body.length;
    const gewijzigd = body.slice(from, to).match(/gewijzigd:\s*"(\d{4}-\d{2}-\d{2})"/);
    if (!gewijzigd) {
      throw new Error(`geen gewijzigd-datum voor kennisbankartikel ${slugs[i][1]}`);
    }
    artikelen.push({ slug: slugs[i][1], gewijzigd: gewijzigd[1] });
  }
  if (artikelen.length === 0) throw new Error("geen kennisbankartikelen gevonden");
  return artikelen;
}

function readLocs() {
  const xml = fs.readFileSync(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  if (locs.length === 0) throw new Error("geen <loc> in public/sitemap.xml");
  return locs;
}

function pathnameOf(loc) {
  const url = new URL(loc);
  if (url.pathname === "/") return "/";
  return url.pathname.replace(/\/$/, "");
}

function fileFor(pathname) {
  if (ROUTE_FILES[pathname]) return ROUTE_FILES[pathname];
  if (pathname.startsWith("/werken-bij/")) return "src/routes/werken-bij/$slug.tsx";
  if (pathname.startsWith("/concepten/")) return "src/routes/concepten/$slug.tsx";
  return null;
}

function readRoute(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function loadManifest() {
  if (!fs.existsSync(MANIFEST)) return {};
  const data = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  return data;
}

function saveManifest(manifest) {
  const sorted = {};
  for (const key of Object.keys(manifest).sort()) sorted[key] = manifest[key];
  fs.writeFileSync(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`);
}

function remember(manifest, file, lastmod) {
  manifest[file] = { hash: contentFingerprint(readRoute(file)), lastmod };
}

function buildEntries({ useGit, ignore, manifest, previous, today }) {
  const artikelen = readArtikelen();
  const bySlug = new Map(artikelen.map((artikel) => [artikel.slug, artikel.gewijzigd]));
  const nieuwsteGewijzigd = artikelen
    .map((artikel) => artikel.gewijzigd)
    .sort()
    .at(-1);
  const entries = [];

  for (const loc of readLocs()) {
    const pathname = pathnameOf(loc);
    if (pathname.startsWith("/kennisbank/") && pathname !== "/kennisbank") {
      const slug = pathname.slice("/kennisbank/".length);
      const gewijzigd = bySlug.get(slug);
      if (!gewijzigd) {
        throw new Error(`sitemap-URL ${pathname} heeft geen artikel in kennisbank.ts`);
      }
      entries.push({
        loc,
        lastmod: gewijzigd,
        bron: "kennisbank gewijzigd",
        commit: "n.v.t.",
        file: "src/lib/kennisbank.ts",
      });
      continue;
    }

    const file = fileFor(pathname);
    if (!file) throw new Error(`geen routebestand voor ${pathname}`);
    if (!fs.existsSync(path.join(ROOT, file))) {
      throw new Error(`routebestand ontbreekt: ${file}`);
    }

    if (pathname === "/kennisbank" && nieuwsteGewijzigd) {
      entries.push({
        loc,
        lastmod: nieuwsteGewijzigd,
        bron: "kennisbank gewijzigd",
        commit: "n.v.t.",
        file: "src/lib/kennisbank.ts",
      });
      remember(manifest, file, nieuwsteGewijzigd);
      continue;
    }

    const zichtbaar = parseLaatstBijgewerkt(readRoute(file));
    if (zichtbaar) {
      entries.push({
        loc,
        lastmod: zichtbaar,
        bron: "datum op de pagina",
        commit: "n.v.t.",
        file,
      });
      remember(manifest, file, zichtbaar);
      continue;
    }

    const override = DATE_OVERRIDES[file];
    if (override) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(override)) {
        throw new Error(`ongeldige override voor ${file}: ${override}`);
      }
      entries.push({
        loc,
        lastmod: override,
        bron: "handmatige override",
        commit: "n.v.t.",
        file,
      });
      remember(manifest, file, override);
      continue;
    }

    if (useGit) {
      const picked = gitContentDate(file, ignore);
      if (picked) {
        entries.push({
          loc,
          lastmod: picked.date,
          bron: `inhoud ${file}`,
          commit: picked.hash,
          file,
        });
        remember(manifest, file, picked.date);
        continue;
      }
      warn(`geen inhoudelijke git-datum voor ${file}, manifest gebruikt`);
    }

    const hash = contentFingerprint(readRoute(file));
    const lastmod = lastmodFromManifest(hash, previous[file], today);
    entries.push({
      loc,
      lastmod,
      bron: previous[file] && previous[file].hash === hash ? "manifest" : "bouwdatum zonder geschiedenis",
      commit: "n.v.t.",
      file,
    });
    manifest[file] = { hash, lastmod };
  }

  return { entries };
}

function render(entries) {
  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function report(entries) {
  console.log("url\tlastmod\tbron\tcommit");
  for (const entry of entries) {
    console.log(`${entry.loc}\t${entry.lastmod}\t${entry.bron}\t${entry.commit}`);
  }
}

function gitAvailable() {
  try {
    execFileSync("git", ["--version"], { stdio: "ignore" });
    git(["rev-parse", "--is-shallow-repository"]);
    return true;
  } catch {
    return false;
  }
}

function isShallow() {
  return git(["rev-parse", "--is-shallow-repository"]).trim() !== "false";
}

function ensureHistory() {
  if (!gitAvailable()) return false;
  if (!isShallow()) return true;
  warn("shallow clone, probeer git fetch --unshallow");
  try {
    git(["fetch", "--unshallow"]);
  } catch {
    warn("git fetch --unshallow mislukt");
  }
  try {
    return !isShallow();
  } catch {
    return false;
  }
}

export function main() {
  const today = todayUtc();
  const previous = loadManifest();
  const manifest = {};
  const useGit = ensureHistory();
  let built;
  try {
    built = buildEntries({
      useGit,
      ignore: useGit ? loadIgnore() : [],
      manifest,
      previous,
      today,
    });
  } catch (error) {
    console.error(`sitemap: ${error instanceof Error ? error.message : error}`);
    process.exitCode = 1;
    return;
  }

  fs.writeFileSync(SITEMAP, render(built.entries));
  saveManifest(manifest);
  const bron = useGit ? "git-inhoud" : "manifest of bouwdatum";
  console.log(
    `sitemap: ${built.entries.length} URL's geschreven naar public/sitemap.xml (${bron})`,
  );
  report(built.entries);
}

function isDirectRun() {
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === pathToFileURL(path.resolve(entry)).href;
}

if (isDirectRun()) main();
