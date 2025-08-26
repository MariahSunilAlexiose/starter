"use client"

import { JSX, useEffect, useState } from "react"

import { Accordion, Cards, RadioGroup, ToastButtons } from "@/containers"

import { Alert, Combobox, Dialog, TextArea } from "."
import Skeleton from "./Skeleton"

type TabProps = {
  label: string
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const TabTrigger = ({ label, activeTab, setActiveTab }: TabProps) => {
  const normalizedLabel = label.toLowerCase().replace(/\s+/g, "-")
  return (
    <div
      className={`${
        activeTab === normalizedLabel
          ? "bg-background text-foreground shadow-sm"
          : ""
      } ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`}
      onClick={() => setActiveTab(normalizedLabel)}
    >
      {label}
    </div>
  )
}

const tabComponents: Record<string, JSX.Element> = {
  cards: (
    <div className="mt-2 h-12">
      <Cards />
    </div>
  ),
  accordion: (
    <div className="mt-2 h-12">
      <Accordion />
    </div>
  ),
  alert: (
    <div className="mt-5">
      <Alert
        variant="default"
        title="Heads up!"
        description="You can add components to your app using the cli."
      />
    </div>
  ),
  "text-area": (
    <div className="mt-5">
      <TextArea placeholder="Type your message here." />
    </div>
  ),
  radio: (
    <div className="mt-5 flex justify-center">
      <RadioGroup />
    </div>
  ),
  dialog: (
    <div className="mt-5 flex justify-center">
      <Dialog />
    </div>
  ),
  combobox: (
    <div className="mt-5 flex justify-center">
      <Combobox />
    </div>
  ),
  button: (
    <div className="mt-5 flex flex-col items-center justify-center text-center">
      <p>On clicking, the corresponding toast is activated!</p>
      <ToastButtons />
    </div>
  ),
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("cards")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="justify-between pt-20">
          <Skeleton className="h-9 w-24 rounded p-1" />
        </div>
      ) : (
        <div className="pt-20">
          <div className="bg-muted-foreground/10 text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1">
            {[
              "Cards",
              "Accordion",
              "Alert",
              "Text Area",
              "Radio",
              "Dialog",
              "Combobox",
              "Button",
            ].map((label) => (
              <TabTrigger
                key={label}
                label={label}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </div>
      )}
      {loading ? (
        <Skeleton className="mx-auto mt-2 h-12 w-screen max-w-(--breakpoint-xl) p-1" />
      ) : (
        <>{tabComponents[activeTab]}</>
      )}
    </div>
  )
}

export default Tabs
