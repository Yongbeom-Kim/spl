import { createFileRoute } from '@tanstack/react-router'
import { ProjectPage } from '@/pages/projects/ProjectPage'

export const Route = createFileRoute('/projects/')({
  component: ProjectPage,
})