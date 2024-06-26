/* eslint-disable */
"use client";

import { Label } from ".";

type Props = {
  title: string;
  value: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
};

const RadioInput = ({ title, value, selectedValue, onValueChange }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        value={title}
        onChange={() => onValueChange(value)}
        checked={value === selectedValue}
      />
      <Label>{title}</Label>
    </div>
  );
};

export default RadioInput;
