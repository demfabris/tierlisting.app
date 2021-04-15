import Link from 'next/link'
import { SvgPlus } from 'assets'
import { Layout, Button, Title } from '../components'

import { S } from './styles/index.styles'

const Index = () => {
  return (
    <Layout>
      <S.Container>
        <S.Title>
          <Title text="Create a new tierlist." />
        </S.Title>
        <S.Button>
          <Link href="new">
            <Button filled={true}>
              New tierlist
              <SvgPlus />
            </Button>
          </Link>
        </S.Button>
      </S.Container>
    </Layout>
  )
}

export default Index
