import { Button } from 'components/atoms/button/button'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Title } from 'components/atoms/title/title'
import { UseCaseData } from 'components/organisms/use-cases/data'

export const UseCase = ({ useCaseData }: { useCaseData: UseCaseData }) => {
  return (
    <a
      href='#'
      target='_blank'
      rel='noopener noreferrer'
      className='group flex flex-col items-start justify-between gap-6 rounded-sm border border-alpha-150 px-10 py-14 transition-colors hover:bg-neutral hover:shadow-card-shadow'
    >
      <div>
        <Title as='h4' variant={'small'}>
          {useCaseData.title}
        </Title>
        <Paragraph className='mt-6'>{useCaseData.description}</Paragraph>
      </div>
      <Button
        variant={'secondary'}
        className='group-hover:bg-primary group-hover:text-primary-foreground'
      >
        {useCaseData.buttonText}
      </Button>
    </a>
  )
}
