type LandingPageFullscreenHeroSectionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const LandingPageFullscreenHeroSection = (
  props: LandingPageFullscreenHeroSectionProps,
) => {
  return (
    <div
      {...props}
      className={`
        w-screen h-svh
        flex flex-col justify-start items-center
        bg-[linear-gradient(color-mix(in_srgb,var(--color-neutral-900)_70%,transparent)_5%,color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_25%,color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_60%,color-mix(in_srgb,var(--color-neutral-900)_70%,transparent)_90%),url('/landing-hero-cropped.webp')] bg-cover bg-center
        overflow-hidden
        ${props.className}`}
    >
      <div
        className="
        w-full h-[128px] bg-linear-to-b from-neutral-900 to-neutral-900/0 relative
      "
      >
        <div
          className="
          w-full h-2/3 mb-auto
          flex flex-row items-center justify-between
          px-[5%] lg:px[10%]
        "
        >
          <div className="text-neutral-0 font-family-sans-header font-semibold capitalize text-2xl lg:text-4xl">
            SENPAI LEARN
          </div>
          <div
            className="
            flex flex-row items-center gap-4 lg:gap-6 h-full
          "
          >
            <div
              className="
            flex flex-col gap-[6px] h-fit
            *:h-[3px] *:w-[26px] *:bg-neutral-0 *:rounded-full
            hover:scale-115 transition-all ease-in-out
          "
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img
              src="/logo_rounded_rectangle.webp"
              alt=""
              className="h-[30px] aspect-auto object-contain hover:scale-115 transition-all ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="absolute h-[25%] bottom-0 w-full bg-[linear-gradient(color-mix(in_srgb,var(--color-neutral-900)_0%,transparent)_10%,color-mix(in_srgb,var(--color-neutral-900)_70%,transparent))]"></div>

      <div className="absolute bottom-4 lg:bottom-16 w-full px-[5%] lg:px[10%] text-neutral-0 font-family-sans-header font-bold text-3xl lg:text-6xl">
        We are really cool people. We need a tagline here.
      </div>
    </div>
  )
}
