import styled from 'styled-components'

const View = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;

  background-color: var(--bg);
  background-repeat: no-repeat;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  width: 900px;
  margin: 0 2em;

  @media (max-width: 400px) {
    margin: 0 1em;
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-bottom: 1em;
  margin-top: 3em;

  font: ${(props) => props.theme.font.little};
  color: var(--disabled);
`

export const S = {
  View,
  Container,
  Footer
}
