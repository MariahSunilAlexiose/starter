"use client"

import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Label,
  RadioGroup,
  RadioGroupItem,
  Slider,
  TextArea,
} from "@/components"

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selected, setSelected] = useState<string>("comfortable")

  const accordionItems = [
    {
      id: "feedback",
      trigger: "Give Feedback",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="feedback">Your thoughts</Label>
            <TextArea id="feedback" placeholder="Share your experience..." />
          </div>

          <div>
            <Label>Rate us:</Label>
            <RadioGroup
              name="radio"
              value={selected}
              onItemChange={setSelected}
              className="flex flex-row!"
            >
              {[
                { value: "excellent", title: "Excellent" },
                { value: "good", title: "Good" },
                { value: "average", title: "Average" },
                { value: "poor", title: "Poor" },
                { value: "terrible", title: "Terrible" },
              ].map((option) => (
                <RadioGroupItem
                  value={option.value}
                  name="radio"
                  selectedValue={selected}
                  onItemChange={setSelected}
                  key={option.value}
                  className="flex items-center gap-3"
                >
                  {option.title}
                </RadioGroupItem>
              ))}
            </RadioGroup>
          </div>

          <Button>Submit</Button>
        </div>
      ),
    },
    {
      id: "audio",
      trigger: "Audio Settings",
      content: (
        <>
          <Label>Volume</Label>
          <Slider defaultValue={70} max={100} step={5} />
        </>
      ),
    },
    {
      id: "brightness",
      trigger: "Brightness",
      content: (
        <>
          <Label>Screen Brightness Range</Label>
          <Slider defaultValue={[30, 80]} max={100} step={5} />
        </>
      ),
    },
  ]

  return (
    <Accordion className="w-full">
      {accordionItems.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <AccordionItem key={item.id}>
            <AccordionTrigger
              isOpen={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent
              isOpen={isOpen}
              className="flex flex-col gap-4 text-balance"
            >
              {item.content}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default CustomAccordion
