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
 *   #joshua-bink   ← oprichter
 *   <url>#webpage  ← per pagina, about = #organization
 *
 * De `@id`'s zijn bewust ongewijzigd t.o.v. de vorige versie: Google heeft die
 * al gezien en hergebruik voorkomt dat de entiteit opnieuw moet worden geleerd.
 */

export const SITE_URL = "https://megaonline.io";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const FOUNDER_ID = `${SITE_URL}/#joshua-bink`;

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
    url: `${SITE_URL}/diensten/groei-partnership`,
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
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    caption: "MegaOnline.io",
  },
  email: "hallo@megaonline.io",
  telephone: "+31634388938",
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
      contactType: "sales",
      telephone: "+31634388938",
      email: "hallo@megaonline.io",
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
  founder: {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Joshua Bink",
    jobTitle: "Oprichter",
    worksFor: { "@id": ORG_ID },
    sameAs: ["https://nl.linkedin.com/in/joshuabink"],
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
  "@graph": [ORGANIZATION, WEBSITE],
};

/* ------------------------------------------------------------------ */
/* Per pagina                                                          */
/* ------------------------------------------------------------------ */

/**
 * Afwijkende paginatypes. Alles wat hier niet in staat is een gewone
 * `WebPage`. `/veelgestelde-vragen` staat er bewust níet in als `FAQPage`:
 * dat type hoort een `mainEntity` met vraag-antwoordparen te hebben, en die
 * staan daar nu in losse `<Qa>`-componenten. Zonder mainEntity is `FAQPage`
 * onvolledig — eerst de bron opzetten zoals `FAQ_ITEMS` op de homepage.
 */
const PAGE_TYPE: Record<string, string> = {
  "/over-megaonline": "AboutPage",
  "/contact": "ContactPage",
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
  "/diensten/conversie-website": "Conversie Website",
  "/diensten/groei-partnership": "Groei Partnership",
  "/diensten/integraties": "Integraties",
  "/diensten/seo": "SEO",
  "/diensten/starter-website": "Starter Website",
  "/diensten/website-optimalisatie": "Website Optimalisatie",
  "/diensten/website-redesign": "Website Redesign",
  "/diensten/werken-bij-websites": "Werken-bij Websites",
  "/gratis-websitescan": "Gratis Websitescan",
  "/over-megaonline": "Over MegaOnline",
  "/privacyverklaring": "Privacyverklaring",
  "/veelgestelde-vragen": "Veelgestelde vragen",
};

/**
 * Tussenniveau van het kruimelpad. De site heeft geen /diensten- of
 * /branches-overzichtspagina; het zichtbare kruimelpad linkt daarvoor naar de
 * dienstensectie op de homepage. De markup volgt dat één op één.
 */
const CRUMB_PARENT: { prefix: string; name: string; item: string }[] = [
  { prefix: "/diensten/", name: "Diensten", item: `${SITE_URL}/#diensten` },
  { prefix: "/branches/", name: "Branches", item: `${SITE_URL}/#diensten` },
  { prefix: "/veelgestelde-vragen", name: "Kennisbank", item: `${SITE_URL}/#faq` },
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
  "/diensten/groei-partnership": {
    name: "Groei Partnership",
    serviceType: "Doorlopende websiteoptimalisatie",
    price: 150,
    unitCode: "MON",
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
    name: "SEO",
    serviceType: "Zoekmachineoptimalisatie",
  },
  "/diensten/integraties": {
    name: "Integraties en koppelingen",
    serviceType: "Systeemintegratie voor websites",
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

  nodes.unshift(webPage);

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

  return { "@context": "https://schema.org", "@graph": nodes };
}

function buildCrumbs(path: string) {
  const label = CRUMB_LABEL[path];
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
