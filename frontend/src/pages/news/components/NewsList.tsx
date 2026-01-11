import { useNewsSummaryListQuery } from '@/strapi/hooks/use-news-query'
import { NewsCard } from './NewsCard'

export const NewsList = () => {
  const {data: newsSummaryList} = useNewsSummaryListQuery()

  return (
    <div className="flex flex-col divide-y divide-neutral-200">
      {newsSummaryList.map((newsItem) => (
        <NewsCard key={newsItem.documentId} newsItem={newsItem} />
      ))}
    </div>
  )
}
