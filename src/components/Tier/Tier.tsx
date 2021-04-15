import { SvgImage, SvgType, SvgTrash } from 'assets'
import { useRef } from 'react'
import { S } from './Tier.styles'
import { Button } from 'components'

interface Props {
  _id: number
  items: string[]
  destroy: () => void
}
export const Tier = ({ _id, items, destroy }: Props) => {
  return (
    <S.Container>
      <TierHead _id={_id} destroy={destroy} items={items} />
    </S.Container>
  )
}

const TierHead = ({ _id, items, destroy }: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null!)

  const handleClickEditText = (target: HTMLTextAreaElement) => {
    target.focus()

    // Focus and move cursor to the end
    const { value } = target
    target.value = ''
    target.value = value
  }

  return (
    <S.TierHead.Container>
      <S.TierHead.Edit.Image>
        <Button
          alt
          height="1.25em"
          width="1.25em"
          role="button"
          title="Add image"
        >
          <SvgImage />
        </Button>
      </S.TierHead.Edit.Image>
      <S.TierHead.Edit.Text>
        <Button
          alt
          height="1.25em"
          width="1.25em"
          role="button"
          title="Add text"
          onClick={() => handleClickEditText(inputRef.current)}
        >
          <SvgType />
        </Button>
      </S.TierHead.Edit.Text>
      <S.TierHead.Edit.Clear>
        <Button
          alt
          height="1.25em"
          width="1.25em"
          role="button"
          title="Clear"
          onClick={() => destroy()}
        >
          <SvgTrash />
        </Button>
      </S.TierHead.Edit.Clear>
      <S.TierHead.Input
        defaultValue={`Tier ${_id}`}
        ref={inputRef}
        spellCheck={false}
      />
    </S.TierHead.Container>
  )
}
