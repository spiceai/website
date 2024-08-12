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
      negative: 'bg-neutral hover:bg-primary',
      tag: 'px-4 py-3 hover:bg-alpha-50 active:bg-alpha-100',
      tagSmall:
        'bg-alpha-100 rounded-sm hover:bg-alpha-150 active:bg-alpha-200 text-sm leading-6 text-alpha-700'
    },
    size: {
      sm: 'px-3 py-2 text-base',
      md: 'px-4 py-3 text-base',
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
        'active:bg-red-700 hover:text-primary-foreground hover:shadow-button-hover active:shadow-none'
    },
    {
      variant: ['brand', 'brandOutline', 'primary'],
      className: 'text-primary-foreground'
    },
    {
      variant: ['secondary', 'negative'],
      className: 'text-neutral-foreground'
    },
    {
      variant: ['tagSmall'],
      className: 'px-2 py-1'
    }
  ]
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
  ref?: React.Ref<HTMLButtonElement>
}
const Button = ({ className, variant, size, href, ref, ...props }: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (href) {
    return (
      <Link className={classes} {...(props as LinkProps)} href={href}>
        {props.children}
      </Link>
    )
  }

  return <button className={classes} {...props} {...(ref ? { ref } : {})} />
}

Button.displayName = 'Button'

export { Button, buttonVariants }
