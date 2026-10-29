/**
 * Structured data voor megaonline.io.
 *
 * Waarom dit bestand bestaat: "megaonline" is geen unieke merknaam. Er zit een
 * webshop op megaonline.nl die dezelfde naam voert en die op dit moment de
 * merk-query bezet. Google kan ons alleen als eigen entiteit herkennen als het
 * domein aantoonbaar aan externe profielen vastzit (`sameAs`), een alias kent
 * (`alternateName`) en één duidelijke merkpagina heeft (`mainEntityOfPage`).
 *
 * De opzet is één `@graph` met stabiele `@id`'s, zodat alle nodes naar elkaar
 * kunnen verwijzen in plaats van losse, niet-verbonden blokken:
 *
 *   #organization  ← de entiteit MegaOnline.io
 *   #website       ← de site, publisher = #organization
 *   #logo          ← afbeelding, hergebruikt door beide
 *   #joshua-bink   ← oprichter en auteur, met eigen pagina /joshua-bink
 *   <url>#webpage  ← per pagina, about = #organization
 *
 * De `@id`'s zijn bewust ongewijzigd t.o.v. de vorige versie: Google heeft die
 * al gezien en hergebruik voorkomt dat de entiteit opnieuw moet worden geleerd.
 */

import { AUTEUR } from "./auteur";
import { artikelBySlug, artikelenNieuwsteEerst, type Artikel } from "./kennisbank";
import { SCAN_FAQ } from "./scan";
import { GELDIG_TOT, GEPLAATST_OP, VOORWAARDEN, vacatureBySlug, type Vacature } from "./vacatures";

export const SITE_URL = "https://megaonline.io";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const FOUNDER_ID = `${SITE_URL}/#joshua-bink`;
const AUTEUR_URL = `${SITE_URL}${AUTEUR.pad}`;
const PORTRET_ID = `${SITE_URL}/#joshua-bink-portret`;

/** Absolute URL voor een routepad. De homepage houdt zijn sluitende slash. */
export function absoluteUrl(pathname: string): string {
  return pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
}

const ORG_DESCRIPTION =
  "MegaOnline bouwt websites die vertrouwen uitstralen en bezoekers richting aanvraag of boeking brengen.";

/**
 * Prijzen komen uit de zichtbare prijsblokken op de dienstpagina's. Loopt dit
 * uit elkaar, dan is dát een signaal dat de pagina is gewijzigd zonder het
 * schema — houd ze gelijk.
 */
const OFFERS = [
  {
    "@type": "Offer",
    name: "Starter Website",
    url: `${SITE_URL}/diensten/starter-website`,
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 1500,
      priceCurrency: "EUR",
    },
  },
  {
    "@type": "Offer",
    name: "Conversie Website",
    url: `${SITE_URL}/diensten/conversie-website`,
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 2500,
      priceCurrency: "EUR",
    },
  },
  {
    "@type": "Offer",
    name: "Groei Partnership",
    url: `${SITE_URL}/diensten/seo`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: 150,
      priceCurrency: "EUR",
      unitCode: "MON",
    },
  },
] as const;

