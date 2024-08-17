'use client'

import { useState } from 'react'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { DotsPagination } from 'components/molecules/dots-pagination/dots-pagination'
import { cn } from 'lib/utils'

import { heroPlaygroundData } from './data'
import { Title } from 'components/atoms/title/title'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Button } from 'components/atoms/button/button'
import { FaPlay } from 'react-icons/fa'

type ResponseData = {
  rowCount: number
  rows: {
    seconds_ago: number
    time_window: string
    to_address: string
    token_address: string
    token_id: string
  }
}

export const HeroPlaygroundOptions = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentData = heroPlaygroundData[currentIndex]
  const [requestDuration, setRequestDuration] = useState<number | null>(null)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroPlaygroundData.length - 1 : prevIndex - 1
    )
    setRequestDuration(null)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroPlaygroundData.length)
    setRequestDuration(null)
  }

  const handleCurrentIndexChange = (index: number) => {
    setCurrentIndex(index)
    setRequestDuration(null)
  }

  const handleRequest = async () => {
    const startTime = performance.now()

    try {
      const response = await fetch(currentData.requestUrl)
      const data: ResponseData = await response.json()

      const endTime = performance.now()
      const durationInSeconds = (endTime - startTime) / 1000

      setRequestDuration(durationInSeconds)

      console.log(`Request took ${durationInSeconds.toFixed(3)} seconds`, durationInSeconds)
    } catch (error) {
      console.error('Error fetching data:', error)
      setRequestDuration(null)
    }
  }

  return (
    <div className='rounded-lg border border-alpha-150 bg-neutral pb-0 md:pb-10'>
      <div className='flex flex-col items-center justify-between gap-6 border-b border-alpha-150 px-6 py-8 md:flex-row md:gap-10 md:px-10 md:py-10'>
        <ArrowButton onClick={handlePrev} />
        <div>
          <Title as='h4' variant='small' className='mb-4 md:text-center'>
            {currentData.title}
          </Title>
          <Paragraph className='md:text-center'>{currentData.description}</Paragraph>
        </div>
        <ArrowButton onClick={handleNext} isLeft={false} />

        <MobileNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={currentIndex}
          totalItems={heroPlaygroundData.length}
          handleCurrentIndexChange={handleCurrentIndexChange}
        />
      </div>

      <div className='flex flex-col gap-6 p-8 md:flex-row md:gap-10 md:p-10'>
        <div className='flex flex-col items-start gap-6 md:w-1/2 md:p-6'>
          <Title as='h4' variant='small'>
            SQL Query
          </Title>

          {currentData.code}

          <Button variant={'primary'} className='flex items-center gap-2' onClick={handleRequest}>
            <FaPlay className='h-3.5 w-3.5' />
            Run code
          </Button>
        </div>

        <div className='flex items-center justify-center rounded-sm border border-dashed p-6 md:w-1/2'>
          {requestDuration == null ? (
            <Paragraph variant={'small'}>Run code to get results.</Paragraph>
          ) : (
            <p>Request took {requestDuration.toFixed(3)} seconds</p>
          )}
        </div>
      </div>
    </div>
  )
}

const ArrowButton = ({
  className,
  isLeft = true,
  onClick
}: {
  className?: string
  isLeft?: boolean
  onClick: () => void
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'z-10 hidden rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary md:block',
        className
      )}
    >
      {isLeft ? (
        <HiChevronLeft className='relative right-px h-6 w-6' />
      ) : (
        <HiChevronRight className='relative left-px h-6 w-6' />
      )}
    </button>
  )
}

export const MobileNavigation = ({
  onPrev,
  onNext,
  currentIndex,
  handleCurrentIndexChange,
  totalItems
}: {
  onPrev: () => void
  onNext: () => void
  currentIndex: number
  handleCurrentIndexChange: (index: number) => void
  totalItems: number
}) => {
  return (
    <div className='relative flex w-full items-center justify-between gap-2 md:hidden'>
      <button
        type='button'
        onClick={onPrev}
        className={
          'z-10 rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary'
        }
      >
        <HiChevronLeft className='relative right-px h-6 w-6' />
      </button>
      <DotsPagination
        className='bottom-auto translate-y-0'
        current={currentIndex}
        dotsLength={totalItems}
        handleCurrentIndexChange={handleCurrentIndexChange}
      />
      <button
        type='button'
        onClick={onNext}
        className={
          'z-10 rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary'
        }
      >
        <HiChevronRight className='relative right-px h-6 w-6' />
      </button>
    </div>
  )
}
