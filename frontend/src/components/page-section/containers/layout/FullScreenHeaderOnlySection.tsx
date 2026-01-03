import classNames from 'classnames'
import { FullScreenSectionRoot, FullScreenSectionRootProps } from '../root/FullScreenSectionRoot'
import { Section } from '../..'

export type FullScreenHeaderOnlySectionProps = FullScreenSectionRootProps & {
  header: string
  align_header: 'left' | 'center'
}

export const FullScreenHeaderOnlySection = ({
  children,
  header,
  align_header,
  className = '',
  variant: theme,
  backgroundColor,
  width,
  height,
}: FullScreenHeaderOnlySectionProps) => {
  const textColorClass =
    theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'

  return (
    <FullScreenSectionRoot
      className={`${className} ${textColorClass}`}
      variant={theme}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    >
      <Section.H2
        className={classNames({
          'h-full text-center': align_header === 'center',
          '': align_header === 'left',
        })}
      >
        {header}
      </Section.H2>
      {children}
    </FullScreenSectionRoot>
  )
}
