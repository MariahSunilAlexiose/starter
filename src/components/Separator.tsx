import { ComponentProps } from "react"

const Separator = ({
  orientation = "horizontal",
  className,
}: ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical"
}) => {
  return (
    <div
      data-slot="separator"
      className={`${orientation === "horizontal" ? "h-px w-full" : "h-full w-px"} ${className} bg-border shrink-0`}
    ></div>
  )
}

export default Separator
