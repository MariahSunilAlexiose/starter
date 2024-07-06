export type RecipeProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
  vegan: boolean;
};

export type RadioProps = {
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

/* eslint-disable */
export type ButtonProps = {
  variant?: "default" | "destructive" | "outline" | "accent" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
/* eslint-enable */

export type NavMenuProps = {
  name: string;
  description: string;
  href: string;
  icon: string;
};

export type CallsToActionProps = {
  name: string;
  href: string;
  icon: string;
};

export type FooterProps = {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
};

export type SocialMediaProps = {
  image: string;
  alt: string;
};
