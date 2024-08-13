import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Title } from 'components/atoms/title/title'
import { UseCase } from 'components/molecules/use-case/use-case'
import { dataUseCases } from './data'
import { UseCasesMobile } from './use-cases-mobile'

export const UseCases = () => {
  return (
    <section className='shadow-box mt-20 rounded-lg border border-alpha-150 bg-alpha-50 p-8 pb-24 md:p-16 xl:p-20'>
      <Title variant={'medium'} className='mb-6'>
        Example use-cases
      </Title>

      <Paragraph className='mb-6 md:max-w-3xl'>
        Unified SQL Interface for effortlessly materializing, accelerating, and querying data from
        any database, data warehouse, or data lake.
      </Paragraph>

      <div className='hidden grid-cols-2 gap-6 lg:grid'>
        {dataUseCases.map((useCase, index) => (
          <UseCase key={index} useCaseData={useCase} />
        ))}
      </div>

      <UseCasesMobile />
    </section>
  )
}
