import type { ReactNode } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionH4Props = {
  children: ReactNode
  className?: string
}

export const SectionH4 = ({ children, className = '' }: SectionH4Props) => {
  const variant = useSectionVariant()
  return (
    <h4
      className={classNames(
        'text-lg font-semibold mt-6 mb-3',
        {
          'text-neutral-800': variant === 'light',
          'text-neutral-100': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </h4>
  )
}
