import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --sg: ${(props) => props.theme.colors.sg};
    --sgAlt: ${(props) => props.theme.colors.sgAlt};
    --fg: ${(props) => props.theme.colors.fg};
    --bg: ${(props) => props.theme.colors.bg};
    --tg: ${(props) => props.theme.colors.tg};
    --hg: ${(props) => props.theme.colors.hg};
    --disabled: ${(props) => props.theme.colors.disabled};
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    background: ${(props) => props.theme.colors.bg};
  }

  body {
    overflow-y: scroll;
  }

`
