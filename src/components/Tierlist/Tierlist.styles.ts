import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1em;
`

export const S = {
  Container,
  Button
}
