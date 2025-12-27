import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import heroImage from './assets/hero.jpg'

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
              objectPosition: '50% 0%'
            }}
          />
        } 
        headlineContent={'Contact Us'} 
        headerLinksToHomePage={true}
      />
    </PageLayout>
  )
}

