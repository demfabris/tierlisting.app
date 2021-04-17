import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10em;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  color: var(--fg);
  font: ${(props) => props.theme.font.big};
`

const LogoText = styled.p`
  margin-left: 0.5em;

  > b {
    color: var(--sg);
  }

  @media (max-width: 360px) {
    display: none;
  }
`

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6em;
`

export const S = {
  Container: HeaderContainer,
  Logo: {
    Container: LogoContainer,
    Text: LogoText
  },
  Navigation: {
    Container: NavigationContainer
  }
}
