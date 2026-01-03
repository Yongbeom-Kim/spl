import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import type Masonry from 'masonry-layout'
import { shuffle } from '@/util'
import { peopleData } from '../../data/people-data'

export const PeoplePageHeroBackground = () => {
  const [headshots, setHeadshots] = useState(
    peopleData.map((person) => person.profileImage),
  )
  const [visible, setVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const masonryRef = useRef<Masonry | null>(null)

  useEffect(() => {
    const makeVisible = () => setVisible(true)

    if (!gridRef.current) return
    setHeadshots(shuffle(headshots))
    import('masonry-layout').then((masonryLayoutImport) => {
      const Masonry = masonryLayoutImport.default
      masonryRef.current = new Masonry(gridRef.current as HTMLElement, {
        itemSelector: '.masonry-item',
      })
      masonryRef.current.on?.('layoutComplete', makeVisible)
      masonryRef.current.layout?.()
    })

    return () => {
      masonryRef.current?.off?.('layoutComplete', makeVisible)
    }
  }, [])

  const handleImageLoad = () => {
    masonryRef.current?.layout?.()
  }

  return (
    <div className="relative h-full bg-neutral-300">
      <div
        className={classNames(
          'masonry-grid',
          'absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2',
          {
            'opacity-0': !visible,
          },
        )}
        ref={gridRef}
      >
        {headshots.map((headshot: string, idx: number) => (
          <img
            key={idx}
            className="masonry-item float-left w-1/4 lg:w-1/6"
            src={headshot}
            alt={`headshot ${idx}`}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  )
}
