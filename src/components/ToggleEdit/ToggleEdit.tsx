import { useToggleEditStore } from 'store'
import { Button } from 'components'
import { SvgEdit } from 'assets'

import { S } from './ToggleEdit.styles'

export const ToggleEdit = () => {
  const editing = useToggleEditStore((state) => state.editing)
  const toggle = useToggleEditStore((state) => state.toggle)

  return (
    <S.Container editing={editing} title="Toggle edit mode">
      <Button
        alt
        width="auto"
        height="auto"
        iconSize="1.75em"
        onClick={() => toggle(!editing)}
      >
        <SvgEdit />
      </Button>
    </S.Container>
  )
}
