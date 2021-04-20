import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const ItemsContainer = styled.div`
  display: grid;
  position: relative;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(5em, 5.25em));
  grid-auto-rows: 5.25em;
  grid-gap: 10px;
  height: 15em;
  width: 100%;
  overflow-y: auto;

  box-shadow: ${(props) => props.theme.shadows.hard};
  border: 2px solid var(--fg);
  border-radius: 2px;

  &::before {
    display: flex;
    content: 'Add items to start ranking';
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;

    font: ${(props) => props.theme.font.medium};
    color: var(--disabled);
  }
`

const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  cursor: pointer;

  border: 2px solid var(--fg);
  border-radius: 2px;
`

export const S = {
  Container,
  Items: {
    Container: ItemsContainer,
    Add
  }
}
