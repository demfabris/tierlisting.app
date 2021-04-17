import { MutableRefObject, useRef } from 'react'

import { Button } from 'components'
import { useToggleEditStore } from 'store'
import { SvgImage, SvgType, SvgTrash } from 'assets'

import { S } from './Tier.styles'

interface Props {
  _id: number
  items: string[]
  destroy: () => void
}
export const Tier = ({ ...props }: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.Container editing={editing}>
      <TierHead {...props} />
    </S.Container>
  )
}

const TierHead = ({ ...props }: Props) => {
  const ref = useRef<HTMLSpanElement>(null!)
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.TierHead.Container>
      <TierHeadEditButtons headInputRef={ref} {...props} />
      <S.TierHead.Input ref={ref} spellCheck={false} contentEditable={editing}>
        Tier {props._id}
      </S.TierHead.Input>
    </S.TierHead.Container>
  )
}

interface ITierHeadEditButtons extends Props {
  headInputRef: MutableRefObject<HTMLSpanElement>
}
const TierHeadEditButtons = ({
  headInputRef,
  ...props
}: ITierHeadEditButtons) => {
  const editing = useToggleEditStore((state) => state.editing)
  const handleClickEditText = (target: HTMLSpanElement) => {
    target.focus()
  }

  return (
    <S.TierHead.Edit.Wrapper editing={editing}>
      <Button.Void height="1em" width="1em" role="button" title="Add image">
        <SvgImage />
      </Button.Void>
      <Button.Void
        height="1em"
        width="1em"
        role="button"
        title="Add text"
        onClick={() => handleClickEditText(headInputRef.current)}
      >
        <SvgType />
      </Button.Void>
      <Button.Void
        height="1em"
        width="1em"
        role="button"
        title="Clear"
        onClick={() => props.destroy()}
      >
        <SvgTrash />
      </Button.Void>
    </S.TierHead.Edit.Wrapper>
  )
}
