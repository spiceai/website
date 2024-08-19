import { Title } from 'components/atoms/title/title'
import { ArticlesCarousel } from './articles-carousel'
import { getFormattedData } from './utils'

export const Articles = async () => {
  const data = await getFormattedData()

  return (
    <section className='relative mb-28 pb-0 md:py-36'>
      <Title as='h3' variant='medium' className='pb-6 text-center md:pb-14 md:text-left'>
        Latest Articles
      </Title>
      <ArticlesCarousel data={data} />
    </section>
  )
}
