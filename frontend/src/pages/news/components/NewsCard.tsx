import type { NewsItem } from '../data/news-data'

interface NewsCardProps {
  newsItem: NewsItem
}

const NewsPlaceholder = () => {
  return (
    <div
      className="text-center p-4 inert pointer-events-none"
      aria-label="Placeholder for news image"
    >
      <svg
        className="w-12 h-12 mx-auto mb-2 text-neutral-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        role="img"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
      <p className="text-xs text-neutral-500 font-medium">News</p>
    </div>
  )
}

export const NewsCardThumbnail = ({ newsItem }: NewsCardProps) => {
  const isPlaceholder = !newsItem.imageUrl

  return (
    <div className="aspect-4/3 lg:my-8 bg-neutral-100 relative overflow-hidden">
      {isPlaceholder ? (
        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-100 to-neutral-200">
          <NewsPlaceholder />
        </div>
      ) : (
        <img
          src={newsItem.imageUrl}
          alt={newsItem.imageAlt}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}

export const NewsCardTitle = ({ newsItem }: NewsCardProps) => {
  return (
    <div className="flex flex-col justify-start mb-3 lg:p-8">
      <div className="text-sm lg:text-md text-neutral-500 uppercase tracking-wide font-medium mb-3">
        {newsItem.date}
      </div>
      <h3 className="text-2xl lg:text-2xl font-semibold text-neutral-900 leading-snug">
        {newsItem.title}
      </h3>
    </div>
  )
}

export const NewsCardContentColumn = ({ newsItem }: NewsCardProps) => {
  return (
    <div className="flex flex-col justify-between mb-3 lg:p-8">
      <p className="text-md text-neutral-700 leading-relaxed">
        {newsItem.summary}
      </p>
      <div className="mt-4">
        <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-accent-blue-600 hover:text-accent-blue-700 transition-colors duration-200"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
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
        </a>
      </div>
    </div>
  )
}

export const NewsCardImageColumn = ({ newsItem }: NewsCardProps) => {
  return (
    <div className="lg:p-8">
      <NewsCardThumbnail newsItem={newsItem} />
    </div>
  )
}

export const NewsCard = ({ newsItem }: NewsCardProps) => {
  return (
    <article id={newsItem.id} className="w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr_1fr] items-start py-12">
        <NewsCardTitle newsItem={newsItem} />
        <NewsCardContentColumn newsItem={newsItem} />
        <NewsCardThumbnail newsItem={newsItem} />
      </div>
    </article>
  )
}
