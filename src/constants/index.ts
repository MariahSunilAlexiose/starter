import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@/icons";
import { ToastVariantType } from "@/types";

export const ButtonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/85",
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/85",
    outline:
      "border rounded border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/85",
    ghost: "rounded hover:bg-accent/80 hover:text-accent-foreground",
    link: "text-primary hover:text-primary/85 underline-offset-4 hover:underline",
    success:
      "bg-green-600 text-primary-foreground shadow-sm hover:bg-green/85 shadow-green-400/40",
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-5 w-9",
  },
};

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
};
