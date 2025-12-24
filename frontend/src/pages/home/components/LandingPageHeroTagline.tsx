import { DivPropsWithoutChild } from "@/types/props"

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
        text-neutral-0 font-family-main font-bold text-3xl lg:text-6xl"
        // TODO: disable after we settle on a tagline
        contentEditable={true}
      >
        We are a group empowering learning for everyone.
      </div>
    </div>
  )
}