import { useAtomValue } from "jotai"
import { isNavOverlayVisibleAtom } from "../hamburger-nav/is-nav-overlay-visible-atom"
import { NavigationOverlay } from "../hamburger-nav/NavigationOverlay"

type PageLayoutProps = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  const isOverlayVisible = useAtomValue(isNavOverlayVisibleAtom)
  return (
    <div>
      <NavigationOverlay />
      <div inert={isOverlayVisible}>{children}</div>
    </div>
  )
}
