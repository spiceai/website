import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './logo'

const meta = {
  title: 'atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['white', 'dark', 'logotype']
    },
    width: { control: 'number' },
    height: { control: 'number' }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const White: Story = {
  args: {
    variant: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const Dark: Story = {
  args: {
    variant: 'dark'
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
}

export const Logotype: Story = {
  args: {
    variant: 'logotype',
    width: 40,
    height: 40
  }
}

export const CustomSize: Story = {
  args: {
    variant: 'white',
    width: 200,
    height: 41
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='bg-neutral-700 p-10'>
        <Logo variant='white' />
      </div>

      <Logo variant='dark' />
      <Logo variant='logotype' width={40} height={40} />
    </div>
  )
}
