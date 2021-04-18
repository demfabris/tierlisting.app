import { useCallback, useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { nanoid as uuid } from 'nanoid'

import { append, destroy, reorder } from 'common/utils'
import { Button, Tier } from 'components'
import { SvgPlus } from 'assets'
import { S } from './Tierlist.styles'

interface Tier {
  id: string
  items: string[]
}
export const Tierlist = () => {
  const [tiers, setTiers] = useState<Tier[]>([])

  const newTier = useCallback(() => ({ id: uuid(), items: [] }), [])

  useEffect(() => {
    setTiers((state) => append(newTier(), state))
  }, [])

  return (
    <>
      <DragDropContext
        onDragEnd={(event) => {
          setTiers(reorder(tiers, event.source.index, event.destination?.index))
        }}
      >
        <Droppable droppableId="tierlist">
          {({ droppableProps, innerRef, placeholder }) => (
            <S.Container ref={innerRef} {...droppableProps}>
              {tiers.map(({ id, items }, index) => (
                <Tier
                  id={id}
                  key={id}
                  index={index}
                  items={items}
                  destroy={() => setTiers((state) => destroy(id, state))}
                />
              ))}
              {placeholder}
            </S.Container>
          )}
        </Droppable>
      </DragDropContext>
      <S.Button>
        <Button.Outlined
          onClick={() => setTiers((state) => append(newTier(), state))}
        >
          Add tier
          <SvgPlus />
        </Button.Outlined>
      </S.Button>
    </>
  )
}
