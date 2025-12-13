import classNames from 'classnames'

type SectionLayoutProps = { sectionTitle: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

type SectionHeaderProps = {
  children: React.ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => (
  <h2 className="col-span-1 md:col-span-2 text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-main tracking-[1.2px] leading-[1.2] mb-8">
    {children}
  </h2>
)

export const SectionLayout = ({
  children,
  sectionTitle,
  ...props
}: SectionLayoutProps) => {
  return (
    <section
      {...props}
      className={classNames(
        props.className,
        'w-full py-12 md:py-16 lg:py-20 mx-auto px-8 md:px-16 lg:px-32 m-0',
      )}
    >
      <SectionHeader>{sectionTitle}</SectionHeader>
      {children}
    </section>
  )
}
