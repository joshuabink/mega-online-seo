import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Search, MapPin, LayoutPanelTop, FileText, Gauge, BarChart3, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MegaOnline — SEO" },
      { name: "description", content: "SEO die op aanvragen stuurt, niet op ijdele cijfers. Gevonden worden door wie al naar je zoekt." },
      { property: "og:title", content: "MegaOnline — SEO" },
      { property: "og:description", content: "SEO die op aanvragen stuurt, niet op ijdele cijfers." },
    ],
  }),
  component: Page,
});

const navItems = ["Diensten", "Cases", "Over MegaOnline", "Kennisbank", "Contact"];

const problems = [
  { n: "01", t: "Onvindbaar in je regio", d: "Klanten zoeken lokaal, maar je concurrent staat bovenaan." },
  { n: "02", t: "Verkeer zonder aanvragen", d: "Bezoekers komen binnen, maar nemen geen contact op." },
  { n: "03", t: "Verkeerde zoekwoorden", d: "Je scoort op termen waar je klant niet op zoekt." },
  { n: "04", t: "Trage, zwakke basis", d: "Snelheid en techniek drukken je posities omlaag." },
  { n: "05", t: "Dunne pagina's", d: "Te weinig inhoud om Google te overtuigen dat je relevant bent." },
  { n: "06", t: "Geen overzicht", d: "Je weet niet waar je staat of wat een verbetering oplevert." },
];

const aanpak = [
  { tag: "AANPAK 01", t: "Lokale vindbaarheid", d: "Bovenaan komen in je eigen regio, waar je klanten zoeken.", icon: MapPin },
  { tag: "AANPAK 02", t: "Sterke landingspagina's", d: "Pagina's die scoren én bezoekers naar actie leiden.", icon: LayoutPanelTop },
  { tag: "AANPAK 03", t: "Technische basis", d: "Snelheid, structuur en mobiel op orde als fundament.", icon: Gauge },
  { tag: "AANPAK 04", t: "Inzicht & groei", d: "Heldere rapportage over posities, verkeer en aanvragen.", icon: BarChart3 },
];

const oppakken = [
  { t: "Zoekwoordonderzoek", d: "We bepalen op welke termen je klant echt zoekt.", icon: Search },
  { t: "Lokale SEO", d: "Google Bedrijfsprofiel en regionale vindbaarheid.", icon: MapPin },
  { t: "Landingspagina's", d: "Pagina's die scoren en converteren tegelijk.", icon: LayoutPanelTop },
  { t: "Content & structuur", d: "Inhoud en opbouw die Google en bezoeker overtuigen.", icon: FileText },
  { t: "Techniek & snelheid", d: "Een snelle, gezonde basis als fundament onder je posities.", icon: Gauge },
  { t: "Meten & rapporteren", d: "Inzicht in posities, verkeer en aanvragen.", icon: BarChart3 },
];

const faqs = [
  {
    q: "Hoe snel zie ik resultaat van SEO?",
    a: "SEO is geen knop die je omzet. De eerste verbeteringen zijn vaak binnen enkele weken zichtbaar, maar serieuze, blijvende posities bouw je op over enkele maanden. We sturen op gestage, duurzame groei in plaats van korte trucs.",
  },
  {
    q: "Werkt SEO ook voor een klein, lokaal bedrijf?",
    a: "Juist dan. Lokale SEO is vaak de snelste winst: je concurreert in je eigen regio in plaats van met heel Nederland. We zorgen dat je verschijnt wanneer iemand in de buurt zoekt naar wat jij doet.",
  },
  {
    q: "Moet mijn website opnieuw gebouwd worden?",
    a: "Meestal niet. We kijken eerst wat er met je huidige website mogelijk is. Vaak valt er veel te winnen met content, structuur en techniek zonder een volledige herbouw.",
  },
  {
    q: "Is SEO los van een website af te nemen?",
    a: "Ja. SEO kan op je bestaande website, los van een nieuw ontwerp. We beginnen graag met een gratis websitescan om te laten zien waar je vindbaarheid blijft liggen.",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`font-display text-2xl tracking-tight ${light ? "text-cream" : "text-ink"}`}>
      MegaOnline<span className="text-orange">.io</span>
    </a>
  );
}

function PrimaryCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#scan"
      className={`inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-medium text-ink transition hover:brightness-95 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function GhostCTA({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center gap-2 px-2 py-3 text-sm font-medium ${
        light ? "text-cream/90 hover:text-cream" : "text-ink hover:text-rust"
      } transition`}
    >
      {children}
      <ArrowRight className="h-4 w-4 text-orange" />
    </a>
  );
}

