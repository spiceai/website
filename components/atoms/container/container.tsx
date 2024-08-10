import { cn } from 'lib/utils'

export const Container = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('px-4 sm:px-16 lg:px-20 xl:px-0', className)}>{children}</div>
}
