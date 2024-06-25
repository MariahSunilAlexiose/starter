type Props = {
  variant?: "default" | "destructive" | "outline" | "accent" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  title: string;
};

const variants = {
  variant: {
    default: "bg-primary/75 text-primary-foreground shadow hover:bg-primary",
    destructive:
      "bg-destructive/75 text-destructive-foreground shadow-sm hover:bg-destructive",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent/75 text-accent-foreground shadow-sm hover:bg-accent",
    ghost: "hover:bg-accent/75 hover:text-accent-foreground",
    link: "text-primary/75 hover:text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  },
};

const Button = ({ variant = "default", size = "default", title }: Props) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variants.variant[variant]} ${variants.size[size]}`}
    >
      {title}
    </button>
  );
};

export default Button;
