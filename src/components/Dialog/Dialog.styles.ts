import styled from 'styled-components'

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.5);
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 30em;
  max-width: 90vw;
  padding: 2em;
  animation: SnapIn ${(props) => props.theme.transitions.fast} forwards;

  background: var(--bg);
  border-radius: ${(props) => props.theme.borders.radius.large};
  box-shadow: ${(props) => props.theme.shadows.ultra};

  @keyframes SnapIn {
    from {
      opacity: 0;
      transform: translateY(-5em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Button = styled.div`
  position: absolute;
  right: 2em;
  top: 2em;
`

export const S = {
  Overlay,
  Container,
  Button
}
