"use client"

import { ReactNode, useContext, useState } from "react"

import { ToastContext } from "@/context"
import { ToastType } from "@/types"

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([])

  const addToast = (
    type: "success" | "error" | "info",
    title: string,
    description: string
  ) => {
    const id = Math.random().toString(36).substring(7)
    setToasts([...toasts, { id, type, title, description }])

    // setTimeout(() => {
    //   setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    // }, 3000);
  }

  const removeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}
