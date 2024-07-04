import Image from "next/image";

import { ExclamationCircleIcon, TerminalIcon } from "@/icons";

type Props = {
  variant?: "default" | "accent" | "destructive" | "outline";
  title: string;
  description: string;
};

const variants = {
  default:
    "border-transparent bg-primary/80 text-border shadow hover:bg-primary/70",
  accent:
    "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
  destructive:
    "border-transparent outline-1 outline outline-destructive text-destructive font-medium shadow hover:bg-destructive/20",
  outline: "text-foreground",
};

const Alert = ({ variant = "default", title, description }: Props) => {
  return (
    <div
      className={`${variants[variant]} relative w-full rounded-lg border px-4 py-4 pl-7 text-sm`}
    >
      {variant != "destructive" ? (
        <Image
          src={TerminalIcon}
          alt="Terminal Icon"
          className="absolute left-4 top-4 text-foreground"
        />
      ) : (
        <Image
          src={ExclamationCircleIcon}
          alt="Exclamation Icon"
          className="absolute left-4 top-4 text-foreground"
        />
      )}
      <div className="pl-5">
        <h5 className="mb-1 font-extrabold leading-none tracking-tight">
          {title}
        </h5>
        <div className="text-sm">
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
