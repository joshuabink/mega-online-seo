/**
 * Vacatures voor MegaOnline zelf.
 *
 * Eén bron voor `/werken-bij` (het overzicht) en `/werken-bij/$slug` (de
 * detailpagina). Een vacature toevoegen of weghalen doe je hier, niet in de
 * routes. Zet `open: false` als een plek gevuld is; hij verdwijnt dan uit het
 * overzicht maar de pagina blijft bestaan zodat bestaande links niet breken.
 *
 * `icon` moet een naam zijn die in `src/components/marks.tsx` bestaat.
 */

export type Vacature = {
  slug: string
  titel: string
  vorm: string
  icon: string
  kort: string
  intro: string[]
  taken: { titel: string; tekst: string }[]
  meebrengt: string[]
  krijgt: string[]
  metaTitle: string
  metaDescription: string
  open: boolean
}

const KRIJGT_STAGE = [
  'Echte klanten en echt werk. Geen oefenopdrachten die daarna in een la verdwijnen.',
  'Begeleiding van Joshua zelf. Er zit geen laag tussen jou en degene die de keuzes maakt.',
  'Je ziet terug wat je doet, want we meten wat een aanpassing oplevert aan aanvragen.',
  'Een werkplek in Gouda. Deels thuiswerken kan, in overleg.',
  'Stagevergoeding en dagen in overleg. We kijken naar wat jouw opleiding vraagt.',
]

const KRIJGT_FLEX = [
  'Eigen klanten en echte beslisruimte. Wat jij adviseert, voeren we ook uit.',
  'Korte lijnen. Eén gesprek en het is besloten.',
  'Werk dat doorloopt, geen losse klus van een week.',
  'Uren en tarief in overleg. Geen lange contracten.',
]

