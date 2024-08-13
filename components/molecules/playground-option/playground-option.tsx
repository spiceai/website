import { Title } from 'components/atoms/title/title'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { cn } from 'lib/utils'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { CarouselApi } from 'components/ui/carousel'
import { Button } from 'components/atoms/button/button'
import { FaPlay } from 'react-icons/fa'

export const PlaygroundOption = ({ carouselApi }: { carouselApi: CarouselApi }) => {
  return (
    <div className='rounded-lg border border-alpha-150 bg-neutral pb-10'>
      <div className='flex items-center justify-between gap-10 border-b border-alpha-150 px-10 py-10'>
        <ArrowButton carouselApi={carouselApi} />
        <div>
          <Title as='h4' variant='small' className='mb-4 text-center'>
            Explore Queries: OpenSea NFT Sales Across Ethereum/Polygon
          </Title>
          <Paragraph className='text-center'>
            Compare the number of NFTs being sold in a five-minute window across both Polygon and
            Ethereum.
          </Paragraph>
        </div>
        <ArrowButton carouselApi={carouselApi} isLeft={false} />
      </div>

      <div className='flex flex-col gap-10 p-10 md:flex-row'>
        <div className='flex w-1/2 flex-col items-start gap-6 p-6'>
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

        <div className='flex w-1/2 items-center justify-center rounded-sm border border-dashed p-6'>
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
