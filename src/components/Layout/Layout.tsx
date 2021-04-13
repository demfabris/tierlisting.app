import { ReactNode } from 'react'

import { Styled } from './Layout.styles'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => (
  <Styled.Container>{children}</Styled.Container>
)
