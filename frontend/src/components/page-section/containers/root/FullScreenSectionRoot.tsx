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
          'text-lg relative base-horizontal-padding base-vertical-padding bg-transparent',
          {
            'max-w-5xl mx-auto': width === 'narrow',
            'fullscreen-section-min': height === 'min-fullscreen',
            'h-fit': height === 'fit-content',
          },
          className,
        )}
        data-theme={variant}
      >
        <div
          className={classNames(
            'absolute top-0 h-full w-screen left-1/2 -translate-x-1/2 -z-10',
            {
              'bg-neutral-900': !backgroundColor && variant === 'dark',
              'bg-neutral-0': !backgroundColor && variant === 'light',
            },
          )}
          style={backgroundColor ? { backgroundColor } : {}}
        ></div>
        {children}
      </div>
    </Section.VariantContext>
  )
}
