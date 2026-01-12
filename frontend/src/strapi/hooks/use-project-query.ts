import { useSuspenseQuery } from '@tanstack/react-query'
import { strapiAxiosInstance } from '../utils/axiosInstance'
import type { StrapiBaseObject, StrapiImageType } from '../utils/strapi-types'

export type Project = StrapiBaseObject & {
  StartYear: string
  Summary: any
  Thumbnail: Array<StrapiImageType>
  Title: string
}

const fetchProjectList = async () => {
  const resp = await strapiAxiosInstance.get('/api/projects?populate=Thumbnail')
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data as Array<Project>
}

export const useProjectListQuery = ({
  limit,
  additionalFilters,
}: {
  limit?: number
  additionalFilters?: Array<(p: Project) => boolean>
} = {}) => {
  return useSuspenseQuery<Array<Project>, Error>({
    queryKey: ['project_list'],
    queryFn: fetchProjectList,
    select: (projects) => {
      // Sort projects by StartYear (descending, most recent first) and apply limit
      let result = [...projects].sort((a, b) => {
        const yearA = parseInt(a.StartYear, 10)
        const yearB = parseInt(b.StartYear, 10)
        return yearB - yearA
      })
      if (additionalFilters) {
        additionalFilters.forEach((filter) => {
          result = result.filter(filter)
        })
      }
      return result.slice(0, limit)
    },
  })
}
