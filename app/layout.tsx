import { Manrope } from 'next/font/google'
import { Metadata } from 'next'

import { Footer } from 'components/organisms/footer/footer'
import './globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Spice.ai',
  description:
    'Composable, ready-to-use data and AI infrastructure pre-loaded with web3 data. Accelerate development of the next generation of intelligent software.'
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={clsx('min-h-screen bg-neutral-50 font-sans antialiased', manrope.variable)}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
