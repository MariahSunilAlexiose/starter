import { ComponentProps } from "react"

const Skeleton = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="skeleton"
      className={`${className} bg-primary/10 animate-pulse rounded-md`}
      {...props}
    />
  )
}

export default Skeleton
