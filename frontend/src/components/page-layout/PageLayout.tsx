import Footer from '../footer/Footer'
import Header from '../header/Header'
import { HeroSection } from '../hero/HeroSection'

type PageLayoutProps = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export const PageWithHeroLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <div className='grid grid-rows-[auto_1fr] h-svh'>
        <Header />
        <HeroSection />
      </div>
      {children}
      <Footer />
    </div>
  )
}
