import { Container } from 'components/atoms/container/container'
import { Button } from 'components/atoms/button/button'
import { Title } from 'components/atoms/title/title'
import { TestButton } from './_landing/test-button'
import { Link } from 'components/atoms/link/link'
import { Cta } from 'components/molecules/cta/cta'

export default function LandingPage() {
  return (
    <div>
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
        </div>

        <div className='flex items-center gap-3 bg-gray-800 p-6 md:p-10'>
          <h3 className='text-primary-foreground'>Test Client component button</h3>

          <TestButton />
        </div>

        <div className='grid grid-cols-2 items-center gap-3 bg-gray-900'>
          <div className='p-10'>
            <h3 className='text-primary-foreground'>Link header</h3>
            <Link href='#'>Link</Link>
          </div>

          <div className='bg-neutral-800 p-10'>
            <h3 className='text-primary'>Link footer</h3>
            <Link href='#'>Link</Link>
          </div>
        </div>
      </Container>

      <Cta mobileFullWidth />
    </div>
  )
}
