import { Button } from 'components/atoms/button/button'
import { Container } from 'components/atoms/container/container'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Title } from 'components/atoms/title/title'
import Image from 'next/image'

export const HeroPlayground = () => {
  return (
    <section className='pt-12'>
      <Container>
        <div className='shadow-box relative overflow-hidden rounded-lg border border-alpha-150 bg-neutral px-4 py-8 md:px-20 md:pb-14 md:pt-20'>
          <Title as='h1' variant={'large'} className='mb-6 text-center'>
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
          <div className='pt-14'>
            <Paragraph variant={'small'} className='mb-4 text-center'>
              Accelerating 🚀
            </Paragraph>
            <div className='flex items-center justify-center gap-10'>
              <Image
                src={'/accelerating-one.png'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-7 object-contain'
              />
              <Image
                src={'/accelerating-two.png'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-4 object-contain'
              />
              <Image
                src={'/accelerating-three.png'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='relative bottom-1 h-8 object-contain'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
