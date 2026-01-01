import { PublicationsPageHeroSection } from './components/hero/HeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const PublicationsPage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'Publication listings',
      copy: <OfflineContentNotice pageName="Publications" />,
    },
    {
      eyebrow: '02',
      heading: 'Reading experience',
      copy: (
        <div className="space-y-4">
          <p>
            Use this section to showcase recent papers, talks, and case studies
            once the source copy is reachable. Links, DOI references, and cover art
            all fit comfortably within these full-height containers.
          </p>
          <p className="text-neutral-300">
            Keep citation formatting consistent and consider grouping content by
            theme or year for scannability.
          </p>
        </div>
      ),
    },
  ]

  return (
    <PageLayout headerLinksToHomePage={true}>
      <PublicationsPageHeroSection />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
