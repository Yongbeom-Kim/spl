import { PageLayout } from '@/components/page-layout/PageLayout'
import { FullScreenHeroSection } from '../../components/full-screen-hero/FullScreenHeroSection'
import { PageSections, type PageSection } from '@/components/sections/PageSections'
import { OfflineContentNotice } from '@/components/sections/OfflineContentNotice'
import './styles.css'
import heroCropped from './assets/hero-cropped.webp'

export const HomePage = () => {
  const sections: PageSection[] = [
    {
      eyebrow: '01',
      heading: 'Home content ready for sections',
      copy: <OfflineContentNotice pageName="Home" />,
    },
    {
      eyebrow: '02',
      heading: 'How to use this page',
      copy: (
        <div className="space-y-4">
          <p>
            Each section now stretches to the full viewport height so the home page
            can present multiple stories beneath the hero. Swap in the real body
            copy from funmanfung.com when connectivity is available.
          </p>
          <p className="text-neutral-300">
            Keep paragraphs concise and use bullet lists or subheadings inside the
            section copy to preserve readability.
          </p>
        </div>
      ),
    },
  ]

  return (
    <PageLayout headerLinksToHomePage={false}>
      <FullScreenHeroSection
        backgroundElement={
          <img
            src={heroCropped}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        }
        headlineContent="We are a group empowering learning for everyone."
        headerLinksToHomePage={false}
      />
      <PageSections sections={sections} />
    </PageLayout>
  )
}
