import { skipToken, useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { strapiAxiosInstance } from '../utils/axiosInstance'
import type { StrapiBaseObject, StrapiImageType } from '../utils/strapi-types'

export type Person = StrapiBaseObject & {
  name: string
  is_alumni: boolean
  is_lead: boolean
  short_description: string
  headshot: StrapiImageType
}

const fetchPeople = async () => {
  const resp = await strapiAxiosInstance.get(
    '/api/team-members?populate=headshot',
  )
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data.data as Array<Person>
}

const fetchPersonById = async (documentId: string) => {
  const resp = await strapiAxiosInstance.get(`/api/team-members/${documentId}`)
  if (resp.status !== 200) {
    throw new Error('Non-200 return code')
  }
  return resp.data as Person
}

export const usePeopleQuery = () => {
  return useSuspenseQuery<Array<Person>, Error>({
    queryKey: ['people'],
    queryFn: fetchPeople,
    select: (people) => {
      // 1. is_lead === true (first)
      // 2. is_alumni === false (second)
      // 3. is_alumni === true (last)
      return [...people].sort((a, b) => {
        // First: sort by is_lead
        if (a.is_lead !== b.is_lead) {
          return a.is_lead ? -1 : 1 // true first
        }
        // Second: sort by is_alumni (false before true)
        if (a.is_alumni !== b.is_alumni) {
          return a.is_alumni ? 1 : -1 // false before true
        }
        return 0
      })
    },
  })
}

export const usePeopleQueryById = (documentId: string | undefined) => {
  return useQuery<Person, Error>({
    queryKey: ['person', documentId],
    queryFn: documentId ? () => fetchPersonById(documentId) : skipToken,
    enabled: !!documentId,
  })
}
