import { Meta, StoryObj } from '@storybook/react'
import { Feature } from './feature'

const meta: Meta<typeof Feature> = {
  title: 'Molecules/Feature',
  component: Feature,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Feature>

export const Default: Story = {
  args: {
    title: 'Example Feature',
    description: 'This is a description of the example feature.'
  }
}

export const LongTitle: Story = {
  args: {
    title: 'This is a very long title that might wrap to multiple lines',
    description: 'A short description.'
  }
}

export const LongDescription: Story = {
  args: {
    title: 'Short Title',
    description:
      'This is a very long description that goes into great detail about the feature. It might span multiple lines and really test the layout of the component.'
  }
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone5'
    }
  },
  args: {
    title: 'Mobile Feature',
    description: 'This is how the feature looks on mobile devices.'
  }
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  args: {
    title: 'Tablet Feature',
    description: 'This is how the feature looks on tablet devices.'
  }
}
