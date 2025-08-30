"use client"

import { useEffect, useState } from "react"

import {
  Avatar,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Pagination,
} from "@/components"
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
                className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border shadow-sm"
              >
                <CardHeader className="flex flex-row">
                  <Avatar className="size-12">
                    <AvatarImage
                      src={`/assets/images/${item.image}`}
                      alt={item.title}
                    />
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>{item.content}</CardContent>
                <CardFooter className="justify-between gap-2">
                  <Button>View Recipes</Button>
                  {item.vegan && <Badge variant="accent">Vegan!</Badge>}
                </CardFooter>
              </Card>
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
