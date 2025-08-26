"use client"

import { useEffect, useState } from "react"

import { Button, Skeleton } from "@/components"
import { useToast } from "@/providers"

const ToastButtons = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
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
              addToast("success", "Success", "It is successfully implemented!")
            }
          >
            Success
          </Button>
        </div>
      )}
    </>
  )
}

export default ToastButtons
