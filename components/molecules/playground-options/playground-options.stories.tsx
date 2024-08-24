import { Meta, StoryObj } from '@storybook/react'
import { HeroPlaygroundOptions } from './playground-options'

const meta: Meta<typeof HeroPlaygroundOptions> = {
  title: 'Molecules/PlaygroundOptions',
  component: HeroPlaygroundOptions,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof HeroPlaygroundOptions>

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]
  }
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone5'
    }
  },
  args: {
    options: [
      { label: 'Mobile 1', value: 'mobile1' },
      { label: 'Mobile 2', value: 'mobile2' }
    ]
  }
}
