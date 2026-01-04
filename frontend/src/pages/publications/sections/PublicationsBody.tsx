import { PublicationList } from '../components/PublicationList'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'

export const PublicationsBody = () => {
  return (
    <FullScreenHeaderOnlySection
      header=""
      align_header="left"
      variant="light"
      width="wide"
      height="fit-content"
    >
      <PublicationList />
    </FullScreenHeaderOnlySection>
  )
}
