import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@/icons"
import { ToastVariantType } from "@/types"

export const ButtonVariants = {
  variant: {
    default: "bg-foreground text-background shadow hover:bg-foreground/85",
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/85",
    outline:
      "border rounded border-input shadow-sm hover:bg-accent hover:text-foreground",
    accent: "bg-accent text-foreground shadow-sm hover:bg-accent/85",
    primary: "bg-primary text-background shadow hover:bg-primary/85",
    link: "text-primary hover:text-primary/85 underline-offset-4 hover:underline",
    success:
      "bg-green-600 text-primary-foreground shadow-sm hover:bg-green/85 shadow-green-400/40",
    ghost: "rounded hover:bg-accent/80 hover:text-foreground",
  },
  size: {
    default: "h-9 px-4 py-2",
    xs: "h-4 p-3 rounded-md text-xs font-bold",
    sm: "h-8 rounded-md px-3 text-sm",
    lg: "h-10 rounded-md px-8 text-lg",
    icon: "h-[76px] w-[76px]",
  },
}

export const ToastVariants: ToastVariantType = {
  success: {
    styles: "bg-green-300 text-green-800",
    title: "Success",
    description: "This action has been successfully implemented!",
    icon: { img: CheckCircleIcon, name: "Check Circle Icon" },
  },
  error: {
    styles: "bg-red-300 text-red-800",
    title: "Action Failed",
    description: "This action has failed!",
    icon: { img: ExclamationTriangleIcon, name: "Exclamation Circle Icon" },
  },
  info: {
    styles: "bg-blue-300 text-blue-800",
    icon: { img: InformationCircleIcon, name: "Information Circle Icon" },
  },
}
