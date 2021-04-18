import { useEffect, useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Button } from 'components'
import { useToggleEditStore } from 'store'
import { SvgImage, SvgTrash, SvgMove } from 'assets'

import { S } from './Tier.styles'

interface Props {
  id: string
  index: number
  items: string[]
  destroy: () => void
}
export const Tier = ({ ...props }: Props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <S.Container ref={innerRef} {...draggableProps}>
          <TierHead {...props} />
          <TierMoveButton {...dragHandleProps} />
        </S.Container>
      )}
    </Draggable>
  )
}

const TierHead = ({ ...props }: Props) => {
  const ref = useRef<HTMLSpanElement>(null!)

  useEffect(() => {
    if (!ref.current.innerText) {
      ref.current.innerText = `Tier ${props.index + 1}`
    }
  }, [])

  return (
    <S.TierHead.Container>
      <TierHeadEditButtons {...props} />
      <S.TierHead.Input contentEditable={true} spellCheck={false} ref={ref} />
    </S.TierHead.Container>
  )
}

const TierHeadEditButtons = ({ ...props }: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.TierHead.Edit.Wrapper editing={editing}>
      <Button.Void height="1em" width="1em" role="button" title="Add image">
        <SvgImage />
      </Button.Void>
      <Button.Void
        height="1em"
        width="1em"
        role="button"
        title="Delete"
        onClick={() => props.destroy()}
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
