import { forwardRef } from 'react'
import { S } from './Button.styles'

interface Props {
  children: React.ReactNode
  iconSize?: string
  width?: string
  height?: string
  active?: boolean
  [rest: string]: unknown
}

const Filled = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref) => (
    <S.Filled {...props} ref={ref}>
      {children}
    </S.Filled>
  )
)

const Alt = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref) => (
    <S.Alt {...props} ref={ref}>
      {children}
    </S.Alt>
  )
)

const Outlined = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref) => (
    <S.Outlined {...props} ref={ref}>
      {children}
    </S.Outlined>
  )
)

const Void = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref) => (
    <S.Void {...props} ref={ref}>
      {children}
    </S.Void>
  )
)

export const Button = {
  Filled,
  Alt,
  Outlined,
  Void
}
