import { createFileRoute } from '@tanstack/react-router'
import { PartnersPage } from '@/pages/partners/PartnersPage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/partners/')({
  component: PartnersPage,
  head: () => {
    return generateSeoMeta({
      title: 'Our Partners | SenpaiLearn | Fung Lab',
      description:
        'Discover the organizations and institutions partnering with SenpaiLearn to advance educational innovation and learning research.',
      path: '/partners',
      keywords: [
        'partners',
        'collaborations',
        'institutions',
        'SenpaiLearn',
        'Fung Lab',
        'educational partnerships',
        'research collaborations',
      ],
    })
  },
})
