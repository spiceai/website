import { InstallOptions } from 'components/molecules/install-options/install-options'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Button } from 'components/atoms/button/button'
import { Title } from 'components/atoms/title/title'

export const Install = () => {
  return (
    <section
      id='install-cli'
      className='my-20 rounded-lg border border-alpha-150 bg-neutral p-8 md:p-16 xl:p-20'
    >
      <Title variant='medium' className='mb-6'>
        Install the Spice CLI
      </Title>
      <Paragraph variant='large' className='max-w-3xl'>
        Try materializing and querying Parquet files from S3, on your laptop, in under 60 seconds.
      </Paragraph>

      <InstallOptions />

      <video src='/spice-intro.mp4' className='mt-14 w-full rounded-lg object-contain' controls />

      <Button
        href='https://github.com/spiceai/quickstarts'
        target='_blank'
        rel='noopener noreferrer'
        variant='primary'
        className='mt-6 md:mt-14'
      >
        Quickstarts
      </Button>

      <Button
        href='https://github.com/spiceai/samples'
        target='_blank'
        rel='noopener noreferrer'
        variant='primary'
        className='ml-6 mt-6 md:mt-14'
      >
        Samples
      </Button>

      <Button
        href='https://docs.spiceai.org/'
        target='_blank'
        rel='noopener noreferrer'
        variant='primary'
        className='ml-6 mt-6 md:mt-14'
      >
        Docs
      </Button>
    </section>
  )
}
