import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Title = styled.div`
  margin: 1.5em auto;
  margin-left: 0;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  margin: 1.5em auto;
`

export const S = {
  Container,
  Title,
  Button: {
    Container: ButtonContainer
  }
}
