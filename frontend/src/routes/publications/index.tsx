import { createFileRoute } from '@tanstack/react-router'
import { PublicationsPage } from '@/pages/publications/PublicationsPage'

export const Route = createFileRoute('/publications/')({
  component: PublicationsPage,
})
