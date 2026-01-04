import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import classNames from 'classnames'
import { VisuallyHidden } from '../ui/VisuallyHidden'

export type CarouselImage = {
  src: string
  alt: string
}

type CarouselProps = {
  images: CarouselImage[]
  autoPlayInterval?: number
  aspectRatio?: string
  className?: string
}

export const Carousel = ({
  images,
  autoPlayInterval = 5000,
  aspectRatio = '16/9',
  className = '',
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const lightboxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isHovered || isLightboxOpen) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [isHovered, isLightboxOpen, images.length, autoPlayInterval])

  useEffect(() => {
    if (isLightboxOpen) {
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
  }, [isLightboxOpen])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setIsLightboxOpen(false)
          break
        case 'ArrowLeft':
          setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
          break
        case 'ArrowRight':
          setLightboxIndex((prev) => (prev + 1) % images.length)
          break
        case 'Tab':
          if (!lightboxRef.current) return
          e.preventDefault()
          const focusableElements = Array.from(
            lightboxRef.current.querySelectorAll('button'),
          ) as HTMLButtonElement[]
          const focusedElement =
            document.activeElement as HTMLButtonElement | null
          const currentIndex = focusedElement
            ? focusableElements.indexOf(focusedElement)
            : -1
          const nextIndex = currentIndex === -1 ? 0 : currentIndex
          focusableElements[nextIndex]?.focus()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
    }
  }, [isLightboxOpen, images.length])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <>
      <div
        className={classNames(
          'relative w-full overflow-hidden rounded-lg',
          className,
        )}
        style={{ aspectRatio }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((img, index) => (
          <button
            key={img.src}
            onClick={() => openLightbox(index)}
            className="absolute inset-0 w-full h-full p-0 border-0 bg-transparent cursor-pointer"
            aria-label={`View ${img.alt} in lightbox`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={classNames(
                'w-full h-full object-contain transition-opacity duration-700 ease-in-out',
                index === activeIndex ? 'opacity-100' : 'opacity-0',
              )}
            />
          </button>
        ))}
      </div>

      {isLightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 transition-opacity duration-300 opacity-100"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            ref={lightboxRef}
          >
            <div
              className="absolute inset-0 bg-black/90"
              onClick={closeLightbox}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
              <img
                src={images[lightboxIndex]?.src}
                alt={images[lightboxIndex]?.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <VisuallyHidden>
              <div role="status" aria-live="polite">
                Image {lightboxIndex + 1} of {images.length}:{' '}
                {images[lightboxIndex]?.alt}
              </div>
            </VisuallyHidden>
          </div>,
          document.body,
        )}
    </>
  )
}
