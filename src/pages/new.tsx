import { Layout, Title, ToggleEdit } from '../components'
import { Tierlist } from '../modules'

import { S } from './styles/new.styles'

const New = () => {
  return (
    <Layout>
      <S.Container>
        <S.Button.Container>
          <ToggleEdit />
        </S.Button.Container>
        <S.Title>
          <Title text="My tierlist" canEdit={true} />
        </S.Title>
        <Tierlist />
      </S.Container>
    </Layout>
  )
}

export default New
