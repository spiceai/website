'use client'

import clsx from 'clsx'
import { cn } from 'lib/utils'
import { CarouselApi } from 'components/ui/carousel'

type DotsPaginationProps = {
  api: CarouselApi
  current: number
  className?: string
  dotsLength: number
}

export const DotsPagination = ({ api, current, className, dotsLength }: DotsPaginationProps) => {
  return (
    <section
      className={cn(
        'absolute -bottom-12 left-1/2 -translate-x-1/2 -translate-y-1/2 transform md:hidden',
        className
      )}
    >
      <div className='flex gap-4'>
        {Array.from({ length: dotsLength }).map((_, index) => (
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
    </section>
  )
}
