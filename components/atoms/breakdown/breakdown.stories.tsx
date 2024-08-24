import type { Meta, StoryObj } from '@storybook/react'
import { Breakdown } from './breakdown'

const meta: Meta<typeof Breakdown> = {
  title: 'Atoms/Breakdown',
  component: Breakdown,
  parameters: {
    layout: 'fullscreen' // This ensures the component takes up the full width of the Storybook canvas
  }
}

export default meta
type Story = StoryObj<typeof Breakdown>

export const Default: Story = {
  render: () => <Breakdown />
}
