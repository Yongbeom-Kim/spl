import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { usePeopleQuery } from '../../../../strapi/hooks/use-people-query'
import type { Person } from '../../../../strapi/hooks/use-people-query'
import type Masonry from 'masonry-layout'
import type { StrapiImageType } from '@/strapi/utils/strapi-types'
import { debounce, shuffle } from '@/util'

export const PeoplePageHeroBackground = () => {
  const { data: peopleData } = usePeopleQuery()
  const [headshots, setHeadshots] = useState<Array<StrapiImageType>>()
  const [visible, setVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const masonryRef = useRef<Masonry | null>(null)

  useEffect(() => {
    setHeadshots(shuffle(peopleData.map((person) => person.headshot)))
  }, [peopleData])

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
  }, [headshots])

  const handleImageLoad = () => {
    masonryRef.current?.layout?.()
  }
  if (!headshots) return <div className="h-full bg-neutral-300"></div>

  return (
    <div className="relative h-full bg-neutral-300">
      <div
        className={classNames(
          'masonry-grid',
          'absolute inset-0',
          'transition-opacity ease-linear duratio-1000',
          {
            'opacity-0': !visible,
          },
        )}
        ref={gridRef}
      >
        {headshots.map((headshot: Person['headshot'], idx: number) => (
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
