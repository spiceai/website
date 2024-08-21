'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { SlideData } from './data'
import { CarouselApi } from 'components/ui/carousel'
import { Benefit } from 'components/molecules/benefit/benefit'

import { cn } from 'lib/utils'

type BeforeAndAfterSlideProps = {
  slideData: SlideData
  carouselApi: CarouselApi
  isCurrentSlide: boolean
  isBefore: boolean
}

export const BeforeAndAfterSlide = ({
  slideData,
  carouselApi,
  isCurrentSlide,
  isBefore
}: BeforeAndAfterSlideProps) => {
  return (
    <div className='relative overflow-hidden rounded-lg border border-alpha-150 bg-neutral px-6 py-28 md:px-20'>
      <Image
        src={isBefore ? slideData.imageBefore : slideData.imageAfter}
        alt='Before and After Slide'
        width={1600}
        height={800}
        className='w-full object-contain lg:h-80'
      />

      <div className='mt-14 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3'>
        {slideData.benefits.map((benefit, index) => (
          <Benefit
            key={index}
            isBefore={isBefore}
            textBefore={benefit.textBefore}
            textAfter={benefit.textAfter}
          />
        ))}
      </div>

      {/* Desktop arrows */}

      {!isCurrentSlide && (
        <>
          <ArrowButton className='right-1.5 xl:right-3' onClick={() => carouselApi?.scrollPrev()}>
            <ChevronLeftIcon className='relative right-px h-6 w-6' />
          </ArrowButton>
          <ArrowButton className='left-1.5 xl:left-3' onClick={() => carouselApi?.scrollNext()}>
            <ChevronRightIcon className='relative left-px h-6 w-6' />
          </ArrowButton>
        </>
      )}
    </div>
  )
}

const ArrowButton = ({
  className,
  onClick,
  children
}: {
  className?: string
  onClick: () => void
  children: React.ReactNode
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'absolute bottom-[47%] z-10 hidden -translate-y-1/2 rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary md:block',
        className
      )}
      aria-label='Change slide'
    >
      {children}
    </button>
  )
}
