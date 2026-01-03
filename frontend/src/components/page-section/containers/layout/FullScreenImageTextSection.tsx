import { ReactNode } from 'react'
import {
  FullScreenHeaderOnlySection,
  FullScreenHeaderOnlySectionProps,
} from './FullScreenHeaderOnlySection'

type FullScreenImageTextSectionVariant = 'centered_image'

export type FullScreenImageTextSectionProps = Omit<
  FullScreenHeaderOnlySectionProps,
  'children'
> & {
  image: ReactNode
  body: ReactNode
  variant: FullScreenImageTextSectionVariant
}

type BodyProps = Pick<FullScreenImageTextSectionProps, 'image' | 'body'>

const TextCenteredBody = ({ image, body }: BodyProps) => {
  return (
    <div className="">
      {image}
      {body}
    </div>
  )
}

const BodyComponentMap: Record<
  FullScreenImageTextSectionVariant,
  React.FC<BodyProps>
> = {
  centered_image: TextCenteredBody,
}

export const FullScreenImageTextSection = ({
  header,
  image,
  body,
  align_header,
  className,
  variant: theme,
  backgroundColor,
  variant,
  width,
	height,
}: FullScreenImageTextSectionProps) => {
  const Body = BodyComponentMap[variant]
  return (
    <FullScreenHeaderOnlySection
      width={width}
			height={height}
      header={header}
      align_header={align_header}
      variant={theme}
      className={`${className} flex flex-col`}
      backgroundColor={backgroundColor}
    >
      <Body image={image} body={body} />
    </FullScreenHeaderOnlySection>
  )
}
