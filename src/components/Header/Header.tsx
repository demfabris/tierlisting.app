import Link from 'next/link'
import { SvgHelpCircle, SvgLogo, SvgMoon } from 'assets'

import { S } from './Header.styles'
import { Button } from 'components'

export const Header = () => {
  return (
    <S.Container>
      <Link href="#">
        <S.Logo.Container>
          <SvgLogo />
          <S.Logo.Text>
            tierlist<b>.app</b>
          </S.Logo.Text>
        </S.Logo.Container>
      </Link>
      <S.Navigation.Container>
        <Button alt iconSize="1.75em" onClick={() => alert('oi')}>
          <SvgMoon />
        </Button>
        <Button alt iconSize="1.75em">
          <SvgHelpCircle />
        </Button>
      </S.Navigation.Container>
    </S.Container>
  )
}
