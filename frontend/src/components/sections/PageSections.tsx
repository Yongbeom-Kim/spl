import { type ReactNode } from 'react'
import { FullHeightSection } from './FullHeightSection'

export type PageSection = {
  id?: string
  eyebrow?: ReactNode
  heading: ReactNode
  copy: ReactNode
  align?: 'left' | 'right'
  backgroundElement?: ReactNode
}

type PageSectionsProps = {
  sections: PageSection[]
}

/**
 * Renders a sequence of full-height sections so each page can display
 * structured body content below the hero without duplicating layout code.
 */
export const PageSections = ({ sections }: PageSectionsProps) => {
  return (
    <div>
      {sections.map((section) => (
        <FullHeightSection
          key={section.id ?? String(section.heading)}
          id={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
          backgroundElement={section.backgroundElement}
          align={section.align}
        >
          {section.copy}
        </FullHeightSection>
      ))}
    </div>
  )
}
