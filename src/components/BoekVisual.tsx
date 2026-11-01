import '@/styles/boekvisual.css'

/**
 * Visual van een boeking op een telefoon, in de huisstijl en met tokens, zodat hij meekleurt met data-theme.
 * Zodra Joshua een video aanlevert (MP4, H.264, geluid uit, max. 20 s) zet je die in public/videos/
 * en geef je het pad mee als `video`. Dan vervangt de video de mockup; de mockup blijft de poster-fallback.
 */
type Soort = 'tafel' | 'ticket'

const INHOUD: Record<Soort, { kop: string; sub: string; dagen: string[]; tijden: [string, boolean][]; keuze: string; regel: string; knop: string; bericht: string }> = {
  tafel: {
    kop: 'Reserveer een tafel',
    sub: '2 personen',
    dagen: ['vr 13', 'za 14', 'zo 15', 'ma 16'],
    tijden: [['17:30', false], ['18:00', true], ['18:30', true], ['19:00', true], ['19:30', true], ['20:00', false]],
    keuze: '19:30',
    regel: 'Gratis annuleren tot 24 uur vooraf',
    knop: 'Reserveer voor za 14 om 19:30',
    bericht: 'Tot morgen! Je tafel voor 2 staat om 19:30 klaar.',
  },
  ticket: {
    kop: 'Kies je tijdslot',
    sub: '4 spelers · € 25 p.p.',
    dagen: ['wo 11', 'do 12', 'vr 13', 'za 14'],
    tijden: [['10:00', true], ['11:30', false], ['13:00', true], ['14:30', true], ['16:00', false], ['17:30', true]],
    keuze: '14:30',
    regel: '+ Drankje na afloop (€ 4 p.p.)',
    knop: 'Boek en betaal € 116',
    bericht: 'Morgen om 14:30 is jullie tijdslot. Kom 10 minuten eerder.',
  },
}

export function BoekVisual({ soort = 'tafel', video, label }: { soort?: Soort; video?: string; label?: string }) {
  const d = INHOUD[soort]
  const alt = label ?? `Voorbeeld: ${d.kop.toLowerCase()} op een telefoon`

  if (video) {
    return (
      <div className="boekvis boekvis--video">
        <video src={video} autoPlay muted loop playsInline preload="metadata" aria-label={alt} />
      </div>
    )
  }

  return (
    <div className="boekvis" role="img" aria-label={alt}>
      <div className="boekvis__phone" aria-hidden="true">
        <div className="boekvis__bar" />
        <p className="boekvis__kop">{d.kop}</p>
        <p className="boekvis__sub">{d.sub}</p>
        <div className="boekvis__dagen">
          {d.dagen.map((x, i) => (
            <span key={x} className={i === 1 ? 'is-on' : undefined}>
              {x}
            </span>
          ))}
        </div>
        <div className="boekvis__tijden">
          {d.tijden.map(([t, vrij]) => (
            <span key={t} className={t === d.keuze ? 'is-on' : vrij ? undefined : 'is-vol'}>
              {t}
            </span>
          ))}
        </div>
        <p className="boekvis__regel">{d.regel}</p>
        <span className="boekvis__knop">{d.knop}</span>
      </div>
      <div className="boekvis__bericht" aria-hidden="true">
        <span className="boekvis__bericht-label">Herinnering</span>
        {d.bericht}
      </div>
    </div>
  )
}
