/**
 * Schrijft public/sitemap.xml met een echte <lastmod> per URL.
 *
 * Kennisbankartikelen: veld `gewijzigd` in src/lib/kennisbank.ts.
 * /kennisbank: nieuwste `gewijzigd`, anders de git-datum van de indexroute.
 * Overige URL's: git-datum van het bronbestand onder src/routes/.
 *
 * Commits in scripts/sitemap-ignore-revs.txt tellen niet mee, net als
 * berichten die opmaak of onderhoud zijn (prettier, format, lint, eslint,
 * refactor of style) of de marker [skip-lastmod] bevatten. Typo-fixes
 * blijven wel meetellen.
 *
 * Lovable bouwt soms zonder volledige git-geschiedenis. Dan zou elke
 * lastmod dezelfde shallow-datum krijgen. Dit script overschrijft de
 * sitemap alleen als git er is, de repo niet shallow is, en de
 * git-datums niet allemaal gelijk zijn. Anders blijft het gecommitte
 * bestand staan en faalt de build niet.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SITEMAP = path.join(ROOT, "public/sitemap.xml");
const IGNORE_FILE = path.join(ROOT, "scripts/sitemap-ignore-revs.txt");
const KENNISBANK = path.join(ROOT, "src/lib/kennisbank.ts");

/**
 * Handmatige inhoudsdatum als die afwijkt van git.
 * Sleutel is het routebestand (repo-relatief), waarde is YYYY-MM-DD.
 * Leeg laten zolang daar geen reden voor is.
 */
const DATE_OVERRIDES = {
  // "src/routes/voorbeeld.tsx": "2026-01-01",
};

const SKIP_SUBJECT = /\b(?:prettier|format|lint|eslint|refactor|style)\b|\[skip-lastmod\]/i;

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
  "/gratis-websiteconcept": "src/routes/gratis-websiteconcept.tsx",
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

function gitTrust() {
  try {
    execFileSync("git", ["--version"], { stdio: "ignore" });
  } catch {
    return "git is niet beschikbaar";
  }
  try {
    const shallow = git(["rev-parse", "--is-shallow-repository"]).trim();
    if (shallow !== "false") {
      return `git rev-parse --is-shallow-repository is ${shallow || "leeg"}`;
    }
  } catch {
    return "git rev-parse faalde, geen bruikbare repository";
  }
  return null;
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
  const out = git(["log", "--follow", "--format=%H%x09%cs%x09%s", "--", file]);
  const commits = out
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [hash, date, ...rest] = line.split("\t");
      return { hash, date, subject: rest.join("\t") };
    });
  historyCache.set(file, commits);
  return commits;
}

function pickCommit(file, ignore) {
  for (const commit of history(file)) {
    if (isIgnoredHash(commit.hash, ignore)) continue;
    if (SKIP_SUBJECT.test(commit.subject)) continue;
    return commit;
  }
  return null;
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

function leaveUnchanged(reason) {
  warn(
    `${reason}. public/sitemap.xml blijft ongewijzigd. ` +
      "De build gaat door met het gecommitte bestand.",
  );
}

function buildEntries() {
  const ignore = loadIgnore();
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
      continue;
    }

    if (pathname === "/kennisbank" && nieuwsteGewijzigd) {
      entries.push({
        loc,
        lastmod: nieuwsteGewijzigd,
        bron: "kennisbank gewijzigd",
        commit: "n.v.t.",
        file: "src/lib/kennisbank.ts",
      });
      continue;
    }

    const commit = pickCommit(file, ignore);
    if (!commit) {
      return {
        error: `geen inhoudelijke git-datum voor ${file} (${pathname})`,
      };
    }
    entries.push({
      loc,
      lastmod: commit.date,
      bron: `git-bestand ${file}`,
      commit: commit.hash,
      file,
    });
  }

  const gitDates = entries
    .filter((entry) => entry.bron.startsWith("git-bestand"))
    .map((entry) => entry.lastmod);
  if (gitDates.length >= 2 && new Set(gitDates).size < 2) {
    return {
      error:
        "alle git-datums zijn gelijk. Dat past bij een shallow clone of een geschiedenis van één commit",
    };
  }
  if (new Set(entries.map((entry) => entry.lastmod)).size < 2) {
    return { error: "alle lastmod-datums zijn gelijk" };
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

function main() {
  const trustError = gitTrust();
  if (trustError) {
    leaveUnchanged(trustError);
    return;
  }

  let built;
  try {
    built = buildEntries();
  } catch (error) {
    const gitFaalde =
      typeof error === "object" &&
      error !== null &&
      ("status" in error || ("code" in error && error.code === "ENOENT"));
    if (gitFaalde) {
      leaveUnchanged("git-commando faalde");
      return;
    }
    console.error(`sitemap: ${error instanceof Error ? error.message : error}`);
    process.exitCode = 1;
    return;
  }
  if (built.error) {
    leaveUnchanged(built.error);
    return;
  }

  fs.writeFileSync(SITEMAP, render(built.entries));
  console.log(`sitemap: ${built.entries.length} URL's geschreven naar public/sitemap.xml`);
  report(built.entries);
}

main();
