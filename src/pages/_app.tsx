import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'styles/'
import { useThemeSwitch } from 'hooks'

const App = ({ Component, pageProps }: AppProps) => {
  const theme = useThemeSwitch('dark')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
