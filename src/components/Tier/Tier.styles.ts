import styled from 'styled-components'

const Container = styled.li`
  width: 100%;
  height: 5em;
  list-style-type: none;
  border-radius: 2px;
  margin: 0.5em auto;

  border: 2px solid ${(props) => props.theme.colors.sg};
  box-shadow: ${(props) => props.theme.shadows.hard};
`

const TierHeadContainer = styled.div`
  position: relative;
`

const TierHeadInput = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5em;
  border: none;
  background: none;

  resize: none;
  white-space: normal;
  text-align: justify;
  padding-left: 1em;
  padding-right: 0.5em;
  padding-top: 1.5em;
  overflow: hidden;

  border-right: 2px solid ${(props) => props.theme.colors.sg};
  font: ${(props) => props.theme.font.regularBold};
  color: ${(props) => props.theme.colors.fg};
`

const TierHeadEdit = styled.div`
  position: absolute;
  left: -2em;
  margin-top: -0.25em;

  svg {
    color: ${(props) => props.theme.colors.sg};
  }
`

const TierHeadEditImage = styled(TierHeadEdit)`
  top: 0;
`

const TierHeadEditText = styled(TierHeadEdit)`
  top: 1.75em;
`

const TierHeadEditClear = styled(TierHeadEdit)`
  top: 3.5em;
`

export const S = {
  Container,
  TierHead: {
    Input: TierHeadInput,
    Container: TierHeadContainer,
    Edit: {
      Text: TierHeadEditText,
      Image: TierHeadEditImage,
      Clear: TierHeadEditClear
    }
  }
}
