import { useSuspenseQuery } from '@tanstack/react-query'
import { strapiAxiosInstance } from '../utils/axiosInstance'
import { StrapiBaseObject, StrapiImageType } from '../utils/strapi-types'
import { yyyymmddToDate } from '../utils/date'

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

const fetchNewsSummaryList = async () => {
  const resp = await strapiAxiosInstance.get(
    encodeURI(
      '/api/news-items?fields[0]=Date&fields[1]=Title&fields[2]=PreviewSummary&fields[3]=slug&populate=PreviewThumbnail',
    ),
  )
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data as NewsSummaryRaw[]
}

export const useNewsSummaryListQuery = ({select}: {select?: ((arg: NewsSummary[]) => NewsSummary[])} = {}) => {
  return useSuspenseQuery({
    queryKey: ['news_summary_list'],
    queryFn: fetchNewsSummaryList,
    select: (newsList): NewsSummary[] => {
      const result = newsList
        .map((news) => ({
          ...news,
          Date: yyyymmddToDate(news.Date),
        }))
        .sort((a, b) => b.Date.getTime() - a.Date.getTime())
			
			if (select) {
				return select(result);
			}

			return result;
    },
  })
}
