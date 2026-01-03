import type { ReactNode } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionPProps = {
  children: ReactNode
  className?: string
}

export const SectionP = ({
  children,
  className = '',
}: SectionPProps) => {
	const variant = useSectionVariant()
  return (
    <p
      className={classNames(
        'leading-[1.6] mb-4',
        {
          'text-neutral-800': variant === 'light',
          'text-neutral-100': variant === 'dark',
        },
        className,
      )}
    >
      {children}
    </p>
  )
}

