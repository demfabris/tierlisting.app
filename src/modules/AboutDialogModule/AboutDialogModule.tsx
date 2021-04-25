import { SvgLogo } from 'assets'
import Link from 'next/link'
import { S } from './AboutDialogModule.styles'

export const AboutDialogModule = () => (
  <S.Container>
    <S.Title>About</S.Title>
    <S.Info.Container>
      <S.Info.Logo>
        <SvgLogo width="3em" height="3em" />
      </S.Info.Logo>
      <S.Info.Text>
        Tierlisting.app is free and open source. Feel free to contribute in any
        way you can.
      </S.Info.Text>
      <S.Info.Links>
        <Link href="https://github.com/fabricio7p/tierlisting.app/projects">
          How?
        </Link>
      </S.Info.Links>
    </S.Info.Container>
  </S.Container>
)
