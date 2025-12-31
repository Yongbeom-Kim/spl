import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import classNames from 'classnames'
import { useAtom, useSetAtom } from 'jotai'
import { PageHeader } from '../../page-header/PageHeader'
import { WarmCenteredGlowBg } from '../background/WarmCenteredGlowBg'
import { VisuallyHidden } from '../ui/VisuallyHidden'
import { isNavOverlayVisibleAtom } from './is-nav-overlay-visible-atom'
import { useTrapModalFocusForceOrder } from '@/hooks/use-trap-modal-focus'
import { useListKeyboardNavigation } from '@/hooks/use-list-keyboard-navigation'

type NavigationOverlayLinksProps = {
  className?: string
}

const NavigationOverlayLinks = ({ className }: NavigationOverlayLinksProps) => {
  const setNavVisible = useSetAtom(isNavOverlayVisibleAtom)
  const [isNavOpen] = useAtom(isNavOverlayVisibleAtom)
  const navRef = useRef<HTMLElement>(null)

  const getFocusableElements = () => {
    if (!navRef.current) return []
    return Array.from(navRef.current.querySelectorAll('a'))
  }

  useListKeyboardNavigation({
    enabled: isNavOpen,
    handleArrowKeys: true,
    handleHomeKey: true,
    handleEndKey: true,
    getFocusableElements,
  })

  const handleLinkClick = () => {
    setNavVisible(false)
  }

  return (
    <nav
      ref={navRef}
      className={`
      flex flex-col items-center justify-center
      gap-8 lg:gap-12
      text-3xl lg:text-4xl font-bold font-main
      *:hover:scale-clickable-hover *:active:scale-clickable-active *:focus-visible:scale-clickable-focus *:focus:scale-clickable-focus
      *:transition-all *:ease-in-out
      ${className}`}
      aria-label="Main navigation"
    >
      <VisuallyHidden>
        <h2>Main Navigation</h2>
      </VisuallyHidden>
      <Link onClick={handleLinkClick} to="/aboutus">
        About Us
      </Link>
      <Link onClick={handleLinkClick} to="/people">
        People
      </Link>
      <Link onClick={handleLinkClick} to="/projects">
        Projects
      </Link>
      <Link onClick={handleLinkClick} to="/publications">
        Publications
      </Link>
      <Link onClick={handleLinkClick} to="/partners">
        Partners
      </Link>
      <Link onClick={handleLinkClick} to="/news">
        News
      </Link>
      <Link onClick={handleLinkClick} to="/contactus">
        Contact Us
      </Link>
    </nav>
  )
}

type NavigationOverlayProps = {
  headerLinksToHomePage: boolean
}

export const NavigationOverlay = ({
  headerLinksToHomePage,
}: NavigationOverlayProps) => {
  const [isNavOpen, setNavOpen] = useAtom(isNavOverlayVisibleAtom)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  useTrapModalFocusForceOrder({
    modalRef: overlayRef,
    requestModalCloseCallback: () => setNavOpen(false),
    escapeClosesModal: true,
    isActive: isNavOpen,
  })

  return (
    <>
      <VisuallyHidden>
        <div role="status" aria-live="polite" aria-atomic="true">
          {isNavOpen ? 'Navigation menu opened' : 'Navigation menu closed'}
        </div>
      </VisuallyHidden>
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
        <PageHeader
          bg="none"
          header="dark"
          hamburger="dark"
          headerLinksToHomePage={headerLinksToHomePage}
        />
        <NavigationOverlayLinks className="absolute top-1/2 lg:top-5/11 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  )
}
