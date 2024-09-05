import { Manrope } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import { Metadata } from 'next'

import { Footer } from 'components/organisms/footer/footer'
import './globals.css'
import clsx from 'clsx'
import { Header } from 'components/molecules/header/header'

export const metadata: Metadata = {
  title: 'Spice.ai OSS',
  description:
    'Spice makes it easy for developers to create production-ready AI-native data warehouses using Apache Arrow, DuckDB, and SQLite.'
}

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          'min-h-screen bg-neutral-50 font-sans antialiased',
          manrope.variable,
          robotoMono.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
