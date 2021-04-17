import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div<StyledProps>`
  transform-origin: left;
  transition: ${(props) => props.theme.transitions.fast};
  color: ${(props) => (props.editing ? 'var(--sg)' : 'var(--fg)')};
  transform: ${(props) => (props.editing ? 'scale(1.1)' : 'scale(1)')};
`

export const S = {
  Container
}
