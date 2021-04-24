import { theme, darkTheme, lightTheme } from 'styles'

enum ThemeModes {
  Light,
  Dark
}

export function useThemeAssemble(mode: ThemeModes): AppSettings.Theme {
  const dark = { ...theme, ...darkTheme }
  const light = { ...theme, ...lightTheme }

  if (mode === ThemeModes.Dark) {
    return dark
  } else {
    return light
  }
}
