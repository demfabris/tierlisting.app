import create from 'zustand'

type ToggleEditState = {
  editing: boolean
  toggle: (state: boolean) => void
}

export const useToggleEditStore = create<ToggleEditState>((set) => ({
  editing: false,
  toggle: () => set((state) => ({ editing: !state.editing }))
}))
