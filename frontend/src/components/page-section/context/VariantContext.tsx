import { createContext, useContext } from 'react'
import type { ReactNode} from 'react';
import type { SectionVariant } from '../types'

const sectionVariantContext = createContext<SectionVariant>('light')

export const useSectionVariant = () => {
  return useContext(sectionVariantContext)
}

export type SectionVariantContextProps = {
  children: ReactNode
  variant: SectionVariant
}

export const SectionVariantContext = ({
  children,
  variant,
}: SectionVariantContextProps) => {
  return (
    <sectionVariantContext.Provider value={variant}>
      {children}
    </sectionVariantContext.Provider>
  )
}
