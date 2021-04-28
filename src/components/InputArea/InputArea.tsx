import { S } from './InputArea.styles'

interface Props {
  children: React.ReactNode
  uploadLoading: boolean
  hasItems: boolean
  isDragging: boolean
  uploadDidFail: boolean
  [rest: string]: unknown
}
export const InputArea = ({ ...props }: Props) => (
  <S.Container {...props}></S.Container>
)
