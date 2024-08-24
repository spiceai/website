import type { Meta, StoryObj } from '@storybook/react'
import { Install } from './install'

const meta: Meta<typeof Install> = {
  title: 'Organisms/Install',
  component: Install,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Install>

export const Default: Story = {
  args: {}
}

export const WithCustomTitle: Story = {
  args: {
    title: 'Custom Installation Guide'
  }
}

export const WithCustomSteps: Story = {
  args: {
    steps: [
      { title: 'Step 1', description: 'Custom step 1 description' },
      { title: 'Step 2', description: 'Custom step 2 description' },
      { title: 'Step 3', description: 'Custom step 3 description' }
    ]
  }
}

export const WithCustomTitleAndSteps: Story = {
  args: {
    title: 'Advanced Installation',
    steps: [
      { title: 'Prepare', description: 'Prepare your environment' },
      { title: 'Install', description: 'Run the installation command' },
      { title: 'Configure', description: 'Set up your configuration' },
      { title: 'Verify', description: 'Verify the installation' }
    ]
  }
}
