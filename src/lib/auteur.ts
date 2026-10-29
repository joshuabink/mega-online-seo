/**
 * Joshua Bink als auteur. Eén bron voor de auteurspagina (`/joshua-bink`),
 * de byline op de kennisbankartikelen en de Person-node in `schema.ts`.
 * Houd ze gelijk: wat het schema over Joshua zegt, moet ook zichtbaar op
 * zijn pagina staan.
 *
 * De bio is letterlijk de goedgekeurde tekst van /over-megaonline. Nieuwe
 * feiten (ervaring, opleiding, profielen) alleen toevoegen als Joshua ze
 * zelf aanlevert, nooit invullen.
 */
export const AUTEUR = {
  naam: "Joshua Bink",
  voornaam: "Joshua",
  achternaam: "Bink",
  rol: "Oprichter",
  pad: "/joshua-bink",
  portret: { src: "/images/founder-portret.webp", breedte: 1000, hoogte: 1250 },
  avatar: "/images/founder-av.webp",
  linkedin: "https://nl.linkedin.com/in/joshuabink",
  kop: "Passie voor websites die écht iets opleveren.",
  bio: [
    "MegaOnline is niet ontstaan vanuit de wens om websites te maken, maar vanuit de overtuiging dat een goede website bedrijven echt verder helpt.",
    "Met een technische achtergrond en een continue interesse in online groei is er altijd dezelfde reflex: hoe kan dit beter? Niet om de techniek, maar omdat een betere website meer klanten voor jou betekent. En dat begint bij betrokkenheid bij elk bedrijf waar MegaOnline mee werkt.",
  ],
  eigenschappen: [
    { icoon: "heart", label: "Passie voor websites" },
    { icoon: "line-chart", label: "Gericht op online groei" },
    { icoon: "code-2", label: "Technische achtergrond" },
    { icoon: "refresh-cw", label: "Altijd bezig met verbeteren" },
    { icoon: "users", label: "Betrokken bij klanten" },
  ],
} as const;
