import { Container } from 'components/atoms/container/container'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Social } from 'components/molecules/social/social'

import { Logo } from 'components/atoms/logo/logo'
import { Link } from 'components/atoms/link/link'

export const Footer = () => {
  return (
    <Container>
      <footer className='mx-auto flex max-w-screen-xl flex-col gap-8 py-16 md:py-20'>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          <Logo variant='dark' />

          <Social />
        </div>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <nav className='flex items-center gap-10'>
            <Link href='#' variant='large'>
              Security
            </Link>
            <Link href='#' variant='large'>
              Docs
            </Link>
            <Link href='#' variant='large'>
              Blog
            </Link>
            <Link href='#' variant='large'>
              Contact
            </Link>
          </nav>
          <div className='flex flex-col items-center gap-6 md:flex-row'>
            <Paragraph variant='medium'>© 2023 Spice AI, Inc. All rights reserved.</Paragraph>
            <div className='flex items-center gap-6'>
              <Link variant='large' href='#' className='text-base font-normal leading-7'>
                Privacy Policy
              </Link>
              <Link variant='large' href='#' className='text-base font-normal leading-7'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  )
}
