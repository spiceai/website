'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoCopyOutline } from 'react-icons/io5'

import { Paragraph } from '../../atoms/paragraph/paragraph'

export const CopyCode = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2300)
      }}
      className='group relative mt-6 w-full rounded-lg border border-alpha-150 bg-neutral p-4 shadow-box transition-shadow hover:shadow-code md:w-11/12 md:p-10'
    >
      <div className='flex items-center gap-4 overflow-x-scroll text-left md:overflow-x-auto'>
        <code className='text-base md:w-11/12 md:text-lg'>{code}</code>

        <div>
          <IoCopyOutline className='h-6 w-6 transition-colors group-hover:text-primary' />
        </div>
      </div>

      <div
        className={clsx(
          'absolute -bottom-7 right-0 flex items-center gap-1 font-semibold opacity-0 transition-opacity md:bottom-4 md:right-3 md:translate-y-1/2',
          copied && 'opacity-100'
        )}
      >
        <IoIosCheckmarkCircle className='h-6 w-6 text-primary' />
        <Paragraph>Copied!</Paragraph>
      </div>
    </button>
  )
}
