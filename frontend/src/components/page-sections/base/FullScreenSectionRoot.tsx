import type { ReactNode } from 'react'

export type FullScreenSectionRootProps = {
  children: ReactNode
  className?: string
}

export const FullScreenSectionRoot = ({
  children,
  className = '',
}: FullScreenSectionRootProps) => {
  return (
    <div
      className={`section-root relative base-horizontal-padding base-vertical-padding screen-section-min bg-neutral-0 ${className}`}
    >
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  )
}
