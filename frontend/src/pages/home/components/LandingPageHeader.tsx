import { DivPropsWithoutChild } from '@/types/props'
import { HamburgerButton } from './HamburgerButton'

type LandingPageHeaderProps = DivPropsWithoutChild

export const LandingPageHeader = (props: LandingPageHeaderProps) => {
  return (
    <div
      {...props}
      className={`
        bg-linear-to-b from-neutral-900 to-neutral-900/0 relative
        ${props.className}`}
    >
      <div
        className="
      w-full h-2/3 mb-auto
      flex flex-row items-center justify-between
      px-[5%] lg:px[10%]"
      >
        <div className="text-neutral-0 font-family-sans-header font-semibold capitalize text-2xl lg:text-4xl">
          SENPAI LEARN
        </div>
        <div className="flex flex-row items-center gap-4 lg:gap-6">
          <HamburgerButton onOpen={() => {}} onClose={() => {}} />
          <img
            src="/logo_rounded_rectangle.webp"
            alt=""
            className="h-[30px] aspect-auto object-contain hover:scale-115 active:scale-90 transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
  )
}
