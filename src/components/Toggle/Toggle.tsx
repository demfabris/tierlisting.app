import { S } from './Toggle.styles'

interface Props {
  label: React.ReactNode
  onToggle: () => void
}
export const Toggle = ({ label, onToggle }: Props) => {
  return (
    <S.Container title="Toggle">
      <S.Label>{label}</S.Label>
      <S.Toggle.Container>
        <S.Toggle.Input id="toggle" type="checkbox" />
        <S.Toggle.Slider htmlFor="toggle" onClick={() => onToggle()} />
      </S.Toggle.Container>
    </S.Container>
  )
}
