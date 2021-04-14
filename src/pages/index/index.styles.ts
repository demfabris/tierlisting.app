import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Title = styled.h1`
  margin: 10vh auto;
  font: ${(props) => props.theme.font.head};
  color: ${(props) => props.theme.colors.fg};

  > b {
    color: ${(props) => props.theme.colors.sg};
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: none;
  margin: 10vh auto;
  width: 165px;
  height: 55px;
  cursor: pointer;

  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;

  border: 1px solid ${(props) => props.theme.colors.sg};
  font: ${(props) => props.theme.font.big};
  color: ${(props) => props.theme.colors.fg};

  svg {
    transition: ${(props) => props.theme.transitions.fast};
    color: ${(props) => props.theme.colors.sg};
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.sgAlt};
  }
`

export const S = {
  Container,
  Title,
  Button
}
