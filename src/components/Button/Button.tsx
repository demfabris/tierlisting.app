import { S } from './Button.styles'

interface Props {
  children: React.ReactNode
  filled?: boolean
  [rest: string]: unknown
}
export const Button = ({ children, filled = false, ...rest }: Props) => {
  return (
    <S.Container filled={filled} {...rest}>
      {children}
    </S.Container>
  )
}
