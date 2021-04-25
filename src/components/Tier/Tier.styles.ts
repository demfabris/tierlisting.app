import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 5em;
  list-style-type: none;
  margin: 0.25em auto;

  border-radius: ${(props) => props.theme.borders.radius.default};
  border: ${(props) => props.theme.borders.shape} var(--sg);
  box-shadow: ${(props) => props.theme.shadows.soft};
`

const TierItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;

  background: var(--bg);
`

const TierHeadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 5em;

  background: var(--bg);
`

const TierHeadInput = styled.span<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5em;
  border: none;
  z-index: 4;

  overflow: hidden;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;

  color: var(--fg);
  background: var(--bg);

  border-right: ${(props) => props.theme.borders.shape} var(--sg);
  font: ${(props) => props.theme.font.regularBold};
  opacity: ${(props) => (props.editing ? '0.3' : '1')};
`

const TierHeadEditWrapper = styled.div<StyledProps>`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  transform: scale(0.3);
  z-index: 5;
  opacity: 0;
  top: 0;

  transition: ${(props) => props.theme.transitions.fast};

  ${({ editing }) => {
    if (editing) {
      return `
        opacity: 1;
        transform: scale(1);
      `
    }
  }}
`

const TierMoveButtonContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1em;
  top: 0;
  height: 100%;
  z-index: 3;

  transition: ${(props) => props.theme.transitions.fast};

  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;

  ${({ editing }) => {
    if (editing) {
      return `
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      `
    }
  }}
`

export const S = {
  Container,
  TierHead: {
    Input: TierHeadInput,
    Container: TierHeadContainer,
    Edit: {
      Wrapper: TierHeadEditWrapper
    }
  },
  TierItems: {
    Container: TierItemsContainer
  },
  Move: {
    Container: TierMoveButtonContainer
  }
}