const ORGANIZATION = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "MegaOnline.io",
  // De alias die we op termijn willen bezitten. Zonder dit veld leert Google
  // nooit dat "MegaOnline" en "MegaOnline.io" dezelfde entiteit zijn.
  alternateName: ["MegaOnline", "Mega Online"],
  url: `${SITE_URL}/`,
  // Wijst de homepage aan als dé merkpagina. Nodig omdat /over-megaonline
  // op de merk-query bóven de homepage stond.
  mainEntityOfPage: { "@id": `${SITE_URL}/#webpage` },
  description: ORG_DESCRIPTION,
  slogan: "Websites die werken voor jouw bedrijf",
  inLanguage: "nl-NL",
  image: { "@id": LOGO_ID },
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
    caption: "MegaOnline.io",
  },
  email: "info@megaonline.io",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boelekade 106",
    postalCode: "2806 AM",
    addressLocality: "Gouda",
    addressCountry: "NL",
  },
  identifier: [{ "@type": "PropertyValue", name: "KvK", value: "78580099" }],
  areaServed: { "@type": "Country", name: "Nederland" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@megaonline.io",
      availableLanguage: ["nl", "en"],
      areaServed: "NL",
    },
  ],
  // De koppeling tussen domein en externe profielen. Dit is het veld dat het
  // merk losknipt van megaonline.nl. Nieuwe profielen hier toevoegen —
  // Google Bedrijfsprofiel zodra dat live staat.
  sameAs: [
    "https://www.linkedin.com/company/megaonline/",
    "https://www.instagram.com/megaonline.io/",
  ],
  founder: { "@id": FOUNDER_ID },
  // KerkOnline is ons merk voor kerken en draait op dezelfde rechtspersoon.
  // Het @id verwijst naar de organisatie-node op kerkonline.io zelf, zodat de
  // twee schema's één graaf vormen in plaats van twee losse bedrijven. Aan de
  // andere kant staat een parentOrganization die hierheen terugwijst.
  subOrganization: {
    "@type": "Organization",
    "@id": "https://kerkonline.io/#organisatie",
    name: "KerkOnline",
    url: "https://kerkonline.io/",
    description:
      "Websites voor kerken: kerkwebsites, modules, fotografie en onderhoud.",
  },
  knowsAbout: [
    "Webdesign",
    "Conversieoptimalisatie",
    "Zoekmachineoptimalisatie",
    "Websiteontwikkeling",
    "Online boekingssystemen",
    "Leadgeneratie",
  ],
  makesOffer: OFFERS,
};

/**
 * Joshua als eigen node in de site-graaf, zodat elke pagina dezelfde persoon
 * kent. `url` en `mainEntityOfPage` wijzen naar /joshua-bink: daar staat wat
 * deze node beweert ook zichtbaar. Externe profielen gaan in `sameAs`, alleen
 * profielen die Joshua zelf aanlevert (zie `src/lib/auteur.ts`).
 */
const PERSON = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: AUTEUR.naam,
  givenName: AUTEUR.voornaam,
  familyName: AUTEUR.achternaam,
  url: AUTEUR_URL,
  mainEntityOfPage: { "@id": `${AUTEUR_URL}#webpage` },
  image: {
    "@type": "ImageObject",
    "@id": PORTRET_ID,
    url: `${SITE_URL}${AUTEUR.portret.src}`,
    width: AUTEUR.portret.breedte,
    height: AUTEUR.portret.hoogte,
    caption: "Joshua Bink, oprichter van MegaOnline",
  },
  jobTitle: AUTEUR.rol,
  description:
    "Oprichter van MegaOnline. Bouwt websites die bedrijven verder helpen, met een technische achtergrond en een continue interesse in online groei.",
  worksFor: { "@id": ORG_ID },
  knowsAbout: [
    "Webdesign",
    "Conversieoptimalisatie",
    "Zoekmachineoptimalisatie",
    "Websiteontwikkeling",
    "Online boekingssystemen",
  ],
  sameAs: [AUTEUR.linkedin],
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "MegaOnline.io",
  alternateName: ["MegaOnline", "Mega Online"],
  inLanguage: "nl-NL",
  publisher: { "@id": ORG_ID },
};

/** Staat op elke pagina met de gedeelde chrome. */
export const SITE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [ORGANIZATION, WEBSITE, PERSON],
};

/* ------------------------------------------------------------------ */
/* Per pagina                                                          */
/* ------------------------------------------------------------------ */

/**
 * Afwijkende paginatypes. Alles wat hier niet in staat is een gewone
 * `WebPage`. De FAQPage-nodes staan los: op kennisbankartikelen en de scan
 * komen ze hieronder uit de data, op de andere pagina's met een FAQ-blok uit
 * `<FaqSchema>` rond dat blok (src/components/FaqSchema.tsx).
 */
const PAGE_TYPE: Record<string, string> = {
  "/over-megaonline": "AboutPage",
  "/contact": "ContactPage",
  "/joshua-bink": "ProfilePage",
  "/kennisbank": "CollectionPage",
};

/**
 * Labels voor de breadcrumb, gelijk aan de zichtbare kruimelpaden op de
 * pagina's zelf. Google wil dat de markup overeenkomt met wat de bezoeker
 * ziet, dus wijzig deze alleen samen met het `.crumb`-blok in de route.
 */
