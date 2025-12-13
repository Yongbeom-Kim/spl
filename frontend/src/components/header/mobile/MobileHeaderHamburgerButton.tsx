import classnames from 'classnames'
import { useAtom } from 'jotai'
import { isMobileHamburgerOpenStateAtom } from './mobileHamburgerState'

export const MobileHeaderHamburgerButton = () => {
  const [isOpen, setIsOpen] = useAtom(isMobileHamburgerOpenStateAtom)

  /*
   * Container = 12x12
   * Closed = 6(h) x 8(w) (hamburger)
   *
   * After rotation, we want to make them cross in the middle.
   *
   * Lines center point have distance 0.5 + 1.5 + 1 + 1.5 + 0.5 = 5 (tailwind spacing)
   * They need to shift down/up by 2.5 each.
   *
   */

  return (
    <button
      className="absolute right-2 top-2 h-12 w-12 flex flex-col gap-1.5 items-center justify-center"
      aria-label={isOpen ? "Open navigation menu" : "Close navigation menu"}
      onClick={() => (console.log(isOpen), setIsOpen((open) => !open))}
    >
      <div
        className={classnames(
          'w-8 h-1 bg-neutral-900 rounded-full transition-all ease-in-out',
          {
            'translate-y-2.5 rotate-45': isOpen,
          },
        )}
      ></div>
      <div
        className={classnames('w-8 h-1 bg-neutral-900 rounded-full', {
          invisible: isOpen,
          'transition-all ease-in-out': !isOpen,
        })}
      ></div>
      <div
        className={classnames(
          'w-8 h-1 bg-neutral-900 rounded-full transition-all ease-in-out',
          {
            '-translate-y-2.5 -rotate-45': isOpen,
          },
        )}
      ></div>
    </button>
  )
}
