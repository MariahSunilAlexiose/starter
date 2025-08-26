/* eslint-disable */
"use client"

import { Label } from "."

type Props = {
  title: string
  value: string
  selectedValue: string
  onValueChange: (value: string) => void
}

const RadioInput = ({ title, value, selectedValue, onValueChange }: Props) => {
  const inputId = `radio-${title.replace(/\s+/g, "-").toLowerCase()}`
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={inputId}
        className="accent-primary"
        value={title}
        onChange={() => onValueChange(value)}
        checked={value === selectedValue}
      />
      <Label htmlFor={inputId} className="cursor-pointer">
        {title}
      </Label>
    </div>
  )
}

export default RadioInput
