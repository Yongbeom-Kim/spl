import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { ProjectList } from '../components/ProjectList'

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
