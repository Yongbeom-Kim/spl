import { PageLayout } from '@/components/page-layout/PageLayout'
import { AboutUsHeroSection } from './sections/AboutUsHero'
import { AboutUsBody } from './sections/AboutUsBody'

export const AboutUsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <AboutUsHeroSection />
      <AboutUsBody />
    </PageLayout>
  )
}
