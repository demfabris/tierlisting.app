import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { Button, Item } from 'components'
import { useToggleEditStore } from 'store'
import { SvgTrash, SvgMove, SvgType } from 'assets'

import { S } from './Tier.styles'

interface Props {
  id: string
  index: number
  items: App.Items
  isElevated: boolean
  handleRemoveTier: (id: string) => void
  handleRemoveItemFromTier: (tierId: string, itemId: string) => void
}
export const Tier = ({ ...props }: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <S.Container
          editing={editing}
          ref={innerRef}
          elevated={props.isElevated}
          {...draggableProps}
        >
          <TierHead {...props} />
          <TierItems {...props} />
          <TierMoveButton {...dragHandleProps} />
        </S.Container>
      )}
    </Draggable>
  )
}

const TierItems = ({
  items,
  id,
  handleRemoveItemFromTier
}: Pick<Props, 'items' | 'id' | 'handleRemoveItemFromTier'>) => {
  const tierId = `tier_${id}`
  return (
    <Droppable droppableId={tierId} direction="horizontal" type="items">
      {({ droppableProps, innerRef, placeholder }) => (
        <S.TierItems.Container {...droppableProps} ref={innerRef}>
          {[...items].map((item, index) => (
            <Item
              id={item.id}
              key={item.id}
              url={item.url}
              index={index}
              handleRemoveItem={() => handleRemoveItemFromTier(tierId, item.id)}
            />
          ))}
          {placeholder}
        </S.TierItems.Container>
      )}
    </Droppable>
  )
}

const TierHead = ({ ...props }: Props) => {
  const editing = useToggleEditStore((state) => state.editing)
  const ref = useRef<HTMLSpanElement>(null!)

  useEffect(() => {
    if (!ref.current.innerText) {
      ref.current.innerText = `Tier ${props.index + 1}`
    }
  }, [])

  return (
    <S.TierHead.Container>
      <TierHeadEditButtons {...props} inputRef={ref} />
      <S.TierHead.Input
        editing={editing}
        contentEditable={editing}
        spellCheck={false}
        ref={ref}
      />
    </S.TierHead.Container>
  )
}

const TierHeadEditButtons = ({
  inputRef,
  ...props
}: Props & { inputRef: MutableRefObject<HTMLSpanElement> }) => {
  const [canType, setCanType] = useState(false)
  const editing = useToggleEditStore((state) => state.editing)

  useEffect(() => {
    inputRef.current.addEventListener('focusout', () => setCanType(false))
  }, [])

  useEffect(() => {
    if (canType) {
      inputRef.current.innerHTML = '&nbsp;'
      inputRef.current.focus()
    }
  }, [canType])

  return (
    <S.TierHead.Edit.Wrapper editing={editing && !canType}>
      <Button.Void
        height="1.25em"
        width="1.25em"
        role="button"
        title="Edit tier name"
        onClick={() => {
          setCanType((state) => !state)
        }}
      >
        <SvgType />
      </Button.Void>
      <Button.Void
        height="1.25em"
        width="1.25em"
        role="button"
        title="Delete"
        onClick={() => props.handleRemoveTier(props.id)}
      >
        <SvgTrash />
      </Button.Void>
    </S.TierHead.Edit.Wrapper>
  )
}

const TierMoveButton = ({ ...dragHandleProps }) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.Move.Container editing={editing} {...dragHandleProps}>
      <Button.Void role="button" title="Move tier">
        <SvgMove />
      </Button.Void>
    </S.Move.Container>
  )
}
