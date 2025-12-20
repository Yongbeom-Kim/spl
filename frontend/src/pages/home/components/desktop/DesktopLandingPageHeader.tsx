type DivWithoutChildren = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>
export const DesktopLandingPageHeader = (props: DivWithoutChildren) => (
  <div
    {...props}
    className={`flex flex-row items-center gap-4 h-full
      ${props.className}`}
  >
    <div className="font-main font-bold text-9xl capitalize">SENPAI LEARN</div>
    <img src="/logo.png" alt="TODO" className="h-full p-1 pl-4" />
  </div>
)

export const DesktopLandingPageHeaderSecondary = (
  props: DivWithoutChildren,
) => (
  <div className={`font-main font-normal text-4xl/10 *:mb-8 ${props.className}`}>
    <p>
      We are a team of enablers who support projects to enhance learning via
      novel approaches.
    </p>
    <p>We can put a bit more content here...</p>
    <p>But not too much.</p>
  </div>
)
