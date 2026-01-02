import type { ReactNode } from 'react'
import './Section.css'
import classNames from 'classnames'

export type FullScreenSectionRootProps = {
  children: ReactNode
  className?: string
  theme: 'light' | 'dark'
  backgroundColor?: string
  width: 'narrow' | 'wide'
  height: 'min-fullscreen' | 'fit-content'
}

export const FullScreenSectionRoot = ({
  children,
  className = '',
  theme,
  backgroundColor,
  width,
  height,
}: FullScreenSectionRootProps) => {
  return (
    <div
      className={classNames(
        'section-root relative base-horizontal-padding base-vertical-padding',
        {
          'bg-neutral-900': !backgroundColor && theme === 'dark',
          'bg-neutral-0': !backgroundColor && theme === 'light',
          'max-w-2xl mx-auto': width === 'narrow',
          'fullscreen-section-min': height === 'min-fullscreen',
          'h-fit': height === 'fit-content',
        },
        className,
      )}
      data-theme={theme}
      style={backgroundColor ? { backgroundColor } : {}}
    >
      {children}
    </div>
  )
}
