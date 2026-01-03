import { PublicationsPageHeroSection } from './components/hero/HeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PublicationsBody } from './sections/PublicationsBody'

export const PublicationsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PublicationsPageHeroSection />
      <PublicationsBody />
    </PageLayout>
  )
}
