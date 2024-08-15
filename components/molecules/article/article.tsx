import Image from 'next/image'

import { Title } from 'components/atoms/title/title'
import { Button } from 'components/atoms/button/button'
import { ArticleData } from 'components/organisms/articles/data'
import { Paragraph } from 'components/atoms/paragraph/paragraph'

import DefaultPicture from 'public/article-one.jpg'

export const Article = ({ articleData }: { articleData: ArticleData }) => {
  return (
    <article className='shadow-box md:hover:shadow-box group relative overflow-hidden rounded-lg bg-neutral p-4 transition-all md:bg-transparent md:shadow-none md:hover:bg-neutral'>
      <div className='flex flex-col gap-4'>
        <Image
          src={articleData.image || DefaultPicture}
          alt='article image'
          width={600}
          height={400}
          className='w-full overflow-hidden rounded-[4px]'
        />

        {articleData.tags && articleData.tags.length > 0 && (
          <div className='flex gap-2'>
            {articleData.tags.slice(0, 3).map((tag) => (
              <Button key={tag} variant='tagSmall'>
                {tag}
              </Button>
            ))}
          </div>
        )}

        <Title as='h4' variant='small'>
          {articleData.title}
        </Title>
        <Paragraph variant='small' className='line-clamp-3'>
          {articleData.description}
        </Paragraph>
      </div>

      <Button
        variant='primary'
        className='absolute bottom-4 left-4 z-10 transition-opacity group-hover:opacity-100 md:opacity-0'
      >
        Continue reading
      </Button>
      {/* Absolute Shadow */}
      <div className='absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-neutral transition-opacity group-hover:opacity-100 md:opacity-0' />

      <div className='absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-neutral transition-opacity group-hover:opacity-100 md:opacity-0' />
    </article>
  )
}
