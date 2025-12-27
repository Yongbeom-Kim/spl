import { PageLayout } from '@/components/page-layout/PageLayout'
import { PublicationsPageHeroSection } from './components/hero/HeroSection'

export const PublicationsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PublicationsPageHeroSection />
    </PageLayout>
  )
}

