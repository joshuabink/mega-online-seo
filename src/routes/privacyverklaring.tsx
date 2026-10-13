import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/privacyverklaring.css'

export const Route = createFileRoute('/privacyverklaring')({
  head: () => ({
    meta: [
      { title: "Privacyverklaring | MegaOnline.io" },
      { name: 'description', content: "De privacyverklaring van MegaOnline: welke persoonsgegevens het bedrijf verwerkt, waarom en welke rechten je hebt." },
      { property: 'og:title', content: "Privacyverklaring | MegaOnline.io" },
      { property: 'og:description', content: "De privacyverklaring van MegaOnline: welke persoonsgegevens het bedrijf verwerkt, waarom en welke rechten je hebt." },
      { property: 'og:url', content: "https://megaonline.io/privacyverklaring" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/privacyverklaring" },
    ],
  }),
  staticData: { lightNav: true },
  component: Privacyverklaring,
})

function Privacyverklaring() {
  return (
    <main id="top" data-page="privacyverklaring">
      <section className="section legal" data-theme="light" data-screen-label="Privacyverklaring">
        <div className="wrap">
          <div className="legal__head">
            <Reveal as="div" className="crumb reveal">
              <Link to="/" hash="top">Home</Link>
              <span className="sep">/</span>
              <b>Privacyverklaring</b>
            </Reveal>
            {' '}
            <Reveal as="h1" className="reveal" data-d="1" style={{ marginTop: "18px" }}>Privacyverklaring</Reveal>
            {' '}
            <Reveal as="p" className="legal__meta reveal" data-d="1">Laatst bijgewerkt: 24 juni 2026</Reveal>
            {' '}
            <Reveal as="p" className="legal__lead reveal" data-d="2">
              MegaOnline.io gaat zorgvuldig om met je persoonsgegevens. In deze privacyverklaring lees je welke gegevens MegaOnline verwerkt, met welk doel en welke rechten je hebt.
            </Reveal>
          </div>
          {' '}
          <div className="legal__grid">
            <Reveal as="nav" className="legal__toc reveal" aria-label="Inhoud">
              <span>Inhoud</span>
              {' '}
              <a href="#s1">1. Inleiding</a>
              {' '}
              <a href="#s2">2. Welke gegevens MegaOnline verwerkt</a>
              {' '}
              <a href="#s3">3. Waarom MegaOnline gegevens verwerkt</a>
              {' '}
              <a href="#s4">4. Grondslagen voor verwerking</a>
              {' '}
              <a href="#s5">5. Delen met derden</a>
              {' '}
              <a href="#s6">6. Cookies</a>
              {' '}
              <a href="#s7">7. Bewaartermijnen</a>
              {' '}
              <a href="#s8">8. Beveiliging</a>
              {' '}
              <a href="#s9">9. Jouw rechten</a>
              {' '}
              <a href="#s10">10. Contact</a>
            </Reveal>
            {' '}
            <Reveal as="div" className="legal__body reveal" data-d="1">
              <section className="legal__sec" id="s1">
                <h2>1. Inleiding</h2>
                {' '}
                <p>
                  MegaOnline.io respecteert de privacy van bezoekers en klanten en gaat zorgvuldig om met persoonsgegevens. Deze privacyverklaring legt uit welke gegevens MegaOnline verzamelt, waarom en welke rechten je hebt.
                </p>
                {' '}
                <p>
                  Deze verklaring is van toepassing op het gebruik van de website en de diensten van MegaOnline. MegaOnline verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s2">
                <h2>2. Welke gegevens MegaOnline verwerkt</h2>
                {' '}
                <p>
                  Wanneer je een formulier invult of contact opneemt, verwerkt MegaOnline de gegevens die je zelf verstrekt, zoals je naam, bedrijfsnaam, e-mailadres, telefoonnummer en de inhoud van je bericht.
                </p>
                {' '}
                <p>
                  Daarnaast kan MegaOnline technische gegevens verwerken die automatisch ontstaan bij een bezoek aan de website, zoals je IP-adres, browsertype en de pagina’s die je bekijkt.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s3">
                <h2>3. Waarom MegaOnline gegevens verwerkt</h2>
                {' '}
                <p>
                  MegaOnline verwerkt persoonsgegevens om contact met je op te kunnen nemen naar aanleiding van een aanvraag, om diensten te leveren, om facturen op te stellen en om de website te verbeteren.
                </p>
                {' '}
                <p>
                  MegaOnline verwerkt alleen gegevens die noodzakelijk zijn voor deze doeleinden en bewaart ze niet langer dan nodig.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s4">
                <h2>4. Grondslagen voor verwerking</h2>
                {' '}
                <p>
                  MegaOnline verwerkt persoonsgegevens op basis van je toestemming, ter uitvoering van een overeenkomst, om te voldoen aan een wettelijke verplichting of op grond van een gerechtvaardigd belang, zoals het verbeteren van de dienstverlening.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s5">
                <h2>5. Delen met derden</h2>
                {' '}
                <p>
                  MegaOnline verstrekt je gegevens niet aan derden voor commerciële doeleinden. MegaOnline deelt gegevens uitsluitend met partijen die helpen de diensten te leveren, zoals een hostingpartij of een betaaldienst. Dat gebeurt alleen voor zover dat noodzakelijk is.
                </p>
                {' '}
                <p>
                  Met partijen die in opdracht persoonsgegevens verwerken, sluit MegaOnline waar nodig een verwerkersovereenkomst om eenzelfde niveau van beveiliging en vertrouwelijkheid te waarborgen.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s6">
                <h2>6. Cookies</h2>
                {' '}
                <p>
                  MegaOnline gebruikt cookies in drie categorieën. Welke je toestaat, kies je zelf in de cookiebanner. Je kunt je keuze altijd wijzigen of intrekken via Cookie-instellingen onderaan de site.
                </p>
                {' '}
                <p>
                  <strong>Noodzakelijk.</strong> Deze cookie onthoudt je cookiekeuze (cc_cookie, 12 maanden). Hiervoor is geen toestemming nodig.
                </p>
                {' '}
                <p>
                  <strong>Statistieken.</strong> Alleen als je hiervoor kiest, gebruikt MegaOnline PostHog om te meten hoe bezoekers de website gebruiken. PostHog slaat de gegevens op servers in de EU (Frankfurt) op.
                </p>
                {' '}
                <p>
                  MegaOnline meet paginabezoeken, klikken, scrollgedrag en hoe ver je door de stappen van een formulier komt. Ook maakt MegaOnline sessie-opnames, waarin alle invoervelden zijn afgeschermd. Wat je in een formulier typt, legt MegaOnline via PostHog nooit vast. Je kunt je toestemming altijd intrekken via Cookie-instellingen onderaan de site.
                </p>
                {' '}
                <p>
                  <strong>Marketing.</strong> Alleen als je hiervoor kiest, gebruikt MegaOnline een dienst die aan de hand van het IP-adres herkent welke bedrijven deze website bezoeken en welke pagina's zij bekijken. MegaOnline gebruikt dit om zakelijke bezoekers beter te helpen.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s7">
                <h2>7. Bewaartermijnen</h2>
                {' '}
                <p>
                  MegaOnline bewaart persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor het ze heeft verzameld, of zo lang als wettelijk verplicht is. Gegevens met betrekking tot facturatie bewaart MegaOnline conform de wettelijke bewaarplicht.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s8">
                <h2>8. Beveiliging</h2>
                {' '}
                <p>
                  MegaOnline neemt passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking. Mocht je de indruk hebben dat je gegevens niet goed beveiligd zijn, neem dan contact op met MegaOnline.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s9">
                <h2>9. Jouw rechten</h2>
                {' '}
                <p>
                  Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Daarnaast heb je het recht om je toestemming in te trekken of bezwaar te maken tegen de verwerking, en het recht op gegevensoverdraagbaarheid.
                </p>
                {' '}
                <p>
                  Wil je gebruikmaken van deze rechten? Neem dan contact op met MegaOnline. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s10">
                <h2>10. Contact</h2>
                {' '}
                <p>
                  Heb je vragen over deze privacyverklaring of over de manier waarop MegaOnline met persoonsgegevens omgaat? Neem dan contact op met MegaOnline via de gegevens op de contactpagina.
                </p>
              </section>
              {' '}
              <div className="legal__note">
                Dit is een algemene versie ter illustratie. Voor een juridisch sluitende tekst die volledig past bij jouw situatie raadt MegaOnline aan deze te laten controleren door een jurist. Vragen? Neem gerust <Link to="/contact" style={{ color: "var(--accent-text)" }}>contact</Link> op met MegaOnline.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
