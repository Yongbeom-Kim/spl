export const DesktopLandingHeaderBar = () => (
  <div className="w-full h-16 bg-neutral-300 flex items-center relative justify-between">
    <div className="h-full flex flex-row items-center gap-4">
      <div className="ml-4 h-10 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="font-navbar text-4xl font-bold uppercase">Senpai Learn</h2>
    </div>
  </div>
)
