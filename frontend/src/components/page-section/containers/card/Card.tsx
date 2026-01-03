import type { ReactNode } from 'react'
import classNames from 'classnames'
import { SectionVariant } from '../../types'
import { SectionVariantContext } from '../../context/VariantContext'

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
