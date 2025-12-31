import { useAtomValue } from 'jotai'
import { NavigationOverlay } from '../hamburger-nav/NavigationOverlay'
import { navOverlayAtom } from '../hamburger-nav/nav-overlay-state'

type PageLayoutProps = {
  headerLinksToHomePage: boolean
  children: React.ReactNode
}

export const PageLayout = ({
  headerLinksToHomePage,
  children,
}: PageLayoutProps) => {
  const {isOverlayOpen} = useAtomValue(navOverlayAtom)
  return (
    <div>
      <NavigationOverlay headerLinksToHomePage={headerLinksToHomePage} />
      <div inert={isOverlayOpen}>{children}</div>
    </div>
  )
}
