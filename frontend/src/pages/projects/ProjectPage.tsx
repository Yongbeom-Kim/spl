import hero from './assets/hero_upscaled.webp'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const ProjectPage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'Project catalog',
      copy: <OfflineContentNotice pageName="Projects" />,
    },
    {
      eyebrow: '02',
      heading: 'Showcasing work',
      copy: (
        <div className="space-y-4">
          <p>
            Add summaries, screenshots, and key learnings for each initiative once
            the live site text is available. The full-height sections are ready for
            cards, timelines, or accordions.
          </p>
          <p className="text-neutral-300">
            Keep the structure consistent across projects so visitors can skim the
            problem, approach, and results quickly.
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
            src={hero}
            alt=""
            className="w-full h-full object-cover"
            style={{
              objectPosition: '40% 50%',
              filter: 'brightness(1.08) contrast(1.15)',
            }}
          />
        }
        headlineContent={'Our Projects'}
        sublineContent="Since 2015, SenpaiLearn has trailblazed the path unchartered by applying suitable technological tools to engage learners and enhance their learning."
        headerLinksToHomePage={true}
      />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
