'use client'

import clsx from 'clsx'

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
import { Button } from 'components/atoms/button/button'

export const BeforeAndAfter = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isBefore, setIsBefore] = useState(true)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className='relative mb-32 overflow-x-clip px-4 pb-2 pt-20 md:px-0'>
      <Title as='h3' variant='medium' className='pb-6 text-center'>
        Before & After Spice
      </Title>
      <Paragraph className='pb-6 text-center'>
        Transformation with Spice: Before and After for scenario 1, scenario 2 or scenario 3.
      </Paragraph>

      <div className='relative'>
        <div className='absolute left-1/2 top-7 z-10 grid w-full -translate-x-1/2 grid-cols-2 items-center justify-center gap-2 px-6 sm:px-20 md:top-9 md:w-auto md:px-0'>
          <Button
            variant={'tag'}
            className={clsx('whitespace-pre', isBefore && 'bg-alpha-100')}
            onClick={() => setIsBefore(true)}
          >
            Before Spice
          </Button>
          <Button
            variant={'tag'}
            className={clsx(!isBefore && 'bg-alpha-100')}
            onClick={() => setIsBefore(false)}
          >
            After Spice
          </Button>
        </div>
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
                  isBefore={isBefore}
                  setIsBefore={setIsBefore}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <DotsPagination
        api={api}
        current={current}
        className='-bottom-[60px] md:block'
        dotsLength={beforeAndAfterSlides.length}
      />
    </section>
  )
}
