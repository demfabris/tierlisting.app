/* import Link from 'next/link' */
/* import Layout from '../components/Layout' */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/'
import { Layout } from '../components'
import { useThemeSwitch } from '../hooks'

const Index = () => {
  const theme = useThemeSwitch('dark')

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default Index
