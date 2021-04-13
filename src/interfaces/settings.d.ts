import { theme, darkTheme, lightTheme } from '../styles'

declare namespace AppSettings {
  export type Theme = typeof theme & (typeof darkTheme | typeof lightTheme)
}

export = AppSettings
export as namespace AppSettings
