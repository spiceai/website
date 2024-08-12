'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { Article } from 'components/molecules/article/article'
import { Title } from 'components/atoms/title/title'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'components/ui/carousel'

export const Articles = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      console.log('select')
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className='relative pb-0 pt-20 md:py-20'>
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <Article
                image='/article-one.jpg'
                title='How to use Spice.ai'
                description='Words matter. A single word can throw you into the depths of despair or raise you to euphoria. Every significant civilization, culture, and religion has placed emphasis on them because words are how we create. Every idea starts with words which develop, grow, and materialize through the process of writing. Writing is fundamental to formalizing thoughts, communicating effectively, and is the ultimate creation tool.'
                tags={['spice.ai', 'web3', 'data', 'ai']}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 -translate-y-1/2 transform md:hidden'>
        <div className='flex gap-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              type='button'
              onClick={() => {
                api?.scrollTo(index)
              }}
              key={index}
              className={clsx(
                'h-2 w-2 rounded-full',
                current === index ? 'bg-alpha-900' : 'bg-alpha-300'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
