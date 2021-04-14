import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
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
  width: 80px;

  svg {
    width: 32px;
    height: 32px;

    color: ${(props) => props.theme.colors.fg};
  }
`

const NavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
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
