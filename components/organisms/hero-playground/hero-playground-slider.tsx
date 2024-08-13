'use client'

import { PlaygroundOption } from 'components/molecules/playground-option/playground-option'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'components/ui/carousel'
import { useEffect, useState } from 'react'

export const HeroPlaygroundSlider = () => {
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
          <PlaygroundOption carouselApi={api} />
        </CarouselItem>
        <CarouselItem>
          <PlaygroundOption carouselApi={api} />
        </CarouselItem>
        <CarouselItem>
          <PlaygroundOption carouselApi={api} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
