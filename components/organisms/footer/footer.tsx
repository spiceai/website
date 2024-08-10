import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Social } from 'components/molecules/social/social'
import { Button } from 'components/atoms/button/button'
import { Logo } from 'components/atoms/logo/logo'

export const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-screen-xl flex-col gap-8 py-16 md:py-20'>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <Logo variant='dark' />

        <Social />
      </div>
      <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
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
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <Paragraph variant='medium'>© 2023 Spice AI, Inc. All rights reserved.</Paragraph>
          <div className='flex items-center gap-6'>
            <Button variant='linkLarge' href='#' className='text-base font-normal leading-7'>
              Privary Policy
            </Button>
            <Button variant='linkLarge' href='#' className='text-base font-normal leading-7'>
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
