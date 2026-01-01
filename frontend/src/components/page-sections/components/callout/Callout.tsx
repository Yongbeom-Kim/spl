import type { ReactNode } from 'react'

export type CalloutVariant = 'blue' | 'red' | 'neutral'

export type CalloutProps = {
  children: ReactNode
  className?: string
  variant: CalloutVariant
}

const VARIANT_STYLES: Record<CalloutVariant, string> = {
  blue: 'bg-accent-blue-50 border-l-4 border-accent-blue-500',
  red: 'bg-accent-red-50 border-l-4 border-accent-red-500',
  neutral: 'bg-neutral-50 border-l-4 border-neutral-300',
}

export const Callout = ({
  children,
  className = '',
  variant,
}: CalloutProps) => {
  return (
    <div
      className={`${VARIANT_STYLES[variant]} p-4 my-6 rounded-md ${className}`}
    >
      {children}
    </div>
  )
}
