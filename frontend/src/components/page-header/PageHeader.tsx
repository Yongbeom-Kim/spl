import classNames from 'classnames'
import { Link } from '@tanstack/react-router'
import { useScrollDirection } from '@/hooks/use-scroll-direction'
import { HamburgerButton } from '../hamburger-nav/HamburgerButton'

type PageHeaderProps = {
  bg: 'dark-gradient' | 'none'
  header: 'light' | 'dark'
  hamburger: 'light' | 'dark'
  headerLinksToHomePage?: boolean
}

export const PageHeader = ({
  bg,
  header,
  hamburger,
  headerLinksToHomePage = true,
}: PageHeaderProps) => {
  const scrollDirection = useScrollDirection()
  const headerText = (
    <div
      className={classNames(
        'font-family-main font-semibold capitalize text-2xl lg:text-4xl transition-all duration-300 ease-in-out',
        {
          'text-neutral-0': header === 'light',
          'text-neutral-900': header === 'dark',
        },
      )}
    >
      SENPAI LEARN
    </div>
  )

  return (
    <div className='sticky top-0 left-0 right-0 z-50 h-0'>
      <div
      className={classNames(
        'absolute top-0 w-full h-[128px] base-horizontal-padding transition-all duration-300 ease-in-out',
        {
          '-translate-y-full': scrollDirection === 'down',
          'translate-y-0': scrollDirection === 'up' || scrollDirection === null,
          'bg-linear-to-b from-neutral-900 to-neutral-900/0 relative':
            bg === 'dark-gradient',
        },
      )}
    >
      <div
        className="
          w-full h-2/3 mb-auto
          flex flex-row items-center justify-between"
      >
        {headerLinksToHomePage ? (
          <Link
            to="/"
            className="hover:scale-clickable-hover active:scale-clickable-active focus-visible:scale-clickable-focus transition-all ease-in-out"
          >
            {headerText}
          </Link>
        ) : (
          headerText
        )}
        <div className="flex flex-row items-center gap-4 lg:gap-6">
          <HamburgerButton variant={hamburger} />
          <img
            src="/logo_rounded_rectangle.webp"
            alt=""
            className="h-[30px] aspect-auto object-contain interact-bounce transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
