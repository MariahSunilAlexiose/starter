"use client";

import { useState } from "react";

import { ChevronDown } from "@/icons";

import { Separator } from ".";

type Props = {
  trigger: string;
  content: string;
};

const AccordionItem = ({ trigger, content }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        className="flex flex-1 cursor-pointer items-center justify-between py-4 text-sm font-medium transition-all hover:font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`${isOpen ? "font-bold" : ""}`}>{trigger}</p>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="overflow-hidden text-sm open:animate-accordion-down">
          <div className="pb-4 pt-0">{content}</div>
        </div>
      )}
      <Separator />
    </div>
  );
};

export default AccordionItem;