function SectionTag({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.18em] ${
        onDark ? "border-orange/40 text-orange" : "border-orange/40 text-rust"
      }`}
    >
      {children}
    </span>
  );
}

function Page() {
  return (
    <div id="top" className="bg-cream text-ink">
      {/* HERO (dark) */}
      <section className="bg-ink text-cream">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Logo light />
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((n) => (
              <button key={n} className="inline-flex items-center gap-1 text-sm text-cream/80 transition hover:text-cream">
                {n}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
            ))}
          </nav>
          <PrimaryCTA className="hidden lg:inline-flex">Gratis websitescan</PrimaryCTA>
        </header>

        <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 text-center">
          <nav className="mb-6 text-xs text-cream/60">
            <a href="#top" className="hover:text-cream">Home</a>
            <span className="mx-2 opacity-50">/</span>
            <a href="#top" className="hover:text-cream">Diensten</a>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-orange">SEO</span>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> SEO
          </div>

          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Gevonden worden door<br />
            wie <em className="not-italic text-orange">al naar je zoekt.</em>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75">
            Een mooie website heeft pas waarde als de juiste mensen 'm vinden. Wij zorgen dat je
            verschijnt op het moment dat iemand zoekt naar wat jij biedt — en dat die bezoeker ook
            echt klant wordt.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA>Vraag een gratis websitescan aan</PrimaryCTA>
            <GhostCTA light>Plan een kennismaking</GhostCTA>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTag>WAAR HET MISGAAT</SectionTag>
          <h2 className="mt-5 max-w-2xl font-display text-4xl md:text-5xl">
            Onderaan in Google is net zo erg als <span className="text-rust">onzichtbaar.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            De meeste websites laten vindbaarheid liggen. Niet door slechte teksten, maar door een
            gebrek aan focus op de juiste zoekwoorden en een gezonde basis.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <article key={p.n} className="rounded-2xl border border-border/60 bg-cream/60 p-7">
                <div className="text-xs font-semibold tracking-widest text-orange">{p.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTag>ONZE AANPAK</SectionTag>
          <h2 className="mt-5 max-w-3xl font-display text-4xl md:text-5xl">
            SEO die op <span className="text-rust">aanvragen</span><br />
            stuurt, niet op ijdele cijfers.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            We jagen geen bezoekersaantallen na, maar de juiste bezoekers: mensen met een concrete
            vraag die bij jou past.
          </p>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {/* Big card */}
            <div className="rounded-2xl border border-border/60 bg-surface/60 p-8 lg:row-span-2">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-orange">DE KERN</span>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-soft text-rust">
                  <Search className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-display text-2xl">Gevonden op wat je klant echt zoekt</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We brengen in kaart waar jouw klanten op zoeken en richten je pagina's daarop in.
                Geen trucjes, maar relevante inhoud en een gezonde technische basis die blijvend
                resultaat geeft.
              </p>
              <div className="mt-6 rounded-xl bg-orange-soft/70 p-4 text-sm">
                De juiste bezoeker op de juiste pagina, <em className="not-italic font-semibold text-rust">klaar</em> om
                contact op te nemen.
              </div>
            </div>

            {aanpak.map(({ tag, t, d, icon: Icon }) => (
              <article key={tag} className="rounded-2xl border border-border/60 bg-surface/60 p-7">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-orange">{tag}</span>
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-soft text-rust">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTag>WAT WE OPPAKKEN</SectionTag>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Wat goede SEO <span className="text-rust">nodig heeft.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Een complete aanpak, van zoekwoorden tot techniek tot meetbaar resultaat.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {oppakken.map(({ t, d, icon: Icon }) => (
              <article key={t} className="rounded-2xl border border-border/60 bg-cream/60 p-7">
                <div className="mb-6 grid h-11 w-11 place-items-center rounded-lg bg-orange-soft text-rust">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (dark) */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <SectionTag onDark>VEELGESTELDE VRAGEN</SectionTag>
          <h2 className="mt-5 font-display text-4xl text-cream/70 md:text-5xl">
            Wat je misschien<br />nog wil weten
          </h2>

          <div className="mt-12 divide-y divide-cream/15 border-y border-cream/15">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <SectionTag onDark>AAN DE SLAG</SectionTag>
          <h3 className="mt-5 font-display text-3xl md:text-4xl">
            Klaar om beter gevonden te worden?
          </h3>
          <p className="mt-4 max-w-xl text-cream/70">
            Vraag een gratis websitescan aan. We laten zien waar je nu vindbaarheid — en dus
            aanvragen — misloopt.
          </p>
          <div id="scan" className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryCTA>Vraag een gratis websitescan aan</PrimaryCTA>
            <GhostCTA light>Plan een kennismaking</GhostCTA>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-ink pb-10 pt-6 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 border-t border-cream/10 pt-16 md:grid-cols-4">
            <div>
              <Logo light />
              <p className="mt-6 max-w-xs text-sm text-cream/65">
                Websites die zorgen voor meer aanvragen, reserveringen en boekingen voor jouw bedrijf.
              </p>
              <div className="mt-6">
                <GhostCTA light>Vraag een gratis websitescan aan</GhostCTA>
              </div>
            </div>

            <FooterCol title="DIENSTEN" items={[
              "Conversie Website","Website Redesign","Website Optimalisatie",
              "Starter Website","Werken-bij Website","Groei Partnership",
            ]} />

            <FooterCol title="BRANCHES" items={[
              "Activiteitenbedrijven","Verhuurbedrijven","Dienstverleners",
              "Bedrijven met reserveringen","Bedrijven met offerteaanvragen","Non-profits",
            ]} />

            <FooterCol title="BEDRIJF" items={["Over MegaOnline","Gratis websitescan","Contact"]} />
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/55">
            <span>© 2025 MegaOnline.io. Websites die werken voor jouw bedrijf.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cream">Algemene voorwaarden</a>
              <a href="#" className="hover:text-cream">Privacyverklaring</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-cream">{q}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-orange transition-transform ${open ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-3xl text-cream/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.2em] text-cream/50">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-cream/80">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-orange">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
