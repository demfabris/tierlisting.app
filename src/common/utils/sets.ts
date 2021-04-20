export function destroy<T>(element: T, state: Set<T>): Set<T> {
  const _s = state
  _s.delete(element)

  return new Set(_s)
}

export function append<T>(element: T, state: Set<T>, index?: number): Set<T> {
  let _s: Array<T>

  if (index !== undefined) {
    _s = [
      ...Array.from(state).slice(0, index),
      element,
      ...Array.from(state).slice(index)
    ]
  } else {
    _s = Array.from(state.add(element))
  }

  return new Set(_s)
}

export function reorder<T>(state: Set<T>, start: number, end?: number): Set<T> {
  if (end === undefined) return state

  const result = Array.from(state)
  const [removed] = result.splice(start, 1)
  result.splice(end!, 0, removed)

  return new Set(result)
}
