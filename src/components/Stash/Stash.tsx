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
        <Droppable droppableId="stash" direction="horizontal" type="items">
          {({ droppableProps, innerRef, placeholder }) => (
            <S.Items.Container ref={innerRef} {...droppableProps}>
              {[...stashItems].map(({ id, url }, index) => (
                <Item
                  index={index}
                  key={id}
                  id={id}
                  url={url}
                  isInStash={true}
                  handleRemoveItemFromStash={() =>
                    handleRemoveItemFromStash(id)
                  }
                />
              ))}
              {placeholder}
              <Add handleAddItemToStash={handleAddItemToStash} />
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

  return editing ? (
    <S.Items.Add>
      <Button.Void
        width="100%"
        height="100% !important"
        onClick={() =>
          handleAddItemToStash(
            { id: nanoid(), url: new URL('https://archlinux.org') },
            0
          )
        }
      >
        <SvgPlus />
      </Button.Void>
    </S.Items.Add>
  ) : (
    <></>
  )
}
