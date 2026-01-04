import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { NewsList } from '../components/NewsList'

export const NewsBody = () => {
  return (
    <FullScreenHeaderOnlySection
      header="Recent News"
      align_header="left"
      variant="light"
      width="narrow"
      height="fit-content"
      className='px-16'
    >
      <NewsList />
    </FullScreenHeaderOnlySection>
  )
}
