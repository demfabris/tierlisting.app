import { SvgImage, SvgType, SvgTrash } from 'assets'
import { useRef } from 'react'
import { S } from './Tier.styles'
import { Button } from 'components'

export const Tier = () => {
  return (
    <S.Container>
      <TierRank />
    </S.Container>
  )
}

const TierRank = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null!)

  const handleClickEditText = (target: HTMLTextAreaElement) => {
    target.focus()

    // Focus and move cursor to the end
    const { value } = target
    target.value = ''
    target.value = value
  }

  return (
    <S.Rank.Container>
      <S.Rank.Edit.Image>
        <Button
          alt
          height="1.25em"
          width="1.25em"
          role="button"
          title="Add image"
        >
          <SvgImage />
        </Button>
      </S.Rank.Edit.Image>
      <S.Rank.Edit.Text>
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
      </S.Rank.Edit.Text>
      <S.Rank.Edit.Clear>
        <Button alt height="1.25em" width="1.25em" role="button" title="Clear">
          <SvgTrash />
        </Button>
      </S.Rank.Edit.Clear>
      <S.Rank.Input defaultValue="Tier 1" ref={inputRef} spellCheck={false} />
    </S.Rank.Container>
  )
}
