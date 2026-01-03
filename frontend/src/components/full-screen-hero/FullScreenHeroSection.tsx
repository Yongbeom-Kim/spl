import { FullScreenHeroSectionHeadline } from './FullScreenHeroSectionHeadline'
import type { ReactNode } from 'react'
import type { DivPropsWithoutChild } from '@/types/props'

type FullScreenHeroSectionProps = {
  backgroundElement: ReactNode
  headlineContent: string
  sublineContent?: string
} & DivPropsWithoutChild

export const FullScreenHeroSection = ({
  backgroundElement,
  headlineContent,
  sublineContent,
  ...divProps
}: FullScreenHeroSectionProps) => {
  return (
    <div
      {...divProps}
      style={{
        ...divProps.style,
      }}
      className={`
        relative
        fullscreen-section
        flex flex-col justify-start items-center
        ${divProps.className}`}
    >
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        {backgroundElement}
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            color-mix(in srgb, var(--color-neutral-900) 70%, transparent) 5%,
            color-mix(in srgb, var(--color-neutral-900) 0%, transparent) 25%,
          )`,
        }}
      />

      <div className="relative z-20 w-full h-full flex flex-col justify-start items-center">
        <FullScreenHeroSectionHeadline
          className="absolute bottom-0 w-full"
          headlineContent={headlineContent}
          sublineContent={sublineContent}
        />
      </div>
    </div>
  )
}
