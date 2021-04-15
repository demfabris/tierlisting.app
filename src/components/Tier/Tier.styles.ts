import styled from 'styled-components'

const Container = styled.li`
  width: 100%;
  height: 5em;
  list-style-type: none;
  border: 2px solid ${(props) => props.theme.colors.sg};
  border-radius: 2px;
  margin: 1em auto;
`

const RankContainer = styled.div`
  position: relative;
`

const RankInput = styled.textarea`
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
  text-align-last: center;
  padding-top: 1.5em;
  overflow: hidden;

  border-right: 2px solid ${(props) => props.theme.colors.sg};
  font: ${(props) => props.theme.font.regularBold};
  color: ${(props) => props.theme.colors.fg};
`

const RankEdit = styled.div`
  position: absolute;
  left: -2em;
  margin-top: -0.25em;

  svg {
    color: ${(props) => props.theme.colors.sg};
  }
`

const RankEditImage = styled(RankEdit)`
  top: 0;
`

const RankEditText = styled(RankEdit)`
  top: 1.75em;
`

const RankEditClear = styled(RankEdit)`
  top: 3.5em;
`

export const S = {
  Container,
  Rank: {
    Input: RankInput,
    Container: RankContainer,
    Edit: {
      Text: RankEditText,
      Image: RankEditImage,
      Clear: RankEditClear
    }
  }
}
