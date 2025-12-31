import heroCropped from './assets/hero-cropped.webp'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const AboutUsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <FullScreenHeroSection
        backgroundElement={
          <img
            src={heroCropped}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'right 5% bottom 50%' }}
          />
        }
        headlineContent={'About Us'}
        sublineContent={
          'We are a team of enablers who support projects related to enhanced learning via novel approaches.'
        }
        headerLinksToHomePage={true}
      />
    </PageLayout>
  )
}
