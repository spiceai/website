import React from 'react'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import type { Preview } from '@storybook/react'
import { Manrope } from 'next/font/google'
import { cn } from '../lib/utils'

import '../app/globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    nextjs: {
      appDirectory: true
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={cn('font-sans antialiased', manrope.variable)}>
        <Story />
      </div>
    )
  ]
}

export default preview
