import { Button } from 'components/atoms/button/button'
import { Link } from 'components/atoms/link/link'
import { Logo } from 'components/atoms/logo/logo'
import { FaGithub } from 'react-icons/fa'
import { IoMenuOutline } from 'react-icons/io5'

export const Header = () => {
  return (
    <header className='shadow-box fixed left-1/2 top-4 z-20 flex -translate-x-1/2 transform items-center gap-6 rounded-2xl bg-alpha-800 p-1 pr-11 backdrop-blur-sm md:top-6 md:pr-1'>
      <div className='w-10'>
        <Logo variant={'logotype'} width={40} height={40} />
      </div>

      <nav className='flex items-center gap-6 whitespace-pre pl-8 md:pl-0'>
        <div className='hidden items-center gap-6 md:flex'>
          <Link href='#'>Use cases</Link>
          <Link href='#'>QuickStarts</Link>
          <Link href='#'>Samples</Link>
          <Link href='#' target='_blank' rel='noopener noreferrer'>
            Docs
          </Link>
        </div>
        <Link
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2'
        >
          <FaGithub className='h-6 w-6' />
          1.8k
        </Link>
      </nav>
      <Button variant={'negative'} size={'sm'}>
        Installation
      </Button>
      <button type='button' className='absolute right-2 top-3 text-neutral md:hidden'>
        <IoMenuOutline className='h-6 w-6' />
      </button>
    </header>
  )
}
