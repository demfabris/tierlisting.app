import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Title = styled.div`
  margin: 5vh auto;
`

const Tierlist = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const S = {
  Container,
  Title,
  Tierlist
}
