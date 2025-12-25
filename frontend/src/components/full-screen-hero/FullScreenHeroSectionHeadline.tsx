import { DivPropsWithoutChild } from "@/types/props"

type FullScreenHeroSectionHeadlineProps = {
  headlineContent: string
} & DivPropsWithoutChild

export const FullScreenHeroSectionHeadline = ({headlineContent, ...divProps}: FullScreenHeroSectionHeadlineProps) => {
  return (
    <div
      {...divProps}
      className={`
      bg-[linear-gradient(color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_10%,color-mix(in_srgb,var(--color-neutral-900)_70%,transparent))]
      flex
      ${divProps.className}`}
    >
      <div
        className="
        mt-auto mb-4 lg:mb-20 w-full px-[5%] lg:px[10%]
        text-neutral-0 font-family-main font-bold text-4xl lg:text-6xl"
        // TODO: disable after we settle on a tagline
        contentEditable={true}
      >
        {headlineContent}
      </div>
    </div>
  )
}