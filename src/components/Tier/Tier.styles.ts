import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 5em;
  list-style-type: none;
  border-radius: 2px;
  margin: 0.25em auto;

  border: 2px solid var(--sg);
  // background: var(--bg);
  box-shadow: ${(props) => props.theme.shadows.hard};
`

const TierItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`

const TierHeadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 5em;
`

const TierHeadInput = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5em;
  border: none;
  z-index: 5;

  overflow: hidden;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  font: ${(props) => props.theme.font.regularBold};
  border-right: 2px solid var(--sg);
  color: var(--fg);
  background: var(--bg);
`

const TierHeadEditWrapper = styled.div<StyledProps>`
  position: absolute;
  display: flex;
  justify-content: space-space-between;
  height: 100%;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: scale(0.3);

  transition: ${(props) => props.theme.transitions.fast};

  ${({ editing }) => {
    if (editing) {
      return `
        transform: translateX(1.75em) scale(1);
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
