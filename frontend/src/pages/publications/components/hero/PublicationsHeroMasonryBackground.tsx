import { useCallback, useEffect, useRef, useState } from 'react'

// Import publication images
import image1 from '../../assets/image.png'
import image2 from '../../assets/image copy.png'
import image3 from '../../assets/image copy 2.png'
import image4 from '../../assets/image copy 3.png'
import image5 from '../../assets/image copy 4.png'
import image6 from '../../assets/image copy 5.png'
import image7 from '../../assets/image copy 6.png'
import image8 from '../../assets/image copy 7.png'
import image9 from '../../assets/image copy 8.png'
import image10 from '../../assets/image copy 9.png'
import image11 from '../../assets/image copy 10.png'
import image12 from '../../assets/image copy 11.png'
import image13 from '../../assets/image copy 12.png'
import image14 from '../../assets/image copy 13.png'
import image15 from '../../assets/image copy 14.png'
import image16 from '../../assets/image copy 15.png'
import image17 from '../../assets/image copy 16.png'
import image18 from '../../assets/image copy 17.png'
import image19 from '../../assets/image copy 18.png'
import type Masonry from 'masonry-layout'
import { debounce, shuffle } from '@/util'
import { useIsLargeScreen } from '@/hooks/use-is-large-screen'

const allPublicationImages: Array<string> = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
]
type PublicationsHeroMasonryBackgroundProps = {}
export const PublicationsHeroMasonryBackground =
  ({}: PublicationsHeroMasonryBackgroundProps) => {
    const isLargeScreen = useIsLargeScreen()
    const averageImagesPerColumn = isLargeScreen ? 3.2 : 5.7
    const numColumns = Math.ceil(
      allPublicationImages.length / averageImagesPerColumn,
    )
    const itemWidth = isLargeScreen ? 256 : 128
    const [totalWidth, setTotalWidth] = useState(512)

    useEffect(() => {
      setTotalWidth(numColumns * itemWidth * 2)
    }, [])

    return (
      <div
        className="flex flex-row animate-publications-hero-loop"
        style={{
          animation: 'loop 60s linear infinite',
          width: `${totalWidth}px`,
        }}
      >
        <MasonryBackground />
        <MasonryBackground />
        <style>
          {`@keyframes loop {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
        }`}
        </style>
      </div>
    )
  }

const MasonryBackground = () => {
  const contRef = useRef<HTMLDivElement | null>(null)
  const masonryRef = useRef<Masonry | null>(null)
  const [images, setImages] = useState(allPublicationImages)

  const debouncedSetVisible = useCallback(
    debounce(() => {
      const el = contRef.current
      if (el) el.style.opacity = '1'
    }, 100),
    [],
  )

  useEffect(() => {
    setImages((currentImages) => shuffle(currentImages))
  }, [])

  useEffect(() => {
    const cont = contRef.current
    if (!cont) return

    import('masonry-layout').then((masonryLayoutImport) => {
      const Masonry = masonryLayoutImport.default
      masonryRef.current = new Masonry(cont, {
        itemSelector: '.masonry-item',
        transitionDuration: 0,
      })
      masonryRef.current.on?.('layoutComplete', debouncedSetVisible)
      masonryRef.current.layout?.()
    })

    return () => {
      if (masonryRef.current) {
        masonryRef.current.destroy?.()
        masonryRef.current.off?.('layoutComplete', debouncedSetVisible)
      }
    }
  }, [images])

  const handleImageLoad = () => {
    masonryRef.current?.layout?.()
  }

  return (
    <div
      ref={contRef}
      className="w-[50%] pt-20 lg:pt-30 transition-opacity ease-in duration-300"
      style={{
        opacity: 0,
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          className="masonry-item float-left w-[128px] lg:w-[256px]"
          alt={`Publication ${idx + 1}`}
          onLoad={handleImageLoad}
        />
      ))}
    </div>
  )
}
