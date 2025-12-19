import { MobileFooter } from '@/components/mobile-footer/MobileFooter'
import { MobileHeader } from '@/components/mobile-header/MobileHeader'
import { Link } from '@tanstack/react-router'

const MobileLandingPageContentsBackground = () => (
  <>
    <div className="row-[2/5] col-[2/3] bg-red-100 mix-blend-multiply"></div>
    <div className="row-[3/6] col-[1/5] bg-orange-100"></div>
  </>
)
const MobileLandingPageContents = () => (
  <>
    <div
      className="
				row-[2/3] col-[2/3]
				flex flex-col gap-8
				p-4 py-8"
    >
      <div
        className="
					font-extrabold text-4xl"
      >
        Welcome to Senpai Learn!
      </div>
      <div
        className="
					row-[3/4] col-[2/3]
					font-semibold text-2xl"
      >
        We are a team of enablers who support projects related to enhanced
        learning via novel approaches.
      </div>
			{/* TODO: Carousel */}
      <img
        src="/img_2206.png"
        alt="test"
        className="aspect-video object-cover outline my-6 translate-x-1/12 scale-[1.166]"
      />
      <div
        className="
					row-[3/4] col-[2/3]
					font-normal text-xl"
      >
        Check out some of our links (TODO copywriting):
      </div>
    </div>
    <div className="
			row-[4/5] col-[2/3]
			my-auto *:px-1 *:py-3
			flex flex-col
			font-semibold text-3xl
			*:active:text-orange-800 *:active:bg-orange-100 *:active:ring-2 *:active:scale-[1.01] *:active:rounded-lg
			*:focus-visible:text-orange-800 *:focus-visible:bg-orange-100 *:focus-visible:ring-2 *:focus-visible:scale-[1.01] *:focus-visible:rounded-lg
			*:transition-all *:ease-in-out"
			>
      {/* TODO */}
			<Link to="/" className='pt-2'>About Us</Link>
			<Link to="/">People</Link>
			<Link to="/">News</Link>
			<Link to="/">Projects</Link>
			<Link to="/" className='pb-2'>Join Us!</Link>
		</div>
  </>
)

type MobileLandingPageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const MobileLandingPage = (props: MobileLandingPageProps) => {
  return (
    <div
      {...props}
      className={`
				grid grid-cols-[0.25fr_3fr_0.8fr] grid-rows-[48px_auto_auto_auto_minmax(40px,1fr)]
				w-screen min-h-svh
				bg-neutral-50
				${props.className}`}
    >
			<div className='invisible inert col-[2/3] min-w-[300px]'></div>
      {/* background */}
      <div
        className="
				col-span-full row-span-full
				grid grid-cols-subgrid grid-rows-subgrid
				z-10"
      >
        <MobileLandingPageContentsBackground />
      </div>
      {/* content */}
      <div
        className="
				col-span-full row-span-full
				grid grid-cols-subgrid grid-rows-subgrid
				z-20"
      >
        <MobileHeader className="col-span-full" />
        <MobileLandingPageContents />
				<MobileFooter className="col-span-full row-[-2/-1]" />
      </div>
    </div>
  )
}
