import { createFileRoute } from '@tanstack/react-router'
import { AboutUsPage } from '@/pages/aboutus/AboutUsPage'

export const Route = createFileRoute('/aboutus/')({
  component: AboutUsPage,
})