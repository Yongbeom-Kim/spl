import heroCropped from './assets/hero-cropped.webp'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const AboutUsPage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'About Us body content',
      copy: <OfflineContentNotice pageName="About Us" />,
    },
    {
      eyebrow: '02',
      heading: 'Section structure prepared',
      copy: (
        <div className="space-y-4">
          <p>
            The layout now supports multiple full-height sections so the About Us
            story can unfold naturally below the hero. Replace this paragraph with
            the scraped narrative once the site is reachable.
          </p>
          <p className="text-neutral-300">
            Consider pairing copy with imagery or pull quotes inside these blocks
            to maintain engagement as visitors scroll.
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
            src={heroCropped}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'right 5% bottom 50%' }}
          />
        }
        headlineContent={'About Us'}
        sublineContent={
          'We are a team of enablers who support projects related to enhanced learning via novel approaches.'
        }
        headerLinksToHomePage={true}
      />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
