import { SvgPlus } from 'assets'
import { Button, Tier } from 'components'
import { useState } from 'react'
import { S } from './Tierlist.styles'

interface Tier {
  _id: number
  items: string[]
}

export const Tierlist = () => {
  const [tiers, setTiers] = useState<Tier[]>([{ _id: 0, items: [] }])

  const destroy = (_id: number) => {
    setTiers((state) => state.filter((tier) => tier._id !== _id))
  }

  const append = () => {
    setTiers((state) => [...state, { _id: state.length, items: [] }])
  }

  return (
    <>
      <S.Container>
        {tiers.map(({ items }, idx) => (
          <Tier
            key={idx}
            _id={idx}
            items={items}
            destroy={() => destroy(idx)}
          />
        ))}
      </S.Container>
      <S.Button>
        <Button.Outlined iconSize="1.35em" onClick={() => append()}>
          Add tier
          <SvgPlus />
        </Button.Outlined>
      </S.Button>
    </>
  )
}
