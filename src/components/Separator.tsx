type Props = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Separator = ({ orientation = "horizontal", className }: Props) => {
  return (
    <div
      className={`${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className} shrink-0 bg-border`}
    ></div>
  );
};

export default Separator;
