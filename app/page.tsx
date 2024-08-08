import { Button } from 'components/atoms/button/button'
import { Title } from 'components/atoms/title/title'

export default function LandingPage() {
  return (
    <div className='px-10 py-20'>
      <Title className='mb-5'>Landing Page</Title>

      <div className='flex items-center gap-3 bg-gray-700 p-10'>
        <Button size='lg' variant='brandOutline'>
          Brand Outline Large
        </Button>
        <Button variant='brand'>Brand Medium</Button>
        <Button variant='primary'>Primary Medium</Button>
        <Button variant='secondary'>Secondary Medium</Button>
        <Button variant='negative' size='sm'>
          Negative Small
        </Button>
      </div>
    </div>
  )
}
