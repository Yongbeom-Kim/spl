import { HamburgerButton } from '../components/hamburger-nav/HamburgerButton'
import classNames from 'classnames'
import { Link } from '@tanstack/react-router'

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
  const headerText = (
    <div
      className={classNames(
        ' font-family-main font-semibold capitalize text-2xl lg:text-4xl',
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
    <div
      className={classNames(
        'w-full h-[128px]',
        {
          'bg-linear-to-b from-neutral-900 to-neutral-900/0 relative':
            bg === 'dark-gradient',
        },
      )}
    >
      <div
        className="
      w-full h-2/3 mb-auto
      flex flex-row items-center justify-between
      px-[5%] lg:px[10%]"
      >
        {headerLinksToHomePage ? (
          <Link to="/" className="hover:scale-clickable-hover active:scale-clickable-active focus-visible:scale-clickable-focus transition-all ease-in-out">
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
  )
}
