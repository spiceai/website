import { Meta, StoryObj } from '@storybook/react'
import { Title } from './title'

const meta = {
  title: 'Atoms/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

export const TitleSmall: Story = {
  args: {
    children: 'Small Title Example',
    variant: 'small',
    as: 'h3'
  }
}

export const TitleMedium: Story = {
  args: {
    children: 'Medium Title Example',
    variant: 'medium',
    as: 'h2'
  }
}

export const TitleLarge: Story = {
  args: {
    children: 'Large Title Example',
    variant: 'large',
    as: 'h1'
  }
}

export const TitleAsSpan: Story = {
  args: {
    children: 'Spice is a powerful, portable, runtime for developers.',
    variant: 'large',
    as: 'span',
    className: 'text-primary'
  }
}
