import { useEffect, useState } from 'react'

import manifest from '@/lib/media-manifest.json'

const IMAGES = manifest as Record<string, string>

/**
 * Vervangt het prototype-only `<image-slot>` web component.
 *
 * Beeld dat de klant in het prototype had neergezet stond als base64 in
 * `.image-slots.state.json`; dat is geëxtraheerd naar `public/images/`.
 * Een slot mét beeld rendert een echte `<img>`; een slot zonder beeld valt
 * terug op de `.ph`-placeholder, zodat zichtbaar blijft wat nog ontbreekt.
 */
export function Media({
  id,
  fit = 'cover',
  shape = 'rect',
  alt = '',
  placeholder,
  className,
  defer = false,
}: {
  id: string
  fit?: 'cover' | 'contain'
  shape?: 'rect' | 'circle'
  alt?: string
  placeholder?: string
  className?: string
  /**
   * Geen `src` in de eerste HTML. Het beeld staat in een reveal (opacity 0)
   * maar wél in het eerste scherm, dus de browser haalt het anders binnen
   * vóór de headerknop — en die fetch telt dan mee voor de mobiele LCP.
   */
  defer?: boolean
}) {
  const src = IMAGES[id]
  const [ready, setReady] = useState(!defer)
  useEffect(() => {
    if (defer) setReady(true)
  }, [defer])

  const classes = [
    'mediaslot',
    `mediaslot--${fit}`,
    shape === 'circle' ? 'mediaslot--circle' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  if (!src) {
    return (
      <span className={classes}>
        <span className="ph">{placeholder ?? ''}</span>
      </span>
    )
  }

  return (
    <span className={classes}>
      <img {...(ready ? { src } : {})} alt={alt} loading="lazy" decoding="async" />
      {defer ? (
        <noscript dangerouslySetInnerHTML={{ __html: `<img src="${src}" alt="" />` }} />
      ) : null}
    </span>
  )
}
