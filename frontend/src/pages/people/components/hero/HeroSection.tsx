import { PeoplePageHeroBackground } from './HeroMasonryBackground'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'

export const PeoplePageHeroSection = () => {
  return (
    <FullScreenHeroSection
      backgroundElement={<PeoplePageHeroBackground />}
      headlineContent={'Our People'}
      sublineContent="All good work stems from a team of like-minded people who give their best in their projects."
      headerLinksToHomePage={true}
    />
  )
}
