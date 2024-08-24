import type { Meta, StoryObj } from '@storybook/react'
import { DotsPagination } from './dots-pagination'

const meta: Meta<typeof DotsPagination> = {
  title: 'Molecules/DotsPagination',
  component: DotsPagination,
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },

  decorators: [
    (Story) => (
      <div className='relative-wrapper' style={{ position: 'relative' }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof DotsPagination>

export const Default: Story = {
  args: {
    current: 2,
    dotsLength: 5
  }
}

export const LongPagination: Story = {
  args: {
    current: 3,
    dotsLength: 10
  }
}
