"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { Button, Skeleton } from "@/components"
import { CheckCircleIcon } from "@/icons"
import { useToast } from "@/providers"

const ButtonsToasts = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Image
            src={CheckCircleIcon}
            alt="Check Circle Icon"
            width={25}
            height={25}
            className="w-6 h-6"
          />
        </Button>
        <Button variant="link">Link Default</Button>
        <Button variant="outline" size="sm">
          Small Outline
        </Button>
        <Button variant="accent" size="lg">
          Large Accent
        </Button>
      </div>
      <p>
        On clicking the below buttons, the corresponding toast is activated!
      </p>
      <div>
        {loading ? (
          <div className="flex items-center justify-center gap-4 p-4">
            <Skeleton className="h-9 w-24 rounded p-1" />
            <Skeleton className="h-9 w-24 rounded p-1" />
            <Skeleton className="h-9 w-24 rounded p-1" />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 p-4">
            <Button
              variant="destructive"
              onClick={() =>
                addToast("error", "Error", "The action has failed miserably!")
              }
            >
              Danger
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                addToast(
                  "info",
                  "Information",
                  "You have logged in successfully!"
                )
              }
            >
              Info
            </Button>
            <Button
              variant="success"
              onClick={() =>
                addToast(
                  "success",
                  "Success",
                  "It is successfully implemented!"
                )
              }
            >
              Success
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ButtonsToasts
