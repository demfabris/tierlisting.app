import { useRef, useState } from 'react'
import { SvgEdit } from 'assets'
import { Button } from 'components/Button'
import { S } from './Title.styles'

interface Props {
  text: string
  canEdit?: boolean
  [rest: string]: unknown
}
export const Title = ({ text, canEdit = false, ...rest }: Props) => {
  const [editable, setEditable] = useState(canEdit)
  const inputRef = useRef<HTMLTextAreaElement>(null!)

  return (
    <S.Container {...rest}>
      {canEdit && (
        <S.Edit>
          <Button
            alt
            onClick={() => {
              setEditable(true)
              inputRef.current.focus()

              // Focus and move cursor to the end
              const { value } = inputRef.current
              inputRef.current.value = ''
              inputRef.current.value = value
            }}
          >
            <SvgEdit />
          </Button>
        </S.Edit>
      )}
      <S.Input
        defaultValue={text}
        readOnly={!editable}
        spellCheck="false"
        ref={inputRef}
      />
    </S.Container>
  )
}
