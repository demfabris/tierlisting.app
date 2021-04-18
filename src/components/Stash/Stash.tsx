import { Draggable, Droppable } from 'react-beautiful-dnd'

import { Button } from 'components'
import { SvgPlus } from 'assets'

import { S } from './Stash.styles'
import { useEffect } from 'react'
import { useToggleEditStore } from 'store'

interface Props {
  stash: App.Items
  handleAddItemToStash: () => void
}
export const Stash = ({ stash, handleAddItemToStash }: Props) => {
  useEffect(() => {
    console.log(stash)
  }, [stash])

  return (
    <S.Container>
      <Droppable droppableId="stash">
        {({ droppableProps, innerRef, placeholder }) => (
          <S.Items.Container ref={innerRef} {...droppableProps}>
            {stash.map(({ ...itemProps }, index) => (
              <Item key={index} index={index} {...itemProps} />
            ))}
            {placeholder}
            <Add handleAddItemToStash={handleAddItemToStash} />
          </S.Items.Container>
        )}
      </Droppable>
    </S.Container>
  )
}

const Item = ({ id, url, index }: App.Item & { index: number }) => {
  const editing = useToggleEditStore((state) => state.editing)

  console.log(url)
  return (
    <Draggable draggableId={id} isDragDisabled={editing} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <S.Items.Item
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
        ></S.Items.Item>
      )}
    </Draggable>
  )
}

const Add = ({ handleAddItemToStash }: Pick<Props, 'handleAddItemToStash'>) => {
  const editing = useToggleEditStore((state) => state.editing)

  return editing ? (
    <S.Items.Add>
      <Button.Void
        width="100%"
        height="100% !important"
        onClick={() => handleAddItemToStash()}
      >
        <SvgPlus />
      </Button.Void>
    </S.Items.Add>
  ) : (
    <></>
  )
}
