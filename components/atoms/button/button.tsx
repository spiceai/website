import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { cn } from 'lib/utils'

const buttonVariants = cva('rounded-xl font-semibold transition-colors', {
  variants: {
    variant: {
      brand: 'bg-primary hover:bg-primary-600',
      brandOutline:
        'bg-primary  hover:bg-neutral hover:text-neutral-foreground active:bg-neutral-400 active:shadow-none hover:shadow-button-hover',
      primary: 'bg-alpha-900 hover:bg-primary ',
      secondary: 'bg-neutral hover:bg-alpha-150 hover:text-neutral-foreground active:bg-alpha-300',
      negative: 'bg-neutral hover:bg-primary'
    },
    size: {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-8 py-4 text-lg'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  },
  compoundVariants: [
    {
      variant: ['brand', 'primary', 'negative'],
      className:
        'active:bg-red-400 hover:text-primary-foreground hover:shadow-button-hover active:shadow-none'
    },
    {
      variant: ['brand', 'brandOutline', 'primary'],
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
