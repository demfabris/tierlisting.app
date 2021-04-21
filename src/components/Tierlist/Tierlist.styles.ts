import styled from 'styled-components'

type StyledProps = { editing: boolean }
const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const TierContainer = styled.ul<StyledProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  transition: ${(props) => props.theme.transitions.fast};

  ${({ editing }) => {
    if (editing) {
      return `
        margin-top: 4em;
      `
    }
  }}
`

const AddTierButton = styled.div<StyledProps>`
  position: absolute;
  transform: translateY(2em);
  left: 0;
  opacity: 0;
  z-index: 0;

  transition: ${(props) => props.theme.transitions.fast};
  font: ${(props) => props.theme.font.small};

  ${({ editing }) => {
    if (editing) {
      return `
        opacity: 1;
        transform: translateY(0);     
      `
    }
  }}
`

export const S = {
  Container,
  Tiers: {
    Container: TierContainer,
    Add: AddTierButton
  }
}
