import { Fragment } from 'react'
import { S } from './Spinner.styles'

interface Props {
  loading: boolean
}
export const Spinner = ({ loading }: Props) =>
  loading ? (
    <S.Container>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Container>
  ) : (
    <Fragment />
  )
