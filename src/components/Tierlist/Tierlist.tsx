import { Droppable } from 'react-beautiful-dnd'

import { Button, Tier } from 'components'
import { SvgPlus } from 'assets'
import { S } from './Tierlist.styles'
import { useToggleEditStore } from 'store'

interface Props {
  tiers: App.Tierlist
  elevatedTierId: string
  handleAppendTier: () => void
  handleRemoveTier: (id: string) => void
  handleRemoveItemFromTier: (tierId: string, itemId: string) => void
}
export const Tierlist = ({
  tiers,
  elevatedTierId,
  handleAppendTier,
  handleRemoveTier,
  handleRemoveItemFromTier
}: Props) => {
  const editing = useToggleEditStore((state) => state.editing)

  return (
    <S.Container>
      <S.Tiers.Add editing={editing}>
        <Button.Filled iconSize="1.5em" onClick={() => handleAppendTier()}>
          Add tier
          <SvgPlus />
        </Button.Filled>
      </S.Tiers.Add>
      <Droppable droppableId="tierlist" type="list">
        {({ droppableProps, innerRef, placeholder }) => (
          <S.Tiers.Container
            editing={editing}
            ref={innerRef}
            {...droppableProps}
          >
            {[...tiers].map((tier, index) => (
              <Tier
                id={tier.id}
                key={tier.id}
                index={index}
                items={tier.items}
                isElevated={elevatedTierId === `tier_${tier.id}`}
                handleRemoveTier={() => handleRemoveTier(tier.id)}
                handleRemoveItemFromTier={handleRemoveItemFromTier}
              />
            ))}
            {placeholder}
          </S.Tiers.Container>
        )}
      </Droppable>
    </S.Container>
  )
}
