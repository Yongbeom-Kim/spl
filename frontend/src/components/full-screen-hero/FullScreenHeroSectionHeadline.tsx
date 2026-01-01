import type { DivPropsWithoutChild } from '@/types/props'
import { generateLinearOpacityGradientWithStepFn } from '@/util'

type FullScreenHeroSectionHeadlineProps = {
  headlineContent: string
  sublineContent?: string
} & DivPropsWithoutChild

export const FullScreenHeroSectionHeadline = ({
  headlineContent,
  sublineContent,
  ...divProps
}: FullScreenHeroSectionHeadlineProps) => {
  return (
    <div
      {...divProps}
      className={`
      flex flex-col gap-4 lg:gap-6
      pb-4 lg:pb-20 
      pt-10 lg:pt-15
      base-horizontal-padding
      ${divProps.className}`}
      style={{
        background: `${generateLinearOpacityGradientWithStepFn(
          'var(--color-neutral-900)',
          30,
          (x) => {
            const t = 0.3
            const p = 0.22
            const a = (2 - p) * Math.pow(t, p - 1)
            const b = (p - 1) * Math.pow(t, p - 2)

            x = Math.min(1, Math.max(0, x))
            return x <= t ? a * x + b * x * x : Math.pow(x, p)
          },
        )}`,
      }}
    >
      <div
        className="
        mt-auto w-full
        text-neutral-0 font-family-main font-bold text-4xl lg:text-6xl"
        // TODO: disable after we settle on a tagline
        contentEditable={true}
      >
        {headlineContent}
      </div>
      {sublineContent && (
        <div
          className="
          w-full
          text-neutral-100 font-family-main font-semibold text-lg lg:text-3xl"
        >
          {sublineContent}
        </div>
      )}
    </div>
  )
}
