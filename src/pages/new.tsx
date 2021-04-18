import { SvgEdit } from 'assets'
import { Layout, Title, Toggle } from 'components'
import { Tierlist } from 'modules'
import { useToggleEditStore } from 'store'

import { S } from './styles/new.styles'

const New = () => {
  const { editing, toggle } = useToggleEditStore((state) => state)

  return (
    <Layout>
      <S.Container>
        <S.Button.Container>
          <Toggle label={<SvgEdit />} onToggle={() => toggle(!editing)} />
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
