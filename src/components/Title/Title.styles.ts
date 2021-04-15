import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Input = styled.textarea`
  text-align: center;
  background: none;
  width: 100%;
  height: 1.5em;
  border: none;
  resize: none;
  overflow: hidden;

  font: ${(props) => props.theme.font.head};
  color: ${(props) => props.theme.colors.fg};
`

const Edit = styled.div`
  position: absolute;
  top: -2.5em;
`

export const S = {
  Container,
  Input,
  Edit
}
