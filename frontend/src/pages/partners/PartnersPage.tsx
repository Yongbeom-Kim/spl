import heroImage from './assets/hero.jpg'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const PartnersPage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'Partners content',
      copy: <OfflineContentNotice pageName="Partners" />,
    },
    {
      eyebrow: '02',
      heading: 'Collaboration highlights',
      copy: (
        <div className="space-y-4">
          <p>
            Use this space for partner spotlights, joint outcomes, and contact
            information once the primary site copy can be imported. Logos or
            testimonials can sit alongside text within these full-height blocks.
          </p>
          <p className="text-neutral-300">
            Consistent section sizing maintains the requested scroll experience
            even before the final content lands.
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
            style={{
              objectPosition: '50% 100%',
              filter: 'brightness(1.08) contrast(1.15)',
            }}
          />
        }
        headlineContent={'Partners'}
        headerLinksToHomePage={true}
      />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
