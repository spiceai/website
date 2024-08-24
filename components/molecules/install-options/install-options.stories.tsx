import { Meta, StoryObj } from '@storybook/react'
import { InstallOptions } from './install-options'

const meta: Meta<typeof InstallOptions> = {
  title: 'Molecules/InstallOptions',
  component: InstallOptions,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InstallOptions>

export const Default: Story = {
  args: {
    // Add default props here
  }
}

export const WithMultipleOptions: Story = {
  args: {
    options: [
      { label: 'npm', command: 'npm install your-package' },
      { label: 'yarn', command: 'yarn add your-package' },
      { label: 'pnpm', command: 'pnpm add your-package' }
    ]
  }
}

export const WithLongCommand: Story = {
  args: {
    options: [
      {
        label: 'Long Command',
        command: 'npm install your-package @some-scope/another-package yet-another-package'
      }
    ]
  }
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone5'
    }
  },
  args: {
    options: [
      { label: 'npm', command: 'npm install your-package' },
      { label: 'yarn', command: 'yarn add your-package' }
    ]
  }
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  args: {
    options: [
      { label: 'npm', command: 'npm install your-package' },
      { label: 'yarn', command: 'yarn add your-package' },
      { label: 'pnpm', command: 'pnpm add your-package' }
    ]
  }
}
