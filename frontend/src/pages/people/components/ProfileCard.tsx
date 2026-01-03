import { Person } from '../data/people-data'

interface ProfileCardProps {
  person: Person
}

export const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
      <img
        src={person.profileImage}
        alt={`${person.name} headshot`}
        className="
          w-full max-w-[200px] aspect-square object-cover rounded-xl
          lg:w-48 lg:rounded-full lg:flex-shrink-0
        "
      />

      <div className="text-center lg:text-left flex-1">
        {person.role && (
          <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
            {person.role}
          </p>
        )}

        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
          {person.name}
        </h3>

        <p className="text-base text-neutral-700 leading-relaxed">
          {person.description}
        </p>
      </div>
    </div>
  )
}
