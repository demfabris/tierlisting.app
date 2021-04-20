import { useCallback, useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { nanoid as uuid } from 'nanoid'

import { append, reorder, destroy } from 'common/utils/sets'
import { Stash, Tierlist } from 'components'

import { S } from './TierlistAndStashModule.styles'

export const TierlistAndStashModule = () => {
  const [tiers, setTiers] = useState<App.Tierlist>(new Set())
  const [items, setItems] = useState<App.Items>(new Set())

  const handleAppendTier = useCallback(
    () => setTiers((state) => append({ id: uuid(), items: new Set() }, state)),
    []
  )

  const handleRemoveTier = useCallback(
    (element: App.Tier) => setTiers((state) => destroy(element, state)),
    []
  )

  const handleAddItemToStash = useCallback(
    () =>
      setItems((state) =>
        append({ id: uuid(), url: new URL('https://archlinux.org') }, state)
      ),
    []
  )

  const handleRemoveItemFromStash = useCallback(
    (element: App.Item) =>
      setItems((state) => {
        console.log(state, element)
        return destroy(element, state)
      }),
    []
  )

  useEffect(() => {
    handleAppendTier()
  }, [])

  return (
    <S.Container>
      <DragDropContext
        onDragEnd={(event) => {
          if (event.source.droppableId === 'tierlist') {
            setTiers(
              reorder(tiers, event.source.index, event.destination?.index)
            )
          }

          if (event.source.droppableId === 'stash') {
            console.log(event.destination)
            const destinationId = event.destination?.droppableId!
            // TODO: SETTIER LOGIC BUT NOW WITH SETS
          }
        }}
      >
        <S.Tierlist>
          <Tierlist
            tiers={tiers}
            handleAppendTier={handleAppendTier}
            handleRemoveTier={handleRemoveTier}
          />
        </S.Tierlist>
        <S.Stash>
          <Stash
            items={items}
            handleAddItemToStash={handleAddItemToStash}
            handleRemoveItemFromStash={handleRemoveItemFromStash}
          />
        </S.Stash>
      </DragDropContext>
    </S.Container>
  )
}
