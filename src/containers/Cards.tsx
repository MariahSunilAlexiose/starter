"use client"

import { useEffect, useState } from "react"

import { Card, Pagination } from "@/components"
import { fetchData } from "@/scripts/useFetchData"
import { RecipeProps } from "@/types"
import { useItemsPerPage } from "@/utils"

function Cards() {
  const [isClient, setIsClient] = useState(false)
  const [items, setItems] = useState<RecipeProps[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = useItemsPerPage()
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = items.slice(firstItemIndex, lastItemIndex)
  useEffect(() => {
    setIsClient(true)
    const fetchOptions = async () => {
      const newItem = await fetchData<RecipeProps[]>("recipes")
      setItems(newItem)
    }
    fetchOptions()
  }, [])
  return (
    <>
      {isClient ? (
        <div className="flex flex-col gap-5">
          <div className="flex justify-center gap-5">
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
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Cards
