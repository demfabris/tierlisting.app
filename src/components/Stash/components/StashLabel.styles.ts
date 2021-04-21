import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  color: var(--disabled);
  font: ${(props) => props.theme.font.medium};
`
