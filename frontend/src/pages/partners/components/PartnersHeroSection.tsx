import { FullScreenHeroSection } from "@/components/full-screen-hero/FullScreenHeroSection"
import heroImage from '../assets/hero.jpg'

export const PartnersHeroSection = () => {
  return (
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
    />
  )
}
