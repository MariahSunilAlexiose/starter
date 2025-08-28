"use client"

import React, { useState } from "react"

import Image from "next/image"

import { XMarkIcon } from "@/icons"

type DialogContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogContext = React.createContext<DialogContextType | null>(null)

function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

function DialogTrigger({
  asChild,
  children,
}: {
  asChild?: boolean
  children: React.ReactNode
}) {
  const context = React.useContext(DialogContext)
  if (!context) return null

  const handleClick = () => {
    context.setOpen(true)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>

    const existingOnClick = child.props.onClick

    return React.cloneElement(child, {
      ...child.props,
      onClick: (e: React.MouseEvent) => {
        if (typeof existingOnClick === "function") {
          existingOnClick(e)
        }
        handleClick()
      },
      "data-slot": "dialog-trigger",
    })
  }

  return (
    <button onClick={handleClick} data-slot="dialog-trigger">
      {children}
    </button>
  )
}

function DialogClose({
  asChild,
  children,
}: {
  asChild?: boolean
  children: React.ReactNode
}) {
  const context = React.useContext(DialogContext)
  if (!context) return null

  const handleClick = () => {
    context.setOpen(false)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>
    const existingOnClick = child.props.onClick

    return React.cloneElement(child, {
      ...child.props,
      onClick: (e: React.MouseEvent) => {
        if (typeof existingOnClick === "function") {
          existingOnClick(e)
        }
        handleClick()
      },
      "data-slot": "dialog-close",
    })
  }

  return (
    <button onClick={handleClick} data-slot="dialog-close">
      {children}
    </button>
  )
}

function DialogOverlay({ className }: { className?: string }) {
  return (
    <div
      data-slot="dialog-overlay"
      className={`${className} fixed inset-0 z-50 bg-black/80 animate-fade-in`}
    />
  )
}

function DialogContent({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const context = React.useContext(DialogContext)
  if (!context || !context.open) return null

  return (
    <>
      <DialogOverlay />
      <div
        data-slot="dialog-content"
        className={`${className} fixed top-[50%] left-[50%] z-50 flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg`}
      >
        {children}
        <button
          onClick={() => context.setOpen(false)}
          className="absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100"
        >
          <Image src={XMarkIcon} alt="X Mark Icon" className="size-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={`${className} flex flex-col gap-2 text-center sm:text-left`}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={`${className} flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="dialog-title"
      className={`${className} border-none text-lg leading-none font-semibold tracking-tight`}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="dialog-description"
      className={`${className} text-muted-foreground text-sm`}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
