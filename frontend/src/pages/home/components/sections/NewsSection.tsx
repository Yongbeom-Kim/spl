import { Link } from '@/components/link/Link'
import { SectionLayout } from './SectionLayout'

type NewsCardProps = {
  title: string
  description: string
  date: string
  imageUrl?: string
}

const NewsCard = ({ title, description, date, imageUrl }: NewsCardProps) => {
  return (
    <div className="w-lg max-w-full aspect-5/2 bg-neutral-0 relative rounded-lg shadow-sm grid grid-cols-[auto_1fr] grid-rows-3 p-4 gap-4">
      {/* Image - Desktop: (19, 19) 139x139 */}
      <div className="row-span-3 w-full h-full bg-[#f0f0f0] rounded">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded aspect-square"
          />
        ) : (
          <div className="h-full aspect-square flex items-center justify-center text-neutral-600 rounded">
            <span className="text-xs">News Image</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-[#212121] font-main truncate">
        {title}
      </h3>

      <span className="absolute right-2 top-2 text-[0.6rem] text-neutral-600 font-main whitespace-nowrap">
        {date}
      </span>

      <p className="text-xs text-neutral-800 font-main leading-[1.4] line-clamp-none">
        {description}
      </p>

      <Link
        to="/#"
        className="text-xs font-semibold text-neutral-900 font-main hover:underline inline-flex items-center gap-1"
      >
        Read More →
      </Link>
    </div>
  )
}

export const NewsSection = () => {
  // Sample news data - replace with actual data
  const newsItems: Omit<NewsCardProps, 'imageUrl'>[] = [
    {
      title: 'News',
      description: 'Much information about the news...',
      date: '14 Jan 2025',
    },
    {
      title: 'News',
      description: 'Much information about the news...',
      date: '14 Jan 2025',
    },
    {
      title: 'News',
      description: 'Much information about the news...',
      date: '14 Jan 2025',
    },
  ]

  return (
    <SectionLayout className="bg-neutral-100" sectionTitle="News">
      <div className="flex flex-col gap-6 mb-8 items-center">
        {newsItems.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            date={news.date}
          />
        ))}
      </div>
      <div className="w-full flex">
        <Link to="/#" className="ml-auto">
          View All →
        </Link>
      </div>
    </SectionLayout>
  )
}
