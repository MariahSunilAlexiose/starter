"use client";

import { useState } from "react";

type Props = {
  title: string;
  options: {
    value: string;
    title: string;
  }[];
};

const Select = ({ title, options }: Props) => {
  const [selected, setSelected] = useState("");
  const handleChange = (e: { target: { value: any } }) => {
    setSelected(e.target.value);
  };
  return (
    <select
      className="rounded bg-background text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring"
      value={selected}
      onChange={handleChange}
    >
      <option disabled value="" className="bg-background text-muted-foreground">
        Select {title}
      </option>
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
          className="bg-background"
        >
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
