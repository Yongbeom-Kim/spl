import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { newsData, NewsItem } from '../../news/data/news-data'
import { Link } from '@tanstack/react-router'
import { ExternalLinkIcon } from '@/components/external-link-icon/ExternalLinkIcon'

const NewsHighlightCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <Link
      to="/news"
      hash={newsItem.id}
      className="group block bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-700 transition-colors duration-200"
    >
      <div className="p-6">
        <div className="text-sm text-neutral-400 uppercase tracking-wide mb-3">
          {newsItem.date}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-accent-blue-400 transition-colors duration-200">
          {newsItem.title}
        </h3>
        <p className="text-sm text-neutral-300 line-clamp-2 mb-4">
          {newsItem.summary}
        </p>
        <div className="inline-flex items-center text-accent-blue-400 font-medium text-sm">
          Read more
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export const LatestNewsSection = () => {
  const latestNews = newsData.slice(0, 3)

  return (
    <FullScreenHeaderOnlySection
      header={'Latest News'}
      align_header={'center'}
      variant={'dark'}
      width="wide"
      height="fit-content"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {latestNews.map((newsItem) => (
          <NewsHighlightCard key={newsItem.title} newsItem={newsItem} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/news"
          className="inline-flex items-center text-lg font-medium text-neutral-200 hover:text-white transition-colors duration-200"
        >
          View all News
          <ExternalLinkIcon />
        </Link>
      </div>
    </FullScreenHeaderOnlySection>
  )
}
