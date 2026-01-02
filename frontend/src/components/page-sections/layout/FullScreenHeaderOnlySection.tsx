import classNames from 'classnames'
import { FullScreenSectionRoot } from '../root/FullScreenSectionRoot'
import type { ReactNode } from 'react'

export type FullScreenHeaderOnlySection = {
  children: ReactNode
  header: string
  align_header: 'left' | 'center'
  className?: string
  theme: 'light' | 'dark'
  backgroundColor?: string
}

export const FullScreenHeaderOnlySection = ({
  children,
  header,
  align_header,
  className = '',
  theme,
  backgroundColor,
}: FullScreenHeaderOnlySection) => {
  const textColorClass =
    theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'

  return (
    <FullScreenSectionRoot
      className={`${className} ${textColorClass}`}
      theme={theme}
      backgroundColor={backgroundColor}
    >
      <h2
        className={classNames({
          'h-full text-center': align_header === 'center',
          '': align_header === 'left',
        })}
      >
        {header}
      </h2>
      {children}
    </FullScreenSectionRoot>
  )
}
