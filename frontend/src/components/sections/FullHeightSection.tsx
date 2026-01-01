import { type ReactNode } from 'react'

type FullHeightSectionProps = {
  id?: string
  eyebrow?: ReactNode
  heading?: ReactNode
  backgroundElement?: ReactNode
  align?: 'left' | 'right'
  children: ReactNode
}

/**
 * A shared shell for full-height content sections so each page can render
 * stacked, readable layouts underneath the existing hero.
 */
export const FullHeightSection = ({
  id,
  eyebrow,
  heading,
  backgroundElement,
  align = 'left',
  children,
}: FullHeightSectionProps) => {
  const content = (
    <div className="flex flex-col gap-4 text-neutral-100">
      {eyebrow && <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">{eyebrow}</p>}
      {heading && <h2 className="text-3xl sm:text-4xl font-semibold text-white">{heading}</h2>}
      <div className="text-lg leading-relaxed text-neutral-200">{children}</div>
    </div>
  )

  return (
    <section
      id={id}
      className="relative isolate min-h-screen w-full bg-neutral-900 px-6 py-16 sm:py-20 lg:py-24"
    >
      {backgroundElement ? (
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
          {backgroundElement}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/80 to-neutral-900" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />
      )}

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center gap-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {align === 'right' ? (
            <>
              <div className="order-2 lg:order-1" />
              <div className="order-1 lg:order-2">{content}</div>
            </>
          ) : (
            <>
              <div className="order-2 lg:order-2" />
              <div className="order-1 lg:order-1">{content}</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
