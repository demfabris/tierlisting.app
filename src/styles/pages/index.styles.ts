import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const Title = styled.div`
  margin-top: 10vh;
  margin-bottom: 1vh;
  margin-left: 0;
`

const Description = styled.p`
  margin-left: 0;
  font: ${(props) => props.theme.font.medium};
  color: ${(props) => props.theme.colors.disabled};
`

const Button = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 8vh auto;
  margin-left: 0;
`

export const S = {
  Container,
  Title,
  Description,
  Button
}
