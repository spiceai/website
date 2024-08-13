'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'components/ui/carousel'
import { DotsPagination } from 'components/molecules/dots-pagination/dots-pagination'
import { Title } from 'components/atoms/title/title'
import { Article } from 'components/molecules/article/article'
import { useEffect, useState } from 'react'
import { Paragraph } from 'components/atoms/paragraph/paragraph'

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
    <section className='pt-20'>
      <Title as='h3' variant='medium' className='pb-6 text-center'>
        Before & After Spice
      </Title>
      <Paragraph className='pb-6 text-center'>
        Transformation with Spice: Before and After for scenario 1, scenario 2 or scenario 3.
      </Paragraph>
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
            <CarouselItem key={index} className=''>
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

      <DotsPagination api={api} current={current} />
    </section>
  )
}
