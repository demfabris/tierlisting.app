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
      <S.Footer>tierlisting.app is free and open source</S.Footer>
    </S.Container>
  </S.View>
)
