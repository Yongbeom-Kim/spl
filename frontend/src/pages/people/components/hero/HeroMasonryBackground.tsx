import type Masonry from 'masonry-layout'

// Import all headshot images
import benjaminYap from '../../assets/headshots/benjamin_yap.png'
import charlesWindle from '../../assets/headshots/charles_windle.png'
import chooWeiXin from '../../assets/headshots/choo_wei_xin.png'
import funman2 from '../../assets/headshots/funman_2.png'
// import funman from '../../assets/headshots/funman.png'
import gunRui from '../../assets/headshots/gun_rui.png'
import hanJiayi from '../../assets/headshots/han_jiayi.png'
import jonathanOng from '../../assets/headshots/jonathan_ong.png'
import jovernTeo from '../../assets/headshots/jovern_teo.png'
import karenLoh from '../../assets/headshots/karen_loh.png'
import kenzoTogo from '../../assets/headshots/kenzo_togo.png'
import kimYongbeom from '../../assets/headshots/kim_yongbeom.png'
import kiran from '../../assets/headshots/kiran.png'
import leonLim from '../../assets/headshots/leon_lim.png'
import matthiasKon from '../../assets/headshots/matthias_kon.png'
import pangHanqing from '../../assets/headshots/pang_hanqing.png'
import panshulSharma from '../../assets/headshots/panshul_sharma.png'
import puaMinXin from '../../assets/headshots/pua_min_xin.png'
import steinerTanyanxu from '../../assets/headshots/steiner_tanyanxu.png'
import tanLinYun from '../../assets/headshots/tan_lin_yun.png'
import tangShiyu from '../../assets/headshots/tang_shiyu.png'
import yeoZhien from '../../assets/headshots/yeo_zhien.png'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useIsLargeScreen } from '@/hooks/use-is-large-screen'

// Array of all headshot images
const allHeadshots = [
  benjaminYap,
  charlesWindle,
  chooWeiXin,
  funman2,
  // funman,
  gunRui,
  hanJiayi,
  jonathanOng,
  jovernTeo,
  karenLoh,
  kenzoTogo,
  kimYongbeom,
  kiran,
  leonLim,
  matthiasKon,
  pangHanqing,
  panshulSharma,
  puaMinXin,
  steinerTanyanxu,
  tanLinYun,
  tangShiyu,
  yeoZhien,
]

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const PeoplePageHeroBackground = () => {
  const [headshots, setHeadshots] = useState(allHeadshots)
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
    <div className='relative h-full bg-neutral-300'>
      <div
        className={classNames('masonry-grid', 'absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2', {
          'opacity-0': !visible,
        })}
        ref={gridRef}
      >
        {headshots.map((headshot, idx) => (
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
