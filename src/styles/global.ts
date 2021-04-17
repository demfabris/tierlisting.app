import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --sg: ${(props) => props.theme.colors.sg};
    --fg: ${(props) => props.theme.colors.fg};
    --bg: ${(props) => props.theme.colors.bg};
    --disabled: ${(props) => props.theme.colors.disabled};
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    transition: .3s ease;
  }

  html,
  body,
  #__next {
    background: ${(props) => props.theme.colors.bg};
  }
`
