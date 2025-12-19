type GridBodyLayoutDesktopProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const GridBodyLayoutDesktop = (props: GridBodyLayoutDesktopProps) => {
  return <div {...props} className={`grid grid-cols-16 gap-4 max-w-6xl mx-auto ${props.className}`} />
}
