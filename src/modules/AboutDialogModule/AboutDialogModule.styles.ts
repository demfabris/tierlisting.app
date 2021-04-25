import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LogoContainer = styled.div`
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

const Title = styled.h1`
  font: ${(props) => props.theme.font.medium};
  color: var(--fg);
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3em;
  width: 100%;
`

const InfoText = styled.span`
  text-align: center;
  margin-top: 3em;
  font: ${(props) => props.theme.font.regular};
  color: var(--disabled);
`

const InfoLinks = styled.ul`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
`

export const S = {
  Container,
  Title,
  Info: {
    Container: InfoContainer,
    Logo: LogoContainer,
    Text: InfoText,
    Links: InfoLinks
  }
}
