import { Meta, StoryObj } from '@storybook/react'
import { Features } from './features'

const meta: Meta<typeof Features> = {
  title: 'Organisms/Features',
  component: Features,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Features>

export const Default: Story = {}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14promax'
    }
  }
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}
