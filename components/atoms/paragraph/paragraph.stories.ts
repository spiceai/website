import { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './paragraph'

const meta = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large', 'extralarge']
    }
  }
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'

export const Small: Story = {
  args: {
    children: sampleText,
    variant: 'small'
  }
}

export const Medium: Story = {
  args: {
    children: sampleText,
    variant: 'medium'
  }
}

export const Large: Story = {
  args: {
    children: sampleText,
    variant: 'large'
  }
}

export const ExtraLarge: Story = {
  args: {
    children: sampleText,
    variant: 'extralarge'
  }
}

export const CustomParagraph: Story = {
  args: {
    children: 'This is a custom paragraph with additional styling.',
    variant: 'medium',
    className: 'text-blue-600 font-semibold'
  }
}
