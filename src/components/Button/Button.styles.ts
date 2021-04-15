import styled from 'styled-components'

type StyledProps = {
  filled: boolean
  alt: boolean
  iconSize: string
  height: string
  width: string
}
const Container = styled.button<StyledProps>`
  --sg: ${(props) => props.theme.colors.sg};
  --fg: ${(props) => props.theme.colors.fg};
  --bg: ${(props) => props.theme.colors.bg};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  background: none;
  color: var(--bg);

  border: none;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 0.125em;
  border-top-left-radius: 0.125em;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font: ${(props) => props.theme.font.medium};
  box-shadow: ${(props) => props.theme.shadows.hard};
  transition: ${(props) => props.theme.transitions.fast};

  svg {
    color: var(--bg);
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
  }

  &:hover svg {
    color: ${(props) => (props.alt ? 'var(--sg)' : 'none')};
  }

  &:hover {
    background: ${(props) => (props.filled ? 'var(--sg)' : 'none')};
  }

  ${(props) => {
    if (props.alt) {
      return `
        background: none;
        svg {
          color: var(--fg);
        }
      `
    }

    if (props.filled) {
      return `background: var(--fg)`
    }
  }}
`

export const S = {
  Container
}
