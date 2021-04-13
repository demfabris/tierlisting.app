import { ReactNode } from 'react'

import { Styled } from './Layout.styles'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => (
  <Styled.View>
    <Styled.Container>{children}</Styled.Container>
  </Styled.View>
)
