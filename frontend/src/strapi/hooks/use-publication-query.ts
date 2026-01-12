import { useSuspenseQuery } from '@tanstack/react-query'
import { strapiAxiosInstance } from '../utils/axiosInstance'
import { yyyymmddToDate } from '../utils/date'
import type { StrapiBaseObject, StrapiImageType } from '../utils/strapi-types'

export type PublicationRaw = StrapiBaseObject & {
  Authors: string
  Link: string
  PublicationDate: string // yyyy-mm-dd
  Thumbnail?: StrapiImageType
  Title: string
}

export type Publication = Omit<PublicationRaw, 'PublicationDate'> & {
  PublicationDate: Date
}

const fetchPublicationsList = async () => {
  const resp = await strapiAxiosInstance.get(
    '/api/publications?populate=Thumbnail',
  )
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data as Array<PublicationRaw>
}

export const usePublicationListQuery = () => {
  return useSuspenseQuery({
    queryKey: ['publcation_list'],
    queryFn: fetchPublicationsList,
    select: (publications): Array<Publication> => {
      return publications
        .map((pub) => ({
          ...pub,
          PublicationDate: yyyymmddToDate(pub.PublicationDate),
        }))
        .sort((a, b) => {
          return b.PublicationDate.getTime() - a.PublicationDate.getTime()
        })
    },
  })
}
