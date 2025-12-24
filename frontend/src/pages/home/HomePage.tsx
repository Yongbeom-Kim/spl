import { PageLayout } from '@/components/page-layout/PageLayout'
import { LandingPageHeroSection } from './components/LandingPageHeroSection'
import './styles.css'

export const HomePage = () => {
  return (
    <PageLayout>
      <LandingPageHeroSection />
    </PageLayout>
  )
}
