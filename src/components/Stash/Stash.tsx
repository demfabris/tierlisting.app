import { Droppable } from 'react-beautiful-dnd'

import { Button, Item } from 'components'
import { SvgPlus } from 'assets'

import { S } from './Stash.styles'
/* import { useEffect } from 'react' */
import { useToggleEditStore } from 'store'

interface Props {
  items: App.Items
  handleAddItemToStash: () => void
  handleRemoveItemFromStash: (element: App.Item) => void
}
export const Stash = ({
  items,
  handleAddItemToStash,
  handleRemoveItemFromStash
}: Props) => {
  return (
    <>
      <S.Container>
        <Droppable droppableId="stash" direction="horizontal" type="items">
          {({ droppableProps, innerRef, placeholder }) => (
            <S.Items.Container ref={innerRef} {...droppableProps}>
              {[...items].map((item, index) => (
                <Item
                  key={index}
                  index={index}
                  id={item.id}
                  url={item.url}
                  isInStash={true}
                  handleRemoveItemFromStash={() =>
                    handleRemoveItemFromStash(item)
                  }
                />
              ))}
              {placeholder}
              <Add handleAddItemToStash={handleAddItemToStash} />
            </S.Items.Container>
          )}
        </Droppable>
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
        onClick={() => handleAddItemToStash()}
      >
        <SvgPlus />
      </Button.Void>
    </S.Items.Add>
  ) : (
    <></>
  )
}
