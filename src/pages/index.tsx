import Link from 'next/link'
import { SvgPlus } from 'assets'
import { Layout, Button, Title } from '../components'

import { S } from './index/index.styles'

const Index = () => {
  return (
    <Layout>
      <S.Container>
        <Title>
          Create a tierlist<b>.</b>
        </Title>
        <Link href="new">
          <Button>
            New tierlist
            <SvgPlus />
          </Button>
        </Link>
      </S.Container>
    </Layout>
  )
}

export default Index
