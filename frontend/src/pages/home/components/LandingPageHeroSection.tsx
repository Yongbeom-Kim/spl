import { DivPropsWithoutChild } from '@/types/props'
import { LandingPageHeader } from './LandingPageHeader'

type LandingPageHeroTaglineProps = DivPropsWithoutChild

export const LandingPageHeroTagline = (props: LandingPageHeroTaglineProps) => {
  return (
    <div
      {...props}
      className={`
      bg-[linear-gradient(color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_10%,color-mix(in_srgb,var(--color-neutral-900)_70%,transparent))]
      flex
      ${props.className}`}
    >
      <div
        className="
        mt-auto mb-4 lg:mb-20 w-full px-[5%] lg:px[10%]
        text-neutral-0 font-family-sans-header font-bold text-3xl lg:text-6xl"
      >
        We are really cool people. We need a tagline here.
      </div>
    </div>
  )
}

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
      <LandingPageHeader className="w-full h-[128px]" />
      <LandingPageHeroTagline className="absolute h-1/4 bottom-0 w-full" />
    </div>
  )
}
