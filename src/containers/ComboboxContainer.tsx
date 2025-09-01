"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import {
  Button,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components"
import { CheckIcon, ChevronUpDownIcon } from "@/icons"
import { fetchData } from "@/scripts/useFetchData"
import { SelectProps } from "@/types"

const ComboboxContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedValue, setSelectedValue] = useState<string>("Select option...")
  const [options, setOptions] = useState<SelectProps[]>([])
  const [open, setOpen] = useState(false)
  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  useEffect(() => {
    const fetchOptions = async () => {
      const newOptions = await fetchData<SelectProps[]>("select_options")
      setOptions(newOptions)
    }
    fetchOptions()
  }, [])
  return (
    <div>
      <p>Contains Popover and Command component with Search feature</p>
      <Popover>
        <PopoverTrigger onClick={() => setOpen(!open)}>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between"
          >
            {selectedValue}
            <Image
              src={ChevronUpDownIcon}
              alt="Chevron Up Down Icon"
              className="opacity-50"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent isOpen={open} className="w-[200px] p-0">
          <CommandGroup>
            <CommandInput
              placeholder="Search option..."
              className="h-9"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <CommandList>
              {filteredOptions.length === 0 ? (
                <CommandEmpty>No option found.</CommandEmpty>
              ) : (
                <CommandGroup>
                  {filteredOptions.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.title}
                      onItemSelect={(currentsearchTerm: string) => {
                        setSearchTerm(
                          currentsearchTerm === searchTerm
                            ? ""
                            : currentsearchTerm
                        )
                        const normalized = currentsearchTerm.toLowerCase()
                        const selectedNormalized = selectedValue.toLowerCase()

                        if (normalized === selectedNormalized) {
                          // Unselect if the same option is clicked again
                          setSelectedValue("Select option...")
                        } else {
                          setSelectedValue(currentsearchTerm)
                        }

                        setSearchTerm("") // Clear search input after selection
                        setOpen(false)
                      }}
                    >
                      <Image
                        src={CheckIcon}
                        alt="Check Icon"
                        className={`${
                          selectedValue.toLowerCase() ===
                          option.title.toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        } size-5`}
                      />
                      {option.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </CommandGroup>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ComboboxContainer
