"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components";
import { fetchData } from "@/scripts/useFetchData";
import { Recipe } from "@/types";

function Cards() {
  const [item, setItem] = useState<Recipe[]>([]);
  useEffect(() => {
    const fetchOptions = async () => {
      const newItem = await fetchData<Recipe[]>("recipes");
      setItem(newItem);
    };
    fetchOptions();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-8">
      {item.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          content={item.content}
          footer={item.vegan}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Cards;
