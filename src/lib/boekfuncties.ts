/**
 * Functies die MegaOnline in een boekings- of reserveringssysteem op de site van de klant inbouwt.
 * Gedeeld door /branches/reserveringen en /diensten/online-boeken, zodat beide pagina's hetzelfde beloven.
 * Bewust geen namen van leveranciers en geen prijzen: wat het kost hangt af van de functies en de complexiteit.
 */
export type BoekFunctie = { icon: string; t: string; p: string }

export const BOEK_FUNCTIES: BoekFunctie[] = [
  {
    icon: 'bell',
    t: 'Herinneringen via WhatsApp, sms of mail',
    p: 'De dag ervoor krijgt de klant vanzelf een bericht. Wie het vergeten was, komt alsnog of zegt op tijd af, zodat jij de plek opnieuw kunt vullen.',
  },
  {
    icon: 'shield-check',
    t: 'Online betalen of aanbetalen',
    p: 'Wie vooraf betaalt, komt ook echt. Je kiest per dienst: volledig betalen, een aanbetaling of betalen ter plekke.',
  },
  {
    icon: 'calendar-days',
    t: 'Gekoppeld aan je eigen agenda',
    p: 'Boekingen komen in de agenda die je al gebruikt, zoals Google Agenda of Outlook. Wat daar bezet is, staat online niet meer als vrij.',
  },
  {
    icon: 'search',
    t: 'Boeken vanuit Google en Instagram',
    p: 'Wie je vindt in Google Maps of op je Instagram kan meteen een moment kiezen, zonder eerst je website te zoeken.',
  },
  {
    icon: 'users',
    t: 'Groepen en een maximum aantal plekken',
    p: 'Een tijdslot voor acht spelers of een workshop voor twaalf mensen. Is het vol, dan staat het online meteen als vol.',
  },
  {
    icon: 'sparkles',
    t: 'Cadeaubonnen en kortingscodes',
    p: 'Verkoop een cadeaubon aan wie nog geen datum heeft, of zet een kortingscode in voor de rustige doordeweekse uren.',
  },
  {
    icon: 'repeat',
    t: 'Terugkerende afspraken',
    p: 'Een vaste klant boekt in één keer een reeks lessen of behandelingen, in plaats van elke week opnieuw te bellen.',
  },
  {
    icon: 'layout-grid',
    t: 'Meerdere medewerkers of locaties',
    p: 'Iedere medewerker of ruimte heeft een eigen agenda. De klant kiest wie hij wil, of laat het open.',
  },
]
