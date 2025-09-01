import { ComponentProps } from "react"

const alertVariants = {
  default: "bg-background text-foreground",
  destructive:
    "border-destructive/50 text-destructive dark:text-destructive-foreground/80 dark:border-destructive [&>img]:text-current dark:bg-destructive/50",
}

const Alert = ({
  variant = "default",
  className,
  ...props
}: ComponentProps<"div"> & {
  variant?: "default" | "destructive"
}) => {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={`${alertVariants[variant]} ${className} relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>img]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>img]:gap-x-3 gap-y-0.5 items-start [&>img]:size-4 [&>img]:translate-y-0.5 [&>img]:text-current`}
      {...props}
    />
  )
}

const AlertTitle = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="alert-title"
      className={`${className} col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`}
      {...props}
    />
  )
}

const AlertDescription = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="alert-description"
      className={`${className} col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed`}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
