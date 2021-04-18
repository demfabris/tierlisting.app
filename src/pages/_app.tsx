import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { resetServerContext } from 'react-beautiful-dnd'

import { GlobalStyle } from 'styles/'
import { useThemeSwitch } from 'hooks'

const App = ({ Component, pageProps }: AppProps) => {
  const theme = useThemeSwitch('dark')
  resetServerContext()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
