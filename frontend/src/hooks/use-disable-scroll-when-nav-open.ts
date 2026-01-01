import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { isNavOverlayVisibleAtom } from '../components/hamburger-nav/is-nav-overlay-visible-atom'

export const useDisableScrollWhenNavOpen = () => {
  const [isNavOpen] = useAtom(isNavOverlayVisibleAtom)

  useEffect(() => {
    if (isNavOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isNavOpen])
}
