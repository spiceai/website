import React from 'react'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import type { Preview } from '@storybook/react'
import { Manrope } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'

import '../app/globals.css'
import clsx from 'clsx'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
})

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: { toc: true, class: 'text-base' },
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
      <div
        className={clsx('font-sans text-base antialiased', manrope.variable, robotoMono.variable)}
      >
        <Story />
      </div>
    )
  ]
}

export default preview
