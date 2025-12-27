import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import heroImage from './assets/hero.jpg'

export const ContactUsPage = () => {
  return (
    <PageLayout>
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
      />
    </PageLayout>
  )
}