const CRUMB_LABEL: Record<string, string> = {
  "/algemene-voorwaarden": "Algemene Voorwaarden",
  "/branches/activiteitenbedrijven": "Activiteitenbedrijven",
  "/branches/dienstverleners": "Dienstverleners",
  "/branches/non-profits": "Non-profits",
  "/branches/offerteaanvragen": "Bedrijven met offerteaanvragen",
  "/branches/reserveringen": "Bedrijven met reserveringen",
  "/branches/verhuurbedrijven": "Verhuurbedrijven",
  "/contact": "Contact",
  "/concepten": "Concepten",
  "/concepten/ns": "NS",
  "/diensten/conversie-website": "Conversie Website",
  "/diensten/google-ads": "Google Ads",
  "/diensten/integraties": "Koppelingen en automatiseringen",
  "/diensten/online-boeken": "Online boeken en reserveren",
  "/diensten/seo": "SEO en GEO",
  "/diensten/starter-website": "Starter Website",
  "/diensten/website-optimalisatie": "Website Optimalisatie",
  "/diensten/website-redesign": "Website Redesign",
  "/diensten/werken-bij-websites": "Werken-bij Websites",
  "/gratis-websitescan": "Gratis website scan",
  "/joshua-bink": "Joshua Bink",
  "/kennisbank": "Kennisbank",
  "/over-megaonline": "Over MegaOnline",
  "/privacyverklaring": "Privacyverklaring",
  "/veelgestelde-vragen": "Veelgestelde vragen",
  "/werken-bij": "Werken bij",
};

/**
 * Tussenniveau van het kruimelpad, alleen waar een echte overzichtspagina
 * bestaat. Diensten en branches hebben die niet. Daar blijft het pad Home
 * en de huidige pagina, zonder item naar /#diensten of naar een 404.
 */
const CRUMB_PARENT: { prefix: string; name: string; item: string }[] = [
  { prefix: "/concepten/", name: "Concepten", item: `${SITE_URL}/concepten` },
  { prefix: "/kennisbank/", name: "Kennisbank", item: `${SITE_URL}/kennisbank` },
  { prefix: "/veelgestelde-vragen", name: "Kennisbank", item: `${SITE_URL}/kennisbank` },
  { prefix: "/werken-bij/", name: "Werken bij", item: `${SITE_URL}/werken-bij` },
];

/**
 * Dienstpagina's krijgen een eigen `Service`-node met `provider` →
 * #organization. Dat koppelt wat we doen aan wie we zijn; een losse
 * dienstpagina zonder die koppeling doet dat niet.
 */
const SERVICES: Record<
  string,
  { name: string; serviceType: string; price?: number; unitCode?: string }
> = {
  "/diensten/starter-website": {
    name: "Starter Website",
    serviceType: "Websiteontwikkeling voor starters",
    price: 1500,
  },
  "/diensten/conversie-website": {
    name: "Conversie Website",
    serviceType: "Webdesign en conversieoptimalisatie",
    price: 2500,
  },

  "/diensten/website-redesign": {
    name: "Website Redesign",
    serviceType: "Herontwerp van bestaande websites",
  },
  "/diensten/website-optimalisatie": {
    name: "Website Optimalisatie",
    serviceType: "Conversieoptimalisatie",
  },
  "/diensten/seo": {
    name: "Groei Partnership",
    serviceType: "Zoekmachineoptimalisatie en optimalisatie voor AI-zoekmachines",
    price: 150,
    unitCode: "MON",
  },
  "/diensten/google-ads": {
    name: "Google Ads beheer",
    serviceType: "Zoekmachineadverteren (SEA)",
  },
  "/diensten/integraties": {
    name: "Koppelingen en automatiseringen",
    serviceType: "Koppelingen, automatiseringen en AI-agents",
  },
  "/diensten/online-boeken": {
    name: "Online boeken en reserveren",
    serviceType: "Online boekings- en reserveringssysteem",
  },
  "/diensten/werken-bij-websites": {
    name: "Werken-bij Websites",
    serviceType: "Recruitmentwebsites",
  },
};

export type PageSchemaInput = {
  pathname: string;
  title?: string;
  description?: string;
};

/**
 * Bouwt de pagina-specifieke nodes: WebPage, BreadcrumbList en — op
 * dienstpagina's — Service. Levert één `@graph`, of `null` wanneer er geen
 * bruikbaar pad is.
 */
