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
        className="accent-primary"
        value={title}
        onChange={() => onValueChange(value)}
        checked={value === selectedValue}
      />
      <Label htmlFor={title}>{title}</Label>
    </div>
  );
};

export default RadioInput;
