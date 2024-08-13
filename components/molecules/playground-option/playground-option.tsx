import { FaPlay } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

import { CarouselApi } from 'components/ui/carousel'
import { Title } from 'components/atoms/title/title'
import { Button } from 'components/atoms/button/button'
import { Paragraph } from 'components/atoms/paragraph/paragraph'

import { cn } from 'lib/utils'
import { DotsPagination } from '../dots-pagination/dots-pagination'

type PlaygroundOptionProps = {
  carouselApi: CarouselApi
  currentIndex: number
}

export const PlaygroundOption = ({ carouselApi, currentIndex }: PlaygroundOptionProps) => {
  return (
    <div className='rounded-lg border border-alpha-150 bg-neutral pb-0 md:pb-10'>
      <div className='flex flex-col items-center justify-between gap-10 border-b border-alpha-150 px-6 py-8 md:flex-row md:px-10 md:py-10'>
        <ArrowButton carouselApi={carouselApi} />
        <div>
          <Title as='h4' variant='small' className='mb-4 md:text-center'>
            Explore Queries: OpenSea NFT Sales Across Ethereum/Polygon
          </Title>
          <Paragraph className='md:text-center'>
            Compare the number of NFTs being sold in a five-minute window across both Polygon and
            Ethereum.
          </Paragraph>
        </div>
        <ArrowButton carouselApi={carouselApi} isLeft={false} />

        <MobileNavigation carouselApi={carouselApi} currentIndex={currentIndex} />
      </div>

      <div className='flex flex-col gap-6 p-8 md:flex-row md:gap-10 md:p-10'>
        <div className='flex flex-col items-start gap-6 md:w-1/2 md:p-6'>
          <Title as='h4' variant='small'>
            SQL Query
          </Title>
          <code className='text-sm leading-6'>
            <span className='text-red-400'>SELECT</span> chain,{' '}
            <span className='text-red-400'>count</span>(*) as nft_sales,
            TO_TIMESTAMP((block_timestamp / <span className='text-red-400'>300</span>) *{' '}
            <span className='text-red-400'>300</span>) as time_window{' '}
            <span className='text-red-400'></span>FROM nft.recent_sales{' '}
            <span className='text-red-400'>GROUP </span>
            BY time_window, chain <span className='text-red-400'>ORDER</span> BY time_window{' '}
            <span className='text-red-400'>desc</span>
          </code>

          <Button variant={'primary'} className='flex items-center gap-2'>
            <FaPlay className='h-3.5 w-3.5' />
            Run code
          </Button>
        </div>

        <div className='flex items-center justify-center rounded-sm border border-dashed p-6 md:w-1/2'>
          <Paragraph variant={'small'}>Run code to get results.</Paragraph>
        </div>
      </div>
    </div>
  )
}

const ArrowButton = ({
  className,
  isLeft = true,
  carouselApi
}: {
  className?: string
  isLeft?: boolean
  carouselApi: CarouselApi
}) => {
  return (
    <button
      type='button'
      onClick={() => {
        if (isLeft) {
          carouselApi?.scrollPrev()
        } else {
          carouselApi?.scrollNext()
        }
      }}
      className={cn(
        'z-10 hidden rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary md:block',
        className
      )}
    >
      {isLeft ? (
        <HiChevronLeft className='relative right-px h-6 w-6' />
      ) : (
        <HiChevronRight className='relative left-px h-6 w-6' />
      )}
    </button>
  )
}

export const MobileNavigation = ({
  carouselApi,
  currentIndex
}: {
  carouselApi: CarouselApi
  currentIndex: number
}) => {
  return (
    <div className='relative flex w-full items-center justify-between gap-2 md:hidden'>
      <button
        type='button'
        onClick={() => {
          carouselApi?.scrollPrev()
        }}
        className={
          'z-10 rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary'
        }
      >
        <HiChevronLeft className='relative right-px h-6 w-6' />
      </button>
      <DotsPagination
        api={carouselApi}
        current={currentIndex}
        dotsLength={3}
        className='bottom-4 translate-y-0'
      />
      <ArrowButton carouselApi={carouselApi} isLeft={false} />
      <button
        type='button'
        onClick={() => {
          carouselApi?.scrollNext()
        }}
        className={
          'z-10 rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary'
        }
      >
        <HiChevronRight className='relative right-px h-6 w-6' />
      </button>
    </div>
  )
}
