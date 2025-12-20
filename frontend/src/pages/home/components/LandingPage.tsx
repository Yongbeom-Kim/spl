import { DesktopLandingPage } from './desktop/DesktopLandingPage'
// import { MobileLandingPage } from './MobileLandingPage'

export const LandingPage = () => (
  <>
    {/* <MobileLandingPage className="grid lg:hidden" /> */}
    <DesktopLandingPage className="hidden lg:grid" />
  </>
)
