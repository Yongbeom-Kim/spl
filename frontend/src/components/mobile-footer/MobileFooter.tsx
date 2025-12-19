type MobileFooterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>

export const MobileFooter = (props: MobileFooterProps) => {
	// TODO: proper footer
  return (
    <div
      {...props}
      className={`
				w-full min-w-full h-24
				px-2
				flex flex-row justify-between items-center
				bg-neutral-900
				text-neutral-0
				${props.className}`}
    >
			<div className="uppercase font-navbar text-3xl">
				FOOTER
			</div>
		</div>
  )
}