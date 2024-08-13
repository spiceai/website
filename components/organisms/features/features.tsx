import { Title } from 'components/atoms/title/title'
import { Feature } from 'components/molecules/feature/feature'

export const Features = () => {
  return (
    <section className='mx-auto mt-20 max-w-[843px]'>
      <Title className='mb-14'>
        We believe you can have more control,{' '}
        <span className='text-primary'>accelerate AI adoption</span>, & do it more securely and at a
        lower cost than you are doing today.
      </Title>

      <div className='flex gap-6'>
        <div className='flex w-1/2 flex-col gap-6'>
          <Feature />
          <Feature />
        </div>
        <div className='flex w-1/2 flex-col gap-6 pt-20'>
          <Feature />
          <Feature />
        </div>
      </div>
    </section>
  )
}
