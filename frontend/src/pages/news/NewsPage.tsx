import heroImage from './assets/hero.webp'
import { NewsBody } from './sections/NewsBody'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'

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
      />
      <NewsBody />
    </PageLayout>
  )
}
