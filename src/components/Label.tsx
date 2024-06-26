import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Label = ({ children }: Props) => {
  return (
    <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </div>
  );
};

export default Label;
