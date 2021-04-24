import Link from 'next/link'
import { useEffect } from 'react'

import { SvgPlus } from 'assets'
import { Layout, Button, Title } from 'components'

import { S } from 'styles/pages/index.styles'
import { useToggleEditStore } from 'store'

const Index = () => {
  const { editing, toggleEditing } = useToggleEditStore((state) => state)

  useEffect(() => {
    if (editing) {
      toggleEditing()
    }
  }, [])

  return (
    <Layout>
      <S.Container>
        <S.Title>
          <Title text="Create a new tierlist." />
        </S.Title>
        <S.Description>...and nothing else.</S.Description>
        <S.Button>
          <Link href="new">
            <Button.Filled>
              New tierlist
              <SvgPlus />
            </Button.Filled>
          </Link>
        </S.Button>
      </S.Container>
    </Layout>
  )
}

export default Index
