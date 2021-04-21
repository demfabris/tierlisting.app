import { Droppable } from 'react-beautiful-dnd'
import { nanoid } from 'nanoid'

import { useToggleEditStore } from 'store'
import { Button, Item } from 'components'
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
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.Items.Add editing={editing}>
      <Button.Filled
        iconSize="1.5em"
        onClick={() =>
          handleAddItemToStash(
            {
              id: nanoid(),
              url: new URL(
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'
              )
            },
            0
          )
        }
      >
        Add items
        <SvgPlus />
      </Button.Filled>
    </S.Items.Add>
  )
}
