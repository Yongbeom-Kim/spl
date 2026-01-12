import { useSuspenseQuery } from '@tanstack/react-query'
import qs from 'qs'
import { strapiAxiosInstance } from '../utils/axiosInstance'
import { yyyymmddToDate } from '../utils/date'
import type { StrapiBaseObject, StrapiImageType } from '../utils/strapi-types'

export type NewsSummaryRaw = StrapiBaseObject & {
  Date: string // yyyy-mm-dd
  Title: string
  PreviewSummary: string
  slug: string
  PreviewThumbnail?: StrapiImageType
}

export type NewsSummary = Omit<NewsSummaryRaw, 'Date'> & {
  Date: Date
}

export type NewsItemRaw = StrapiBaseObject & {
  Date: string // yyyy-mm-dd
  Title: string
  PreviewSummary: string
  slug: string
  NewsPageThumbnail?: Array<StrapiImageType>
  NewsPageBody?: any
  LinkToArticle?: string
}

export type NewsItem = Omit<NewsItemRaw, 'Date'> & {
  Date: Date
}

const fetchNewsSummaryList = async () => {
  const query = qs.stringify(
    {
      fields: ['Date', 'Title', 'PreviewSummary', 'slug'],
      populate: ['PreviewThumbnail'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )
  const resp = await strapiAxiosInstance.get(`/api/news-items?${query}`)
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data as Array<NewsSummaryRaw>
}

export const useNewsSummaryListQuery = ({
  select,
}: { select?: (arg: Array<NewsSummary>) => Array<NewsSummary> } = {}) => {
  return useSuspenseQuery({
    queryKey: ['news_summary_list'],
    queryFn: fetchNewsSummaryList,
    select: (newsList): Array<NewsSummary> => {
      const result = newsList
        .map((news) => ({
          ...news,
          Date: yyyymmddToDate(news.Date),
        }))
        .sort((a, b) => b.Date.getTime() - a.Date.getTime())

      if (select) {
        return select(result)
      }

      return result
    },
  })
}

export const fetchNewsItemDetail = async (slug: string) => {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: ['NewsPageThumbnail'],
  })
  const resp = await strapiAxiosInstance.get(`/api/news-items?${query}`)
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data[0] as NewsItemRaw | undefined
}

export const useNewsItemDetailQuery = (slug: string) => {
  return useSuspenseQuery({
    queryKey: ['news_item_detail', slug],
    queryFn: () => fetchNewsItemDetail(slug),
    select: (newsItemRaw) => {
      if (!newsItemRaw) return undefined
      return {
        ...newsItemRaw,
        Date: yyyymmddToDate(newsItemRaw.Date),
      }
    },
  })
}
