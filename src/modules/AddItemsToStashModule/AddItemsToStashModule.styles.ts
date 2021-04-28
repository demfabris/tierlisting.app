import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
  font: ${(props) => props.theme.font.medium};
  color: var(--fg);
`

const Label = styled.span`
  position: relative;
  font: ${(props) => props.theme.font.regular};
  color: var(--sg);
`

const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3em;
  width: 100%;
`

const UploadSpinner = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  pointer-events: none;
`

const UploadItemContainer = styled.div`
  position: relative;
`

const UploadItem = styled.img`
  width: 5em;
  height: 5em;
  object-fit: contain;

  background: black;
  box-shadow: ${(props) => props.theme.shadows.soft};
`

const UploadButtonContinue = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 2.5em;

  font: ${(props) => props.theme.font.small};
`

const UploadButtonReset = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;

  font: ${(props) => props.theme.font.little};

  * {
    color: var(--hg);
  }
`

export const S = {
  Container,
  Title,
  Label,
  Upload: {
    Wrapper: UploadWrapper,
    Spinner: UploadSpinner,
    Item: {
      Container: UploadItemContainer,
      Image: UploadItem
    },
    Button: {
      Continue: UploadButtonContinue,
      Reset: UploadButtonReset
    }
  }
}
