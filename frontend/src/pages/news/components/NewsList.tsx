import { newsData } from '../data/news-data'
import { NewsCard } from './NewsCard'
import type { NewsItem } from '../data/news-data';

const sortByDate = (newsItems: Array<NewsItem>): Array<NewsItem> => {
  return [...newsItems].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

export const NewsList = () => {
  const sortedNews = sortByDate(newsData)

  return (
    <div className="flex flex-col divide-y divide-neutral-200">
      {sortedNews.map((newsItem) => (
        <NewsCard key={newsItem.url} newsItem={newsItem} />
      ))}
    </div>
  )
}
