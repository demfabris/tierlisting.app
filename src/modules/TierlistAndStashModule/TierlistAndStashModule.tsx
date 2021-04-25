import { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { nanoid as uuid } from 'nanoid'

import { append, reorder, destroy } from 'common/utils'

import { Stash, Tierlist } from 'components'

import { S } from './TierlistAndStashModule.styles'

export const TierlistAndStashModule = () => {
  const [tiers, setTiers] = useState<App.Tierlist>([])
  const [stashItems, setStashItems] = useState<App.Items>([])

  function handleAppendTier() {
    setTiers((state) => append({ id: uuid(), items: [] }, state))
  }

  function handleRemoveTier(tierId: string) {
    setTiers((state) => destroy(tierId, state))
  }

  function handleReorderTiers(sourceIndex: number, destinationIndex?: number) {
    setTiers((state) => reorder(state, sourceIndex, destinationIndex))
  }

  function handleReorderItemsInTier(
    targetTierId: string,
    sourceIndex: number,
    destinationIndex?: number
  ) {
    setTiers((state) =>
      state.map((tier) => {
        if (`tier_${tier.id}` === targetTierId) {
          tier.items = reorder(tier.items, sourceIndex, destinationIndex)
        }

        return tier
      })
    )
  }

  function handleAddItemToTier(
    targetTierId: string,
    item: App.Item,
    index: number
  ) {
    setTiers((state) =>
      state.map((tier) => {
        if (`tier_${tier.id}` === targetTierId) {
          tier.items = append(item, tier.items, index)
        }

        return tier
      })
    )
  }

  function handleRemoveItemFromTier(targetTierId: string, itemId: string) {
    setTiers((state) =>
      state.map((tier) => {
        if (`tier_${tier.id}` === targetTierId) {
          tier.items = destroy(itemId, tier.items)
        }

        return tier
      })
    )
  }

  function handleReorderStash(sourceIndex: number, destinationIndex?: number) {
    setStashItems((state) => reorder(state, sourceIndex, destinationIndex))
  }

  function handleAddItemToStash(item: App.Item, index?: number) {
    setStashItems((state) => append(item, state, index))
  }

  function handleRemoveItemFromStash(itemId: string) {
    setStashItems((state) => destroy(itemId, state))
  }

  useEffect(() => {
    handleAppendTier()
  }, [])

  return (
    <S.Container>
      <DragDropContext
        onDragEnd={(event) => {
          const originId = event.source.droppableId
          const targetId = event.destination?.droppableId

          // Dropped outisde valid container
          if (targetId === undefined) {
            return void null
          }

          // Moving tier from tierlist to tierlist
          if (originId === 'tierlist') {
            handleReorderTiers(event.source.index, event.destination?.index)

            return void null
          }

          // Moving item from stash to stash
          if (originId === 'stash' && targetId === 'stash') {
            handleReorderStash(event.source.index, event.destination?.index)

            return void null
          }

          // Moving item from stash to tier
          if (originId === 'stash' && targetId.includes('tier_')) {
            const movedItem = stashItems[event.source.index]

            handleAddItemToTier(targetId, movedItem, event.destination!.index)
            handleRemoveItemFromStash(movedItem.id)

            return void null
          }

          // Moving item from tier to same tier
          if (originId === targetId) {
            const movedItem = tiers.find(
              (tier) => `tier_${tier.id}` === originId
            )?.items[event.source.index]

            if (movedItem) {
              handleReorderItemsInTier(
                targetId,
                event.source.index,
                event.destination!.index
              )
            }

            return void null
          }

          // Moving item from tier to tier
          if (originId.includes('tier_') && targetId.includes('tier_')) {
            const movedItem = tiers.find(
              (tier) => `tier_${tier.id}` === originId
            )?.items[event.source.index]

            if (movedItem) {
              handleAddItemToTier(targetId, movedItem, event.destination!.index)
              handleRemoveItemFromTier(originId, movedItem.id)
            }

            return void null
          }

          // Moving item from tierlist to stash
          if (originId.includes('tier_') && targetId === 'stash') {
            const movedItem = tiers.find(
              (tier) => `tier_${tier.id}` === originId
            )?.items[event.source.index]

            if (movedItem) {
              handleAddItemToStash(movedItem, event.destination!.index)
              handleRemoveItemFromTier(originId, movedItem.id)
            }

            return void null
          }
        }}
      >
        <S.Tierlist>
          <Tierlist
            tiers={tiers}
            handleAppendTier={handleAppendTier}
            handleRemoveTier={handleRemoveTier}
            handleRemoveItemFromTier={handleRemoveItemFromTier}
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
