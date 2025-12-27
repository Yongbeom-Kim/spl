import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import heroImage from './assets/hero.jpeg'

export const NewsPage = () => {
  return (
    <PageLayout>
      <FullScreenHeroSection 
        backgroundElement={
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
        } 
        headlineContent={'News'} 
      />
    </PageLayout>
  )
}

