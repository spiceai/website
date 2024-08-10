import { cn } from 'lib/utils'

/**
 *
 * Containers are used to wrap content and provide consistent spacing and alignment.
 */
export const Container = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('px-4 sm:px-16 lg:px-20 xl:px-0', className)}>{children}</div>
}
