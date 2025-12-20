import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

type DesktopLandingPageImageProps = {
  timeUntilVisibleMs: number
  imageSrcList: string[]
  imageChangeDurationMs: number
  crossFadeDuationMs: number
} & Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const DesktopLandingPageImage = ({
  timeUntilVisibleMs,
  imageSrcList,
  imageChangeDurationMs,
  crossFadeDuationMs,
  ...divProps
}: DesktopLandingPageImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [prevImage, setPrevImage] = useState<{
    idx: number | undefined
    transitionDuration: number
    opacity: number
    stage: 'before-crossfade' | 'during-crossfade' | 'no-crossfade'
  }>({
    idx: undefined,
    transitionDuration: 0,
    opacity: 0,
    stage: 'no-crossfade',
  })
  const crossfadeTimeout = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), timeUntilVisibleMs)
    return () => clearTimeout(timeout)
  }, [timeUntilVisibleMs])

  useEffect(() => {
    if (!isVisible) return
    if (!imageSrcList || imageSrcList.length <= 1) return

    const interval = setInterval(() => {
      setImageIndex((cur) => {
        const prevIdx = cur
        const nextIdx = cur + 1 < imageSrcList.length ? cur + 1 : 0
        setPrevImage({
          idx: prevIdx,
          transitionDuration: 0,
          opacity: 1,
          stage: 'before-crossfade',
        })
        return nextIdx
      })
    }, imageChangeDurationMs)

    return () => clearInterval(interval)
  }, [isVisible, imageChangeDurationMs, imageSrcList])

  useEffect(() => {
    if (prevImage.idx === undefined) return
    if (prevImage.stage === 'during-crossfade') return
    if (prevImage.stage === 'no-crossfade') return
    if (prevImage.stage === 'before-crossfade')
      requestAnimationFrame(() => {
        setPrevImage((prev) => ({
          idx: prev.idx,
          transitionDuration: crossFadeDuationMs,
          opacity: 0,
          stage: 'during-crossfade',
        }))
      })

    clearTimeout(crossfadeTimeout.current)
    crossfadeTimeout.current = setTimeout(() => {
      setPrevImage({
        idx: undefined,
        transitionDuration: 0,
        opacity: 0,
        stage: 'no-crossfade',
      })
    }, crossFadeDuationMs)
  }, [prevImage.stage, prevImage.idx, crossFadeDuationMs])

  useEffect(() => {
    if (!imageRef.current) return
    if (!isVisible) return

    const handleMouseEnter = () => setIsHover(true)
    const handleMouseLeave = () => setIsHover(false)

    imageRef.current.addEventListener('mouseenter', handleMouseEnter)
    imageRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      imageRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      imageRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [imageRef, isVisible])

  return (
    <div
      {...divProps}
      className={classNames(
        'relative transition-all ease-in-out',
        {
          'opacity-0': !isVisible,
          'opacity-85 blur-none': isVisible && !isHover,
          'opacity-100 blur-none scale-105': isVisible && isHover,
        },
        divProps.className,
      )}
    >
      {/* layout image */}
      <img
        src={imageSrcList[imageIndex] || ''}
        alt="TODO"
        className="inert aspect-video object-cover w-full h-full invisible"
      />

      <img
        src={imageSrcList[imageIndex] || ''}
        alt="TODO"
        className={classNames(
          'absolute top-0 left-0 aspect-video object-cover w-full',
          'transition-all ease-in-out',
          'duration-500',
        )}
        ref={imageRef}
      />
      {/* Overlaid previous img for cross fade */}
      {prevImage.idx !== undefined && (
        <img
          src={imageSrcList[prevImage.idx]}
          alt="TODO"
          className={classNames(
            'absolute top-0 left-0 aspect-video object-cover w-full',
            'transition-all ease-in-out',
            'z-10 inert pointer-events-none',
          )}
          style={{
            opacity: prevImage.opacity,
            transitionDuration: `${prevImage.transitionDuration}ms`,
          }}
        />
      )}
    </div>
  )
}