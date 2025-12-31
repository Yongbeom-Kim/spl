import { PublicationsPageHeroSection } from './components/hero/HeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const PublicationsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PublicationsPageHeroSection />
    </PageLayout>
  )
}
