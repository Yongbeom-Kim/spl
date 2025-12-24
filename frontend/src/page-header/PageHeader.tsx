import { HamburgerButton } from '../components/hamburger-nav/HamburgerButton'
import classNames from 'classnames'

type PageHeaderProps = {
  bg: 'dark-gradient' | 'none'
  header: 'light' | 'dark' | 'none'
  hamburger: 'light' | 'dark'
}

export const PageHeader = ({
  bg,
  header,
  hamburger,
}: PageHeaderProps) => {
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
        <div
          className={classNames(
            ' font-family-main font-semibold capitalize text-2xl lg:text-4xl',
            {
              'invisible pointer-events-none': header === 'none',
              'text-neutral-0': header === 'light',
              'text-neutral-900': header === 'dark',
            },
          )}
          inert={header === 'none'}
        >
          SENPAI LEARN
        </div>
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
