import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div<StyledProps>`
  --sg: ${(props) => props.theme.colors.sg};
  --fg: ${(props) => props.theme.colors.fg};

  margin: 2vh auto;

  svg {
    transition: ${(props) => props.theme.transitions.fast};
    color: ${(props) => (props.editing ? 'var(--sg)' : 'var(--fg)')};
    transform: ${(props) => (props.editing ? 'scale(1.5)' : 'scale(1)')};
  }
`

export const S = {
  Container
}
