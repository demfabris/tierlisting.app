import { Fragment } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { useToggleEditStore } from 'store'
import { Button } from 'components'
import { SvgX } from 'assets'

import { S } from './Item.styles'

interface Props extends App.Item {
  index: number
  handleRemoveItem: () => void
}
export const Item = ({ id, url, index, handleRemoveItem }: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <Draggable draggableId={id} isDragDisabled={editing} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <S.Container {...draggableProps} {...dragHandleProps} ref={innerRef}>
          <S.Thumbnail src={url} alt="Item thumbnail" editing={editing} />
          {editing ? (
            <S.Remove>
              <Button.Void iconSize="1.5em" onClick={() => handleRemoveItem()}>
                <SvgX />
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
