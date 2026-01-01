import heroImage from './assets/hero.jpg'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const ContactUsPage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'Contact details',
      copy: <OfflineContentNotice pageName="Contact Us" />,
    },
    {
      eyebrow: '02',
      heading: 'Reach out',
      copy: (
        <div className="space-y-4">
          <p>
            Embed forms, email addresses, and location information here once the
            production copy can be fetched. Calls to action and response times can
            be highlighted within these sections.
          </p>
          <p className="text-neutral-300">
            Keeping the section full-height maintains the requested page rhythm and
            leaves ample room for maps or contact cards.
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
              objectPosition: '50% 0%',
            }}
          />
        }
        headlineContent={'Contact Us'}
        headerLinksToHomePage={true}
      />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
