import { PublicationCard } from './PublicationCard'
import { publicationData, Publication } from '../data/publicationsData'

const sortByDate = (publications: Publication[]): Publication[] => {
  return [...publications].sort((a, b) => {
    const dateA = new Date(a.publicationDate)
    const dateB = new Date(b.publicationDate)
    return dateB.getTime() - dateA.getTime()
  })
}

export const PublicationList = () => {
  const sortedPublications = sortByDate(publicationData)

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 px-4 sm:px-6 lg:px-8">
      {sortedPublications.map((publication) => (
        <PublicationCard key={publication.title} publication={publication} />
      ))}
    </div>
  )
}
