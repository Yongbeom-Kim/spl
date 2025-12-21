import { useState } from 'react'
import classNames from 'classnames'

type HamburgerButtonProps = {
  onOpen: () => void
  onClose: () => void
}
export const HamburgerButton = ({ onOpen, onClose }: HamburgerButtonProps) => {
  const [isOpen, setOpen] = useState(false)

  const handleHamburgerClick = () => {
    setOpen((isOpen) => {
      if (isOpen) {
        onClose()
      } else {
        onOpen()
      }
      return !isOpen
    })
  }

  // After rotating, the top and bottom form a right-angle triangle like the folows:
  // |\ (13px)
  // |/ (13px)
  // Hypotenuse of traingle = 26px/sqrt(2)
  // Each line has to shift 26px/sqrt(2)/2 = 9.192388px
  return (
    <button
      onClick={handleHamburgerClick}
      className="
				flex flex-col gap-[6px]
				cursor-pointer hover:scale-115 active:scale-90 transition-all ease-in-out
				*:h-[3px] *:w-[26px] *:bg-neutral-0 *:rounded-full"
    >
      <div
        className={classNames('transition-all ease-in-out', {
          'rotate-45 translate-y-[9.192px]': isOpen,
        })}
      ></div>
      <div
        className={classNames({
          'invisible': isOpen,
          'transition-all ease-in-out': !isOpen,
        })}
      ></div>
      <div
        className={classNames('transition-all ease-in-out', {
          '-rotate-45 translate-y-[-9.192px]': isOpen,
        })}
      ></div>
    </button>
  )
}
