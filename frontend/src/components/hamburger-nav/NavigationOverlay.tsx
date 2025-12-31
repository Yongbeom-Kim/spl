import classNames from 'classnames'
import { Dialog } from '@base-ui/react/dialog'
import { PageHeader } from '../../page-header/PageHeader'
import { WarmCenteredGlowBg } from '../background/WarmCenteredGlowBg'
import { Link } from '@tanstack/react-router'
import { useAtom, useAtomValue } from 'jotai'
import { navOverlayDialogHandle, navOverlayAtom } from './nav-overlay-state'
import { useRef } from 'react'
import { useTrapModalFocusForceOrder } from '@/hooks/use-trap-modal-focus'

type NavigationOverlayLinksProps = {
  className?: string
}

const NavigationOverlayLinks = ({ className }: NavigationOverlayLinksProps) => {
  const [, setNavOverlayState] = useAtom(navOverlayAtom)

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
      <Link onClick={() => setNavOverlayState({ open: false })} to="/aboutus">
        About Us
      </Link>
      <Link onClick={() => setNavOverlayState({ open: false })} to="/people">
        People
      </Link>
      <Link onClick={() => setNavOverlayState({ open: false })} to="/projects">
        Projects
      </Link>
      <Link
        onClick={() => setNavOverlayState({ open: false })}
        to="/publications"
      >
        Publications
      </Link>
      <Link onClick={() => setNavOverlayState({ open: false })} to="/partners">
        Partners
      </Link>
      <Link onClick={() => setNavOverlayState({ open: false })} to="/news">
        News
      </Link>
      <Link onClick={() => setNavOverlayState({ open: false })} to="/contactus">
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
  const navOverlayState = useAtomValue(navOverlayAtom)
  const [, setNavOverlayState] = useAtom(navOverlayAtom)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  // Why the Base UI focus trapping does not work, I will never know.
  useTrapModalFocusForceOrder({
    modalRef: overlayRef,
    requestModalCloseCallback: () => setNavOverlayState({ open: false }),
    escapeClosesModal: false, // Defer to Base UI for escape handling
    isActive: navOverlayState.isOverlayOpen,
  })

  return (
    <Dialog.Root
      handle={navOverlayDialogHandle}
      open={navOverlayState.isOverlayOpen}
      onOpenChange={(open) => {
          setNavOverlayState({ open })
      }}
    >
      <Dialog.Portal>
        <Dialog.Popup
          ref={overlayRef}
          className={classNames(
            `
            absolute top-0 left-0 w-full h-full
            transition-all ease-in duration-300
            bg-neutral-200
            z-30
          `,
            {
              'opacity-0 pointer-events-none':
                !navOverlayState.isOverlayVisible,
              'opacity-100': navOverlayState.isOverlayVisible,
            },
          )}
          id="nav-overlay"
          aria-label="Site navigation"
        >
          <WarmCenteredGlowBg />
          <PageHeader
            bg="none"
            header="dark"
            hamburger="dark"
            headerLinksToHomePage={headerLinksToHomePage}
          />
          <NavigationOverlayLinks className="absolute top-1/2 lg:top-5/11 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
