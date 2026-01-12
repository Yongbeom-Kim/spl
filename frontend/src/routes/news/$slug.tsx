import { createFileRoute } from '@tanstack/react-router'
import { NewsDetailPage } from '@/pages/news/NewsDetailPage'

export const Route = createFileRoute('/news/$slug')({
  component: NewsDetailPage,
})
