import styled from 'styled-components'

type StyledProps = { editing: boolean }

const Container = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  opacity: ${(props) => (props.editing ? '0.5' : '1')};
`

const Input = styled.h1`
  text-align: center;
  background: none;
  height: 1.5em;
  border: none;
  resize: none;
  overflow: hidden;

  font: ${(props) => props.theme.font.head};
  color: ${(props) => props.theme.colors.fg};
`

export const S = {
  Container,
  Input
}
