import { Title } from 'components/atoms/title/title'
import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

export const Social = () => {
  return (
    <div className='flex flex-col items-center gap-6 md:flex-row'>
      <div>
        <Title variant='small'>Connect with us</Title>
      </div>
      <div className='flex items-center gap-3'>
        <a href='#' target='_blank' rel='noreferrer'>
          <FaGithub className='h-8 w-8 hover:text-primary' />
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <RiTwitterXLine className='h-7 w-7 hover:text-primary' />
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <FaDiscord className='h-8 w-8 hover:text-primary' />
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <FaYoutube className='h-8 w-8 hover:text-primary' />
        </a>
      </div>
    </div>
  )
}
