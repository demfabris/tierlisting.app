import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'styles'
import { useThemeAssemble } from 'hooks'
import { useThemeModeStore } from 'store'

const App = ({ Component, pageProps }: AppProps) => {
  const mode = useThemeModeStore((state) => state.mode)
  const theme = useThemeAssemble(mode)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
