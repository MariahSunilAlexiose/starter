import React from "react";

type Props = {
  orientation?: "horizontal" | "vertical";
  styles?: string;
};

const Separator = ({ orientation = "horizontal", styles }: Props) => {
  return (
    <div
      className={`shrink-0 bg-border ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${styles}`}
    ></div>
  );
};

export default Separator;
