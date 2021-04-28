import styled from 'styled-components'

type StyledProps = {
  hasItems: boolean
  isDragging: boolean
  uploadDidFail: boolean
  uploadLoading: boolean
}
const Container = styled.div<StyledProps>`
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

export const S = {
  Container
}
