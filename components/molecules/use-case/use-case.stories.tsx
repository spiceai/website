import { Meta, StoryObj } from '@storybook/react'
import { UseCase } from './use-case'

const meta: Meta<typeof UseCase> = {
  title: 'Molecules/UseCase',
  component: UseCase,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof UseCase>

export const Default: Story = {
  args: {
    useCaseData: {
      title: 'Example Use Case',
      description: 'This is a description of the example use case.',
      buttonText: 'Learn More',
      buttonLink: 'https://example.com'
    }
  }
}

export const LongTitle: Story = {
  args: {
    useCaseData: {
      title: 'This is a very long title that might wrap to multiple lines',
      description: 'A short description.',
      buttonText: 'Learn More',
      buttonLink: 'https://example.com'
    }
  }
}

export const LongDescription: Story = {
  args: {
    useCaseData: {
      title: 'Short Title',
      description:
        'This is a very long description that goes into great detail about the use case. It might span multiple lines and really test the layout of the component.',
      buttonText: 'Learn More',
      buttonLink: 'https://example.com'
    }
  }
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14promax'
    }
  },
  args: {
    useCaseData: {
      title: 'Mobile Use Case',
      description: 'This is how the use case looks on mobile devices.',
      buttonText: 'Learn More',
      buttonLink: 'https://example.com'
    }
  }
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  args: {
    useCaseData: {
      title: 'Tablet Use Case',
      description: 'This is how the use case looks on tablet devices.',
      buttonText: 'Learn More',
      buttonLink: 'https://example.com'
    }
  }
}
