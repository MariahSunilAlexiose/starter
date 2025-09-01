"use client"

import {
  ComponentProps,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"

import Image from "next/image"

import { ChevronDownIcon, ChevronUpDownIcon } from "@/icons"

const SelectContext = createContext<any>(null)

const Select = ({ children, className }: ComponentProps<"div">) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <SelectContext.Provider
      value={{ open, setOpen, selected, setSelected, triggerRef }}
    >
      <div className={`${className} relative inline-block`}>{children}</div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = ({ className, children }: ComponentProps<"div">) => {
  const { open, setOpen, triggerRef } = useContext(SelectContext)

  return (
    <div
      ref={triggerRef}
      data-slot="select-trigger"
      className={`${className} px-4 py-2 whitespace-nowrap rounded-md transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground w-48 font-normal border gap-2 text-sm inline-flex items-center justify-between cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      {children}
      <Image src={ChevronDownIcon} alt="Chevron Down Icon" className="size-4" />
    </div>
  )
}

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { selected } = useContext(SelectContext)
  return (
    <div data-slot="select-value" className="truncate">
      {selected || placeholder}
    </div>
  )
}

const SelectContent = ({ children }: ComponentProps<"div">) => {
  const { open, triggerRef } = useContext(SelectContext)

  if (!open) return null

  return (
    <div
      data-slot="select-content"
      className="absolute z-10 mt-1 bg-white border rounded-md shadow-lg"
      style={{ minWidth: triggerRef.current?.offsetWidth }}
    >
      {children}
    </div>
  )
}

const SelectGroup = ({ children }: ComponentProps<"div">) => {
  return <div data-slot="select-group">{children}</div>
}

const SelectLabel = ({ children }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="select-label"
      className="px-2 py-1 text-sm font-semibold text-gray-700"
    >
      {children}
    </div>
  )
}

const SelectItem = ({
  title,
  children,
}: ComponentProps<"div"> & {
  title: string
}) => {
  const { setSelected, setOpen } = useContext(SelectContext)

  return (
    <div
      data-slot="select-item"
      data-value={title}
      className="flex items-center justify-between px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100"
      onClick={() => {
        setSelected(title)
        setOpen(false)
      }}
    >
      <div>{children}</div>
    </div>
  )
}

const SelectScrollUpButton = () => {
  return (
    <div
      data-slot="select-scroll-up-button"
      className="flex justify-center py-1"
    >
      <Image src={ChevronUpDownIcon} alt="Chevron Up Icon" className="size-4" />
    </div>
  )
}

const SelectScrollDownButton = () => {
  return (
    <div
      data-slot="select-scroll-down-button"
      className="flex justify-center py-1"
    >
      <Image src={ChevronDownIcon} alt="Chevron Down Icon" className="size-4" />
    </div>
  )
}

const SelectSeparator = () => {
  return <div data-slot="select-separator" className="h-px bg-gray-200 my-1" />
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectSeparator,
}
