import type { Meta, StoryObj } from '@storybook/react'
import { Benefit } from './benefit'

const meta: Meta<typeof Benefit> = {
  title: 'Molecules/Benefit',
  component: Benefit,
  argTypes: {
    isBefore: {
      control: 'boolean',
      description: 'Determines whether to show the "before" or "after" state'
    },
    textBefore: {
      control: 'text',
      description: 'Text to display in the "before" state'
    },
    textAfter: {
      control: 'text',
      description: 'Text to display in the "after" state'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Benefit>

export const Before: Story = {
  args: {
    isBefore: true,
    textBefore: 'Manual and error-prone processes',
    textAfter: 'Automated and reliable workflows'
  }
}

export const After: Story = {
  args: {
    isBefore: false,
    textBefore: 'Manual and error-prone processes',
    textAfter: 'Automated and reliable workflows'
  }
}

export const LongText: Story = {
  args: {
    isBefore: true,
    textBefore:
      'This is a very long text that demonstrates how the component handles excessive content in the before state',
    textAfter:
      'This is a very long text that demonstrates how the component handles excessive content in the after state'
  }
}

export const ShortText: Story = {
  args: {
    isBefore: false,
    textBefore: 'Short before',
    textAfter: 'Short after'
  }
}
