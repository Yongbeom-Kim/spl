import Footer from "../footer/Footer"
import Header from "../header/Header"

import 'normalize.css'

type PageWrapperProps = {
  children: React.ReactNode
}

export const PageWrapper = ({children}: PageWrapperProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
