import { createFileRoute } from '@tanstack/react-router'
import { ProjectPage } from '@/pages/projects/ProjectPage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/projects/')({
  component: ProjectPage,
  head: () => {
    return generateSeoMeta({
      title: 'Our Projects | SenpaiLearn | Fung Lab',
      description:
        'Explore the innovative projects led by SenpaiLearn at Fung Lab, applying suitable technological tools to engage learners and enhance their learning.',
      path: '/projects',
      keywords: [
        'projects',
        'research projects',
        'educational technology',
        'SenpaiLearn',
        'Fung Lab',
        'innovation',
        'learning technology',
      ],
    })
  },
})
