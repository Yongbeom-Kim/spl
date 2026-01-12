import { createFileRoute } from '@tanstack/react-router'
import { AboutUsPage } from '@/pages/aboutus/AboutUsPage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/aboutus/')({
  component: AboutUsPage,
  head: () => {
    return generateSeoMeta({
      title: 'About Us | SenpaiLearn | Fung Lab',
      description:
        "Learn about SenpaiLearn's mission to empower learning for everyone, our history, and our commitment to educational innovation.",
      path: '/aboutus',
      keywords: [
        'about us',
        'mission',
        'history',
        'SenpaiLearn',
        'Fung Lab',
        'educational research',
        'learning innovation',
      ],
    })
  },
})
