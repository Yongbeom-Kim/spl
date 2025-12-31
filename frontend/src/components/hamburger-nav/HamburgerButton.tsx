import classNames from 'classnames'
import { useAtom } from 'jotai'
import { isNavOverlayVisibleAtom } from './is-nav-overlay-visible-atom'

export type HamburgerButtonProps = {
  variant: 'dark' | 'light'
}

export const HamburgerButton = ({ variant }: HamburgerButtonProps) => {
  const [isNavOpen, setNavOpen] = useAtom(isNavOverlayVisibleAtom)

  const handleHamburgerClick = () => {
    setNavOpen((isNavOpen) => !isNavOpen)
  }

  // After rotating, the top and bottom form a right-angle triangle like the folows:
  // |\ (13px)
  // |/ (13px)
  // Hypotenuse of triangle = 26px/sqrt(2)
  // Each line has to shift 26px/sqrt(2)/2 = 9.192388px
  return (
    <button
      onClick={handleHamburgerClick}
      className={classNames(
        ` transform
				flex flex-col gap-[6px]
				cursor-pointer hover:scale-clickable-hover active:scale-clickable-active focus-visible:scale-clickable-focus transition-all ease-in-out
				*:h-[3px] *:w-[26px] *:rounded-full`,
        {
          '*:bg-neutral-0': variant === 'light',
          '*:bg-neutral-900': variant === 'dark',
        },
      )}
      aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isNavOpen}
      aria-controls="nav-overlay"
    >
      <div
        className={classNames('transition-all ease-in-out', {
          'rotate-45 translate-y-[9.192px]': isNavOpen,
        })}
      ></div>
      <div
        className={classNames({
          invisible: isNavOpen,
          'transition-all ease-in-out': !isNavOpen,
        })}
      ></div>
      <div
        className={classNames('transition-all ease-in-out', {
          '-rotate-45 translate-y-[-9.192px]': isNavOpen,
        })}
      ></div>
    </button>
  )
}
