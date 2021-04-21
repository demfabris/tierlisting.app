import { theme, darkTheme } from '../styles'

export function useThemeSwitch(mode: 'dark' | 'light'): AppSettings.Theme {
  const dark = { ...theme, ...darkTheme }
  // const light = { ...theme, ...lightTheme }

  if (mode === 'dark') {
    return dark
  } else {
    return dark // TODO: Watch for change
  }
}
