import type { Meta, StoryObj } from '@storybook/react'
import { CopyCode } from './copy-code'

const meta: Meta<typeof CopyCode> = {
  title: 'Molecules/CopyCode',
  component: CopyCode,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CopyCode>

export const Default: Story = {
  args: {
    code: 'npm install spiceai'
  }
}

export const LongCode: Story = {
  args: {
    code: 'This is a much longer piece of code that might wrap to multiple lines in the component'
  }
}

export const ShortCode: Story = {
  args: {
    code: 'console.log("Hello");'
  }
}
