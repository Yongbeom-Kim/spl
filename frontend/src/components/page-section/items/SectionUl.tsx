import type { ReactNode } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionUlProps = {
  children: ReactNode
  className?: string
}

export const SectionUl = ({ children, className = '' }: SectionUlProps) => {
  const variant = useSectionVariant()
  return (
    <ul
      className={classNames(
        'leading-[1.2] list-none -indent-6 pl-6 mb-2',
        {
          'text-neutral-800': variant === 'light',
          'text-neutral-100': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </ul>
  )
}
