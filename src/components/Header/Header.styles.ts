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

  svg {
    #lower,
    #right {
      fill: var(--fg);
    }

    #left {
      fill: var(--sg);
    }
  }
`

const LogoText = styled.p`
  margin-left: 0.5em;
  font: ${(props) => props.theme.font.regularBold};

  > b {
    font: ${(props) => props.theme.font.regularBold};
    color: var(--sg);
  }

  @media (max-width: 420px) {
    font: ${(props) => props.theme.font.tinyBold};
  }
`

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9em;
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
