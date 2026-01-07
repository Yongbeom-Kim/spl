import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import type Masonry from 'masonry-layout'
import { debounce, shuffle } from '@/util'
import { Person, usePeopleQuery } from '../../hooks/use-people-query'

export const PeoplePageHeroBackground = () => {
  const {data: peopleData} = usePeopleQuery()
  const headshots = (peopleData ?? []).map((person) => person.headshot)
  const [visible, setVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const masonryRef = useRef<Masonry | null>(null)

  useEffect(() => {
    const makeVisible = debounce(() => setVisible(true), 400)

    if (!gridRef.current) return
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
          'absolute top-0 left-1/2 -translate-x-1/2',
          {
            'opacity-0': !visible,
          },
        )}
        ref={gridRef}
      >
        {/* TODO: shuffle */}
        {(headshots).map((headshot: Person['headshot'], idx: number) => (
          <img
            key={idx}
            className="masonry-item float-left w-1/4 lg:w-1/6"
            src={headshot.url}
            alt={`headshot ${idx}`}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  )
}
