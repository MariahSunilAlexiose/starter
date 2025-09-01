"use client"

import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"
import { ChangeEvent, JSX, useState } from "react"

import Image from "next/image"

import { ChevronLeftIcon, ChevronRightIcon } from "@/icons"

import Button from "./Button"

const Calendar = ({
  mode = "single",
  selected,
  onSelect,
  className,
}: {
  mode?: "single"
  selected?: Date
  onSelect?: (date: Date) => void // eslint-disable-line no-unused-vars
  className?: string
  captionLayout?: "dropdown" | "buttons"
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(selected || new Date())

  const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2000, i), "MMMM")
  )
  const years = Array.from(
    { length: 100 },
    (_, i) => getYear(new Date()) - 50 + i
  )

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(new Date(getYear(currentDate), parseInt(e.target.value), 1))
  }

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(new Date(parseInt(e.target.value), getMonth(currentDate), 1))
  }

  const renderCaption = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <Button
          size="icon"
          variant="accent"
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        >
          <Image
            src={ChevronLeftIcon}
            alt="Chevron Left Icon"
            className="size-4"
          />
        </Button>
        <div className="flex gap-2 justify-center items-center">
          <select
            value={getMonth(currentDate)}
            onChange={handleMonthChange}
            className="border rounded px-2 py-1"
          >
            {months.map((month, i) => (
              <option key={month} value={i}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={getYear(currentDate)}
            onChange={handleYearChange}
            className="border rounded px-2 py-1"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Button
          size="icon"
          variant="accent"
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        >
          <Image
            src={ChevronRightIcon}
            alt="Chevron Right Icon"
            className="size-4"
          />
        </Button>
      </div>
    )
  }

  const renderWeekdays = () => {
    const start = startOfWeek(currentDate)
    return (
      <div className="grid grid-cols-7 mb-2 text-center text-muted-foreground font-medium">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i}>{format(addDays(start, i), "EEE")}</div>
        ))}
      </div>
    )
  }

  const renderDays = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows: JSX.Element[] = []
    let days: JSX.Element[] = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const isCurrentMonth = isSameMonth(day, monthStart)
        const isSelected = selected && isSameDay(day, selected)

        days.push(
          <div
            key={day.toString()}
            className={`p-2 text-center cursor-pointer rounded 
              ${isCurrentMonth ? "text-gray-800" : "text-gray-400"} 
              ${isSelected ? "bg-blue-500 text-white font-bold" : "hover:bg-blue-100"}`}
            onClick={() => mode === "single" && onSelect?.(cloneDay)}
          >
            {format(day, "d")}
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      )
      days = []
    }

    return <div className="space-y-1">{rows}</div>
  }

  return (
    <div className={`${className}`}>
      {renderCaption()}
      {renderWeekdays()}
      {renderDays()}
    </div>
  )
}

export default Calendar
