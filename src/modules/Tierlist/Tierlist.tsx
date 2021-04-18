import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { append, destroy, reorder } from 'common/utils'
import { Button, Tier } from 'components'
import { SvgPlus } from 'assets'
import { S } from './Tierlist.styles'

interface Tier {
  id: number
  items: string[]
}
export const Tierlist = () => {
  const [tiers, setTiers] = useState<Tier[]>([{ id: 0, items: [] }])

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
                  key={id}
                  id={id}
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
          onClick={() =>
            setTiers((state) => append({ id: state.length, items: [] }, state))
          }
        >
          Add tier
          <SvgPlus />
        </Button.Outlined>
      </S.Button>
    </>
  )
}
