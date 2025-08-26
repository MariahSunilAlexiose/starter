type Props = {
  variant?: "default" | "accent" | "destructive" | "outline"
  title: string
  className?: string
}

const variants = {
  default:
    "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
  accent:
    "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
  destructive:
    "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
  outline: "text-foreground",
}

const Badge = ({ variant = "default", title, className }: Props) => {
  return (
    <div
      className={`${className} focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden ${variants[variant]}`}
    >
      {title}
    </div>
  )
}

export default Badge
