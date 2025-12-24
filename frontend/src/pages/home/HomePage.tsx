import { NavigationOverlay } from '@/components/hamburger-nav/NavigationOverlay'
import { LandingPageHeroSection } from './components/LandingPageHeroSection'
import './styles.css'
import { useAtomValue } from 'jotai'
import { isNavOverlayVisibleAtom } from '@/components/hamburger-nav/is-nav-overlay-visible-atom'

export const HomePage = () => {
  const isOverlayVisible = useAtomValue(isNavOverlayVisibleAtom)
  return (
    <div>
      <NavigationOverlay />
      <LandingPageHeroSection inert={isOverlayVisible} />
    </div>
  )
}
