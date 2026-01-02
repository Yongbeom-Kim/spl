import type { ReactNode } from 'react'
import classNames from 'classnames'
import './Card.css'

export type CardVariant = 'light' | 'dark'

export type CardProps = {
  children: ReactNode
  className?: string
  variant: CardVariant
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
    <div
      className={classNames(
        'card',
        variant,
        { 'shadow': shadow,
          'bg-neutral-100': !background && variant === 'light',
          'bg-neutral-900': !background && variant === 'dark',
        },
        className
      )}
      data-theme={variant}
      style={{
        background: background
      }}
    >
      {children}
    </div>
  )
}
