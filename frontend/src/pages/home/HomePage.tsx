import { NavigationOverlay } from "@/components/hamburger-nav/NavigationOverlay"
import { LandingPageHeroSection } from "./components/LandingPageHeroSection"
import './styles.css'

export const HomePage = () => {
  return (
    <div>
      <NavigationOverlay />
      <LandingPageHeroSection />
    </div>
  )
}
