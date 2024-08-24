import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: ['twitter', 'github', 'discord', 'youtube', 'apple', 'windows', 'linux', 'spinner']
      }
    },
    height: { control: 'text' },
    width: { control: 'text' },
    fill: { control: 'color' },
    className: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const CustomSize: Story = {
  args: {
    iconName: 'github',
    height: '48px',
    width: '48px'
  }
}

export const CustomColor: Story = {
  args: {
    iconName: 'discord',
    fill: '#7289DA'
  }
}

export const WithClassName: Story = {
  args: {
    iconName: 'youtube',
    className: 'custom-icon-class'
  }
}

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {['twitter', 'github', 'discord', 'youtube', 'apple', 'windows', 'linux', 'spinner'].map(
        (iconName) => (
          <div
            key={iconName}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Icon iconName={iconName as any} />
            <span>{iconName}</span>
          </div>
        )
      )}
    </div>
  )
}

export const Spinner: Story = {
  args: {
    iconName: 'spinner',
    className: 'animate-spin'
  }
}
