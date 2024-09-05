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
            Build fast <span className='text-primary'>data and AI</span> APIs.
          </Title>

          <Paragraph className='mb-6 md:text-center'>
            Spice makes it easy for developers to create production-ready
            <br />
            AI-native data warehouses using Apache Arrow, DuckDB, and SQLite.
          </Paragraph>

          <div className='mb-14 grid grid-cols-2 items-center justify-center gap-3 md:flex'>
            <Button
              href='/#install-cli'
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
            <Paragraph variant={'large'} className='mb-4 text-center font-bold'>
              Powered by
            </Paragraph>
            <div className='flex items-center justify-center gap-10'>
              <Image
                src={'/apache-arrow.svg'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-20 w-auto object-contain'
              />
              <Image
                src={'/apache-datafusion.svg'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-10 w-auto object-contain'
              />
              <Image
                src={'/duckdb.svg'}
                alt='Spice Logo'
                width={100}
                height={100}
                className='h-20 w-auto object-contain'
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
