import classNames from 'classnames'
import { FullScreenSectionRoot } from '../root/FullScreenSectionRoot'
import type { ReactNode } from 'react'

export type FullScreenTextOnlyLayoutProps = {
  children: ReactNode
  header: string
  align_header: 'left' | 'center'
  className?: string
}

export const FullScreenTextOnlyLayout = ({
  children,
  header,
  align_header,
  className = '',
}: FullScreenTextOnlyLayoutProps) => {
  return (
    <FullScreenSectionRoot className={`${className} text-neutral-800`}>
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
