import React from "react"

function Popover({ children }: { children: React.ReactNode }) {
  return (
    <div data-slot="popover" className="relative inline-block">
      {children}
    </div>
  )
}

function PopoverTrigger({
  onClick,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button data-slot="popover-trigger" onClick={onClick} {...props}>
      {children}
    </button>
  )
}

function PopoverContent({
  className,
  isOpen,
  align = "center",
  sideOffset = 4,
  children,
  ...props
}: {
  className?: string
  isOpen: boolean
  align?: "start" | "center" | "end"
  sideOffset?: number
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  if (!isOpen) return null

  return (
    <div
      data-slot="popover-content"
      className={`${className} absolute data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden`}
      style={{
        top: `calc(100% + ${sideOffset}px)`,
        left: align === "start" ? "0" : align === "end" ? "auto" : "50%",
        transform: align === "center" ? "translateX(-50%)" : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

function PopoverAnchor({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="popover-anchor" {...props}>
      {children}
    </div>
  )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
