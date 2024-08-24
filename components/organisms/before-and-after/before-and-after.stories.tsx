import type { Meta, StoryObj } from '@storybook/react'
import { BeforeAndAfter } from './before-and-after'

const meta: Meta<typeof BeforeAndAfter> = {
  title: 'Organisms/BeforeAndAfter',
  component: BeforeAndAfter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof BeforeAndAfter>

export const Default: Story = {}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14promax'
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

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}
