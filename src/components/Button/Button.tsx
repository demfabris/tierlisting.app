import { S } from './Button.styles'

interface Props {
  children: React.ReactNode
  iconSize?: string
  width?: string
  height?: string
  active?: boolean
  [rest: string]: unknown
}

const Filled = ({ children, ...props }: Props) => (
  <S.Filled {...props}>{children}</S.Filled>
)

const Alt = ({ children, ...props }: Props) => (
  <S.Alt {...props}>{children}</S.Alt>
)

const Outlined = ({ children, ...props }: Props) => (
  <S.Outlined {...props}>{children}</S.Outlined>
)

const Void = ({ children, ...props }: Props) => (
  <S.Void {...props}>{children}</S.Void>
)

export const Button = {
  Filled,
  Alt,
  Outlined,
  Void
}
