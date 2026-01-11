import { Publication } from '@/strapi/hooks/use-publication-query'
import { PublicationPlaceholder } from '../assets/PublicationPlaceholder'

interface PublicationCardProps {
  publication: Publication
}

const formatDate = (date: Date): string => {
    return date
      .toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .toUpperCase()
}

export const PublicationCardThumbnail = ({
  publication,
}: PublicationCardProps) => {
  return (
    <div className="aspect-4/3 bg-neutral-200 relative overflow-hidden">
      {!publication.Thumbnail?.url ? (
        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-200 to-neutral-300">
          <PublicationPlaceholder />
        </div>
      ) : (
        <img
          src={publication.Thumbnail.url}
          alt={publication.Thumbnail.alternativeText ?? ''}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}

export const PublicationCardBody = ({ publication }: PublicationCardProps) => {
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="text-xs text-neutral-500 uppercase tracking-wide font-medium">
        {formatDate(publication.PublicationDate)}
      </div>

      <h3 className="text-base font-semibold text-neutral-900 leading-snug">
        {publication.Title}
      </h3>

      <div className="text-sm text-neutral-700 leading-relaxed">
        {publication.Authors}
      </div>

      <div className="invisible inert h-12"></div>

      <div className="absolute bottom-4 right-8">
        <a
          href={publication.Link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-accent-blue-600 hover:text-accent-blue-700 transition-colors duration-200"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export const PublicationCard = ({ publication }: PublicationCardProps) => {
  return (
    <article className="relative w-full h-full bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <PublicationCardThumbnail publication={publication} />
      <PublicationCardBody publication={publication} />
    </article>
  )
}
