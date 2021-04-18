import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Label = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1em;
  font: ${(props) => props.theme.font.medium};
  color: var(--fg);

  svg {
    width: 1.75em;
    height: 1.75em;
  }
`

const ToggleContainer = styled.div`
  position: relative;
`

const ToggleSlider = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 4em;
  height: 2.25em;
  border-radius: 1.5em;
  background: var(--disabled);
  cursor: pointer;

  &::after {
    content: '';
    border-radius: 50%;
    width: 1.75em;
    height: 1.75em;
    margin: 3px;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);

    background: var(--fg);
    transition: ${(props) => props.theme.transitions.fast};
  }
`
const ToggleInput = styled.input`
  opacity: 0;
  z-index: -1;
  width: 4em;
  height: 2.5em;

  &:checked + ${ToggleSlider} {
    background: var(--sg);

    &::after {
      content: '';
      border-radius: 50%;
      transform: translateX(1.875em);
    }
  }
`

export const S = {
  Container,
  Label,
  Toggle: {
    Container: ToggleContainer,
    Slider: ToggleSlider,
    Input: ToggleInput
  }
}
