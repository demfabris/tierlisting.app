import styled from 'styled-components'

type StyledProps = {
  iconSize: string
  height: string
  width: string
  active: boolean
  [rest: string]: unknown
}
const Base = styled.button<StyledProps>`
  --active: var(--sg);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  background: none;
  padding: 0 1em;

  border: none;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 0.125em;
  border-top-left-radius: 0.125em;

  width: ${(props) => props.width};
  height: ${(props) => props.height ?? '3em'};
  font: ${(props) => props.theme.font.medium};
  box-shadow: ${(props) => props.theme.shadows.hard};

  svg {
    margin-left: 0.5em;
    width: ${(props) => props.iconSize ?? '1.25em'};
    height: ${(props) => props.iconSize ?? '1.25em'};
  }
`

const Filled = styled(Base)<StyledProps>`
  background: ${(props) => (props.active ? 'var(--active)' : 'var(--fg)')};

  * {
    color: var(--bg);
  }
`

const Alt = styled(Base)<StyledProps>`
  background: ${(props) => (props.active ? 'var(--active)' : 'none')};

  svg {
    color: var(--fg);
  }
`

const Outlined = styled(Base)<StyledProps>`
  color: var(--fg);
  border: 2px solid var(--sg);

  svg {
    color: var(--fg);
  }
`

const Void = styled(Base)<StyledProps>`
  background: none;
  border: none;
  padding: 0;
  height: auto;

  svg {
    margin: 0;
    color: var(--fg);
  }

  &:active {
    transform: none;
  }
`

export const S = {
  Filled,
  Alt,
  Outlined,
  Void
}
