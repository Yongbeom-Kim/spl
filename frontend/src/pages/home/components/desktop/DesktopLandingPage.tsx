import {
  DesktopLandingPageCTAButton,
  DesktopLandingPageCTASection,
} from './DesktopLandingPageCTA'
import {
  DesktopLandingPageHeader,
  DesktopLandingPageHeaderSecondary,
} from './DesktopLandingPageHeader'
import { DesktopLandingPageImage } from './DesktopLandingPageImage'
import { DesktopLandingPageFooter } from './DesktopLandingPageFooter'

type DesktopLandingPageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const DesktopLandingPage = (props: DesktopLandingPageProps) => {
  return (
    <div
      {...props}
      className={`
        w-screen h-svh overflow-y-auto overflow-x-hidden p-10
        bg-neutral-50
        grid grid-cols-[1fr_1.2fr] grid-rows-[130px_1fr_1fr_auto] gap-4
        ${props.className}`}
      style={{
        scrollbarGutter: 'stable',
      }}
    >
      <div className="absolute h-2/3 w-2/3 top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 bg-orange-100 rounded-full pointer-events-none mix-blend-multiply blur-[200px]"></div>

      <DesktopLandingPageHeader className="row-[1/2] col-[1/3] -mx-[3px]" />
      <DesktopLandingPageHeaderSecondary className="row-[2/3] col-[1/2] max-w-[70%]" />
      <div className='row-[2/3] col-span-full grid grid-cols-subgrid'>

        <DesktopLandingPageImage
          className="col-[2/3] -translate-x-[max(15%,50px)]"
          timeUntilVisibleMs={0}
          imageChangeDurationMs={10000}
          imageSrcList={['/landing-1.png', '/landing-2.png', '/landing-3.png']}
          crossFadeDuationMs={1500}
        />
        <DesktopLandingPageCTAButton className="col-span-full ml-auto mr-[8%] mt-12 mb-4" />
      </div>
      <DesktopLandingPageCTASection className="row-[3/4] col-span-full -mx-10 p-10 *:ml-auto *:mr-[8%]" />
      <DesktopLandingPageFooter className="row-[4/5] col-span-full -mx-10 -mb-10 px-10" />
    </div>
  )
}
