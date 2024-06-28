export type Recipe = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
  vegan: boolean;
};

export type Radio = {
  title: string;
  value: string;
};

export type SelectProps = {
  title: string;
  value: string;
};

export type AccordionProps = {
  trigger: string;
  content: string;
};

export type ButtonProps = {
  variant?: "default" | "destructive" | "outline" | "accent" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
};
