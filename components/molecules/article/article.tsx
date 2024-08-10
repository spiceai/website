import { Button } from 'components/atoms/button/button'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Title } from 'components/atoms/title/title'
import Image from 'next/image'
import Link from 'next/link'
import DefaultPicture from 'public/article-one.jpg'

type ArticleProps = {
  image: string
  title: string
  description: string
  tags?: string[]
}

export const Article = ({ image, title, description, tags }: ArticleProps) => {
  return (
    <article className='group relative overflow-hidden rounded-lg p-4 transition-all hover:bg-neutral hover:shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.04)]'>
      <div className='flex flex-col gap-4'>
        <Image
          src={image || DefaultPicture}
          alt='article image'
          width={600}
          height={400}
          className='w-full overflow-hidden rounded-[4px]'
        />

        {tags && tags.length > 0 && (
          <div className='flex gap-2'>
            {tags.slice(0, 3).map((tag) => (
              <Button key={tag} variant='tagSmall'>
                {tag}
              </Button>
            ))}
          </div>
        )}

        <Title as='h4' variant={'small'}>
          {title}
        </Title>
        <Paragraph variant={'small'} className='line-clamp-3'>
          {description}
        </Paragraph>
      </div>

      <Button
        variant={'primary'}
        className='absolute bottom-4 left-4 z-10 opacity-0 transition-opacity group-hover:opacity-100'
      >
        Continue reading
      </Button>
      {/* Absolute Shadow */}
      <div className='absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-neutral opacity-0 transition-opacity group-hover:opacity-100' />

      <div className='absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-neutral opacity-0 transition-opacity group-hover:opacity-100' />
    </article>
  )
}
