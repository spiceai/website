import { Button } from 'components/atoms/button/button'
import { Container } from 'components/atoms/container/container'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Title } from 'components/atoms/title/title'

export const HeroPlayground = () => {
  return (
    <section className='pt-12'>
      <Container>
        <div className='shadow-box relative overflow-hidden rounded-lg border border-alpha-150 bg-neutral px-4 py-8 md:px-20 md:pt-20'>
          <Title variant={'large'} className='mb-6 text-center'>
            Spice is a powerful, portable{' '}
            <span className='text-primary'>runtime for developers.</span>
          </Title>

          <Paragraph className='mb-6 text-center'>
            Unified SQL Interface for effortlessly materializing, accelerating, and querying data
            from any database, data warehouse, or data lake.
          </Paragraph>

          <div className='flex items-center justify-center gap-3'>
            <Button variant={'primary'} className='border border-alpha-900 hover:border-primary'>
              Installation
            </Button>
            <Button variant={'secondary'}>Documentation</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
