import type { ReactNode } from 'react'
import classNames from 'classnames'
import { Section } from '../..'

export type FullScreenSectionRootProps = {
  children: ReactNode
  className?: string
  variant: 'light' | 'dark'
  backgroundColor?: string
  width: 'narrow' | 'wide'
  height: 'min-fullscreen' | 'fit-content'
}

export const FullScreenSectionRoot = ({
  children,
  className = '',
  variant,
  backgroundColor,
  width,
  height,
}: FullScreenSectionRootProps) => {
  return (
    <Section.VariantContext variant={variant}>
      <div
        className={classNames(
          'text-lg relative base-horizontal-padding base-vertical-padding',
          {
            'bg-neutral-900': !backgroundColor && variant === 'dark',
            'bg-neutral-0': !backgroundColor && variant === 'light',
            'max-w-2xl mx-auto': width === 'narrow',
            'fullscreen-section-min': height === 'min-fullscreen',
            'h-fit': height === 'fit-content',
          },
          className,
        )}
        data-theme={variant}
        style={backgroundColor ? { backgroundColor } : {}}
      >
        {children}
      </div>
    </Section.VariantContext>
  )
}
