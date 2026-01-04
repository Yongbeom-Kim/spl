import { AboutUsHeroSection } from './sections/AboutUsHero'
import { AboutUsBody } from './sections/AboutUsBody'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const AboutUsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <AboutUsHeroSection />
      <AboutUsBody />
    </PageLayout>
  )
}
