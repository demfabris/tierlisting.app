import styled from 'styled-components'

const View = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  background: ${(props) => props.theme.colors.bg};
`

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 85%;

  background: green;
`

export const Styled = {
  View,
  Container
}
