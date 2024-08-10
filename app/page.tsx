import { Container } from 'components/atoms/container/container'
import { Button } from 'components/atoms/button/button'
import { Title } from 'components/atoms/title/title'
import { TestButton } from './_landing/test-button'
import { Cta } from 'components/molecules/cta/cta'
import { Article } from 'components/molecules/article/article'
import { Articles } from 'components/organisms/articles/articles'

export default function LandingPage() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Container>
        <Title className='mb-5'>Landing Page</Title>

        <div className='hidden items-center gap-3 bg-gray-700 p-10 sm:flex'>
          <Button href='/page-2' size='lg' variant='brandOutline'>
            Brand Outline - Link
          </Button>
          <Button variant='brand'>Brand Medium</Button>
          <Button variant='primary'>Primary Medium</Button>
          <Button variant='secondary'>Secondary Medium</Button>
          <Button variant='negative' size='sm'>
            Negative Small
          </Button>
          <div className='rounded-sm bg-neutral p-10'>
            <Button variant='tag' size='sm'>
              Tag button
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-3 bg-gray-800 p-6 md:p-10'>
          <h3 className=''>Test Client component button</h3>

          <TestButton />
        </div>

        <div className='grid grid-cols-2 items-center gap-3 bg-gray-900'>
          <div className='p-10'>
            <h3 className='text-primary-foreground'>Link header</h3>
            <Button href='/page-2' variant='linkSmall'>
              Link
            </Button>
          </div>
          <div className='bg-neutral p-10'>
            <h3 className='text-primary'>Link footer</h3>

            <Button href='/page-2' variant='linkLarge'>
              Link
            </Button>
          </div>
        </div>

        <Articles />
      </Container>

      <Cta mobileFullWidth />
    </div>
  )
}
