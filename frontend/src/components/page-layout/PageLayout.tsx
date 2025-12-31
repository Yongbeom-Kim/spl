import { useAtomValue } from "jotai"
import { isNavOverlayVisibleAtom } from "../hamburger-nav/is-nav-overlay-visible-atom"
import { NavigationOverlay } from "../hamburger-nav/NavigationOverlay"

type PageLayoutProps = {
  headerLinksToHomePage: boolean
  children: React.ReactNode
}

export const PageLayout = ({ headerLinksToHomePage, children }: PageLayoutProps) => {
  const isOverlayVisible = useAtomValue(isNavOverlayVisibleAtom)
  return (
    <div>
      <NavigationOverlay headerLinksToHomePage={headerLinksToHomePage} />
      <div inert={isOverlayVisible}>{children}</div>
    </div>
  )
}
