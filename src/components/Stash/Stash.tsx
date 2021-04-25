import { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { nanoid } from 'nanoid'

import { AddItemsToStashModule } from 'modules'
import { useToggleEditStore } from 'store'
import { Dialog, Button, Item } from 'components'
import { SvgPlus } from 'assets'

import { StashLabel } from './components'
import { S } from './Stash.styles'

interface Props {
  stashItems: App.Items
  handleAddItemToStash: (item: App.Item, index: number) => void
  handleRemoveItemFromStash: (id: string) => void
}
export const Stash = ({
  stashItems,
  handleAddItemToStash,
  handleRemoveItemFromStash
}: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <>
      <S.Container>
        <Add handleAddItemToStash={handleAddItemToStash} />
        <Droppable droppableId="stash" direction="horizontal" type="items">
          {({ droppableProps, innerRef, placeholder }) => (
            <S.Items.Container
              editing={editing}
              ref={innerRef}
              {...droppableProps}
            >
              {[...stashItems].map(({ id, url }, index) => (
                <Item
                  index={index}
                  key={id}
                  id={id}
                  url={url}
                  handleRemoveItem={() => handleRemoveItemFromStash(id)}
                />
              ))}
              {placeholder}
            </S.Items.Container>
          )}
        </Droppable>
        <StashLabel editing={editing} itemCount={stashItems.length} />
      </S.Container>
    </>
  )
}

const Add = ({ handleAddItemToStash }: Pick<Props, 'handleAddItemToStash'>) => {
  const [dialog, setDialog] = useState(false)
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.Items.Add editing={editing}>
      <Button.Filled iconSize="1.5em" onClick={() => setDialog(true)}>
        <Dialog useDialog={() => [dialog, setDialog]}>
          <AddItemsToStashModule />
        </Dialog>
        Add items
        <SvgPlus />
      </Button.Filled>
    </S.Items.Add>
  )
}
