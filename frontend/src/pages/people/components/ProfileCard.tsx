import { Link } from '@tanstack/react-router'
import { Person } from '../hooks/use-people-query'

interface ProfileCardProps {
  person: Person
}

export const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <div
      id={person.documentId}
      className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start"
    >
      <img
        src={person.headshot.url}
        alt={`${person.name} headshot`}
        className="
          w-full max-w-[200px] aspect-square object-cover rounded-xl
          lg:w-48 lg:rounded-full lg:shrink-0
        "
      />

      <div className="text-center lg:text-left flex-1">
        {person.is_lead && (
          <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
            Lead
          </p>
        )}

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
          {person.name}
        </h3>

        <div className="relative">
          <p className="text-base text-neutral-700 leading-relaxed">
            {person.short_description}
          </p>

          {/* {person.readMoreHref && (
            <Link
              to={person.readMoreHref}
              className="inline-block mt-3 text-sm font-medium text-accent-blue-600 hover:text-accent-blue-700 transition-colors duration-200"
            >
              Read More →
            </Link>
          )} */}
        </div>
      </div>
    </div>
  )
}
