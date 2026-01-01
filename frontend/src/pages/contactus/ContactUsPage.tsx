import heroImage from './assets/hero.jpg'
import { ContactInfoSection } from './components/ContactInfoSection'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'

export const ContactUsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <FullScreenHeroSection
        backgroundElement={
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: '50% 0%',
            }}
          />
        }
        headlineContent={'Contact Us'}
      />
      <ContactInfoSection />
    </PageLayout>
  )
}
