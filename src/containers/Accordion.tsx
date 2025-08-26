"use client"

import { useEffect, useState } from "react"

import { AccordionItem } from "@/components"
import { fetchData } from "@/scripts/useFetchData"
import { AccordionProps } from "@/types"

const Accordion = () => {
  const [items, setItems] = useState<AccordionProps[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const newItem = await fetchData<AccordionProps[]>("accordion")
      setItems(newItem)
    }
    fetchOptions()
  }, [])
  return (
    <div className="w-full px-5">
      {items.map((item) => (
        <AccordionItem
          key={item.trigger}
          trigger={item.trigger}
          content={item.content}
        />
      ))}
    </div>
  )
}

export default Accordion
