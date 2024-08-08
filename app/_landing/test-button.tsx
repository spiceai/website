'use client'
import { Button } from 'components/atoms/button/button'

export const TestButton = () => {
  return (
    <Button onClick={() => console.log('button clicked')} size='lg' variant='brandOutline'>
      Brand Outline Large
    </Button>
  )
}
