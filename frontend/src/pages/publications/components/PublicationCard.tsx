import { Publication } from '../data/publicationsData'

interface PublicationCardProps {
  publication: Publication
}

const isPlaceholderImage = (src: string): boolean => {
  return (
    src.startsWith('data:image/gif;base64,') ||
    src ===
      'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  )
}

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    return date
      .toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .toUpperCase()
  } catch {
    return dateString.toUpperCase()
  }
}

export const PublicationCard = ({ publication }: PublicationCardProps) => {
  const isPlaceholder = isPlaceholderImage(publication.posterImg.src)

  return (
    <article className="w-[280px] bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="aspect-4/3 bg-neutral-200 relative overflow-hidden">
        {isPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-200 to-neutral-300">
            <div className="text-center p-4">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-xs text-neutral-500 font-medium">
                Publication
              </p>
            </div>
          </div>
        ) : (
          <img
            src={publication.posterImg.src}
            alt={publication.posterImg.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                    <div class="text-center p-4">
                      <svg class="w-12 h-12 mx-auto mb-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <p class="text-xs text-neutral-500 font-medium">Publication</p>
                    </div>
                  </div>
                `
              }
            }}
          />
        )}
      </div>

      <div className="p-5 flex flex-col h-full">
        <div className="text-xs text-neutral-500 uppercase tracking-wide mb-3 font-medium">
          {formatDate(publication.publicationDate)}
        </div>

        <h3 className="text-base font-semibold text-neutral-900 mb-4 leading-snug">
          {publication.title}
        </h3>

        <div className="text-sm text-neutral-700 leading-relaxed mb-4 flex-1">
          <span className="text-neutral-600">Authors:</span>{' '}
          {publication.authors.join(', ')}
        </div>

        <div className="mt-auto">
          <a
            href={publication.readMoreUrl}
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
    </article>
  )
}
