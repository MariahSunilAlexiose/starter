"use client";

import { useEffect, useState } from "react";

import { RadioInput } from "@/components";
import { Radio } from "@/types";

async function getRadioOptions(): Promise<Radio[]> {
  const result = await fetch("http://localhost:4000/radio_options");
  return result.json();
}

const RadioGroup = () => {
  const [options, setOptions] = useState<Radio[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    const fetchOptions = async () => {
      const newRecipes = await getRadioOptions();
      setOptions(newRecipes);
    };
    fetchOptions();
  }, []);

  return (
    <div className="grid gap-2">
      {options.map((option) => (
        <RadioInput
          key={option.value}
          title={option.title}
          value={option.value}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
