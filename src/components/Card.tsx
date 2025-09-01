import { ComponentProps } from "react"

const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={`${className} bg-card text-card-foreground rounded-xl border shadow-sm`}
      {...props}
    />
  )
}

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={`${className} flex flex-col gap-1.5 p-6`}
      {...props}
    />
  )
}

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <h3
      data-slot="card-title"
      className={`${className} leading-none font-semibold tracking-tight`}
      {...props}
    />
  )
}

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={`${className} text-muted-foreground text-sm`}
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={`${className} p-6 pt-0`}
      {...props}
    />
  )
}

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={`${className} flex items-center p-6 pt-0`}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
