import type { ReactNode } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionH3Props = {
  children: ReactNode
  className?: string
}

export const SectionH3 = ({ children, className = '' }: SectionH3Props) => {
  const variant = useSectionVariant()
  return (
    <h3
      className={classNames(
        'text-2xl font-semibold mt-8 mb-4',
        {
          'text-neutral-900': variant === 'light',
          'text-neutral-100': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </h3>
  )
}
