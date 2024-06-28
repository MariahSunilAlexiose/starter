"use client";

import { useEffect, useState } from "react";

import { Select } from "@/components";
import { fetchData } from "@/scripts/useFetchData";
import { SelectProps } from "@/types";

const SelectSection = () => {
  const [options, setOptions] = useState<SelectProps[]>([]);
  useEffect(() => {
    const fetchOptions = async () => {
      const newOptions = await fetchData<SelectProps[]>("select_options");
      setOptions(newOptions);
    };
    fetchOptions();
  }, []);
  return <Select title="cars" options={options} />;
};

export default SelectSection;
