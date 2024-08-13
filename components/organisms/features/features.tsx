import { Title } from 'components/atoms/title/title'
import { Feature } from 'components/molecules/feature/feature'

export const Features = () => {
  return (
    <section className='mx-auto mt-20 px-6 md:max-w-[843px] md:px-0'>
      <Title className='mb-14'>
        We believe you can have more control,{' '}
        <span className='text-primary'>accelerate AI adoption</span>, & do it more securely and at a
        lower cost than you are doing today.
      </Title>

      <div className='flex flex-col gap-6 md:flex-row'>
        <div className='flex w-full flex-col gap-6 md:w-1/2'>
          <Feature />
          <Feature />
        </div>
        <div className='flex w-full flex-col gap-6 md:w-1/2 md:pt-20'>
          <Feature />
          <Feature />
        </div>
      </div>
    </section>
  )
}
