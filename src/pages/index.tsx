import Link from 'next/link'
import { SvgPlus } from 'assets'
import { Layout, Button, Title } from '../components'

import { S } from 'styles/pages/index.styles'

const Index = () => {
  return (
    <Layout>
      <S.Container>
        <S.Title>
          <Title text="Create a new tierlist." />
        </S.Title>
        <S.Description>...and nothing else.</S.Description>
        <S.Button>
          <Link href="new">
            <Button.Filled>
              New tierlist
              <SvgPlus />
            </Button.Filled>
          </Link>
        </S.Button>
      </S.Container>
    </Layout>
  )
}

export default Index
