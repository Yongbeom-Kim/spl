import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import heroCropped from './assets/hero-cropped.webp'

export const AboutUsPage = () => {
  return (
    <PageLayout>
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
      />
    </PageLayout>
  )
}