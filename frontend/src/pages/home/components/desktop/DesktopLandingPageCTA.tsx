import { ChevronDown } from 'lucide-react'
import { atom, useAtom, useAtomValue } from 'jotai'
import classNames from 'classnames'
import { Link, useSearch } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

const isDestopLandingCTASectionOpenAtom = atom(false)

type DesktopLandingPageCTAButtonProps = {} & Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'children'
>

export const DesktopLandingPageCTAButton = (
  buttonProps: DesktopLandingPageCTAButtonProps,
) => {
  const [isCTAOpen, setCTAOpen] = useAtom(isDestopLandingCTASectionOpenAtom)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHover, setHover] = useState(false)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseEnter = () => setHover(true)
    const handleMouseLeave = () => setHover(false)

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [buttonRef])

  return (
    <button
      {...buttonProps}
      aria-expanded={isCTAOpen}
      onClick={() => setCTAOpen((open) => !open)}
      ref={buttonRef}
      /*
      Underline
        after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full
        after:bg-[linear-gradient(90deg,var(--color-accent-red-900)_30%,var(--color-neutral-900)_110%)]
        after:bg-size-[200%_100%] after:bg-right hover:after:bg-left
         */
      className={`
        flex flex-row gap-4 items-center h-fit
        text-5xl font-bold cursor-pointer
        relative

        bg-[linear-gradient(90deg,var(--color-accent-red-900)_30%,var(--color-neutral-900)_110%)]
        bg-size-[200%_100%] bg-right bg-clip-text text-transparent

        hover:bg-left 
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:translate-x-[10px]
  ${buttonProps.className}`}
    >
      Explore Our Work
      <ChevronDown
        strokeWidth={4}
        className={classNames(
          'transition-all ease-in-out duration-300',
          'scale-150',
          {
            'rotate-0': !isCTAOpen,
            'rotate-180': isCTAOpen,
            'text-neutral-900': !isHover,
            'text-accent-red-900': isHover,
          },
        )}
      />
    </button>
  )
}

type DesktopLandingPageCTASectionProps = {} & Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const DesktopLandingPageCTASection = (
  divProps: DesktopLandingPageCTASectionProps,
) => {
  const isOpen = useAtomValue(isDestopLandingCTASectionOpenAtom)

  return (
    <div
      {...divProps}
      className={classNames(
        'bg-neutral-200',
        'flex flex-col items-right justify-center gap-4',
        'text-neutral-900 text-3xl font-semibold',
        '*:hover:text-accent-red-900 *:hover:scale-105 *:transition-all *:ease-in-out',
        {
          'max-h-[1000px] opacity-100': isOpen,
          // translate-x-9999 because the links can still be clicked when closed.
          // translate still keeps them accessible to screenreaders.
          'max-h-0 opacity-0 translate-x-9999': !isOpen,
        },
        divProps.className,
      )}
    >
      <Link to="/">About Us</Link>
      <Link to="/">People</Link>
      <Link to="/">News</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Join Us!</Link>
    </div>
  )
}
