import { FullScreenHeroSection } from '../../components/full-screen-hero/FullScreenHeroSection'
import heroCropped from './assets/hero-cropped.webp'
import { WhoWeAreSection } from './sections/WhoWeAreSection'
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection'
import { OurTeamSection } from './sections/OurTeamSection'
import { LatestNewsSection } from './sections/LatestNewsSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import './styles.css'

export const HomePage = () => {
  return (
    <PageLayout headerLinksToHomePage={false}>
      <FullScreenHeroSection
        backgroundElement={
          <img
            src={heroCropped}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        }
        headlineContent="We are a group empowering learning for everyone."
      />
      <WhoWeAreSection />
      <FeaturedProjectsSection />
      <OurTeamSection />
      {/* <LatestNewsSection /> */}
    </PageLayout>
  )
}
