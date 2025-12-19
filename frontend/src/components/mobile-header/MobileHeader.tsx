type MobileHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const MobileHeader = (props: MobileHeaderProps) => {
  return (
    <div
      {...props}
      className={`
				sticky w-full min-w-full h-12
				px-2
				flex flex-row justify-between items-center
				bg-neutral-300
				${props.className}`}
    >
			<img src="/logo.png" alt="" className="h-full py-1" />
			<div className="uppercase font-navbar text-3xl">
				Senpai Learn
			</div>
			{/* TODO: Hamburger button */}
			<div className="flex flex-col gap-1.5 *:w-7 *:h-1 *:bg-neutral-900 *:rounded-full">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
  )
}