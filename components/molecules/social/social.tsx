import { Title } from 'components/atoms/title/title'
import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

export const Social = () => {
  const iconClasses = 'h-8 w-8 hover:text-primary transition-colors active:text-red-700'
  return (
    <div className='flex flex-col items-center gap-6 md:flex-row'>
      <div>
        <Title variant='small'>Connect with us</Title>
      </div>
      <div className='flex items-center gap-6'>
        <a href='https://github.com/spiceai/spiceai' target='_blank' rel='noreferrer'>
          <FaGithub className={iconClasses} />
        </a>
        <a href='https://x.com/spice_ai' target='_blank' rel='noreferrer'>
          <RiTwitterXLine className='h-7 w-7 hover:text-primary' />
        </a>
        <a href='https://discord.gg/kZnTfneP5u' target='_blank' rel='noreferrer'>
          <FaDiscord className={iconClasses} />
        </a>
        <a href='https://www.youtube.com/@spiceai' target='_blank' rel='noreferrer'>
          <FaYoutube className={iconClasses} />
        </a>
      </div>
    </div>
  )
}
