import { useToggleEditStore } from 'store'
import { Button } from 'components'
import { SvgEdit } from 'assets'

import { S } from './ToggleEdit.styles'

export const ToggleEdit = () => {
  const editing = useToggleEditStore((state) => state.editing)
  const toggle = useToggleEditStore((state) => state.toggle)

  return (
    <S.Container editing={editing} title="Toggle edit mode">
      <Button.Filled
        width="9em"
        onClick={() => toggle(!editing)}
        active={editing}
      >
        {editing ? 'Editing' : 'Edit mode'}
        <SvgEdit />
      </Button.Filled>
    </S.Container>
  )
}
