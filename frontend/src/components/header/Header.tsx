import { Link } from '@tanstack/react-router'
import { MobileHeaderHamburgerButton } from './mobile/MobileHeaderHamburgerButton'
import { MobileHeaderNavSheet } from './mobile/MobileHeaderNavSheet'
import { headerNavRoutes } from '@/util/const'

export function MobileHeader() {
  return (
    <>
    <header className="sticky top-0 z-50 lg:hidden bg-neutral-0/80 w-full px-4 py-2 h-16 flex flex-row justify-between items-center backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-center h-12 aspect-square -translate-x-1">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold uppercase tracking-[0.9px] text-neutral-900 font-brush top-0 whitespace-nowrap">
        SENPAI LEARN
      </h1>
      <MobileHeaderHamburgerButton />
    </header>
    <MobileHeaderNavSheet />
    </>
  )
}

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50 hidden lg:flex justify-between items-center w-full h-20 bg-neutral-0/80 px-4 py-2 backdrop-blur-md shadow-sm">
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center h-16 aspect-square translate-y-1">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-5xl font-bold uppercase tracking-[0.9px] text-neutral-900 font-brush whitespace-nowrap">
          SENPAI LEARN
        </h1>
      </div>

      <nav className="flex items-center gap-6">
        {headerNavRoutes.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-xl font-semibold capitalize tracking-[1.2px] text-neutral-900 hover:opacity-70 transition-opacity font-main whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default function Header() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  )
}
