import { PageLayout } from '@/components/page-layout/PageLayout'
import { PartnersHeroSection } from './components/PartnersHeroSection'
import { PartnersBodySections } from './components/PartnersBodySections'

export const PartnersPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <PartnersHeroSection />
      <PartnersBodySections />
    </PageLayout>
  )
}
