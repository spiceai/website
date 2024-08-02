import { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './paragraph'

const meta = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  tags: ['autodocs']
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const ParagraphBold: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    className: 'font-bold'
  }
}
