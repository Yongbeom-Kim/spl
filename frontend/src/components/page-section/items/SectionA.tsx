import type { ReactNode, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'
import { useSectionVariant } from '../context/VariantContext'

export type SectionAProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  className?: string
}

export const SectionA = ({
  children,
  className = '',
  ...anchorProps
}: SectionAProps) => {
  const variant = useSectionVariant()

  return (
    <a
      className={classNames(
        'underline underline-offset-[0.25em] transition-[color,text-decoration-color] duration-200 ease-in-out cursor-pointer',
        {
          'text-accent-blue-600 hover:decoration-accent-blue-500 hover:text-accent-blue-700 active:decoration-accent-blue-400 active:text-accent-blue-800 focus:outline-2 focus:outline-accent-blue-400 focus:outline-offset-2 focus:rounded-sm visited:text-accent-blue-700':
            variant === 'light',
          'text-accent-blue-200 hover:decoration-accent-blue-100 hover:text-accent-blue-100 active:decoration-accent-blue-50 active:text-accent-blue-50 focus:outline-2 focus:outline-accent-blue-100 focus:outline-offset-2 focus:rounded-sm visited:text-accent-blue-300':
            variant === 'dark',
        },
        className,
      )}
      {...anchorProps}
    >
      {children}
    </a>
  )
}
