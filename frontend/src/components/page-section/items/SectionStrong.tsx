import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'
import type { ReactNode } from 'react'

export type SectionStrongProps = {
  children: ReactNode
  className?: string
}

export const SectionStrong = ({
  children,
  className = '',
}: SectionStrongProps) => {
  const variant = useSectionVariant()
  return (
    <strong
      className={classNames(
        'font-semibold',
        {
          'text-neutral-900': variant === 'light',
          'text-neutral-200': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </strong>
  )
}
