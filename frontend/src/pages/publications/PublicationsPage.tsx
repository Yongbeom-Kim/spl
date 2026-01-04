import { PublicationsPageHeroSection } from './components/hero/HeroSection'
import { PublicationsBody } from './sections/PublicationsBody'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const PublicationsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PublicationsPageHeroSection />
      <PublicationsBody />
    </PageLayout>
  )
}
