import Image from "next/image"

import { ExclamationTriangleIcon, TerminalIcon } from "@/icons"

type Props = {
  variant?: "default" | "accent" | "destructive" | "outline"
  title: string
  description: string
}

const variants = {
  default:
    "border-transparent bg-primary/80 text-border shadow-sm hover:bg-primary/70",
  accent:
    "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
  destructive:
    "border-transparent outline-1 outline-solid outline-destructive text-destructive font-medium shadow-sm hover:bg-destructive/20",
  outline: "text-foreground",
}

const Alert = ({ variant = "default", title, description }: Props) => {
  return (
    <div
      className={`${variants[variant]} relative w-full rounded-lg border px-4 py-4 pl-7 text-sm`}
    >
      {variant != "destructive" ? (
        <Image
          src={TerminalIcon}
          alt="Terminal Icon"
          className="text-foreground absolute top-4 left-4 h-6 w-6"
        />
      ) : (
        <Image
          src={ExclamationTriangleIcon}
          alt="Exclamation Icon"
          className="text-foreground absolute top-4 left-4 h-4 w-4"
        />
      )}
      <div className="pl-5">
        <h5 className="mb-1 leading-none font-extrabold tracking-tight">
          {title}
        </h5>
        <div className="text-sm">
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
