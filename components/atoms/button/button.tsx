import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { cn } from 'lib/utils'

const buttonVariants = cva('font-semibold transition-colors', {
  variants: {
    variant: {
      brand: 'bg-primary hover:bg-primary-600',
      brandOutline:
        'bg-primary  hover:bg-neutral hover:text-neutral-foreground active:bg-neutral-400 active:shadow-none hover:shadow-button-hover',
      primary: 'bg-alpha-900 hover:bg-primary ',
      secondary: 'bg-neutral hover:bg-alpha-150 hover:text-neutral-foreground active:bg-alpha-300',
      negative: 'bg-neutral hover:bg-primary',
      linkSmall: 'text-neutral font-medium',
      linkLarge: 'text-alpha-900 text-lg',
      tag: 'px-4 py-3 hover:bg-alpha-50 active:bg-alpha-100'
    },
    size: {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-8 py-4'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  },
  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'brand', 'brandOutline', 'negative', 'tag'],
      className: 'rounded-xl'
    },
    {
      variant: ['linkSmall', 'linkLarge'],
      size: 'md',
      className: 'px-0 py-0 hover:text-primary active:text-red-400'
    },
    {
      variant: ['brand', 'primary', 'negative'],
      className:
        'active:bg-red-400 hover:text-primary-foreground hover:shadow-button-hover active:shadow-none'
    },
    {
      variant: ['brand', 'brandOutline', 'primary', 'linkSmall'],
      className: 'text-primary-foreground'
    },
    {
      variant: ['secondary', 'negative'],
      className: 'text-neutral-foreground'
    }
  ]
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}
const Button = ({ className, variant, size, href, ...props }: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (href) {
    return (
      <Link className={classes} {...(props as LinkProps)} href={href}>
        {props.children}
      </Link>
    )
  }

  return <button className={classes} {...props} />
}

Button.displayName = 'Button'

export { Button, buttonVariants }
