import styled from 'styled-components'

type StyledProps = { filled: boolean }
const Container = styled.button<StyledProps>`
  --sg: ${(props) => props.theme.colors.sg};
  --fg: ${(props) => props.theme.colors.fg};
  --bg: ${(props) => props.theme.colors.bg};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10vh auto;
  width: 9em;
  height: 3em;
  cursor: pointer;

  border: none;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 0.125em;
  border-top-left-radius: 0.125em;

  background: var(--fg);
  color: var(--bg);

  font: ${(props) => props.theme.font.medium};
  box-shadow: ${(props) => props.theme.shadows.hard};
  transition: ${(props) => props.theme.transitions.fast};

  svg {
    color: var(--bg);
  }

  &:hover svg {
    color: var(--bg);
  }

  &:hover {
    background: var(--sg);
  }
`

export const S = {
  Container
}
