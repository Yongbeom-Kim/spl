import type Masonry from 'masonry-layout'
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
import { useIsLargeScreen } from '@/hooks/use-is-large-screen'


function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function debounce<T extends any[]>(
  callback: (...args: T) => void,
  debounceTime: number,
) {
  let t: ReturnType<typeof setTimeout> | undefined = undefined

  return (...args: T) => {
    if (t !== undefined) {
      clearTimeout(t)
    }
    t = setTimeout(() => {
      callback(...args)
    }, debounceTime)
  }
}

const allPublicationImages: string[] = [
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

export const PublicationsHeroMasonryBackground = () => {
  const [width, setWidth] = useState(512)
  const incrWidth = (px: number) => setWidth(w => Math.ceil((w + px) / 128) * 128)
  return (
    <div
      className="flex flex-row animate-publications-hero-loop"
      style={{
        animation: 'loop 60s linear infinite',
        width: `${width}px`,
      }}
    >
      <MasonryBackground incrWidth={incrWidth} controlWidth={true} />
      <MasonryBackground incrWidth={incrWidth} controlWidth={false} />
      <style>
        {`@keyframes loop {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
        }`}
      </style>
    </div>
  )
}

const MasonryBackground = ({
  incrWidth,
  controlWidth,
}: {
  incrWidth: (px: number) => void
  controlWidth: boolean
}) => {
  const contRef = useRef<HTMLDivElement | null>(null)
  const masonryRef = useRef<Masonry | null>(null)
	const isLargeScreen = useIsLargeScreen()
	const [images, setImages] = useState(allPublicationImages)

  const debouncedSetVisible = useCallback(debounce(() => {
    const style = contRef?.current?.style
    if (style) style.opacity = '100'
  }, 100), [])

	useEffect(() => {
		setImages((images) => shuffle(images))
	}, [])

  useEffect(() => {
    const cont = contRef.current
    if (!cont) return


    const incrWidthIfVerticalOverflow = () => {
      if ((contRef?.current?.scrollHeight ?? 0) > window.innerHeight) {
        if (controlWidth) incrWidth(isLargeScreen ? 512 : 256)
        setTimeout(() => {
          masonryRef.current?.layout?.()
        }, 0)
      }
    }

    import('masonry-layout').then((masonryLayoutImport) => {
      const Masonry = masonryLayoutImport.default
      masonryRef.current = new Masonry(cont, {
        itemSelector: '.masonry-item',
        transitionDuration: 0,
      })
      masonryRef.current?.on?.('layoutComplete', incrWidthIfVerticalOverflow)
      masonryRef.current?.on?.('layoutComplete', debouncedSetVisible)
      masonryRef.current.layout?.()
    })

    return () => {
      masonryRef.current?.destroy?.()
      masonryRef.current?.off?.('layoutComplete', incrWidthIfVerticalOverflow)
      masonryRef.current?.off?.('layoutComplete', debouncedSetVisible)
    }
  }, [images])

  const handleImageLoad = () => {
    masonryRef.current?.layout?.()
  }

  return (
    <div
      ref={contRef}
      className="
				w-[50%] pt-20
				transition-opacity ease-in duration-300"
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
