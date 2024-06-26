type Props = {
  children: React.ReactNode;
  className?: string;
  htmlFor: string;
};

const Label = ({ children, className, htmlFor }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
