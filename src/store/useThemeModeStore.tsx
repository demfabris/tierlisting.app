import create from 'zustand'

enum ThemeModes {
  Light,
  Dark
}

type ThemeModeState = {
  mode: ThemeModes
  toggleThemeMode: () => void
}

export const useThemeModeStore = create<ThemeModeState>((set) => ({
  mode: ThemeModes.Dark,
  toggleThemeMode: () =>
    set((state) => ({
      mode: state.mode === ThemeModes.Dark ? ThemeModes.Light : ThemeModes.Dark
    }))
}))
