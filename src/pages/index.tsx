import Link from 'next/link'
import { SvgPlus } from 'assets'
import { Layout } from '../components'

import { S } from './index/index.styles'

const Index = () => {
  return (
    <Layout>
      <S.Container>
        <S.Title>
          Create a tierlist<b>.</b>
        </S.Title>
        <Link href="new">
          <S.Button>
            New tierlist
            <SvgPlus />
          </S.Button>
        </Link>
      </S.Container>
    </Layout>
  )
}

export default Index
