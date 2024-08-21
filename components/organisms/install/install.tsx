import { InstallOptions } from 'components/molecules/install-options/install-options'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Button } from 'components/atoms/button/button'
import { Title } from 'components/atoms/title/title'

export const Install = () => {
  return (
    <section className='my-20 rounded-lg border border-alpha-150 bg-neutral p-8 md:p-16 xl:p-20'>
      <Title variant='medium' className='mb-6'>
        Install the Spice CLI
      </Title>
      <Paragraph variant='large' className='max-w-3xl'>
        Unified SQL Interface for effortlessly materializing, accelerating, and querying data from
        any database, data warehouse, or data lake.
      </Paragraph>

      <InstallOptions />

      <Button
        href='https://docs.spice.ai/'
        target='_blank'
        rel='noopener noreferrer'
        variant='primary'
        className='mb-14 mt-6 md:my-14'
      >
        Quickstart docs
      </Button>

      <video src='/spice-intro.mp4' className='w-full rounded-lg object-contain' controls />
    </section>
  )
}
