import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'
import type { ReactNode } from 'react'

export type SectionRootProps = {
  children: ReactNode
  className?: string
}

export const SectionRoot = ({ children, className = '' }: SectionRootProps) => {
  const variant = useSectionVariant()
  return (
    <div className={classNames('text-lg', className)} data-theme={variant}>
      {children}
    </div>
  )
}
