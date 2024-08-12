import { HiOutlineArrowRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Container } from 'components/atoms/container/container'
import { Button } from 'components/atoms/button/button'
import { Title } from 'components/atoms/title/title'
import { Logo } from 'components/atoms/logo/logo'
import { cn } from 'lib/utils'

import kannan from 'public/kannan.png'
import eigenLayer from 'public/eigen-layer.png'

export const Cta = ({ className }: { className?: string }) => {
  return (
    <Container className='px-0'>
      <div
        className={cn(
          'my-20 flex flex-col overflow-hidden rounded-none sm:rounded-2xl lg:flex-row',
          className
        )}
      >
        <div className='bg-alpha-900 px-8 py-16 md:p-14 lg:w-7/12 xl:p-20'>
          <Logo variant='white' />
          <Title as='h3' variant={'medium'} className='my-14 text-neutral'>
            Secure, highly-available access to data.{' '}
            <span className='text-primary'>Ridiculously easy setup.</span> Super fast query &
            inference.
          </Title>

          <div className='flex items-center gap-6'>
            <Button variant={'brand'} size={'lg'} className='flex items-center gap-2'>
              <HiOutlineArrowRight className='h-6 w-6' />
              Installation
            </Button>
            <div className='flex items-center gap-2'>
              <FaGithub className='h-10 w-10 fill-neutral' />
              <Paragraph variant={'large'} className='font-medium text-neutral'>
                1.7k
              </Paragraph>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-6 bg-alpha-800 px-8 py-16 md:p-14 lg:w-5/12 xl:p-20'>
          <Paragraph variant={'extralarge'}>
            “We were initially like, it’s such a departure from where they are. It’s going to take
            them a long time and, in a few weeks, it’s like magic. We had everything working exactly
            as we wanted, and it’s amazing.”
          </Paragraph>

          <div className='flex items-start justify-between gap-5'>
            <div className='flex flex-col gap-2'>
              <Title as='h5' variant={'small'} className='font-bold text-neutral'>
                Sreeram Kannan
              </Title>
              <Paragraph className='text-neutral'>Founder and CEO of EigenLayer</Paragraph>
              <Image src={eigenLayer} alt='EigenLayer' width={44} height={44} />
            </div>
            <Image src={kannan} alt='Kannan' width={70} height={70} />
          </div>
        </div>
      </div>
    </Container>
  )
}
