import { Layout, Tier, Title } from '../components'

import { S } from './styles/new.styles'

const New = () => {
  return (
    <Layout>
      <S.Container>
        <S.Title>
          <Title text="My tierlist" canEdit={true} />
        </S.Title>
        <S.Tierlist>
          <Tier />
          <Tier />
          <Tier />
          <Tier />
        </S.Tierlist>
      </S.Container>
    </Layout>
  )
}

export default New
