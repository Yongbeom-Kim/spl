import { Callout } from './containers/callout/Callout'
import { SectionVariantContext } from './context/VariantContext'
import {
  SectionA,
  SectionH2,
  SectionH3,
  SectionH4,
  SectionLi,
  SectionP,
  SectionRoot,
  SectionStrong,
  SectionUl,
} from './items'

export type {
  SectionH2Props,
  SectionH3Props,
  SectionH4Props,
  SectionPProps,
  SectionUlProps,
  SectionLiProps,
  SectionStrongProps,
  SectionAProps,
  SectionRootProps,
} from './items'

export const Section = {
  H2: SectionH2,
  H3: SectionH3,
  H4: SectionH4,
  P: SectionP,
  Ul: SectionUl,
  Li: SectionLi,
  Strong: SectionStrong,
  A: SectionA,
  Root: SectionRoot,
  VariantContext: SectionVariantContext,
  Callout: Callout,
}

export { useSectionVariant } from './context/VariantContext'
