export const ButtonVariants = {
  variant: {
    default: "bg-primary/75 text-primary-foreground shadow hover:bg-primary",
    destructive:
      "bg-destructive/75 text-destructive-foreground shadow-sm hover:bg-destructive",
    outline:
      "border rounded border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent/80 text-accent-foreground shadow-sm hover:bg-accent",
    ghost: "rounded hover:bg-accent/80 hover:text-accent-foreground",
    link: "text-primary/75 hover:text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-5 w-9",
  },
};
