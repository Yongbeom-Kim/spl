import { FullScreenHeroSection } from '@/components/full-screen-hero/FullScreenHeroSection'
import heroCropped from '../assets/hero-cropped.webp'

export const AboutUsHeroSection = () => {
  return (
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
    />
  )
}
