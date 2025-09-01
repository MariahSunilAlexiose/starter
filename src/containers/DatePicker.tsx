"use client"

import { useState } from "react"

import Image from "next/image"

import {
  Button,
  Calendar,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components"
import { ChevronDownIcon } from "@/icons"

const DatePicker = ({ label }: { label: string }) => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>(new Date())
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover>
        <PopoverTrigger onClick={() => setOpen(!open)}>
          <Button
            variant="outline"
            className="w-48 flex items-center justify-between! font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <Image
              src={ChevronDownIcon}
              alt="Chevron Down Icon"
              className="size-4"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          isOpen={open}
          className="overflow-hidden p-0 w-96 bg-background"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date: Date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePicker
