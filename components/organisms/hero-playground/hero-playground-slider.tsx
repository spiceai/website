'use client'

import { useEffect, useState } from 'react'

import { PlaygroundOption } from 'components/molecules/playground-option/playground-option'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'components/ui/carousel'

export const HeroPlaygroundSlider = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      setApi={setApi}
      className='w-full'
    >
      <CarouselContent>
        <CarouselItem>
          <PlaygroundOption
            title={'Explore Queries: OpenSea NFT Sales Across Ethereum/Polygon'}
            description={
              'Compare the number of NFTs being sold in a five-minute window across both Polygon and Ethereum.'
            }
            code={
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
            }
            carouselApi={api}
            currentIndex={currentIndex}
          />
        </CarouselItem>
        <CarouselItem>
          <PlaygroundOption
            title={'Explore Queries: OpenSea NFT Sales Across Ethereum/Polygon'}
            description={
              'Compare the number of NFTs being sold in a five-minute window across both Polygon and Ethereum.'
            }
            code={
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
            }
            carouselApi={api}
            currentIndex={currentIndex}
          />
        </CarouselItem>
        <CarouselItem>
          <PlaygroundOption
            title={'Explore Queries: OpenSea NFT Sales Across Ethereum/Polygon'}
            description={
              'Compare the number of NFTs being sold in a five-minute window across both Polygon and Ethereum.'
            }
            code={
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
            }
            carouselApi={api}
            currentIndex={currentIndex}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
