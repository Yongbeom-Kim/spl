import { PeoplePageHeroSection } from './components/hero/HeroSection'
import { PageLayout } from '@/components/page-layout/PageLayout'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'

export const PeoplePage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'People page content',
      copy: <OfflineContentNotice pageName="People" />,
    },
    {
      eyebrow: '02',
      heading: 'Profiles and highlights',
      copy: (
        <div className="space-y-4">
          <p>
            Populate this section with biographies, role descriptions, or feature
            quotes for team members once the source material can be fetched from
            funmanfung.com.
          </p>
          <p className="text-neutral-300">
            Cards, grids, or timelines can all live inside these full-height
            sections while preserving the new scroll rhythm.
          </p>
        </div>
      ),
    },
  ]

  return (
    <PageLayout headerLinksToHomePage={true}>
      <PeoplePageHeroSection />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
