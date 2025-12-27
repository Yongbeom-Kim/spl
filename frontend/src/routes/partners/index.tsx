import { createFileRoute } from '@tanstack/react-router'
import { PartnersPage } from '@/pages/partners/PartnersPage'

export const Route = createFileRoute('/partners/')({
  component: PartnersPage,
})
