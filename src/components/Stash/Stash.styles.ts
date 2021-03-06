import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 3em;
`

const ItemsContainer = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5.25em, 1fr));
  height: 15em;
  row-gap: 10px;
  padding: 0.25em;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--bg);

  border-radius: ${(props) => props.theme.borders.radius.default};
  border: ${(props) => props.theme.borders.shape} var(--faded);
  transition: ${(props) => props.theme.transitions.fast};

  ${({ editing, theme }) => {
    if (editing) {
      return `
        transform: translateY(4.25em);
        box-shadow: ${theme.shadows.soft};
        border: ${theme.borders.shape} var(--disabled);
      `
    }
  }}
`

const Add = styled.div<StyledProps>`
  position: absolute;
  z-index: 0;
  opacity: 0;
  transform: translateY(6em);

  transition: ${(props) => props.theme.transitions.fast};
  font: ${(props) => props.theme.font.small};

  ${({ editing }) => {
    if (editing) {
      return `
        transform: translateY(0em);
        opacity: 1;
      `
    }
  }}
`

export const S = {
  Container,
  Items: {
    Container: ItemsContainer,
    Add
  }
}
