import { Dispatch, Fragment, ReactNode, SetStateAction, useEffect } from 'react'
import { Portal } from './Portal'

import { S } from './Dialog.styles'
import { Button } from 'components/Button'
import { SvgX } from 'assets'

interface Props {
  useDialog: () => [boolean, Dispatch<SetStateAction<boolean>>]
  children: ReactNode
}
export const Dialog = ({ useDialog, children }: Props) => {
  const [dialog, setDialog] = useDialog()

  useEffect(() => {
    if (dialog) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [dialog])

  return dialog ? (
    <Portal selector="#portal-root">
      <S.Overlay>
        <S.Container>
          <S.Button>
            <Button.Void
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                setDialog(false)
              }}
            >
              <SvgX />
            </Button.Void>
          </S.Button>
          {children}
        </S.Container>
      </S.Overlay>
    </Portal>
  ) : (
    <Fragment />
  )
}
