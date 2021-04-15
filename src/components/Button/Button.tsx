import { S } from './Button.styles'

interface Props {
  children: React.ReactNode
  filled?: boolean
  alt?: boolean
  outlined?: boolean
  iconSize?: string
  width?: string
  height?: string
  [rest: string]: unknown
}
export const Button = ({
  children,
  width = '9em',
  height = '3em',
  filled = false,
  alt = false,
  outlined = false,
  iconSize = '1.25em',
  ...rest
}: Props) => {
  return (
    <S.Container
      filled={filled}
      alt={alt}
      outlined={outlined}
      iconSize={iconSize}
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </S.Container>
  )
}
