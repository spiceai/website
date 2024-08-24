import { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    variant: {
      control: { type: 'select', options: ['small', 'large'] }
    },
    children: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Link>

export const SmallVariant: Story = {
  args: {
    href: 'https://example.com',
    variant: 'small',
    children: 'Small Link'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const LargeVariant: Story = {
  args: {
    href: 'https://example.com',
    variant: 'large',
    children: 'Large Link'
  }
}

export const CustomClassName: Story = {
  args: {
    href: 'https://example.com',
    className: 'text-blue-500 underline',
    children: 'Custom Styled Link'
  }
}

export const WithExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'External Link'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const WithOnClickHandler: Story = {
  args: {
    href: 'https://example.com',
    onClick: (e) => {
      e.preventDefault()
      alert('Link clicked!')
    },
    children: 'Click Me'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}
