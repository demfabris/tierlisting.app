import create from 'zustand'

type ToggleEditState = {
  editing: boolean
  toggleEditing: () => void
}

export const useToggleEditStore = create<ToggleEditState>((set) => ({
  editing: false,
  toggleEditing: () => set((state) => ({ editing: !state.editing }))
}))
