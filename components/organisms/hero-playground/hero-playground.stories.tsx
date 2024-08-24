import type { Meta, StoryObj } from '@storybook/react'
import { HeroPlayground } from './hero-playground'

const meta: Meta<typeof HeroPlayground> = {
  title: 'Organisms/HeroPlayground',
  component: HeroPlayground,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof HeroPlayground>

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
