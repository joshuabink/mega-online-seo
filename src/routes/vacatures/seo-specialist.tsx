import { createFileRoute } from '@tanstack/react-router'

import { VacaturePagina } from '@/components/VacaturePagina'
import { vacature } from '@/lib/vacatures'

const VACATURE = vacature('seo-specialist')
const URL = 'https://megaonline.io/vacatures/seo-specialist'

export const Route = createFileRoute('/vacatures/seo-specialist')({
  head: () => ({
    meta: [
      { title: VACATURE.metaTitel },
      { name: 'description', content: VACATURE.metaOmschrijving },
      { property: 'og:title', content: VACATURE.metaTitel },
      { property: 'og:description', content: VACATURE.metaOmschrijving },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: () => <VacaturePagina vacature={VACATURE} />,
})
