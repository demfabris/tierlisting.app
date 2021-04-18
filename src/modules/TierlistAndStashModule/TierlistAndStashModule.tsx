import { useCallback, useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { nanoid as uuid } from 'nanoid'

import { append, reorder, destroy } from 'common/utils'
import { Stash, Tierlist } from 'components'

import { S } from './TierlistAndStashModule.styles'

export const TierlistAndStashModule = () => {
  const [tiers, setTiers] = useState<App.Tierlist>([])
  const [stash, setStash] = useState<App.Items>([])

  const newTier = useCallback(() => ({ id: uuid(), items: [] }), [])

  const handleAppendTier = useCallback(
    () => setTiers((state) => append(newTier(), state)),
    []
  )
  const handleDestroyTier = useCallback(
    (id: string) => setTiers((state) => destroy(id, state)),
    []
  )

  const handleAddItemToStash = useCallback(
    () =>
      setStash((state) => [
        ...state,
        { id: uuid(), url: new URL('https://google.com') }
      ]),
    []
  )

  useEffect(() => {
    setTiers((state) => append(newTier(), state))
  }, [])

  return (
    <S.Container>
      <DragDropContext
        onDragEnd={(event) => {
          setTiers(reorder(tiers, event.source.index, event.destination?.index))
        }}
      >
        <S.Tierlist>
          <Tierlist
            tiers={tiers}
            handleAppendTier={handleAppendTier}
            handleDestroyTier={handleDestroyTier}
          />
        </S.Tierlist>
        <S.Stash>
          <Stash stash={stash} handleAddItemToStash={handleAddItemToStash} />
        </S.Stash>
      </DragDropContext>
    </S.Container>
  )
}
