import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import hero from './assets/hero_upscaled.webp'

export const ProjectPage = () => {
  return (
    <PageLayout>
      <FullScreenHeroSection 
        backgroundElement={
          <img 
            src={hero} 
            alt="" 
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'right 50% bottom 50%',
              filter: 'brightness(1.08) contrast(1.15)'
            }}
          />
        } 
        headlineContent={'Our Projects'} 
      />
    </PageLayout>
  )
}