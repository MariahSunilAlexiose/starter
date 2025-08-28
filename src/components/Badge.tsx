type Props = {
  variant?: "default" | "primary" | "accent" | "destructive" | "outline"
  children: React.ReactNode
  className?: string
}

const variants = {
  default:
    "border-transparent bg-foreground text-background shadow-sm [a&]:hover:bg-foreground/90",
  primary:
    "border-transparent bg-primary text-primary-foreground shadow-sm [a&]:hover:bg-primary/90",
  accent:
    "border-transparent bg-accent text-accent-foreground [a&]:hover:bg-accent/90",
  destructive:
    "border-transparent bg-destructive text-destructive-foreground shadow-sm [a&]:hover:bg-destructive/90",
  outline:
    "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
}

const Badge = ({ variant = "default", children, className }: Props) => {
  return (
    <div
      data-slot="badge"
      className={`${className} ${variants[variant]} inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow]`}
    >
      {children}
    </div>
  )
}

export default Badge
