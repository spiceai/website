import { Cta } from 'components/molecules/cta/cta'
import { Install } from 'components/organisms/install/install'
import { Container } from 'components/atoms/container/container'
import { Features } from 'components/organisms/features/features'
import { Articles } from 'components/organisms/articles/articles'
import { UseCases } from 'components/organisms/use-cases/use-cases'
import { BeforeAndAfter } from 'components/organisms/before-and-after/before-and-after'
import { HeroPlayground } from 'components/organisms/hero-playground/hero-playground'

export default function LandingPage() {
  return (
    <>
      <HeroPlayground />
      <Container>
        <Features />
        <UseCases />
      </Container>

      <BeforeAndAfter />

      <Container>
        <Install />

        <Articles />
      </Container>

      <Cta />
    </>
  )
}
