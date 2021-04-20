import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div<StyledProps>`
  position: relative;
  width: 5em;
  height: 5em;
  border-radius: 2px;
  background: green;

  opacity: ${(props) => (props.editing ? '0.5' : '1')}; //for now
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
