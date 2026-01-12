import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@/pages/home/HomePage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => {
    return generateSeoMeta({
      title: 'SenpaiLearn | Fung Lab - Empowering Learning for Everyone',
      description:
        'SenpaiLearn is a research initiative at Fung Lab dedicated to empowering learning for everyone through innovative technology and educational research.',
      path: '/',
      keywords: [
        'education',
        'learning technology',
        'educational research',
        'Fung Lab',
        'SenpaiLearn',
        'innovative learning',
        'research',
      ],
    })
  },
})
