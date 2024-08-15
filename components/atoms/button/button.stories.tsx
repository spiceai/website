import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'brand',
        'brandOutline',
        'primary',
        'secondary',
        'negative',
        'linkSmall',
        'linkLarge',
        'tag'
      ]
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Brand Button'
  }
}

export const BrandOutline: Story = {
  args: {
    variant: 'brandOutline',
    children: 'Brand Outline Button'
  }
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}

export const Negative: Story = {
  args: {
    variant: 'negative',
    children: 'Negative Button'
  }
}

export const Tag: Story = {
  args: {
    variant: 'tag',
    children: 'Tag Button'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}

export const AsLink: Story = {
  args: {
    href: '/some-page',
    children: 'Button as Link'
  }
}

export const WithCustomClass: Story = {
  args: {
    className: 'bg-purple-500 text-white',
    children: 'Custom Styled Button'
  }
}
