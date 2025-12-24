import { DivPropsWithoutChild } from '@/types/props'
import { PageHeader } from '../../page-header/PageHeader'
import { FullScreenHeroSectionHeadline } from './FullScreenHeroSectionHeadline'
import { ReactNode } from 'react'

type FullScreenHeroSectionProps = {
  backgroundElement: ReactNode
  headlineContent: string
} & DivPropsWithoutChild

export const FullScreenHeroSection = (
  {backgroundElement, headlineContent, ...divProps}: FullScreenHeroSectionProps,
) => {
  
  return (
    <div
      {...divProps}
      style={{
        ...divProps.style,
      }}
      className={`
        relative
        w-screen h-svh
        flex flex-col justify-start items-center
        overflow-hidden
        ${divProps.className}`}
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        {backgroundElement}
      </div>
      
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            color-mix(in srgb, var(--color-neutral-900) 70%, transparent) 5%,
            color-mix(in srgb, var(--color-neutral-900) 0%, transparent) 25%,
            color-mix(in srgb, var(--color-neutral-900) 0%, transparent) 60%,
            color-mix(in srgb, var(--color-neutral-900) 70%, transparent) 90%
          )`,
        }}
      />
      
      <div className="relative z-20 w-full h-full flex flex-col justify-start items-center">
        <PageHeader bg='dark-gradient' header='light' hamburger='light' />
        <FullScreenHeroSectionHeadline className="absolute h-1/4 bottom-0 w-full" headlineContent={headlineContent}/>
      </div>
    </div>
  )
}
