import { Button } from 'components/atoms/button/button'
import { Paragraph } from 'components/atoms/paragraph/paragraph'
import { Title } from 'components/atoms/title/title'
import { InstallOptions } from 'components/molecules/install-options/install-options'

export const Install = () => {
  return (
    <div className='my-20 rounded-lg border border-alpha-150 bg-neutral p-20'>
      <Title variant={'medium'} className='mb-6'>
        Install the Spice CLI
      </Title>
      <Paragraph variant={'large'} className='max-w-3xl'>
        Unified SQL Interface for effortlessly materializing, accelerating, and querying data from
        any database, data warehouse, or data lake.
      </Paragraph>

      <InstallOptions />

      <Button variant={'primary'} className='my-14'>
        Quickstart docs
      </Button>

      <video src='/spice-demo.mp4' className='w-full rounded-lg' controls />
    </div>
  )
}
