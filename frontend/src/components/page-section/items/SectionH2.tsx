import type { ReactNode } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionH2Props = {
  children: ReactNode
  className?: string
}

export const SectionH2 = ({ children, className = '' }: SectionH2Props) => {
  const variant = useSectionVariant()
  return (
    <h2
      className={classNames(
        'text-4xl leading-(--text-4xl--line-height) mb-6',
        {
          'text-neutral-900': variant === 'light',
          'text-neutral-50': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </h2>
  )
}
