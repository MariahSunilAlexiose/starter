type Props = {
  orientation?: "horizontal" | "vertical"
  className?: string
}

const Separator = ({ orientation = "horizontal", className }: Props) => {
  return (
    <div
      className={`${orientation === "horizontal" ? "h-px w-full" : "h-full w-px"} ${className} bg-border shrink-0`}
    ></div>
  )
}

export default Separator
