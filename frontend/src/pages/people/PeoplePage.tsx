import { PageLayout } from '@/components/page-layout/PageLayout'
import { PeoplePageHeroSection } from './components/hero/HeroSection'

export const PeoplePage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
			<PeoplePageHeroSection />
    </PageLayout>
  )
}