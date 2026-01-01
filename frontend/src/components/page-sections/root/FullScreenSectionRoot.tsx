import type { ReactNode } from 'react'
import './styles.css'

export type FullScreenSectionRootProps = {
  children: ReactNode
  className?: string
  theme: 'light' | 'dark'
  backgroundColor?: string
}

export const FullScreenSectionRoot = ({
  children,
  className = '',
  theme,
  backgroundColor,
}: FullScreenSectionRootProps) => {
  const bgStyle = backgroundColor ? { backgroundColor } : {}
  const bgClass = !backgroundColor
    ? theme === 'dark'
      ? 'bg-neutral-900'
      : 'bg-neutral-0'
    : ''

  return (
    <div
      className={`section-root relative base-horizontal-padding base-vertical-padding screen-section-min ${bgClass} ${className}`}
      data-theme={theme}
      style={bgStyle}
    >
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  )
}
