import { Header } from '../Header'

import { S } from './Layout.styles'

interface Props {
  children: React.ReactNode
}
export const Layout = ({ children }: Props) => (
  <S.View>
    <S.Container>
      <Header />
      {children}
    </S.Container>
  </S.View>
)
