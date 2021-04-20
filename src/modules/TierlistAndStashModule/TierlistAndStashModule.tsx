import { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { nanoid as uuid } from 'nanoid'

import { append, reorder, destroy } from 'common/utils/sets'

import { Stash, Tierlist } from 'components'

import { S } from './TierlistAndStashModule.styles'

export const TierlistAndStashModule = () => {
  const [tiers, setTiers] = useState<App.Tierlist>(new Set())
  const [stashItems, setStashItems] = useState<App.Items>(new Set())

  function handleAppendTier() {
    setTiers((state) => append({ id: uuid(), items: new Set() }, state))
  }

  function handleRemoveTier(element: App.Tier) {
    setTiers((state) => {
      if (element) {
        return destroy(element, state)
      } else {
        return state
      }
    })
  }

  function handleReorderTiers(sourceIndex: number, destinationIndex?: number) {
    setTiers((state) => reorder(state, sourceIndex, destinationIndex))
  }

  function handleAddItemToTier(
    targetId: string,
    index: number,
    element: App.Item
  ) {
    setTiers((state) => {
      const target = Array.from(state).find((tier) => tier.id === targetId)!
      target.items = append(element, target.items, index)

      return new Set([...state, target])
    })
  }

  function handleReorderStash(sourceIndex: number, destinationIndex?: number) {
    setStashItems((state) => reorder(state, sourceIndex, destinationIndex))
  }

  function handleAddItemToStash() {
    setStashItems((state) =>
      append({ id: uuid(), url: new URL('https://archlinux.org') }, state)
    )
  }

  function handleRemoveItemFromStash(element: App.Item) {
    setStashItems((state) => destroy(element, state))
  }

  useEffect(() => {
    console.log(tiers)
  }, [tiers])

  return (
    <S.Container>
      <DragDropContext
        onDragEnd={(event) => {
          const originId = event.source.droppableId
          const targetId = event.destination?.droppableId

          if (targetId === undefined) {
            return void null
          }

          if (originId === 'tierlist') {
            // Moving tier from tierlist to tierlist
            handleReorderTiers(event.source.index, event.destination?.index)
          }

          if (originId === 'stash') {
            if (targetId === 'stash') {
              // Moving item from stash to stash
              handleReorderStash(event.source.index, event.destination?.index)

              return void null
            }

            console.log({ src: event.source, dest: event.destination })
            const movedItem = Array.from(stashItems)[event.source.index]
            handleAddItemToTier(targetId!, event.destination!.index, movedItem)
            handleRemoveItemFromStash(movedItem)
          }

          if (targetId === 'stash') {
            // Moving item from tierlist to stash
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
            stashItems={stashItems}
            handleAddItemToStash={handleAddItemToStash}
            handleRemoveItemFromStash={handleRemoveItemFromStash}
          />
        </S.Stash>
      </DragDropContext>
    </S.Container>
  )
}
