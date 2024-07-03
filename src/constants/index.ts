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
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-5 w-9",
  },
};
