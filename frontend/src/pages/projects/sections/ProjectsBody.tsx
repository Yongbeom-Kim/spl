import { ProjectList } from '../components/ProjectList'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'

export const ProjectsBody = () => {
  return (
    <FullScreenHeaderOnlySection
      header=""
      align_header="left"
      variant="light"
      width="wide"
      height="fit-content"
    >
      <ProjectList />
    </FullScreenHeaderOnlySection>
  )
}
