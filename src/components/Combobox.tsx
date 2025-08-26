"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from "@/icons"
import { fetchData } from "@/scripts/useFetchData"
import { SelectProps } from "@/types"

import { Button } from "."

const Combobox = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [options, setOptions] = useState<SelectProps[]>([])
  const [value, setValue] = useState<string>("Select option...")
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    const fetchOptions = async () => {
      const newOptions = await fetchData<SelectProps[]>("select_options")
      setOptions(newOptions)
    }
    fetchOptions()
  }, [])
  return (
    <div onClick={() => setOpen(!open)}>
      <div>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value}
          <Image
            src={ChevronUpDownIcon}
            alt="Chevron Up Down Icon"
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
          />
        </Button>
      </div>
      {open && (
        <div className="bg-popover text-popover-foreground z-50 w-[200px] rounded-md border p-0 shadow-md outline-hidden">
          <div className="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md">
            <div className="flex items-center border-b px-3">
              <Image
                src={MagnifyingGlassIcon}
                alt="Magnifying Glass Icon"
                className="mr-2 h-4 w-4 shrink-0 opacity-50"
              />
              <input
                onClick={(e) => e.stopPropagation()}
                className="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search option..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="max-h-[300px] overflow-x-hidden overflow-y-auto">
              {options && (
                <div className="text-foreground overflow-hidden p-1">
                  {options.filter((option) =>
                    option.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ).length > 0 ? (
                    options
                      .filter((option) =>
                        option.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((option) => (
                        <div
                          key={option.value}
                          className={`${value === option.title ? "bg-accent text-accent-foreground" : ""} hover:bg-accent/40 relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none disabled:pointer-events-none disabled:opacity-50`}
                          onClick={() => {
                            setValue(option.title)
                            setOpen(false)
                          }}
                        >
                          <Image
                            src={CheckIcon}
                            alt="Check Icon"
                            className={`${value === option.title ? "opacity-100" : "opacity-0"} mr-2 h-4 w-4`}
                          />
                          {option.title}
                        </div>
                      ))
                  ) : (
                    <div className="py-6 text-center text-sm">
                      No option found.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Combobox
