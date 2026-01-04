import classNames from 'classnames'
import { SectionVariantContext } from '../../context/VariantContext'
import type { SectionVariant } from '../../types'
import type { ReactNode } from 'react'

export type CardProps = {
  children: ReactNode
  className?: string
  variant: SectionVariant
  shadow?: boolean
  background?: string
}

export const Card = ({
  children,
  className = '',
  variant,
  shadow = false,
  background,
}: CardProps) => {
  return (
    <SectionVariantContext variant={variant}>
      <div
        className={classNames(
          'card',
          variant,
          {
            shadow: shadow,
            'bg-neutral-100': !background && variant === 'light',
            'bg-neutral-900': !background && variant === 'dark',
          },
          className,
        )}
        data-theme={variant}
        style={{
          background: background,
        }}
      >
        {children}
      </div>
    </SectionVariantContext>
  )
}
