import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/utils'

const buttonVariants = cva('rounded-xl font-semibold transition-colors', {
  variants: {
    variant: {
      brand:
        ' bg-primary text-primary-foreground hover:bg-primary-600 hover:text-primary-foreground hover:shadow-[0px_-4px_8px_0px_rgba(246,_147,_65,_0.40)] active:bg-red-400 active:shadow-none',
      brandOutline:
        '  bg-primary hover:bg-neutral hover:text-neutral-foreground active:bg-neutral-400 active:shadow-none',
      primary:
        ' bg-alpha-900 text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground hover:shadow-button-hover active:bg-red-400 active:shadow-none',
      secondary:
        ' bg-neutral text-neutral-foreground hover:bg-alpha-150 hover:text-neutral-foreground active:bg-alpha-300',
      negative:
        ' bg-neutral text-neutral-foreground hover:bg-primary  hover:text-primary-foreground hover:shadow-button-hover active:bg-red-400 active:shadow-none'
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
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button(
  { className, variant, size, ...props }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
}

Button.displayName = 'Button'

export { Button, buttonVariants }
