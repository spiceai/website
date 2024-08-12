import { Metadata } from 'next'
import './globals.css'
import { Manrope } from 'next/font/google'
import { Footer } from 'components/organisms/footer/footer'
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
      <body
        className={clsx(
          'min-h-screen bg-neutral-50 px-4 font-sans antialiased sm:px-16 lg:px-20 xl:px-0',
          manrope.variable
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
