import { Link } from '@tanstack/react-router'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { type NewsSummary, useNewsSummaryListQuery } from '@/strapi/hooks/use-news-query';
import { dateToHumanReadable } from '@/strapi/utils/date';
import { ExternalLinkIcon } from 'lucide-react';

const NewsHighlightCard = ({ newsSummary }: { newsSummary: NewsSummary }) => {
  return (
    <Link
      to="/news"
      hash={newsSummary.slug}
      className="group block bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-700 transition-colors duration-200"
    >
      <div className="p-6">
        <div className="text-sm text-neutral-400 uppercase tracking-wide mb-3">
          {dateToHumanReadable(newsSummary.Date)}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-accent-blue-400 transition-colors duration-200">
          {newsSummary.Title}
        </h3>
        <p className="text-sm text-neutral-300 line-clamp-2 mb-4">
          {newsSummary.PreviewSummary}
        </p>
        <div className="inline-flex items-center text-accent-blue-400 font-medium text-sm">
          Read more
          <ExternalLinkIcon />
        </div>
      </div>
    </Link>
  )
}


function limitToThree<T>(array: T[]): T[] {
  return array.slice(0, 3)
}

export const LatestNewsSection = () => {
  const {data: latestNews} = useNewsSummaryListQuery({select: limitToThree})

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
          <NewsHighlightCard key={newsItem.documentId} newsSummary={newsItem} />
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
