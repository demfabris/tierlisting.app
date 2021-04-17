import { useEffect, useRef } from 'react'
import { useToggleEditStore } from 'store'

import { S } from './Title.styles'

interface Props {
  text: string
  canEdit?: boolean
  [rest: string]: unknown
}
export const Title = ({ text, canEdit = false, ...rest }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null!)
  const editing = useToggleEditStore((state) => state.editing)

  /* useEffect(() => { */
  /*   if (editing && canEdit) { */
  /*     ref.current.focus() */
  /*   } */
  /* }, [editing]) */

  return (
    <S.Container {...rest} editing={editing}>
      <S.Input
        spellCheck="false"
        contentEditable={canEdit && editing}
        ref={ref}
      >
        {text}
      </S.Input>
    </S.Container>
  )
}
