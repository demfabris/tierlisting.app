import styled from 'styled-components'

type StyledProps = {
  hasItems: boolean
  isDragging: boolean
  uploadDidFail: boolean
  uploadLoading: boolean
}
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

const UploadContainer = styled.div<StyledProps>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5em, 1fr));
  overflow-y: auto;
  gap: 10px;
  width: 100%;
  height: 12em;
  padding: 1em;
  margin-top: 1em;

  background: var(--faded);
  border: ${(props) => props.theme.borders.shape} var(--bg);
  border-radius: ${(props) => props.theme.borders.radius.default};
  box-shadow: ${(props) => props.theme.shadows.insetSoft};

  &::before {
    content: 'Drop images here or click to upload.';
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;

    display: ${(props) => (props.hasItems ? 'none' : 'flex')};
    cursor: ${(props) => (props.hasItems ? 'default' : 'pointer')};
    font: ${(props) => props.theme.font.small};
    color: var(--fg);

    ${({ uploadLoading }) => {
      if (uploadLoading) {
        return `
          display: none;
        `
      }
    }}
  }

  ${({ isDragging, theme }) => {
    if (isDragging) {
      return `
        border: ${theme.borders.shape} var(--sg);
      `
    }
  }}

  ${({ uploadDidFail }) => {
    if (uploadDidFail) {
      return `
        border-color: var(--hg);
      `
    }
  }}
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
    Container: UploadContainer,
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
