import { Link } from '@tanstack/react-router'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { Section } from '@/components/page-section'
import { type Person, usePeopleQuery } from '@/pages/people/hooks/use-people-query'

const TeamMemberHeadshot = ({ person }: { person: Person }) => {
  return (
    <Link
      to="/people"
      hash={person.documentId}
      className="group block"
      aria-label={`View ${person.name}'s profile`}
    >
      <div className="relative overflow-hidden rounded-full w-full aspect-square mx-auto">
        <img
          src={person.headshot.url}
          alt={`${person.name} headshot`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </Link>
  )
}

export const OurTeamSection = () => {
  const {data: peopleData} = usePeopleQuery()

  return (
    <FullScreenHeaderOnlySection
      header={'Meet Our Team'}
      align_header={'center'}
      variant={'light'}
      width="wide"
      height="fit-content"
    >
      <Section.P className="text-lg text-neutral-700 text-center max-w-2xl mx-auto mb-12">
        Our projects are only made possible by the dedication, hard work, and
        collaboration of our team members.
      </Section.P>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20%,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(12%,1fr))] gap-2 lg:gap-8 mb-16">
        {(peopleData ?? []).map((person) => (
          <TeamMemberHeadshot key={person.documentId} person={person} />
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/people"
          className="inline-flex items-center text-lg font-medium text-accent-blue-600 hover:text-accent-blue-700 transition-colors duration-200"
        >
          View the full team
          <svg
            className="w-5 h-5 ml-2"
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
        </Link>
      </div>
    </FullScreenHeaderOnlySection>
  )
}
