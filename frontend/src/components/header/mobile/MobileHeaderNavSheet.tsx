import { useAtom } from 'jotai'
import { isMobileHamburgerOpenStateAtom } from './mobileHamburgerState'
import { Link } from '@tanstack/react-router'
import classNames from 'classnames'
import { headerNavRoutes } from '@/util/const'

export const MobileHeaderNavSheet = () => {
  const [isOpen, setIsOpen] = useAtom(isMobileHamburgerOpenStateAtom)
  const homeRoute = { name: 'Home', path: '/' }
  return (
    <div
      className={classNames(
        'fixed h-full w-full bg-neutral-0 grid place-items-center transition-opacity ease-in z-40',
        {
          'opacity-0 pointer-events-none': !isOpen,
          'opacity-100': isOpen,
        },
      )}
    >
      <div className="flex flex-col gap-8 items-center">
        {[homeRoute, ...headerNavRoutes].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-2xl font-semibold capitalize tracking-[1.2px] text-neutral-900 hover:opacity-70 transition-opacity font-main"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
