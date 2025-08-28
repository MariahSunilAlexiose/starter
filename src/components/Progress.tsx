import React from "react"

type ProgressProps = {
  className: string
  value: number
}

const Progress = ({ className, value, ...props }: ProgressProps) => {
  return (
    <div
      data-slot="progress"
      className={`${className} bg-primary/20 relative h-2 w-full overflow-hidden rounded-full`}
      {...props}
    >
      <div
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}

export default Progress
