import { DesktopHeader } from '@/components/desktop-header/DesktopHeader'
import { Link } from '@tanstack/react-router'

type DesktopHeroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>
const DesktopHero = (props: DesktopHeroProps) => {
  return (
    <div
      {...props}
      className={`${props.className} grid grid-cols-1 grid-rows-[auto_1fr]`}
    >
      <DesktopHeader />
      <div
        className="
          row-[2/3]
          h-full max-h-full min-h-0 w-full relative
          after:absolute after:inset-0 after:bg-neutral-100/80"
      >
        <img
          src="/img_2206.png"
          alt=""
          className="
            w-full object-cover
            h-full min-h-0
          "
        />
      </div>

      <div
        className="
          absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col items-left justify-center gap-6
          p-10
          bg-red-200/80
          "
      >
        <h1 className="font-bold text-5xl">Welcome to Senpai Learn!</h1>
        <div className="text-2xl font-semibold">
          We are a team of enablers who support projects related to enhanced
          learning via novel approaches.
        </div>
      </div>
    </div>
  )
}

const DesktopLandingPageContentsBackground = () => (
  <>

<div className="col-[2/3] row-[2/3] bg-red-100 h-100"></div>
    {/* <div className="relative z-10 col-[2/3] row-[1/4] bg-red-100 mix-blend-multiply" />
    <div className="col-span-full row-[3/5] bg-orange-100" /> */}
  </>
)

const DesktopLandingPageContents = () => (
  <>
    <div className="col-[2/2] row-[2/2] p-4 pt-10 pr-20 flex flex-col gap-12">
      <div className="text-2xl font-semibold">
        Check out some of our links (TODO copywriting):
      </div>
    </div>
    <div className="col-[3/3] row-[2/2] grid place-content-center p-10 h-full max-h-full">
      <img
        src="/img_2206.png"
        alt="test"
        className="aspect-video object-cover outline"
      />
    </div>
    <div
      className="
        col-[2/2] row-[3/3]
        my-auto *:px-4 *:py-4.5
        flex flex-col
        font-semibold text-3xl
        *:hover:text-orange-800 *:hover:bg-orange-100 *:hover:ring-2 *:hover:scale-[1.01] *:hover:rounded-lg
        *:transition-all *:ease-in-out"
      style={{
        textDecorationThickness: '1.5px',
      }}
    >
      {/* TODO */}
      <Link to="/">About Us</Link>
      <Link to="/">People</Link>
      <Link to="/">News</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Join Us!</Link>
    </div>
  </>
)

const DesktopLandingPageFooter = () => (
  <div className="col-start-1 -col-end-1 -row-start-1 -row-end-1 bg-neutral-900 px-10 py-20 text-neutral-0 text-4xl font-bold">
    FOOTER1
  </div>
)

type DesktopLandingPageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const DesktopLandingPage = (props: DesktopLandingPageProps) => {
  return (
    <div
      {...props}
      className={`
        w-full
        bg-neutral-50
        grid grid-cols-[100px_1fr_1fr] grid-rows-[80vh_auto_auto_minmax(40px,1fr)_auto]
        ${props.className}`}
    >
      <DesktopHero className="row-[1/2] col-span-full" />
      {/* background */}
      <div
        className="
        grid col-span-full row-span-full 
        grid-cols-subgrid grid-rows-subgrid
        pointer-events-none z-10"
      >
        {/* <DesktopLandingPageHeaderBackground /> */}
        <DesktopLandingPageContentsBackground />
      </div>
      {/* content */}
      {/* <div
        className="
        grid col-span-full row-span-full 
        grid-cols-subgrid grid-rows-subgrid 
        z-20"
      >
        <DesktopLandingPageContents />
        <DesktopLandingPageFooter />
      </div> */}
    </div>
  )
}
