'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'components/ui/carousel'
import { useEffect, useState } from 'react'

import { beforeAndAfterSlides } from './data'
import { Title } from 'components/atoms/title/title'
import { BeforeAndAfterSlide } from './before-and-after-slide'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { DotsPagination } from 'components/molecules/dots-pagination/dots-pagination'

export const BeforeAndAfter = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className='relative mb-32 px-4 pb-2 pt-20 md:px-0'>
      <Title as='h3' variant='medium' className='pb-6 text-center'>
        Before & After Spice
      </Title>
      <Paragraph className='pb-6 text-center'>
        Transformation with Spice: Before and After for scenario 1, scenario 2 or scenario 3.
      </Paragraph>
      <Carousel
        opts={{
          align: 'center',
          loop: true
        }}
        setApi={setApi}
        className='w-full'
      >
        <CarouselContent>
          {beforeAndAfterSlides.map((slideData, index) => (
            <CarouselItem
              key={index}
              className='sm:basis-[calc(100%-6rem)] md:max-w-screen-xl md:basis-[calc(100%-8rem)] xl:basis-[calc(100%-10rem)]'
            >
              <BeforeAndAfterSlide
                slideData={slideData}
                carouselApi={api}
                isCurrentSlide={index === current}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <DotsPagination
        api={api}
        current={current}
        className='md:block'
        dotsLength={beforeAndAfterSlides.length}
      />
    </section>
  )
}
