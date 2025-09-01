import { ComponentProps } from "react"

import Image from "next/image"

import { ChevronDownIcon } from "@/icons"

const navigationMenuTriggerStyle =
  "group inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"

const NavigationMenu = ({ className, children }: ComponentProps<"div">) => {
  return (
    <nav data-slot="navigation-menu" className={`${className} relative flex`}>
      {children}
    </nav>
  )
}

const NavigationMenuList = ({ className, children }: ComponentProps<"div">) => {
  return (
    <ul
      data-slot="navigation-menu-list"
      className={`${className} flex list-none items-center justify-center gap-1`}
    >
      {children}
    </ul>
  )
}

const NavigationMenuItem = ({ className, children }: ComponentProps<"div">) => {
  return (
    <li data-slot="navigation-menu-item" className={`${className} w-full`}>
      {children}
    </li>
  )
}

const NavigationMenuTrigger = ({
  className,
  children,
  onClick,
  isOpen,
}: ComponentProps<"button"> & {
  isOpen?: boolean
}) => {
  return (
    <button
      data-slot="navigation-menu-trigger"
      className={`${className} ${navigationMenuTriggerStyle} group`}
      onClick={onClick}
    >
      {children}
      <Image
        src={ChevronDownIcon}
        alt="Chevron Down Icon"
        className={`relative top-[1px] ml-1 size-3 transition duration-300 ${isOpen ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  )
}

const NavigationMenuContent = ({
  className,
  isOpen,
  children,
}: ComponentProps<"div"> & {
  isOpen?: boolean
}) => {
  if (!isOpen) return null

  return (
    <div
      data-slot="navigation-menu-content"
      className={`${className} mt-2 bg-background text-foreground rounded-md p-2 z-50 animate-in fade-in zoom-in-95`}
    >
      {children}
    </div>
  )
}

const NavigationMenuLink = ({
  className,
  children,
  href,
}: ComponentProps<"a">) => {
  return (
    <a
      data-slot="navigation-menu-link"
      href={href}
      className={`${className} flex flex-col gap-1 rounded-sm p-2 text-sm transition hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1`}
    >
      {children}
    </a>
  )
}

const NavigationMenuIndicator = ({ className }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="navigation-menu-indicator"
      className={`${className} absolute top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden`}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </div>
  )
}

const NavigationMenuViewport = ({
  className,
  children,
}: ComponentProps<"div">) => {
  return (
    <div
      className={`${className} absolute top-full left-0 isolate z-50 flex justify-center`}
    >
      <div
        data-slot="navigation-menu-viewport"
        className={`${className} relative mt-1.5 w-full overflow-hidden rounded-md border shadow bg-popover text-popover-foreground animate-in zoom-in-90"`}
      >
        {children}
      </div>
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
