"use client"

import { ComponentProps, forwardRef, Ref } from "react"

import Image from "next/image"
import Link from "next/link"

import { ButtonVariants } from "@/constants"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@/icons"
import { ButtonProps } from "@/types"

const PaginationItem = forwardRef(function PaginationItem(
  { className, ...props }: ComponentProps<"li">,
  ref: Ref<HTMLLIElement>
) {
  return (
    <li
      data-slot="pagination-item"
      ref={ref}
      className={className}
      {...props}
    />
  )
})

const PaginationLink = ({
  isActive,
  size = "icon",
  ...props
}: {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  ComponentProps<typeof Link>) => (
  <Link
    data-slot="pagination-link"
    className={`cursor-pointer px-2 py-0 ${ButtonVariants.size[size]}`}
    aria-current={isActive ? "page" : undefined}
    {...props}
  />
)

const PaginationEllipsis = ({ ...props }: ComponentProps<"span">) => (
  <span
    data-slot="pagination-ellipsis"
    aria-hidden
    className="flex h-9 w-9 items-center justify-center"
    {...props}
  >
    <Image
      src={EllipsisHorizontalIcon}
      alt="Ellipsis Horizontal Icon"
      className="h-4 w-4"
    />
    <span className="sr-only">More pages</span>
  </span>
)

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void // eslint-disable-line no-unused-vars
}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const maxPageNum = 5 // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2) // Current page should be in the middle if possible

  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  )

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={`${
          currentPage === page
            ? ButtonVariants.variant["outline"]
            : ButtonVariants.variant["ghost"]
        } rounded-xs!`}
      >
        <PaginationLink href="#" onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ))

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      )
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      )
    }

    return renderedPages
  }

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex flex-row items-center gap-1">
        <PaginationItem className="pr-2.5">
          <PaginationLink
            aria-label="Go to previous page"
            size="default"
            className="text-accent-foreground hover:bg-accent flex gap-1 py-1 pr-2.5 pl-1 shadow-xs"
            href="#"
            onClick={handlePrevPage}
          >
            <Image
              src={ChevronLeftIcon}
              alt="Chevron Left Icon"
              className="h-4 w-4 translate-y-1"
            />
            <span>Previous</span>
          </PaginationLink>
        </PaginationItem>
        {renderPages()}
        <PaginationItem className="px-2.5">
          <PaginationLink
            aria-label="Go to next page"
            size="default"
            className="text-accent-foreground hover:bg-accent flex gap-1 py-1 pr-1 pl-2.5 shadow-xs"
            href="#"
            onClick={handleNextPage}
          >
            <span>Next</span>
            <Image
              src={ChevronRightIcon}
              alt="Chevron Right Icon"
              className="h-4 w-4 translate-y-1"
            />
          </PaginationLink>
        </PaginationItem>
      </ul>
    </nav>
  )
}

export default Pagination
