import type { ReactNode } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionLiProps = {
  children: ReactNode
  className?: string
}

export const SectionLi = ({ children, className = '' }: SectionLiProps) => {
  const variant = useSectionVariant()
  return (
    <li
      className={classNames(
        'mb-2 before:content-["•"] before:align-[-2px] before:mr-4 before:text-neutral-500 before:font-bold before:text-[1.2rem]',
        {
          'before:text-neutral-800': variant === 'light',
          'before:text-neutral-300': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </li>
  )
}
