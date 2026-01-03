import { Person } from '../data/people-data'
import { ProfileCard } from './ProfileCard'

interface PeopleListProps {
  people: Person[]
}

export const PeopleList = ({ people }: PeopleListProps) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {people.map((person) => (
        <ProfileCard key={person.name} person={person} />
      ))}
    </div>
  )
}
