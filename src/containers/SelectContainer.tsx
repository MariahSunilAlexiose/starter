"use client"

import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components"
import { fetchData } from "@/scripts/useFetchData"
import { SelectProps } from "@/types"

const SelectContainer = ({ topic }: { topic: string }) => {
  const [options, setOptions] = useState<SelectProps[]>([])

  useEffect(() => {
    const fetchOptions = async () => {
      const newOptions = await fetchData<SelectProps[]>("select_options")
      setOptions(newOptions)
    }
    fetchOptions()
  }, [])

  return (
    <Select>
      <SelectTrigger className="min-w-[180px]">
        <SelectValue placeholder={`Select a ${topic}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            {topic.charAt(0).toUpperCase() + topic.slice(1)}s
          </SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} title={option.title}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectContainer
