import { Droppable } from 'react-beautiful-dnd'

import { Button, Tier } from 'components'
import { SvgPlus } from 'assets'
import { S } from './Tierlist.styles'
import { useToggleEditStore } from 'store'
import { Fragment } from 'react'

interface Props {
  tiers: App.Tierlist
  handleAppendTier: () => void
  handleRemoveTier: (id: string) => void
}
export const Tierlist = ({
  tiers,
  handleAppendTier,
  handleRemoveTier
}: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <>
      <Droppable droppableId="tierlist" type="list">
        {({ droppableProps, innerRef, placeholder }) => (
          <S.Container ref={innerRef} {...droppableProps}>
            {[...tiers].map((tier, index) => (
              <Tier
                id={tier.id}
                key={tier.id}
                index={index}
                items={tier.items}
                handleRemoveTier={() => handleRemoveTier(tier.id)}
              />
            ))}
            {placeholder}
          </S.Container>
        )}
      </Droppable>
      {editing ? (
        <S.Button>
          <Button.Void iconSize="1.75em" onClick={() => handleAppendTier()}>
            <SvgPlus />
          </Button.Void>
        </S.Button>
      ) : (
        <Fragment />
      )}
    </>
  )
}
