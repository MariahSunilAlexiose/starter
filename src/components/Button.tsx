"use client"

import { ButtonVariants } from "@/constants"
import { ButtonProps } from "@/types"

const Button = ({
  variant = "default",
  size = "default",
  children,
  type = "button",
  className,
  role,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      role={role}
      className={`${className} ${ButtonVariants.variant[variant]} ${ButtonVariants.size[size]} cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
