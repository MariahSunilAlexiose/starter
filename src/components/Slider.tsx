"use client"

import { ChangeEvent, useState } from "react"

const Slider = ({
  className,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}: {
  className?: string
  value?: number | [number, number]
  defaultValue?: number | [number, number]
  min?: number
  max?: number
  step?: number
  onChange?: (value: number | [number, number]) => void // eslint-disable-line no-unused-vars
}) => {
  const isRange = Array.isArray(defaultValue ?? value)
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? (isRange ? [min, max] : min)
  )

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newVal = Number(e.target.value)
      if (isRange) {
        const newRange = [...(currentValue as [number, number])]
        newRange[index] = newVal
        if (!isControlled) setInternalValue(newRange)
        onChange?.(newRange as [number, number])
      } else {
        if (!isControlled) setInternalValue(newVal)
        onChange?.(newVal)
      }
    }

  return (
    <div className={`${className} relative w-full flex flex-col gap-2`}>
      {isRange ? (
        <>
          {/* Dual Range Slider */}
          <div className={`${className} relative h-2`}>
            {/* Track background */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-accent rounded-full" />
            {/* Background color for the selected range */}
            <div
              className="absolute top-1/2 h-2 bg-primary rounded-full"
              style={{
                left: `${(((currentValue as [number, number])[0] - min) / (max - min)) * 100}%`,
                width: `${(((currentValue as [number, number])[1] - (currentValue as [number, number])[0]) / (max - min)) * 100}%`,
              }}
            />
            {/* First thumb (left) */}
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={(currentValue as [number, number])[0]}
              onChange={handleChange(0)}
              className="absolute w-full pointer-events-none appearance-none focus:outline-none"
            />

            {/* Second thumb (right) */}
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={(currentValue as [number, number])[1]}
              onChange={handleChange(1)}
              className="absolute w-full pointer-events-none appearance-none focus:outline-none"
            />
          </div>
          {/* Prints selected range */}
          <div className="text-sm text-muted-foreground mt-2 text-center">
            Range: {(currentValue as [number, number])[0]} –{" "}
            {(currentValue as [number, number])[1]}
          </div>
        </>
      ) : (
        <>
          {/* Slider */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue as number}
            onChange={handleChange(0)}
          />
          {/* Prints selected value */}
          <div className="text-sm text-muted-foreground mt-2 text-center">
            Value: {currentValue}
          </div>
        </>
      )}
    </div>
  )
}

export default Slider
