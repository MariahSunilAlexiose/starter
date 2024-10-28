import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "accent"
    | "ghost"
    | "link"
    | "success";
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

export type IconType = {
  img: StaticImport;
  name: string;
};

export type ToastVariant = {
  styles: string;
  title?: string;
  description?: string;
  icon: IconType;
};

export type ToastVariantType = {
  success: ToastVariant;
  error: ToastVariant;
  info: ToastVariant;
};

export type ToastType = {
  type: "success" | "error" | "info";
  id: string;
  title: string;
  description: string;
};

/* eslint-disable */
export type ToastContextType = {
  toasts: ToastType[];
  addToast: (
    type: "success" | "error" | "info",
    title: string,
    description: string,
  ) => void;
  removeToast: (id: string) => void;
};

export type ToastProps = {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  description: string;
  removeToast: (id: string) => void;
};
/* eslint-enable*/