export const VACATURES: Vacature[] = [
  {
    slug: 'seo-stage',
    titel: 'Stage SEO',
    vorm: 'Stage · dagen in overleg',
    icon: 'search',
    kort:
      'Je zoekt uit waarom een site wel of niet gevonden wordt en je schrijft mee aan de pagina\u2019s die dat veranderen.',
    intro: [
      'Vindbaarheid staat bij ons niet los van de website. Een pagina wordt gevonden omdat hij een vraag beantwoordt die iemand echt stelt. Jij zoekt uit welke vragen dat zijn en of onze klanten daar een antwoord op hebben staan.',
      'Je hoeft geen expert te zijn. Wat helpt is dat je al eens met zoekwoorden hebt gewerkt of dat je uit jezelf hebt uitgezocht waarom de ene pagina hoger staat dan de andere.',
    ],
    taken: [
      {
        titel: 'Zoekvragen uitzoeken',
        tekst:
          'Je brengt in kaart waar de klanten van een bedrijf op zoeken en welke van die vragen nog geen goede pagina heeft.',
      },
      {
        titel: 'Pagina\u2019s beoordelen',
        tekst:
          'Je loopt bestaande pagina\u2019s na op titel, opbouw en tekst en je schrijft op wat er beter kan.',
      },
      {
        titel: 'Teksten schrijven',
        tekst:
          'Je schrijft mee aan pagina\u2019s en artikelen. Wij lezen mee en geven eerlijke feedback.',
      },
      {
        titel: 'Meten wat het doet',
        tekst:
          'Je kijkt in Google Search Console wat er verandert na een aanpassing en je legt uit waar dat aan ligt.',
      },
    ],
    meebrengt: [
      'Je hebt al een beetje met vindbaarheid gewerkt. In een schoolopdracht, een bijbaan of gewoon voor jezelf.',
      'Je schrijft goed Nederlands.',
      'Je wilt weten waarom iets werkt, niet alleen dat het werkt.',
      'Je volgt een mbo- of hbo-opleiding en zoekt een stageplek.',
    ],
    krijgt: KRIJGT_STAGE,
    metaTitle: 'Stage SEO in Gouda | Werken bij MegaOnline',
    metaDescription:
      'Stage SEO bij MegaOnline in Gouda. Je zoekt uit waarom sites wel of niet gevonden worden en schrijft mee aan de pagina\u2019s die dat veranderen.',
    open: true,
  },
  {
    slug: 'webdesign-stage',
    titel: 'Stage Webdesign',
    vorm: 'Stage · dagen in overleg',
    icon: 'paintbrush',
    kort:
      'Je hebt een idee van wat er mooi en rustig uitziet. De software leer je hier.',
    intro: [
      'Ontwerpen is bij ons niet versieren. Elke pagina die wij maken moet iemand van "interessant" naar "ik neem contact op" brengen. Dat lukt alleen als de pagina rustig is, klopt en op een telefoon net zo goed werkt als op een groot scherm.',
      'Je hoeft nog niet met ontwerpsoftware overweg te kunnen. Dat leren we je. Wat je wel meeneemt is een oog voor wat niet klopt. Zie je op een site meteen dat de knop niet opvalt of dat de tekst te klein is, dan zit je goed.',
    ],
    taken: [
      {
        titel: 'Meekijken en meedenken',
        tekst:
          'Je kijkt met ons mee naar ontwerpen en zegt wat je opvalt. Ook als je nog niet kunt uitleggen waarom.',
      },
      {
        titel: 'Onderdelen ontwerpen',
        tekst:
          'Je begint met losse blokken. Een prijstabel, een formulier, een koptekst. Daarna hele pagina\u2019s.',
      },
      {
        titel: 'Beeld verzorgen',
        tekst:
          'Foto\u2019s uitzoeken en bijsnijden, zodat een pagina verzorgd oogt in plaats van samengeraapt.',
      },
      {
        titel: 'Bewaken dat het klopt',
        tekst:
          'Kleuren, marges en lettergroottes gelijk houden over een hele site. Dat is het verschil tussen af en bijna af.',
      },
    ],
    meebrengt: [
      'Je hebt een mening over hoe iets eruitziet en je probeert hem uit te leggen.',
      'Je bent nieuwsgierig en vraagt door.',
      'Je kijkt naar detail zonder het geheel uit het oog te verliezen.',
      'Je volgt een mbo- of hbo-opleiding en zoekt een stageplek. Ervaring met ontwerpsoftware is niet nodig.',
    ],
    krijgt: KRIJGT_STAGE,
    metaTitle: 'Stage Webdesign in Gouda | Werken bij MegaOnline',
    metaDescription:
      'Stage webdesign bij MegaOnline in Gouda. Ervaring met ontwerpsoftware is niet nodig, een oog voor wat klopt wel.',
    open: true,
  },
  {
    slug: 'webdevelopment-stage',
    titel: 'Stage Webdevelopment',
    vorm: 'Stage · dagen in overleg',
    icon: 'code-2',
    kort:
      'Je hoeft niet te kunnen programmeren. Je moet wel willen begrijpen hoe iets in elkaar zit.',
    intro: [
      'Een website bouwen is voor een groot deel puzzelen. Waar hoort dit blok, waarom laadt die pagina traag, wat gebeurt er als iemand het formulier half invult. Dat zijn vragen waar je logisch over na moet kunnen denken. Code is daarbij het gereedschap, niet het doel.',
      'We zoeken dus geen ervaren developer. We zoeken iemand die het leuk vindt om uit te vinden hoe iets werkt en die niet afhaakt als het de eerste keer stukgaat.',
    ],
    taken: [
      {
        titel: 'Pagina\u2019s opbouwen',
        tekst: 'Je zet ontwerpen om in werkende pagina\u2019s, met begeleiding ernaast.',
      },
      {
        titel: 'Koppelingen leggen',
        tekst:
          'Formulieren, agenda\u2019s en boekingssystemen aan een site vastmaken, zodat de klant er echt iets aan heeft.',
      },
      {
        titel: 'Testen',
        tekst:
          'Alles nalopen op telefoon, tablet en laptop en precies opschrijven wat er misgaat.',
      },
      {
        titel: 'Onderhoud',
        tekst:
          'Meelopen met de updates en veiligheidscontroles op de sites die wij beheren.',
      },
    ],
    meebrengt: [
      'Je denkt in stappen en je schrikt niet van een foutmelding.',
      'Je zoekt eerst zelf een antwoord, maar je vraagt het wel als je vastloopt.',
      'Je werkt netjes, want half af is bij ons niet af.',
      'Je volgt een mbo- of hbo-opleiding en zoekt een stageplek. Programmeerervaring is niet nodig.',
    ],
    krijgt: KRIJGT_STAGE,
    metaTitle: 'Stage Webdevelopment in Gouda | Werken bij MegaOnline',
    metaDescription:
      'Stage webdevelopment bij MegaOnline in Gouda. Programmeerervaring is niet nodig. Logisch nadenken en doorzetten wel.',
    open: true,
  },
  {
    slug: 'ai-ontwikkeling-stage',
    titel: 'Stage AI-ontwikkeling',
    vorm: 'Stage · dagen in overleg',
    icon: 'bot',
    kort: 'Dingen bouwen met AI. Niet zelf een model maken.',
    intro: [
      'Wij gebruiken AI om werk te doen dat anders blijft liggen. Rapportages die zichzelf voorbereiden, scans die al half klaarstaan, teksten waarvan de eerste versie er al is. Dat is bouwen met AI, niet AI bouwen. Je hoeft dus niets van modellen of wiskunde te weten.',
      'Wat je wel moet kunnen is een proces uit elkaar trekken en er stap voor stap iets van maken dat werkt. En streng zijn op het resultaat, want een antwoord dat er goed uitziet maar niet klopt is geen antwoord.',
    ],
    taken: [
      {
        titel: 'Werk automatiseren',
        tekst:
          'Je pakt een klus die wij nu met de hand doen en bouwt er een werkende automatisering van.',
      },
      {
        titel: 'Opdrachten schrijven',
        tekst:
          'Je schrijft en verbetert de instructies die de AI aansturen, net zolang tot de uitkomst betrouwbaar is.',
      },
      {
        titel: 'Systemen koppelen',
        tekst:
          'Je verbindt de systemen die wij gebruiken, zodat gegevens niet meer overgetypt hoeven te worden.',
      },
      {
        titel: 'Controleren',
        tekst:
          'Je test de uitkomsten en legt vast waar het misgaat, zodat we het kunnen bijsturen.',
      },
    ],
    meebrengt: [
      'Je hebt zelf al eens iets in elkaar gezet met AI, ook als het klein was.',
      'Je bent kritisch en gelooft niet zomaar wat er uit een model rolt.',
      'Je kunt uitleggen wat je gemaakt hebt aan iemand die er niets van weet.',
      'Je volgt een mbo- of hbo-opleiding en zoekt een stageplek.',
    ],
    krijgt: KRIJGT_STAGE,
    metaTitle: 'Stage AI-ontwikkeling in Gouda | Werken bij MegaOnline',
    metaDescription:
      'Stage AI-ontwikkeling bij MegaOnline in Gouda. Je bouwt automatiseringen met AI voor echt klantwerk. Kennis van modellen is niet nodig.',
    open: true,
  },
  {
    slug: 'sea-stage',
    titel: 'Stage SEA',
    vorm: 'Stage · dagen in overleg',
    icon: 'target',
    kort: 'Adverteren dat aanvragen oplevert, niet alleen klikken.',
    intro: [
      'Adverteren is meetbaar en daarom leerzaam. Je ziet binnen een week of iets werkt. Het is ook eerlijk: een campagne die klikken oplevert maar geen aanvragen, is een campagne die geld kost.',
      'Wij bouwen dit onderdeel nu op. Je stapt dus vroeg in en je krijgt de ruimte om het mee vorm te geven, met echte klanten en echt budget.',
    ],
    taken: [
      {
        titel: 'Campagnes opzetten',
        tekst:
          'Je bouwt mee aan campagnes voor onze klanten, van zoekwoorden tot advertentieteksten.',
      },
      {
        titel: 'Landingspagina\u2019s beoordelen',
        tekst:
          'Een goede advertentie op een slechte pagina levert niets op. Je kijkt naar allebei.',
      },
      {
        titel: 'Meten en bijsturen',
        tekst:
          'Je volgt wat een campagne kost per aanvraag en je stelt voor wat er anders moet.',
      },
      {
        titel: 'Advertentieteksten schrijven',
        tekst: 'Kort, duidelijk en zonder holle beloftes.',
      },
    ],
    meebrengt: [
      'Je bent goed met cijfers en je durft een conclusie te trekken.',
      'Je schrijft kort en helder.',
      'Je vindt het niet erg om iets uit te proberen dat mislukt, zolang je eruit leert.',
      'Je volgt een mbo- of hbo-opleiding en zoekt een stageplek. Ervaring met adverteren is mooi meegenomen maar niet nodig.',
    ],
    krijgt: KRIJGT_STAGE,
    metaTitle: 'Stage SEA in Gouda | Werken bij MegaOnline',
    metaDescription:
      'Stage SEA bij MegaOnline in Gouda. Je zet campagnes op die worden afgerekend op aanvragen, niet op klikken.',
    open: true,
  },
  {
    slug: 'seo-specialist',
    titel: 'SEO-specialist',
    vorm: 'Freelance of parttime',
    icon: 'trending-up',
    kort:
      'Je stuurt de vindbaarheid van onze klanten, met de ruimte om het zelf in te richten.',
    intro: [
      'Onze klanten leven van aanvragen. Vindbaarheid is daarvoor een van de grootste knoppen. Die knop draaien wij nu naast al het andere werk. We zoeken iemand die dat overneemt en er eigenaar van wordt.',
      'Je krijgt een klein aantal klanten en de vrijheid om per maand de grootste groeikans te kiezen. Wat je adviseert voeren we ook uit, dus je werkt niet aan rapporten die niemand leest.',
    ],
    taken: [
      {
        titel: 'Analyseren',
        tekst:
          'Je brengt in kaart waar een site verkeer en aanvragen laat liggen en waarom dat zo is.',
      },
      {
        titel: 'Kiezen wat voorgaat',
        tekst:
          'Je bepaalt wat er deze maand het meeste oplevert en je legt uit waarom dat boven de rest gaat.',
      },
      {
        titel: 'Uitvoeren',
        tekst:
          'Teksten, structuur en techniek. Zelf, of samen met onze stagiairs die je meeneemt in het werk.',
      },
      {
        titel: 'Verantwoorden',
        tekst:
          'Je legt in gewone taal uit wat er is gebeurd en wat het opleverde. Ook als een maand tegenvalt.',
      },
    ],
    meebrengt: [
      'Je hebt sites aantoonbaar hoger gekregen en je kunt vertellen hoe je dat deed.',
      'Je stuurt op aanvragen, niet alleen op posities.',
      'Je werkt zelfstandig en je komt afspraken na.',
      'Je schrijft en praat in helder Nederlands.',
    ],
    krijgt: KRIJGT_FLEX,
    metaTitle: 'SEO-specialist freelance of parttime | Werken bij MegaOnline',
    metaDescription:
      'SEO-specialist gezocht bij MegaOnline in Gouda, freelance of parttime. Eigen klanten, echte beslisruimte en uitvoering die daadwerkelijk gebeurt.',
    open: true,
  },
  {
    slug: 'web-consultant',
    titel: 'Web consultant',
    vorm: 'Stage, parttime of freelance',
    icon: 'message-square-text',
    kort:
      'Je voert de gesprekken, brengt de doelgroep in kaart en vertaalt dat naar wat er op de site moet staan.',
    intro: [
      'Voordat wij een website bouwen willen we weten wie hem gaat gebruiken en waarvoor. Dat begint met een gesprek. Wie is de klant van deze ondernemer, waar twijfelt die over en wat moet hij zien voordat hij een aanvraag doet.',
      'Jij voert die gesprekken en zet de uitkomst om in een heldere opzet: welke pagina\u2019s er komen, welke boodschap daarop staat en in welke volgorde. Dat is het werk waar de rest van het project op leunt.',
    ],
    taken: [
      {
        titel: 'Gesprekken voeren',
        tekst:
          'Met bestaande en nieuwe klanten. Doorvragen tot je begrijpt hoe dat bedrijf echt aan werk komt.',
      },
      {
        titel: 'Doelgroep uitwerken',
        tekst:
          'Wie koopt er, waar twijfelt die over en welke vraag moet als eerste beantwoord worden.',
      },
      {
        titel: 'Structuur bepalen',
        tekst:
          'Welke pagina\u2019s de site krijgt en wat er op elke pagina moet staan om die twijfel weg te nemen.',
      },
      {
        titel: 'Overdragen',
        tekst:
          'Je zorgt dat de ontwerper en de bouwer niet alleen weten wat er moet komen, maar ook waarom.',
      },
    ],
    meebrengt: [
      'Je praat makkelijk met ondernemers en je durft door te vragen.',
      'Je kunt luisteren en daarna samenvatten wat iemand eigenlijk bedoelde.',
      'Je schrijft helder Nederlands.',
      'Stage, parttime of freelance kan allemaal. Wat bij je past bespreken we.',
    ],
    krijgt: KRIJGT_FLEX,
    metaTitle: 'Web consultant, stage of freelance | Werken bij MegaOnline',
    metaDescription:
      'Web consultant gezocht bij MegaOnline in Gouda. Je voert klantgesprekken, brengt de doelgroep in kaart en bepaalt wat er op de site moet staan.',
    open: true,
  },
  {
    slug: 'app-web-architect',
    titel: 'App- en webarchitect',
    vorm: 'Stage, parttime of freelance',
    icon: 'workflow',
    kort:
      'Je bedenkt hoe een site of webapp technisch in elkaar hoort te zitten, voordat er iets gebouwd wordt.',
    intro: [
      'Hoe langer een project loopt, hoe duurder een verkeerde keuze aan het begin wordt. Waar staan de gegevens, wat praat met wat en wat gebeurt er als er tien keer zo veel gebruikers komen. Dat zijn keuzes die je één keer goed wilt maken.',
      'We zoeken iemand die daar rustig over kan nadenken en het daarna kan uitleggen. Niet in vaktaal, maar zo dat een ondernemer begrijpt waarom het zo moet.',
    ],
    taken: [
      {
        titel: 'Inrichting bedenken',
        tekst:
          'Je bepaalt hoe een website of webapp is opgebouwd en waar de gegevens leven.',
      },
      {
        titel: 'Koppelingen uittekenen',
        tekst:
          'Welke systemen met elkaar praten en wat er precies over en weer gaat.',
      },
      {
        titel: 'Keuzes onderbouwen',
        tekst:
          'Je legt vast waarom je iets zo doet, zodat degene die het over een jaar aanraakt het snapt.',
      },
      {
        titel: 'Meekijken bij de bouw',
        tekst:
          'Je bewaakt dat wat er gebouwd wordt nog steeds klopt met het plan.',
      },
    ],
    meebrengt: [
      'Je denkt in structuren en je ziet gevolgen twee stappen vooruit.',
      'Je kunt techniek uitleggen aan iemand zonder technische achtergrond.',
      'Ervaring met webapps of koppelingen is een plus, geen eis.',
      'Stage, parttime of freelance kan allemaal. Wat bij je past bespreken we.',
    ],
    krijgt: KRIJGT_FLEX,
    metaTitle: 'App- en webarchitect, stage of freelance | Werken bij MegaOnline',
    metaDescription:
      'App- en webarchitect gezocht bij MegaOnline in Gouda. Je bepaalt de technische inrichting van websites en webapps voordat er gebouwd wordt.',
    open: true,
  },
]

export function vindVacature(slug: string): Vacature | undefined {
  return VACATURES.find((v) => v.slug === slug)
}

export const OPEN_VACATURES = VACATURES.filter((v) => v.open)

/** Datum waarop de vacatures voor het laatst zijn bijgewerkt, voor de JobPosting-markup. */
export const VACATURES_GEPLAATST = '2026-09-09'
