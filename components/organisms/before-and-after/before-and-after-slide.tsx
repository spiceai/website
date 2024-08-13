'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { SlideData } from './data'
import { Button } from 'components/atoms/button/button'
import { Benefit } from 'components/molecules/benefit/benefit'

export const BeforeAndAfterSlide = ({ slideData }: { slideData: SlideData }) => {
  const [isBefore, setIsBefore] = useState(true)
  return (
    <div className='overflow-hidden rounded-lg border border-alpha-150 bg-neutral px-20 py-8'>
      <div className='flex items-center justify-center gap-2 pb-8'>
        <Button
          variant={'tag'}
          className={clsx(isBefore && 'bg-alpha-100')}
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
      <Image
        src={isBefore ? slideData.imageBefore : slideData.imageAfter}
        alt='Before and After Slide'
        width={1600}
        height={800}
        className='h-80 w-full object-contain'
      />

      <div className='mt-12 grid grid-cols-3 gap-6'>
        {slideData.benefits.map((benefit, index) => (
          <Benefit
            key={index}
            isBefore={isBefore}
            textBefore={benefit.textBefore}
            textAfter={benefit.textAfter}
          />
        ))}
      </div>
    </div>
  )
}
