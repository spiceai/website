import * as React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { cn } from 'lib/utils'

interface LinkProps
  extends Omit<NextLinkProps, 'href'>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'small' | 'large'
  className?: string
  children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, variant = 'small', className, children, ...props }) => {
  const baseClasses =
    'rounded-xl font-semibold text-base transition-colors hover:text-primary active:text-red-700'
  const variantClasses =
    variant === 'small' ? 'font-medium text-primary-foreground' : 'text-alpha-900 text-lg'

  const classes = cn(baseClasses, variantClasses, className)

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  )
}

Link.displayName = 'Link'

export { Link }
