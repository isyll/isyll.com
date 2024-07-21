import clsx from 'clsx'

function Button({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <button className={clsx('bg-primary rounded-md px-8 py-3', className)}>{children}</button>
}

export default Button