export function buildPageSchema({ pathname, title, description }: PageSchemaInput) {
  if (!pathname) return null;

  // Sluitende slash normaliseren, behalve de root zelf.
  const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const url = absoluteUrl(path);
  const pageId = `${url}#webpage`;
  const isHome = path === "/";

  const nodes: Record<string, unknown>[] = [];

  const webPage: Record<string, unknown> = {
    "@type": PAGE_TYPE[path] ?? "WebPage",
    "@id": pageId,
    url,
    inLanguage: "nl-NL",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: { "@id": LOGO_ID },
  };
  if (title) webPage.name = title;
  if (description) webPage.description = description;
  // Alleen de homepage is de merkpagina. Zet dit nooit óók op
  // /over-megaonline — dan concurreren beide pagina's weer om de merk-query.
  if (isHome) webPage.mainEntity = { "@id": ORG_ID };

  const crumbs = buildCrumbs(path);
  if (crumbs) {
    webPage.breadcrumb = { "@id": `${url}#breadcrumb` };
    nodes.push(crumbs);
  }

  // De auteurspagina gaat over Joshua, niet over het bedrijf.
  if (path === AUTEUR.pad) {
    webPage.about = { "@id": FOUNDER_ID };
    webPage.mainEntity = { "@id": FOUNDER_ID };
    webPage.primaryImageOfPage = { "@id": PORTRET_ID };
  }

  // Overzicht en auteurspagina tonen allebei de artikelkaarten. Die lijst
  // staat hier ook als ItemList, in dezelfde volgorde als op de pagina.
  if (path === "/kennisbank" || path === AUTEUR.pad) {
    const lijst = artikelenNieuwsteEerst().filter(
      (a) => path === "/kennisbank" || !a.auteur?.trim(),
    );
    const lijstId = `${url}#artikelen`;
    if (path === "/kennisbank") webPage.mainEntity = { "@id": lijstId };
    else webPage.hasPart = { "@id": lijstId };
    nodes.push({
      "@type": "ItemList",
      "@id": lijstId,
      name: path === "/kennisbank" ? "Kennisbank" : `Artikelen van ${AUTEUR.naam}`,
      numberOfItems: lijst.length,
      itemListElement: lijst.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/kennisbank/${a.slug}`,
        name: a.vraag,
      })),
    });
  }

  nodes.unshift(webPage);

  if (path === "/gratis-websitescan") {
    nodes.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Gratis website scan",
      serviceType: "Website scan",
      description,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Nederland" },
      mainEntityOfPage: { "@id": pageId },
    });
    nodes.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: SCAN_FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  const service = SERVICES[path];
  if (service) {
    nodes.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.serviceType,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Nederland" },
      mainEntityOfPage: { "@id": pageId },
      ...(service.price
        ? {
            offers: {
              "@type": "Offer",
              url,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": service.unitCode ? "UnitPriceSpecification" : "PriceSpecification",
                minPrice: service.price,
                priceCurrency: "EUR",
                ...(service.unitCode ? { unitCode: service.unitCode } : {}),
              },
            },
          }
        : {}),
    });
  }

  const vacature = vacatureVoorPad(path);
  if (vacature) nodes.push(buildJobPosting(vacature, url, pageId));

  const artikel = artikelVoorPad(path);
  if (artikel) nodes.push(...buildArtikel(artikel, url, pageId));

  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Het kennisbankartikel dat bij een pad hoort, of `undefined` elders. */
function artikelVoorPad(path: string): Artikel | undefined {
  if (!path.startsWith("/kennisbank/")) return undefined;
  return artikelBySlug(path.slice("/kennisbank/".length));
}

/**
 * Auteur van het Article-schema.
 *
 * Leeg of ontbrekend houdt de bestaande verwijzing naar `#joshua-bink`.
 * Een gevulde naam wordt zelf de auteur en wijst niet meer naar Joshua.
 */
function artikelAuteur(a: Artikel): Record<string, unknown> {
  const naam = a.auteur?.trim();
  // Naam en url staan er ook los bij: dit blok staat in een ander
  // JSON-LD-script dan de Person-node. Niet elke lezer volgt het @id.
  if (!naam) return { "@type": "Person", "@id": FOUNDER_ID, name: AUTEUR.naam, url: AUTEUR_URL };
  return { "@type": "Person", name: naam };
}

/** Zelfde woorden als op de pagina: de markdown-link wordt de zichtbare ankertekst. */
function zichtbareFaqTekst(tekst: string): string {
  return tekst.replace(/\[([^\]]+)\]\((?:\/[^)\s]*|https:\/\/[^)\s]+)\)/g, "$1");
}

/**
 * Article plus FAQPage per kennisbankartikel. De FAQ-node komt uit dezelfde
 * vragen die op de pagina staan, want markup die iets anders zegt dan de
 * zichtbare tekst is precies wat Google afkeurt. Zonder vragen is er geen
 * FAQPage, net zoals de pagina dan geen FAQ-blok toont.
 *
 * `author` is standaard de oprichter en niet het bedrijf: een artikel met een
 * mens erachter is beter te herkennen als bron, ook door AI-antwoorden die de
 * auteur meewegen.
 */
function buildArtikel(a: Artikel, url: string, pageId: string) {
  const nodes: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: a.vraag,
      description: a.metaDescription,
      inLanguage: "nl-NL",
      datePublished: a.gepubliceerd,
      dateModified: a.gewijzigd,
      author: artikelAuteur(a),
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": WEBSITE_ID },
      mainEntityOfPage: { "@id": pageId },
      image: { "@id": LOGO_ID },
      articleSection: a.pijler,
    },
  ];

  const faq = a.faq ?? [];
  if (faq.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map(({ q, a: antwoord }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: zichtbareFaqTekst(antwoord) },
      })),
    });
  }

  return nodes;
}

