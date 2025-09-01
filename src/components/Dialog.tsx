"use client"

import {
  cloneElement,
  ComponentProps,
  createContext,
  Dispatch,
  isValidElement,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

import Image from "next/image"

import { XMarkIcon } from "@/icons"

type DialogContextType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const DialogContext = createContext<DialogContextType | null>(null)

const Dialog = ({ children }: ComponentProps<"div">) => {
  const [open, setOpen] = useState(false)

  return (
    <DialogContext.Provider data-slot="dialog" value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

const DialogTrigger = ({
  asChild,
  children,
}: {
  asChild?: boolean
  children: ReactNode
}) => {
  const context = useContext(DialogContext)
  if (!context) return null

  const handleClick = () => {
    context.setOpen(true)
  }

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<any>

    const existingOnClick = child.props.onClick

    return cloneElement(child, {
      ...child.props,
      onClick: (e: MouseEvent) => {
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

const DialogClose = ({
  asChild,
  children,
}: {
  asChild?: boolean
  children: ReactNode
}) => {
  const context = useContext(DialogContext)
  if (!context) return null

  const handleClick = () => {
    context.setOpen(false)
  }

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<any>
    const existingOnClick = child.props.onClick

    return cloneElement(child, {
      ...child.props,
      onClick: (e: MouseEvent) => {
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

const DialogOverlay = ({ className }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-overlay"
      className={`${className} fixed inset-0 z-50 bg-black/80 animate-fade-in`}
    />
  )
}

const DialogContent = ({ className, children }: ComponentProps<"div">) => {
  const context = useContext(DialogContext)
  if (!context || !context.open) return null

  return (
    <div data-slot="dialog-portal">
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
    </div>
  )
}

const DialogHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-header"
      className={`${className} flex flex-col gap-2 text-center sm:text-left`}
      {...props}
    />
  )
}

const DialogFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={`${className} flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`}
      {...props}
    />
  )
}

const DialogTitle = ({ className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      data-slot="dialog-title"
      className={`${className} border-none text-lg leading-none font-semibold tracking-tight`}
      {...props}
    />
  )
}

const DialogDescription = ({ className, ...props }: ComponentProps<"p">) => {
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
