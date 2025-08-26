"use client"

import { useState } from "react"

import Image from "next/image"

import { ChevronDownIcon } from "@/icons"

import { Separator } from "."

type Props = {
  trigger: string
  content: string
}

const AccordionItem = ({ trigger, content }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      <div
        className="flex flex-1 cursor-pointer items-center justify-between py-4 text-sm font-medium transition-all hover:font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`${isOpen ? "font-bold" : ""}`}>{trigger}</p>
        <Image
          src={ChevronDownIcon}
          alt="Chevron Down Icon"
          className={`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="open:animate-accordion-down overflow-hidden text-sm">
          <div className="pt-0 pb-4">{content}</div>
        </div>
      )}
      <Separator />
    </div>
  )
}

export default AccordionItem