/** De vacature die bij een pad hoort, of `undefined` op elke andere pagina. */
function vacatureVoorPad(path: string): Vacature | undefined {
  if (!path.startsWith("/werken-bij/")) return undefined;
  return vacatureBySlug(path.slice("/werken-bij/".length));
}

/**
 * JobPosting per vacature, zodat de rollen in Google's vacatureresultaten
 * kunnen verschijnen.
 *
 * Twee dingen zijn daar hard nodig en makkelijk te vergeten. `validThrough`
 * staat in `src/lib/vacatures.ts`: loopt die datum af, dan verdwijnen alle
 * vacatures stilletjes uit de resultaten. En omdat de rollen ook volledig op
 * afstand kunnen, staat naast `jobLocation` (Utrecht) ook `jobLocationType:
 * TELECOMMUTE` met `applicantLocationRequirements` op Nederland. Zonder dat
 * tweede deel keurt Google een remote vacature af als locatiefout.
 *
 * De `description` is bewust dezelfde tekst als op de pagina zelf. Markup die
 * meer belooft dan de zichtbare pagina is een overtreding, geen slimmigheid.
 */
function buildJobPosting(v: Vacature, url: string, pageId: string) {
  const beschrijving = [
    `<p>${v.intro}</p>`,
    "<p>Wat je gaat doen:</p><ul>",
    ...v.doet.map((d) => `<li><b>${d.titel}</b>: ${d.tekst}</li>`),
    "</ul><p>Wat je meebrengt:</p><ul>",
    ...v.meebrengt.map((m) => `<li>${m}</li>`),
    `</ul><p>${v.nietNodigKop}:</p><ul>`,
    ...v.nietNodig.map((m) => `<li>${m}</li>`),
    "</ul>",
  ].join("");

  return {
    "@type": "JobPosting",
    "@id": `${url}#jobposting`,
    title: v.titel,
    description: beschrijving,
    datePosted: GEPLAATST_OP,
    validThrough: `${GELDIG_TOT}T23:59:59+01:00`,
    employmentType: v.employmentType,
    hiringOrganization: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": pageId },
    directApply: true,
    url,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: VOORWAARDEN.plaats,
        addressCountry: "NL",
      },
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "Nederland" },
    industry: "Webdesign en online marketing",
    inLanguage: "nl-NL",
  };
}

function buildCrumbs(path: string) {
  // Vacatures staan op een dynamische route, dus hun label komt uit de
  // vacaturedata in plaats van uit de vaste tabel hierboven.
  const label = CRUMB_LABEL[path] ?? vacatureVoorPad(path)?.naam ?? artikelVoorPad(path)?.naam;
  if (!label) return null;

  const items: Record<string, unknown>[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
  ];

  const parent = CRUMB_PARENT.find((p) => path.startsWith(p.prefix));
  if (parent) {
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: parent.name,
      item: parent.item,
    });
  }

  // De laatste kruimel is de huidige pagina en krijgt bewust geen `item`.
  items.push({ "@type": "ListItem", position: items.length + 1, name: label });

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items,
  };
}
