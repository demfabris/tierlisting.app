import { Layout, Title, Toggle } from 'components'
import { TierlistAndStashModule } from 'modules'
import { useToggleEditStore } from 'store'
import { SvgEdit } from 'assets'

import { S } from 'styles/pages/new.styles'

const New = () => {
  const { toggleEditing } = useToggleEditStore((state) => state)

  return (
    <Layout>
      <S.Container>
        <S.Button.Container>
          <Toggle label={<SvgEdit />} onToggle={() => toggleEditing()} />
        </S.Button.Container>
        <S.Title>
          <Title text="My tierlist" canEdit={true} />
        </S.Title>
        <TierlistAndStashModule />
      </S.Container>
    </Layout>
  )
}

export default New
