import Link from 'next/link'

import { Button } from 'components'
import { useThemeModeStore } from 'store'
import { SvgHelpCircle, SvgLogo, SvgMoon, SvgSun } from 'assets'

import { S } from './Header.styles'

export const Header = () => {
  const { mode, toggleThemeMode } = useThemeModeStore((state) => state)

  return (
    <S.Container>
      <Link href="/">
        <S.Logo.Container>
          <SvgLogo />
          <S.Logo.Text>
            tierlist<b>.app</b>
          </S.Logo.Text>
        </S.Logo.Container>
      </Link>
      <S.Navigation.Container>
        <Button.Void iconSize="1.75em" onClick={toggleThemeMode}>
          {mode ? <SvgSun /> : <SvgMoon />}
        </Button.Void>
        <Button.Void iconSize="1.75em">
          <SvgHelpCircle />
        </Button.Void>
      </S.Navigation.Container>
    </S.Container>
  )
}
