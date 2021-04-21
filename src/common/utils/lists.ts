export function destroy<T extends { id: string }>(id: string, state: T[]): T[] {
  return state.filter((element) => element.id !== id)
}

export function append<T>(newEntry: T, state: T[], index?: number): T[] {
  if (index !== undefined) {
    return [...state.slice(0, index), newEntry, ...state.slice(index)]
  } else {
    return [...state, newEntry]
  }
}

export function reorder<T>(state: T[], start: number, end?: number): T[] {
  if (end === undefined) return state

  const result = Array.from(state)
  const [removed] = result.splice(start, 1)
  result.splice(end!, 0, removed)

  return result
}
