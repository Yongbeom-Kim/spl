import { useNewsItemDetailQuery } from '@/strapi/hooks/use-news-query'
import { dateToHumanReadable } from '@/strapi/utils/date'
import { useParams } from '@tanstack/react-router'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { ExternalLinkIcon } from 'lucide-react'

export const NewsDetailPage = () => {
  const { slug } = useParams({ from: '/news/$slug' })
  const { data: newsItem, error } = useNewsItemDetailQuery(slug)

  if (error) {
    throw error
  }

  if (!newsItem) {
    return (
      <PageLayout headerLinksToHomePage={true}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              News Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The news article you're looking for doesn't exist or has been
              removed.
            </p>
            <a
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-blue-600 hover:bg-accent-blue-700"
            >
              Back to News
            </a>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout headerLinksToHomePage={true}>
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 pt-[10vh]">
        {newsItem.NewsPageThumbnail && (
          <div className="mb-8">
            <img
              src={newsItem.NewsPageThumbnail[0].url}
              alt={newsItem.NewsPageThumbnail[0].alternativeText || newsItem.Title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
          {newsItem.Title}
        </h1>

        <div className="mb-8">
          <time className="text-sm text-neutral-500 uppercase tracking-wide font-medium">
            {dateToHumanReadable(newsItem.Date)}
          </time>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg text-neutral-700 leading-relaxed mb-8">
            {newsItem.PreviewSummary}
          </div>

          {newsItem.NewsPageBody && (
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: newsItem.NewsPageBody }}
            />
          )}
        </div>

        {newsItem.LinkToArticle && (
          <div className="mt-12">
            <a
              href={newsItem.LinkToArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-blue-600 hover:bg-accent-blue-700"
            >
              Read Original Article
              <ExternalLinkIcon className='h-4 relative bottom-px' />
            </a>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/news"
            className="inline-flex items-center text-accent-blue-600 hover:text-accent-blue-700 font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to News
          </a>
        </div>
      </article>
    </PageLayout>
  )
}
