import { theme, darkTheme, lightTheme } from 'styles'

declare namespace AppSettings {
  type Base = typeof theme
  type Variation = typeof darkTheme & typeof lightTheme

  type Theme = Base & Variation

  export interface CurrentTheme extends Theme {}
}

export = AppSettings
export as namespace AppSettings
