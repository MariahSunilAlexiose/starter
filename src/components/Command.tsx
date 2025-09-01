"use client"

import { ComponentProps, InputHTMLAttributes } from "react"

import Image from "next/image"

import { MagnifyingGlassIcon } from "@/icons"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./Dialog"

const Command = ({ className, children }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="command"
      className={`${className} bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md`}
    >
      {children}
    </div>
  )
}

const CommandDialog = ({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
}) => {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[data-slot=command-input-wrapper]]:h-12 [&_[data-slot=command-group-heading]]:text-muted-foreground [&_[data-slot=command-group-heading]]:px-2 [&_[data-slot=command-group-heading]]:font-medium [&_[data-slot=command-group]]:px-2 [&_[data-slot=command-group]:not([hidden])_~[data-slot=command-group]]:pt-0 [&_[data-slot=command-input-wrapper]_svg]:h-5 [&_[data-slot=command-input-wrapper]_svg]:w-5 [&_[data-slot=command-input]]:h-12 [&_[data-slot=command-item]]:px-2 [&_[data-slot=command-item]]:py-3 [&_[data-slot=command-item]_svg]:h-5 [&_[data-slot=command-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = ({
  className,
  value,
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <Image
        src={MagnifyingGlassIcon}
        alt="Magnifying Glass Icon"
        className="size-4 shrink-0 opacity-50"
      />
      <input
        data-slot="command-input"
        className={`${className} placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

const CommandList = ({ className, children }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="command-list"
      className={`${className} max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto`}
    >
      {children}
    </div>
  )
}

const CommandEmpty = ({ children }: ComponentProps<"div">) => {
  return (
    <div data-slot="command-empty" className="py-6 text-center text-sm">
      {children}
    </div>
  )
}

const CommandGroup = ({
  heading,
  className,
  children,
}: ComponentProps<"div"> & {
  heading?: string
}) => {
  return (
    <div
      data-slot="command-group"
      className={`${className} text-foreground overflow-hidden p-1`}
    >
      {heading && (
        <div
          data-slot="command-group-heading"
          className="text-muted-foreground px-2 py-1.5 text-xs font-medium"
        >
          {heading}
        </div>
      )}
      {children}
    </div>
  )
}

const CommandSeparator = ({ className }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="command-separator"
      className={`${className} bg-border -mx-1 h-px`}
    />
  )
}

const CommandItem = ({
  className,
  children,
  onClick,
  onItemSelect,
  value,
  disabled,
}: ComponentProps<"div"> & {
  onClick?: () => void
  onItemSelect?: (value: string) => void // eslint-disable-line no-unused-vars
  value?: string
  disabled?: boolean
}) => {
  const handleClick = () => {
    if (disabled) return
    if (onClick) onClick()
    if (onItemSelect && value !== undefined) onItemSelect(value)
  }

  return (
    <div
      data-slot="command-item"
      className={`${className} relative flex hover:bg-accent cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none outline-none ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

const CommandShortcut = ({ className, children }: ComponentProps<"div">) => {
  return (
    <span
      data-slot="command-shortcut"
      className={`${className} text-muted-foreground ml-auto text-xs tracking-widest`}
    >
      {children}
    </span>
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
