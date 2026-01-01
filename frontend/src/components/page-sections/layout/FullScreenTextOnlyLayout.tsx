import { FullScreenSectionRoot } from '../base/FullScreenSectionRoot'
import type { ReactNode } from 'react'
import './styles.css'
import classNames from 'classnames'

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
