"use client"

import { useState } from "react"

import { Label } from "."

type Props = {
  id: string
  label?: string
}

const Checkbox = ({ id, label }: Props) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className="flex items-center space-x-3" id={id}>
      <input
        type="checkbox"
        className={`form-checkbox h-4 w-4 ${checked ? "accent-primary" : ""}`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {label && <Label htmlFor={label}>{label}</Label>}
    </div>
  )
}

export default Checkbox
