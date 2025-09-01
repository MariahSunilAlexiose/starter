"use client"

import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react"

import Image from "next/image"

import {
  AccordionContainer,
  Cards,
  DialogContainer,
  ProfileSettings,
  TeamProjectTracker,
} from "@/containers"
import { CheckCircleIcon } from "@/icons"

import { Alert, AlertDescription, AlertTitle, Skeleton } from "."

const TabTrigger = ({
  label,
  activeTab,
  setActiveTab,
}: {
  label: string
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}) => {
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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("cards")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const tabComponents: Record<string, JSX.Element> = {
    cards: (
      <div className="flex flex-col gap-5">
        <Alert>
          <Image
            src={CheckCircleIcon}
            alt="Check Circle Icon"
            width={25}
            height={25}
            className="w-6 h-6"
          />
          <AlertTitle>Components used:</AlertTitle>
          <AlertDescription>
            These cards have Avatar, Badge (Outline and Primary variants),
            Button, Alert and Pagination components.
          </AlertDescription>
        </Alert>
        <Cards />
      </div>
    ),
    accordion: (
      <div className="flex flex-col items-center gap-5">
        <Alert>
          <Image
            src={CheckCircleIcon}
            alt="Check Circle Icon"
            width={25}
            height={25}
            className="w-6 h-6"
          />
          <AlertTitle>Components used:</AlertTitle>
          <AlertDescription>
            This Accordion component contains Radio group, Text Area and Slider:
            (both single and dual range).
          </AlertDescription>
        </Alert>
        <AccordionContainer />
      </div>
    ),
    dialog: (
      <div className="flex flex-col items-center gap-5">
        <Alert>
          <Image
            src={CheckCircleIcon}
            alt="Check Circle Icon"
            width={25}
            height={25}
            className="w-6 h-6"
          />
          <AlertTitle>Components used:</AlertTitle>
          <AlertDescription>
            This Dialog component contains Label, Input and Checkbox component.
          </AlertDescription>
        </Alert>
        <DialogContainer />,
      </div>
    ),
    "profile-settings": <ProfileSettings />,
    "team-project-tracker": <TeamProjectTracker />,
  }

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
              "Dialog",
              "Profile Settings",
              "Team Project Tracker",
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
        <div className="flex justify-center mt-5">
          {tabComponents[activeTab]}
        </div>
      )}
    </div>
  )
}

export default Tabs
