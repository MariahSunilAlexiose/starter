type Props = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Separator = ({ orientation = "horizontal", className }: Props) => {
  return (
    <div
      className={`shrink-0 bg-border ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className}`}
    ></div>
  );
};

export default Separator;
