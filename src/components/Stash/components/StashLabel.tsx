import { useEffect, useState } from 'react'
import { Container } from './StashLabel.styles'

interface Props {
  editing: boolean
  itemCount: number
}
export const StashLabel = ({ editing, itemCount }: Props) => {
  const [seen, setSeen] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    switch (true) {
      case editing && itemCount === 0:
        setText('Stash is empty, add items to rank')
        break
      case editing && itemCount !== 0:
        setText('')
        setSeen(true)
        break
      case !editing && itemCount === 0 && !seen:
        setText('Toggle edit mode to begin')
        break
      case !editing && itemCount === 0 && seen:
        setText('Done')
        break
      default:
        break
    }
  }, [editing, itemCount])

  return <Container>{text}</Container>
}
