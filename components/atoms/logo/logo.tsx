import React from 'react'
import Image from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'

const logoVariants = cva('', {
  variants: {
    variant: {
      white: '',
      dark: '',
      logotype: ''
    }
  },
  defaultVariants: {
    variant: 'white'
  }
})

type LogoProps = VariantProps<typeof logoVariants> & {
  className?: string
  width?: number
  height?: number
}

export const Logo: React.FC<LogoProps> = ({ variant, className, width = 156, height = 32 }) => {
  const src = `/spice-logo-${variant}.png`

  return (
    <Image
      src={src}
      alt='Spice.ai Logo'
      width={width}
      height={height}
      className={logoVariants({ variant, className })}
    />
  )
}
