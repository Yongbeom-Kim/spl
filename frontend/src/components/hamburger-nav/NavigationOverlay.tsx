import classNames from 'classnames'
import { useAtom, useAtomValue } from 'jotai'
import { LandingPageHeader } from '../../pages/home/components/LandingPageHeader'
import { WarmCenteredGlowBg } from '../background/WarmCenteredGlowBg'
import { Link } from '@tanstack/react-router'
import { useIsLargeScreen } from '@/hooks/use-is-large-screen'
import { isNavOverlayVisibleAtom } from './is-nav-overlay-visible-atom'
import { useTrapModalFocusForceOrder } from '@/hooks/use-trap-modal-focus'
import { useRef } from 'react'

type NavigationOverlayLinksProps = {
  className?: string
}

const NavigationOverlayLinks = ({ className }: NavigationOverlayLinksProps) => {
  return (
    <nav
      className={`
      flex flex-col items-center justify-center
      gap-8 lg:gap-12
      text-3xl lg:text-4xl font-bold font-main
      *:hover:scale-clickable-hover *:active:scale-clickable-active *:focus-visible:scale-clickable-focus *:focus:scale-clickable-focus
      *:transition-all *:ease-in-out
      ${className}`}
    >
      <Link to="/aboutus">About Us</Link>
      <Link to="/people">People</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/news">News</Link>
      <Link to="/opportunities">Join Us!</Link>
    </nav>
  )
}

export const NavigationOverlay = () => {
  const [isNavOpen, setNavOpen] = useAtom(isNavOverlayVisibleAtom)
  const isLargeScreen = useIsLargeScreen()
  const overlayRef = useRef<HTMLDivElement | null>(null)
  useTrapModalFocusForceOrder({
    modalRef: overlayRef,
    requestModalCloseCallback: () => setNavOpen(false),
    escapeClosesModal: true,
    isActive: isNavOpen,
  })

  return (
    <div
      className={classNames(
        `
			fixed h-screen w-screen
			transition-all ease-in duration-300
      bg-neutral-200
      z-30
		`,
        {
          'opacity-0 pointer-events-none': !isNavOpen,
          'opacity-100': isNavOpen,
        },
      )}
      id="nav-overlay"
      aria-hidden={!isNavOpen}
      inert={!isNavOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      ref={overlayRef}
    >
      <WarmCenteredGlowBg />
      <LandingPageHeader
        bg="none"
        header={isLargeScreen ? 'none' : 'dark'}
        hamburger="dark"
      />
      <NavigationOverlayLinks className="absolute top-1/2 lg:top-3/7 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}
