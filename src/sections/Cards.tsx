"use client";

import { useEffect, useState } from "react";

import { Card, Pagination } from "@/components";
import { fetchData } from "@/scripts/useFetchData";
import { Recipe } from "@/types";

function Cards() {
  const [isClient, setIsClient] = useState(false);
  const [items, setItems] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(3);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);
  useEffect(() => {
    setIsClient(true);
    const fetchOptions = async () => {
      const newItem = await fetchData<Recipe[]>("recipes");
      setItems(newItem);
    };
    fetchOptions();
  }, []);
  return (
    <>
      {isClient ? (
        <>
          <div className="grid grid-cols-3 gap-8">
            {currentItems.map((item) => (
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
          <Pagination
            totalItems={items.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Cards;
