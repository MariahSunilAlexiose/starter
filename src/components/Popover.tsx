"use client";

import { useState } from "react";

import { Button } from ".";

type Props = {
  className: string;
};

const Popover = ({ className }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Button variant="outline" onClick={() => setClicked(!clicked)}>
          Open popover
        </Button>
      </div>
      {clicked && (
        <div
          className={`${className} z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none`}
        >
          Place content for the popover here.
        </div>
      )}
    </div>
  );
};

export default Popover;
