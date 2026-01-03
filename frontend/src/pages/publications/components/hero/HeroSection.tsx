import { PublicationsHeroMasonryBackground } from './PublicationsHeroMasonryBackground'
import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'

export const PublicationsPageHeroSection = () => {
  return (
    <FullScreenHeroSection
      backgroundElement={
        <PublicationsHeroMasonryBackground />
      }
      headlineContent={'Our Journey in Research'}
      sublineContent="Passing peer review is never easy. We're proud to publish meaningful work in high-impact journals."
    />
  )
}
