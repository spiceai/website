import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import clsx from 'clsx'

const paragraphVariants = cva('', {
  variants: {
    variant: {
      small: 'text-sm leading-6',
      medium: 'text-base leading-7',
      large: 'text-lg',
      extralarge: 'text-2xl text-neutral-400'
    }
  },
  defaultVariants: {
    variant: 'medium'
  },
  compoundVariants: [
    {
      variant: ['small', 'medium', 'large'],
      className: 'text-alpha-700'
    }
  ]
})

type ParagraphProps = VariantProps<typeof paragraphVariants> & {
  className?: string
  children: React.ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({ className, variant, children, ...props }) => {
  const classes = clsx(paragraphVariants({ variant, className }))

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

Paragraph.displayName = 'Paragraph'

export { Paragraph, paragraphVariants }
