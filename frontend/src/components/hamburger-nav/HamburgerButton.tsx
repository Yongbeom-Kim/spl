import classNames from 'classnames'
import { Dialog } from '@base-ui/react/dialog'
import { navOverlayAtom, navOverlayDialogHandle } from './nav-overlay-state'
import { useAtom } from 'jotai'

export type HamburgerButtonProps = {
  variant: 'dark' | 'light'
}

export const HamburgerButton = ({ variant }: HamburgerButtonProps) => {
  // After rotating, the top and bottom form a right-angle triangle like the folows:
  // |\ (13px)
  // |/ (13px)
  // Hypotenuse of triangle = 26px/sqrt(2)
  // Each line has to shift 26px/sqrt(2)/2 = 9.192388px
  const [{ isOverlayOpen }, setOverlayOpen] = useAtom(navOverlayAtom)

  const handleDialogTrigger = () => {
    setOverlayOpen({ open: !isOverlayOpen })
  }
  return (
    <Dialog.Trigger
      handle={navOverlayDialogHandle}
      onClick={handleDialogTrigger}
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
      aria-label="Open navigation menu"
    >
      <div
        className={classNames(
          "transition-all ease-in-out",
          {
            "rotate-45 translate-y-[9.192px]": isOverlayOpen,
          }
        )}
      ></div>
      <div
        className={classNames(
          {
            "invisible ": isOverlayOpen,
          }
        )}
      ></div>
      <div
        className={classNames(
          "transition-all ease-in-out",
          {
            "-rotate-45 translate-y-[-9.192px]": isOverlayOpen,
          }
        )}
      ></div>
    </Dialog.Trigger>
  )
}
