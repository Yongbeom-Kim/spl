import { PeopleList } from '../components/PeopleList'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { usePeopleQuery } from '../hooks/use-people-query'

export const PeopleBody = () => {
  const {data: peopleData} = usePeopleQuery()
  const nonAlumni = (peopleData ?? []).filter(person => !person.is_alumni)
  const alumni = (peopleData ?? []).filter((person) => person.is_alumni)

  return (
    <>
      <FullScreenHeaderOnlySection
        header=""
        align_header="left"
        variant="light"
        width="wide"
        height="fit-content"
      >
        <PeopleList people={nonAlumni} />
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
