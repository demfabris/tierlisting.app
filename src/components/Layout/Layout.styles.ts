import styled from 'styled-components'

const View = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  background: ${(props) => props.theme.colors.bg};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 85%;
`

export const S = {
  View,
  Container
}
