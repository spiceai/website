'use client'

import { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'components/ui/carousel'
import { dataArticles } from './data'
import { Title } from 'components/atoms/title/title'
import { Article } from 'components/molecules/article/article'
import { DotsPagination } from 'components/molecules/dots-pagination/dots-pagination'

export const Articles = () => {
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
    <section className='relative mb-28 pb-0 md:py-36'>
      <Title as='h3' variant='medium' className='pb-6 text-center md:pb-14 md:text-left'>
        Latest Articles
      </Title>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        setApi={setApi}
        className='w-full'
      >
        <CarouselContent>
          {dataArticles.map((article, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <Article articleData={article} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <DotsPagination api={api} current={current} dotsLength={dataArticles.length} />
    </section>
  )
}
