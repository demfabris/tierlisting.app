import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div<StyledProps>`
  position: relative;
  width: calc(80px - 4px);
  height: calc(80px - 4px);
  border-radius: 2px;
  background: green;

  opacity: ${(props) => (props.editing ? '0.5' : '1')};
  font-size: 10px;
  text-overflow: clip;
`

const Remove = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const S = {
  Container,
  Remove
}
