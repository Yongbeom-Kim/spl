type DesktopLandingPageCopyFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const DesktopLandingPageFooter = (
  divProps: DesktopLandingPageCopyFooterProps,
) => (
  <div
    {...divProps}
    className={`text-lg bg-neutral-800 text-neutral-200 text-normal min-h-28 p-4 py-10 pb-20 ${divProps.className}`}
  >
    <div>@ 2025 by SENPAI LEARN</div>
    <div className="mt-6">We will add some socials here! And more links</div>
  </div>
)
