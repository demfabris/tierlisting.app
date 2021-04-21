import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  opacity: ${(props) => (props.editing ? '0.3' : '1')};
`

const Input = styled.h1`
  background: none;
  width: 100%;
  border: none;
  resize: none;
  overflow: hidden;

  color: var(--fg);
  font: ${(props) => props.theme.font.head};
`

export const S = {
  Container,
  Input
}
