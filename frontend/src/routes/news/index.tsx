import { createFileRoute } from '@tanstack/react-router'
import { NewsPage } from '@/pages/news/NewsPage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/news/')({
  component: NewsPage,
  head: () => {
    return generateSeoMeta({
      title: 'News | SenpaiLearn | Fung Lab',
      description:
        'Stay updated with the latest news, updates, and announcements from SenpaiLearn and Fung Lab.',
      path: '/news',
      keywords: [
        'news',
        'updates',
        'announcements',
        'SenpaiLearn',
        'Fung Lab',
        'research news',
        'education news',
      ],
    })
  },
})
