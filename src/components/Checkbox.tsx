"use client"

import { useEffect, useState } from "react"

function Checkbox({
  className,
  defaultChecked,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const [checked, setChecked] = useState<boolean>(false)
  useEffect(() => {
    setChecked(defaultChecked ?? false)
  }, [defaultChecked])
  return (
    <label data-slot="checkbox" className="relative inline-flex items-center">
      <input
        type="checkbox"
        data-slot="checkbox"
        className={`${className} ${checked ? "bg-primary text-primary-background border-primary" : ""} peer border-input ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        {...props}
      />
    </label>
  )
}

export default Checkbox
