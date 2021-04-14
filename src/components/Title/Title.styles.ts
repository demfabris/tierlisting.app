import styled from 'styled-components'

const Container = styled.h1`
  text-align: center;
  margin: 10vh auto;
  font: ${(props) => props.theme.font.head};
  color: ${(props) => props.theme.colors.fg};

  > b {
    color: ${(props) => props.theme.colors.sg};
  }
`

export const S = {
  Container
}
