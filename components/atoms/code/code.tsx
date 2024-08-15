'use client'

import { useState } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoCopyOutline } from 'react-icons/io5'
import { Paragraph } from '../paragraph/paragraph'
import clsx from 'clsx'

export const Code = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2500)
      }}
      className='hover:shadow-code shadow-box group relative mt-6 w-full rounded-lg border border-alpha-150 bg-neutral p-4 transition-shadow md:w-11/12 md:p-10'
    >
      <div className='flex items-center gap-4 overflow-x-scroll text-left md:overflow-x-auto'>
        <div>
          <IoCopyOutline className='h-6 w-6 transition-colors group-hover:text-primary' />
        </div>

        <code className='text-base md:w-11/12 md:text-lg'>{code}</code>
      </div>

      <div
        className={clsx(
          'absolute -bottom-8 right-0 flex items-center gap-1 font-semibold opacity-0 transition-opacity md:bottom-1/2 md:right-5 md:translate-y-1/2',
          copied && 'opacity-100'
        )}
      >
        <IoIosCheckmarkCircle className='h-6 w-6 text-primary' />
        <Paragraph>Copied!</Paragraph>
      </div>
    </button>
  )
}
