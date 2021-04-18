export function destroy<T extends { id: string }>(id: string, state: T[]): T[] {
  return state.filter((tier) => tier.id !== id)
}

export function append<T>(newEntry: T, state: T[]): T[] {
  return [...state, newEntry]
}

export function reorder<T>(list: T[], start: number, end?: number): T[] {
  if (!end) return list

  const result = Array.from(list)
  const [removed] = result.splice(start, 1)
  result.splice(end, 0, removed)

  return result
}
