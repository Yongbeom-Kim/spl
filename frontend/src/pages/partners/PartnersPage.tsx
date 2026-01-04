import { PartnersHeroSection } from './components/PartnersHeroSection'
import { PartnersBodySections } from './components/PartnersBodySections'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const PartnersPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PartnersHeroSection />
      <PartnersBodySections />
    </PageLayout>
  )
}
