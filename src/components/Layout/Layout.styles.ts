import styled from 'styled-components'

const View = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  background-color: var(--bg);
  background-repeat: no-repeat;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 900px;
  margin: 0 2em;
`

export const S = {
  View,
  Container
}
