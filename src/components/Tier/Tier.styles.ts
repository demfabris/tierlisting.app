import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.li<StyledProps>`
  width: 100%;
  height: 5em;
  list-style-type: none;
  border-radius: 2px;
  margin: 0.25em auto;

  border: 2px solid var(--sg);
  transform-origin: left;
  box-shadow: ${(props) => props.theme.shadows.hard};

  ${({ editing }) => {
    if (editing) {
      return `
        transform: translateX(2em);
        margin-left: 0;
      `
    }
  }}
`

const TierHeadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
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
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: scale(0.3);

  ${({ editing }) => {
    if (editing) {
      return `
      transform: translateX(-2em) scale(1);
    `
    }
  }}
`

const TierMoveButtonContainer = styled.div<StyledProps>`
  align-items: center;
  position: absolute;
  right: 1em;
  top: 0;
  height: 100%;

  display: ${(props) => (props.editing ? 'flex' : 'none')};
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
  Move: {
    Container: TierMoveButtonContainer
  }
}
