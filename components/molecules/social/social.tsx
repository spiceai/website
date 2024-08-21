import { Icon } from 'components/atoms/icon/icon'
import { Title } from 'components/atoms/title/title'

export const Social = () => {
  const iconClasses = 'h-8 w-8 hover:text-primary transition-colors active:text-red-700'
  return (
    <div className='flex flex-col items-center gap-6 md:flex-row'>
      <div>
        <Title as='h6' variant='small'>
          Connect with us
        </Title>
      </div>
      <div className='flex items-center gap-6'>
        <a
          href='https://github.com/spiceai/spiceai'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub repository for SpiceAI'
        >
          <Icon iconName='github' className={iconClasses} />
        </a>
        <a
          href='https://x.com/spice_ai'
          target='_blank'
          rel='noreferrer'
          aria-label='SpiceAI on Twitter'
        >
          <Icon iconName='twitter' className='h-7 w-7 hover:text-primary' />
        </a>
        <a
          href='https://discord.gg/kZnTfneP5u'
          target='_blank'
          rel='noreferrer'
          aria-label='SpiceAI Discord'
        >
          <Icon iconName='discord' className={iconClasses} />
        </a>
        <a
          href='https://www.youtube.com/@spiceai'
          target='_blank'
          rel='noreferrer'
          aria-label='SpiceAI YouTube'
        >
          <Icon iconName='youtube' className={iconClasses} />
        </a>
      </div>
    </div>
  )
}
