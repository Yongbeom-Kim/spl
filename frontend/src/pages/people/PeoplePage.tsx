import { PeoplePageHeroSection } from './components/hero/HeroSection'
import { PeopleBody } from './sections/PeopleBody'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const PeoplePage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PeoplePageHeroSection />
      <PeopleBody />
    </PageLayout>
  )
}
