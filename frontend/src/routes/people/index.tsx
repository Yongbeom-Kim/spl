import { createFileRoute } from '@tanstack/react-router'
import { PeoplePage } from '@/pages/people/PeoplePage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/people/')({
  component: PeoplePage,
  head: () => {
    return generateSeoMeta({
      title: 'Our Team | SenpaiLearn | Fung Lab',
      description:
        'Meet the dedicated team behind SenpaiLearn at Fung Lab, working to empower learning for everyone through innovation and research.',
      path: '/people',
      keywords: [
        'team',
        'people',
        'researchers',
        'SenpaiLearn',
        'Fung Lab',
        'faculty',
        'staff',
        'educational research',
      ],
    })
  },
})
