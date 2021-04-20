export function destroy<T>(element: T, state: Set<T>): Set<T> {
  const _s = state
  _s.delete(element)

  console.log(_s)

  return new Set(_s)
}

export function append<T>(element: T, state: Set<T>): Set<T> {
  const _s = state.add(element)

  return new Set(_s)
}

export function reorder<T>(state: Set<T>, start: number, end?: number): Set<T> {
  if (end === undefined) return state

  const result = Array.from(state)
  const [removed] = result.splice(start, 1)
  result.splice(end!, 0, removed)

  return new Set(result)
}
