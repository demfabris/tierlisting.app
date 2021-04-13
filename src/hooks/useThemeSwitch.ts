import { theme, darkTheme, lightTheme } from '../styles'

export function useThemeSwitch (mode: 'dark' | 'light'): AppSettings.Theme {
  const dark = { ...theme, ...darkTheme }
  const light = { ...theme, ...lightTheme }

  return dark // TODO: Watch for change
}
