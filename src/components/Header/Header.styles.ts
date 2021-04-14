import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10em;
  width: 100%;
  padding: 0 30px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.5em;
  cursor: pointer;

  font: ${(props) => props.theme.font.big};
  color: ${(props) => props.theme.colors.fg};
`

const LogoText = styled.div`
  > b {
    color: ${(props) => props.theme.colors.sg};
  }
`

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 5em;
`

const NavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 2.5em;
    height: 2.5em;

    color: ${(props) => props.theme.colors.fg};
  }
`

export const S = {
  Container: HeaderContainer,
  Logo: {
    Container: LogoContainer,
    Text: LogoText
  },
  Navigation: {
    Container: NavigationContainer,
    Button: NavigationButton
  }
}
