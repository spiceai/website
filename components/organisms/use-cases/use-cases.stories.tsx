import type { Meta, StoryObj } from '@storybook/react'
import { UseCases } from './use-cases'

const meta: Meta<typeof UseCases> = {
  title: 'Organisms/UseCases',
  component: UseCases,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof UseCases>

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}
