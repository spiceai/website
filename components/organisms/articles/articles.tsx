import { Title } from 'components/atoms/title/title'
import { ArticlesCarousel } from './articles-carousel'
import { getFormattedData } from './utils'
import { Button } from 'components/atoms/button/button'
import { QueueListIcon } from '@heroicons/react/24/outline'

export const Articles = async () => {
  const data = await getFormattedData()

  return (
    <section className='relative mb-28 pb-0 md:py-36'>
      <div className='flex items-center justify-between gap-4 pb-6 md:pb-14'>
        <Title as='h3' variant='medium' className='text-center md:text-left'>
          Latest Articles
        </Title>

        <Button
          variant='primary'
          className='flex items-center gap-2 whitespace-pre'
          href='https://blog.spiceai.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='w-5'>
            <QueueListIcon />
          </div>
          View all
        </Button>
      </div>
      <ArticlesCarousel data={data} />
    </section>
  )
}
