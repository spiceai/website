import Image from 'next/image'

import { Title } from 'components/atoms/title/title'
import { Button } from 'components/atoms/button/button'
import { Container } from 'components/atoms/container/container'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Breakdown } from 'components/atoms/breakdown/breakdown'

export const HeroPlayground = () => {
  return (
    <section className='relative pt-10 md:pt-12'>
      <Container>
        <div className='relative z-10 overflow-hidden rounded-lg border border-alpha-150 bg-neutral px-6 py-8 shadow-box md:px-20 md:pb-14 md:pt-20'>
          <Title
            as='h1'
            variant={'large'}
            className='mx-auto mb-6 mt-7 md:mt-0 md:text-center xl:max-w-[1020px]'
          >
            Spice is a powerful, portable{' '}
            <span className='text-primary'>runtime for developers.</span>
          </Title>

          <Paragraph className='mb-6 md:text-center'>
            Unified SQL Interface for effortlessly materializing, accelerating, and querying data
            from any database, data warehouse, or data lake.
          </Paragraph>

          <div className='mb-14 grid grid-cols-2 items-center justify-center gap-3 md:flex'>
            <Button
              href='https://docs.spiceai.org/installation'
              target='_blank'
              rel='noopener noreferrer'
              variant={'primary'}
              className='border border-alpha-900 hover:border-primary'
            >
              Installation
            </Button>
            <Button
              href='https://docs.spiceai.org'
              target='_blank'
              rel='noopener noreferrer'
              variant={'secondary'}
            >
              Documentation
            </Button>
          </div>

          {/* <HeroPlaygroundOptions /> */}
          <Breakdown />

          <div className='hidden pt-14 md:block'>
            <Paragraph variant={'small'} className='mb-4 text-center'>
              Accelerating 🚀
            </Paragraph>
            <div className='flex items-center justify-center gap-10'>
              <Image
                src={'/accelerating-one.png'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-7 w-auto object-contain'
              />
              <Image
                src={'/accelerating-two.png'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-4 w-auto object-contain'
              />
              <Image
                src={'/accelerating-three.png'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='relative bottom-1 h-8 w-auto object-contain'
              />
            </div>
          </div>
        </div>
      </Container>

      <Background />
    </section>
  )
}

const Background = () => {
  return (
    <div className='absolute left-0 top-0 hidden h-[95%] w-full md:block'>
      <div className='flex h-full w-full flex-wrap gap-4 overflow-hidden'>
        {Array.from({ length: 130 }).map((_, index) => (
          <Line key={index} />
        ))}
      </div>
      <div className='absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-neutral-50' />
    </div>
  )
}

const Line = () => {
  return <div className='h-full w-px bg-alpha-50' />
}
