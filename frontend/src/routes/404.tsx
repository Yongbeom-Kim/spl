import { createFileRoute } from '@tanstack/react-router'
import { generateSeoMeta } from '@/util/seo'
import { NotFoundComponent } from '@/components/not-found'

export const Route = createFileRoute('/404')({
  component: NotFoundComponent,
  notFoundComponent: NotFoundComponent,
  head: () => {
    return generateSeoMeta({
      title: 'Page Not Found | SenpaiLearn',
      description: 'The page you are looking for does not exist.',
      path: '/404',
      noIndex: true,
    })
  },
})
