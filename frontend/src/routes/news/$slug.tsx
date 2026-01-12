import { createFileRoute } from '@tanstack/react-router'
import { NewsDetailPage } from '@/pages/news/NewsDetailPage'
import { generateSeoMeta } from '@/util/seo'
import { fetchNewsItemDetail } from '@/strapi/hooks/use-news-query'

export const Route = createFileRoute('/news/$slug')({
  loader: async ({ params }) => {
    return await fetchNewsItemDetail(params.slug)
  },
  component: NewsDetailPage,
  head: ({ loaderData, params }) => {
    const newsItem = loaderData

    if (!newsItem) {
      return generateSeoMeta({
        title: 'News Not Found | SenpaiLearn | Fung Lab',
        description: 'The news article you are looking for does not exist.',
        path: `/news/${params.slug}`,
        noIndex: true,
      })
    }

    const baseUrl = 'https://senpailearn.org'
    const imageUrl = newsItem.NewsPageThumbnail?.[0]?.url
      ? `${baseUrl}${newsItem.NewsPageThumbnail[0].url}`
      : undefined

    return generateSeoMeta({
      title: `${newsItem.Title} | SenpaiLearn | Fung Lab`,
      description: newsItem.PreviewSummary,
      path: `/news/${params.slug}`,
      image: imageUrl,
      type: 'article',
      keywords: [
        'news',
        'article',
        'SenpaiLearn',
        'Fung Lab',
        'research',
        'education',
      ],
    })
  },
})
