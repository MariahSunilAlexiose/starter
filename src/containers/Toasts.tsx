"use client"

import { Toast } from "@/components"
import { useToast } from "@/providers"

const Toasts = () => {
  const { toasts, removeToast } = useToast()

  return (
    <div className="absolute right-0 z-1000 m-4 p-4">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          description={toast.description}
          removeToast={removeToast}
        />
      ))}
    </div>
  )
}

export default Toasts
