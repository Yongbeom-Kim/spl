import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { PeopleList } from '../components/PeopleList'
import { peopleData } from '../data/people-data'

export const PeopleBody = () => {
  const currentMembers = peopleData.filter((person) => !person.isAlumni)
  const lead = currentMembers.find((person) => person.role === 'Lead')
  const nonLeadCurrent = currentMembers.filter(
    (person) => person.role !== 'Lead',
  )
  const orderedCurrentMembers = lead
    ? [lead, ...nonLeadCurrent]
    : nonLeadCurrent

  const alumni = peopleData.filter((person) => person.isAlumni)

  return (
    <>
      <FullScreenHeaderOnlySection
        header=""
        align_header="left"
        variant="light"
        width="wide"
        height="fit-content"
      >
        <PeopleList people={orderedCurrentMembers} />
      </FullScreenHeaderOnlySection>

      <FullScreenHeaderOnlySection
        header="Senpai Alumni"
        align_header="left"
        variant="light"
        width="wide"
        height="fit-content"
      >
        <PeopleList people={alumni} />
      </FullScreenHeaderOnlySection>
    </>
  )
}
