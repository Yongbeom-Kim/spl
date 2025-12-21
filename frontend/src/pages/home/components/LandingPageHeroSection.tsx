import { DivPropsWithoutChild } from '@/types/props'
import { LandingPageHeader } from './LandingPageHeader'
import { LandingPageHeroTagline } from './LandingPageHeroTagline'

type LandingPageHeroSectionProps = DivPropsWithoutChild

export const LandingPageHeroSection = (
  props: LandingPageHeroSectionProps,
) => {
  return (
    <div
      {...props}
      className={`
        w-screen h-svh
        flex flex-col justify-start items-center
        bg-[linear-gradient(color-mix(in_srgb,var(--color-neutral-900)_70%,transparent)_5%,color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_25%,color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_60%,color-mix(in_srgb,var(--color-neutral-900)_70%,transparent)_90%),url('/landing-hero-cropped.webp')] bg-cover bg-center
        overflow-hidden
        ${props.className}`}
    >
      <LandingPageHeader bg='dark-gradient' header='light' hamburger='light' />
      <LandingPageHeroTagline className="absolute h-1/4 bottom-0 w-full" />
    </div>
  )
}
