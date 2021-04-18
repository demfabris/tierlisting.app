import { Droppable } from 'react-beautiful-dnd'

import { Button, Tier } from 'components'
import { SvgPlus } from 'assets'
import { S } from './Tierlist.styles'

interface Props {
  tiers: App.Tierlist
  handleAppendTier: () => void
  handleDestroyTier: (id: string) => void
}
export const Tierlist = ({
  tiers,
  handleAppendTier,
  handleDestroyTier
}: Props) => {
  return (
    <>
      <Droppable droppableId="tierlist">
        {({ droppableProps, innerRef, placeholder }) => (
          <S.Container ref={innerRef} {...droppableProps}>
            {tiers.map(({ id, items }, index) => (
              <Tier
                id={id}
                key={id}
                index={index}
                items={items}
                handleDestroyTier={() => handleDestroyTier(id)}
              />
            ))}
            {placeholder}
          </S.Container>
        )}
      </Droppable>
      <S.Button>
        <Button.Outlined onClick={() => handleAppendTier()}>
          Add tier
          <SvgPlus />
        </Button.Outlined>
      </S.Button>
    </>
  )
}
