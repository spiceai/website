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
        }, 2000)
      }}
      className='hover:shadow-code-shadow group relative mt-6 w-11/12 rounded-lg border border-alpha-150 bg-neutral p-10 shadow-card-shadow transition-shadow'
    >
      <div className='flex items-center gap-4 text-left'>
        <IoCopyOutline className='h-6 w-6 transition-colors group-hover:text-primary' />

        <code className='w-11/12 text-lg'>{code}</code>
      </div>

      <div
        className={clsx(
          'absolute bottom-1/2 right-5 flex translate-y-1/2 items-center gap-1 font-semibold opacity-0 transition-opacity',
          copied && 'opacity-100'
        )}
      >
        <IoIosCheckmarkCircle className='h-6 w-6 text-primary' />
        <Paragraph>Copied!</Paragraph>
      </div>
    </button>
  )
}
