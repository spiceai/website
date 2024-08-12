import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Social } from './social' // Adjust the import path as necessary

const meta = {
  title: 'Molecules/Social',
  component: Social,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Social>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
