import { Link } from '@tanstack/react-router'

type DesktopHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const DesktopHeader = (props: DesktopHeaderProps) => (
  <div
    {...props}
    className={`
	w-full h-16 bg-neutral-300
	flex flex-row justify-between
	${props.className}`}
  >
    <Link to="/">
      <img src="/logo.png" className="h-full max-h-full object-contain block p-2 pl-3" />
    </Link>
    <Link
      to="/"
      className="uppercase flex my-auto mr-auto p-4 py-0 font-navbar"
    >
      Senpai Learn
    </Link>
  </div>
)
