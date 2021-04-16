import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.li`
  width: 100%;
  height: 5em;
  list-style-type: none;
  border-radius: 2px;
  margin: 0.25em auto;

  border: 2px solid ${(props) => props.theme.colors.sg};
  box-shadow: ${(props) => props.theme.shadows.hard};
`

const TierHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const TierHeadInput = styled.span<StyledProps>`
  --sg: ${(props) => props.theme.colors.sg};
  --fg: ${(props) => props.theme.colors.fg};
  --bg: ${(props) => props.theme.colors.bg};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5em;
  border: none;

  overflow: hidden;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  transition: ${(props) => props.theme.transitions.fast};
  font: ${(props) => props.theme.font.regularBold};
  border-right: 2px solid var(--sg);
  color: var(--fg);
  background: var(--bg);

  transform: ${(props) => (!props.editing ? 'translateX(-2em)' : 'none')};
`

const TierHeadEditWrapper = styled.div`
  --sg: ${(props) => props.theme.colors.sg};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2em;

  border-right: 2px solid var(--sg);
`

export const S = {
  Container,
  TierHead: {
    Input: TierHeadInput,
    Container: TierHeadContainer,
    Edit: {
      Wrapper: TierHeadEditWrapper
    }
  }
}
