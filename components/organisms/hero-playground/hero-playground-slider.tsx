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
          <PlaygroundOption carouselApi={api} currentIndex={currentIndex} />
        </CarouselItem>
        <CarouselItem>
          <PlaygroundOption carouselApi={api} currentIndex={currentIndex} />
        </CarouselItem>
        <CarouselItem>
          <PlaygroundOption carouselApi={api} currentIndex={currentIndex} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
