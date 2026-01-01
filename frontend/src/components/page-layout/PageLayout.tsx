import { useAtomValue } from 'jotai'
import { isNavOverlayVisibleAtom } from '../hamburger-nav/is-nav-overlay-visible-atom'
import { NavigationOverlay } from '../hamburger-nav/NavigationOverlay'

type PageLayoutProps = {
  headerLinksToHomePage: boolean
  children: React.ReactNode
}

// const SkipToContentLink = () => {
//   return (
//     <a
//       href="#main-content"
//       className="absolute top-0 left-0 z-50 -translate-y-full px-4   2 bg-neutral-900 text-neutral-0 rounded-b-md transition-transform duration-200 focus:translate-y-0 sr-only focus:not-sr-only focus:outline-none focus:ring-4 focus:ring-blue-400"
//     >
//       Skip to main content
//     </a>
//   )
// }

export const PageLayout = ({
  headerLinksToHomePage,
  children,
}: PageLayoutProps) => {
  const isOverlayVisible = useAtomValue(isNavOverlayVisibleAtom)
  return (
    <div>
      {/* <SkipToContentLink /> */}
      <NavigationOverlay headerLinksToHomePage={headerLinksToHomePage} />
      <main id="main-content" tabIndex={-1} inert={isOverlayVisible}>
        {children}
      </main>
    </div>
  )
}
