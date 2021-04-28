import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div`
  position: relative;
  width: 5em;
  height: 5em;
  min-width: 5em;
  min-height: 5em;
  z-index: 999;
`

const Remove = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }
`

const Thumbnail = styled.img<StyledProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: ${(props) => (props.editing ? 'brightness(60%)' : '')};
`

export const S = {
  Container,
  Remove,
  Thumbnail
}
