"use client"

import { useEffect, useState } from "react"

import { Accordion, Cards, RadioGroup } from "@/containers"

import { Alert, Combobox, Dialog, TextArea } from "."
import Skeleton from "./Skeleton"

type TabProps = {
  label: string
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const TabTrigger = ({ label, activeTab, setActiveTab }: TabProps) => (
  <div
    className={`${activeTab === label.toLowerCase() ? "bg-background text-foreground shadow-sm" : ""} ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`}
    onClick={() => setActiveTab(label.toLowerCase())}
  >
    {label}
  </div>
)

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
            <TabTrigger
              label="Cards"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabTrigger
              label="Data"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      )}
      {loading ? (
        <Skeleton className="mx-auto mt-2 h-12 w-screen max-w-(--breakpoint-xl) p-1" />
      ) : (
        <>
          {activeTab === "cards" ? (
            <div className="mt-2 h-12">
              <Cards />
            </div>
          ) : (
            <div className="mt-2 h-12">
              <div className="grid w-full grid-cols-2 grid-rows-1 items-center gap-4">
                <Accordion />
                <div>
                  <Alert
                    variant="default"
                    title="Heads up!"
                    description="You can add components to your app using the cli."
                  />
                  <div className="flex justify-center gap-10 pt-5">
                    <TextArea placeholder="Type your message here." />
                  </div>
                  <div className="flex h-5 items-center space-x-4 pt-10 text-sm">
                    <RadioGroup />
                    <Dialog />
                    <Combobox />
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Tabs
