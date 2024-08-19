import Image from 'next/image'

import { Title } from 'components/atoms/title/title'
import { Button } from 'components/atoms/button/button'
import { Paragraph } from 'components/atoms/paragraph/paragraph'

import DefaultPicture from 'public/article-one.jpg'
import { ProcessedFile } from 'components/organisms/articles/utils'

export const Article = ({ article }: { article: ProcessedFile }) => {
  return (
    <article className='group relative overflow-hidden rounded-lg bg-neutral p-4 shadow-box transition-all md:bg-transparent md:shadow-none md:hover:bg-neutral md:hover:shadow-box'>
      <div className='flex flex-col gap-4'>
        <Image
          src={DefaultPicture}
          alt='article image'
          width={600}
          height={400}
          className='w-full overflow-hidden rounded-[4px]'
        />

        <div className='flex gap-2'>
          {article.tags.slice(0, 3).map((tag: string) => (
            <Button key={tag} variant='tagSmall'>
              {tag}
            </Button>
          ))}
        </div>

        <Title as='h4' variant='small'>
          {article.title}
        </Title>
        <Paragraph variant='small' className='line-clamp-3'>
          {article.description}
        </Paragraph>
      </div>

      <Button
        variant='primary'
        className='absolute bottom-4 left-4 z-10 transition-opacity group-hover:opacity-100 md:opacity-0'
        href={article.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        Continue reading
      </Button>
      {/* Absolute Shadow */}
      <div className='absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-neutral transition-opacity group-hover:opacity-100 md:opacity-0' />

      <div className='absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-neutral transition-opacity group-hover:opacity-100 md:opacity-0' />
    </article>
  )
}
