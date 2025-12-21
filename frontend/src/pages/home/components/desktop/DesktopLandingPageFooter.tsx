type DesktopLandingPageCopyFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const DesktopLandingPageFooter = (
  divProps: DesktopLandingPageCopyFooterProps,
) => (
  <div
    {...divProps}
    className={`text-lg bg-neutral-800 text-neutral-200 text-normal h-[min(28rem,min-content)] p-4 py-8 pb-8 ${divProps.className}`}
  >
    <div>&copy; 2025 by SENPAI LEARN</div>
    <div className="mt-6">We will add some socials here! And more links</div>
  </div>
)
