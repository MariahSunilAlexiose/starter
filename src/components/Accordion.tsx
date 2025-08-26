"use client"

import React from "react"

import Image from "next/image"

import { ChevronDownIcon } from "@/icons"

type AccordionProps = {
  children: React.ReactNode
  className?: string
}

function Accordion({ children, className }: AccordionProps) {
  return (
    <div data-slot="accordion" className={className}>
      {children}
    </div>
  )
}

type AccordionItemProps = {
  children: React.ReactNode
  className?: string
}

function AccordionItem({ children, className }: AccordionItemProps) {
  return (
    <div
      data-slot="accordion-item"
      className={`${className} border-b last:border-b-0`}
    >
      {children}
    </div>
  )
}

type AccordionTriggerProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isOpen: boolean
}

function AccordionTrigger({
  children,
  className,
  onClick,
  isOpen,
}: AccordionTriggerProps) {
  return (
    <div className="flex">
      <button
        data-slot="accordion-trigger"
        onClick={onClick}
        className={`${className} ${isOpen ? "font-bold" : "font-medium"} hover:font-bold cursor-pointer ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm  transition-all focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50`}
      >
        {children}
        <Image
          src={ChevronDownIcon}
          alt="Chevron Down Icon"
          className={`text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  )
}

type AccordionContentProps = {
  children: React.ReactNode
  className?: string
  isOpen: boolean
}

function AccordionContent({
  children,
  className,
  isOpen,
}: AccordionContentProps) {
  return (
    <div
      data-slot="accordion-content"
      className={`${isOpen ? "animate-accordion-down" : "animate-accordion-up"} overflow-hidden text-sm transition-all duration-300`}
    >
      {isOpen && <div className={`pt-0 pb-4 ${className}`}>{children}</div>}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
