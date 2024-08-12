import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Container } from './container'
import { Footer } from 'components/organisms/footer/footer'

const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Container>

const ExampleContent = () => (
  <div className='bg-blue-200 p-4'>
    <p>This is example content inside the Container.</p>
  </div>
)

export const Default: Story = {
  render: () => (
    <Container>
      <ExampleContent />
    </Container>
  )
}

export const NestedContainers: Story = {
  render: () => (
    <Container className='bg-red-100'>
      <p className='mb-4'>Outer Container</p>
      <Container className='bg-green-100'>
        <p>Inner Container</p>
        <ExampleContent />
      </Container>
    </Container>
  )
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => (
    <Container>
      <ExampleContent />
    </Container>
  )
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  render: () => (
    <Container>
      <ExampleContent />
    </Container>
  )
}

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  render: () => (
    <Container>
      <ExampleContent />
    </Container>
  )
}

export const WithFooter: Story = {
  render: () => (
    <Container>
      <Footer />
    </Container>
  )
}
