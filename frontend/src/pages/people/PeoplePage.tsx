import { PeoplePageHeroSection } from './components/hero/HeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const PeoplePage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PeoplePageHeroSection />
    </PageLayout>
  )
}
