import styled from 'styled-components'

type StyledProps = { editing: boolean }
export const Container = styled.span<StyledProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  text-align: center;

  color: var(--disabled);
  transition: ${(props) => props.theme.transitions.fast};
  font: ${(props) => props.theme.font.medium};

  ${({ editing }) => {
    if (editing) {
      return `
        transform: translateY(4.25em);
      `
    }
  }}
`
