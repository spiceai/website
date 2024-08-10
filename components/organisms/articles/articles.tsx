import { Title } from 'components/atoms/title/title'
import { Article } from 'components/molecules/article/article'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'components/ui/carousel'

export const Articles = () => {
  return (
    <section className='pb-0 pt-20 md:py-36'>
      <Title variant='medium' className='pb-6 text-center md:pb-14 md:text-left'>
        Latest Articles
      </Title>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        className='w-full'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <Article
                image='/article-one.jpg'
                title='How to use Spice.ai'
                description='Words matter. A single word can throw you into the depths of despair or raise you to euphoria. Every significant civilization, culture, and religion has placed emphasis on them because words are how we create. Every idea starts with words which develop, grow, and materialize through the process of writing. Writing is fundamental to formalizing thoughts, communicating effectively, and is the ultimate creation tool.'
                tags={['spice.ai', 'web3', 'data', 'ai']}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
