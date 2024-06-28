import { ButtonVariants } from "@/constants";
import { ButtonProps } from "@/types";

const Button = ({
  variant = "default",
  size = "default",
  children,
  type,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} ${ButtonVariants.variant[variant]} ${ButtonVariants.size[size]} inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </button>
  );
};

export default Button;
