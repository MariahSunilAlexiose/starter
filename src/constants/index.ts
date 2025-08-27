import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@/icons"
import { ToastVariantType } from "@/types"

export const ButtonVariants = {
  variant: {
    default: "bg-foreground text-background shadow-sm hover:bg-foreground/90",
    primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
    outline:
      "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    success:
      "bg-green-600 text-primary-foreground shadow-sm hover:bg-green-600/90 shadow-green-400/40",
  },
  size: {
    default: "h-8 px-4 py-2 has-[>svg]:px-3 text-base",
    sm: "h-6 px-2 rounded-md has-[>svg]:px-2.5 text-sm",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4 text-lg",
    icon: "size-9",
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
