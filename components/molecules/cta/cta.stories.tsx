import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Cta } from './cta'

const meta: Meta<typeof Cta> = {
  title: 'Molecules/Cta',
  component: Cta,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Cta>

export const Default: Story = {}

export const CustomClassName: Story = {
  args: {
    className: 'bg-gray-100'
  }
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}

export const LargeDesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  }
}
