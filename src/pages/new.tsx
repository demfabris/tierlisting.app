import { Layout, Title, ToggleEdit } from '../components'
import { Tierlist } from '../modules'

import { S } from './styles/new.styles'

const New = () => {
  return (
    <Layout>
      <S.Container>
        <ToggleEdit />
        <S.Title>
          <Title text="My tierlist" canEdit={true} />
        </S.Title>
        <Tierlist />
      </S.Container>
    </Layout>
  )
}

export default New
