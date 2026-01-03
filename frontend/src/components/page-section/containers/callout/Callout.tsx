import type { ReactNode } from 'react'
import { SectionVariantContext, useSectionVariant } from '../../context/VariantContext'
import { SectionVariant } from '../../types'

export type CalloutVariant = 'blue' | 'red' | 'neutral'

export type CalloutProps = {
  children: ReactNode
  className?: string
  variant: CalloutVariant
  sectionVariant?: SectionVariant | 'inherit'
}

const VARIANT_STYLES: Record<CalloutVariant, string> = {
  blue: 'border-l-4 border-accent-blue-500 bg-accent-blue-500/10 dark:bg-accent-blue-400/10',
  red: 'border-l-4 border-accent-red-500 bg-accent-red-500/10 dark:bg-accent-red-400/15',
  neutral:
    'border-l-4 border-neutral-300 bg-neutral-500/5 dark:bg-neutral-200/5',
}

export const Callout = ({
  children,
  className = '',
  variant,
  sectionVariant = 'inherit',
}: CalloutProps) => {
  const parentSectionVariant = useSectionVariant()
  return (
    <SectionVariantContext variant={sectionVariant !== 'inherit' ? sectionVariant : parentSectionVariant}>
      <div
        className={`${VARIANT_STYLES[variant]} p-4 my-6 rounded-md ${className}`}
      >
        {children}
      </div>
    </SectionVariantContext>
  )
}
