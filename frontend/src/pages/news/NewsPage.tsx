import heroImage from './assets/hero.jpeg'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const NewsPage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'News feed',
      copy: <OfflineContentNotice pageName="News" />,
    },
    {
      eyebrow: '02',
      heading: 'Updates and press',
      copy: (
        <div className="space-y-4">
          <p>
            Drop in announcements, press mentions, or newsletter highlights here
            when the source material can be fetched. Lists or cards of headlines
            will fill the full-height canvas.
          </p>
          <p className="text-neutral-300">
            Consider linking to detailed posts or external coverage to keep this
            page current.
          </p>
        </div>
      ),
    },
  ]

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
      <PageSections sections={sections} />
    </PageLayout>
  )
}
