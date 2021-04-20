import { Fragment } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { useToggleEditStore } from 'store'
import { Button } from 'components'
import { SvgTrash } from 'assets'

import { S } from './Item.styles'

interface Props extends App.Item {
  index: number
  isInStash: boolean
  handleRemoveItemFromStash?: () => void
}
export const Item = ({
  id,
  url,
  index,
  isInStash,
  handleRemoveItemFromStash
}: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <Draggable draggableId={id} isDragDisabled={editing} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <S.Container
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          editing={editing}
        >
          {id}
          {editing && isInStash ? (
            <S.Remove>
              <Button.Void
                onClick={() => handleRemoveItemFromStash?.call(this)}
              >
                <SvgTrash />
              </Button.Void>
            </S.Remove>
          ) : (
            <Fragment />
          )}
        </S.Container>
      )}
    </Draggable>
  )
}
