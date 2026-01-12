import { createFileRoute } from '@tanstack/react-router'
import { PublicationsPage } from '@/pages/publications/PublicationsPage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/publications/')({
  component: PublicationsPage,
  head: () => {
    return generateSeoMeta({
      title: 'Publications | SenpaiLearn | Fung Lab',
      description:
        'Explore the research publications and academic contributions from SenpaiLearn and Fung Lab in educational technology and learning.',
      path: '/publications',
      keywords: [
        'publications',
        'research papers',
        'academic articles',
        'SenpaiLearn',
        'Fung Lab',
        'educational research',
        'learning science',
      ],
    })
  },
})
