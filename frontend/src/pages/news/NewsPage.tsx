import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import heroImage from './assets/hero.jpeg'

export const NewsPage = () => {
  return (
    <PageLayout headerLinksToHomePage={true}>
      <FullScreenHeroSection 
        backgroundElement={
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
        } 
        headlineContent={'News'} 
        headerLinksToHomePage={true}
      />
    </PageLayout>
  )
}

