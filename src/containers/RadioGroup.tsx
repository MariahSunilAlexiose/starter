"use client"

import { useEffect, useState } from "react"

import { RadioInput } from "@/components"
import { fetchData } from "@/scripts/useFetchData"
import { RadioProps } from "@/types"

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [options, setOptions] = useState<RadioProps[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const newOption = await fetchData<RadioProps[]>("radio_options")
      setOptions(newOption)
    }
    fetchOptions()
  }, [])
  return (
    <div className="grid gap-2">
      {options.map((option) => (
        <RadioInput
          key={option.value}
          title={option.title}
          value={option.value}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
        />
      ))}
    </div>
  )
}

export default RadioGroup
