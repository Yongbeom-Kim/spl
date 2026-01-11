import { useSuspenseQuery } from '@tanstack/react-query'
import { strapiAxiosInstance } from '../utils/axiosInstance'
import { StrapiBaseObject } from '../utils/strapi-types'

export type Grant = StrapiBaseObject & {
  Title: string
  GrantNumber: string
  StartYear: string
  EndYear: string
  Amount?: string
  Description?: string
}

const fetchGrantList = async () => {
  const resp = await strapiAxiosInstance.get('/api/grant-items')
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data as Grant[]
}

export const useGrantListQuery = () => {
  return useSuspenseQuery({
    queryKey: ['grant_list'],
    queryFn: fetchGrantList,
    select: (grants): Grant[] => {
      return grants.sort((a, b) => {
        return parseInt(b.EndYear, 10) - parseInt(a.EndYear, 10)
      })
    },
  })
}
