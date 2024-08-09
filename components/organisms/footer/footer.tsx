import { Button } from 'components/atoms/button/button'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Social } from 'components/molecules/social/social'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-screen-xl flex-col gap-8'>
      <div className='flex items-center justify-between'>
        {/* 156x32 */}
        <Image src='/spice-logo.png' alt='Spice.ai Logo' width={156} height={32} />

        <Social />
      </div>
      <div className='flex items-center justify-between'>
        <nav className='flex items-center gap-10'>
          <Button href='#' variant='linkLarge'>
            Security
          </Button>
          <Button href='#' variant='linkLarge'>
            Docs
          </Button>
          <Button href='#' variant='linkLarge'>
            Blog
          </Button>
          <Button href='#' variant='linkLarge'>
            Contact
          </Button>
        </nav>
        <div className='flex items-center gap-6'>
          <Paragraph variant='medium'>© 2023 Spice AI, Inc. All rights reserved.</Paragraph>
          <Button variant='linkLarge' href='#' className='text-base font-normal leading-7'>
            Privary Policy
          </Button>
          <Button variant='linkLarge' href='#' className='text-base font-normal leading-7'>
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  )
}
