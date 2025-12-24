import { createFileRoute } from '@tanstack/react-router'
import { PeoplePage } from '@/pages/people/PeoplePage'

export const Route = createFileRoute('/people/')({
  component: PeoplePage,
})