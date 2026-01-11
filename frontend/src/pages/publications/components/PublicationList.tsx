import { PublicationCard } from './PublicationCard'
import { usePublicationListQuery } from '@/strapi/hooks/use-publication-query';

export const PublicationList = () => {
  const {data: publications} = usePublicationListQuery();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 px-4 sm:px-6 lg:px-8">
      {publications.map((publication) => (
        <PublicationCard key={publication.documentId} publication={publication} />
      ))}
    </div>
  )
}
