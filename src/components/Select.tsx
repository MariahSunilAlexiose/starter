"use client"

import React, { createContext, useContext, useRef, useState } from "react"

import Image from "next/image"

import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from "@/icons"

const SelectContext = createContext<any>(null)

function Select({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <SelectContext.Provider
      value={{ open, setOpen, selected, setSelected, triggerRef }}
    >
      <div className="relative inline-block">{children}</div>
    </SelectContext.Provider>
  )
}

function SelectTrigger({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { open, setOpen, triggerRef } = useContext(SelectContext)

  return (
    <div
      ref={triggerRef}
      data-slot="select-trigger"
      className={`${className} border px-3 py-2 rounded-md flex items-center justify-between cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      {children}
      <Image
        src={ChevronDownIcon}
        alt="Chevron Down Icon"
        className="size-4 opacity-50"
      />
    </div>
  )
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  const { selected } = useContext(SelectContext)
  return (
    <div data-slot="select-value" className="truncate">
      {selected || placeholder}
    </div>
  )
}

function SelectContent({ children }: { children: React.ReactNode }) {
  const { open, triggerRef } = useContext(SelectContext)

  if (!open) return null

  return (
    <div
      data-slot="select-content"
      className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg"
      style={{ minWidth: triggerRef.current?.offsetWidth }}
    >
      {children}
    </div>
  )
}

function SelectGroup({ children }: { children: React.ReactNode }) {
  return <div data-slot="select-group">{children}</div>
}

function SelectLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-slot="select-label"
      className="px-2 py-1 text-sm font-semibold text-gray-700"
    >
      {children}
    </div>
  )
}

function SelectItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const { selected, setSelected, setOpen } = useContext(SelectContext)
  const isSelected = selected === title

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
      {isSelected && (
        <Image src={CheckIcon} alt="Check Icon" className="size-4" />
      )}
    </div>
  )
}

function SelectScrollUpButton() {
  return (
    <div
      data-slot="select-scroll-up-button"
      className="flex justify-center py-1"
    >
      <Image src={ChevronUpDownIcon} alt="Chevron Up Icon" className="size-4" />
    </div>
  )
}

function SelectScrollDownButton() {
  return (
    <div
      data-slot="select-scroll-down-button"
      className="flex justify-center py-1"
    >
      <Image src={ChevronDownIcon} alt="Chevron Down Icon" className="size-4" />
    </div>
  )
}

function SelectSeparator() {
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
