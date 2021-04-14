import { S } from './Title.styles'

interface Props {
  children: React.ReactNode
  editable?: boolean
}
export const Title = ({ children, editable = false }: Props) => {
  return <S.Container>{children}</S.Container>
}
