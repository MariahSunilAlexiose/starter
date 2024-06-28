"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { ButtonVariants } from "@/constants";
import { chevronLeft, chevronRight, ellipsisHorizontal } from "@/icons";
import { ButtonProps } from "@/types";

/* eslint-disable */
type Props = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};
/* eslint-enable */

const PaginationItem = React.forwardRef(function PaginationItem(
  { className, ...props }: React.ComponentProps<"li">,
  ref: React.Ref<HTMLLIElement>,
) {
  return <li ref={ref} className={className} {...props} />;
});

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Link
    className={`cursor-pointer px-2 py-0 ${ButtonVariants.size[size]}`}
    aria-current={isActive ? "page" : undefined}
    {...props}
  />
);

const PaginationEllipsis = ({ ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className="flex h-9 w-9 items-center justify-center"
    {...props}
  >
    <Image
      src={ellipsisHorizontal}
      alt="Ellipsis Horizontal Icon"
      className="h-4 w-4"
    />
    <span className="sr-only">More pages</span>
  </span>
);

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageNum = 5; // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible

  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length),
  );

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={
          currentPage === page
            ? ButtonVariants.variant["outline"]
            : ButtonVariants.variant["ghost"]
        }
      >
        <PaginationLink href="#" onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />,
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />,
      );
    }

    return renderedPages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex flex-row items-center gap-1">
        <PaginationItem className="pr-2.5">
          <PaginationLink
            aria-label="Go to previous page"
            size="default"
            className="flex gap-1 rounded py-1 pl-1 pr-2.5 text-accent-foreground shadow-sm hover:bg-accent"
            href="#"
            onClick={handlePrevPage}
          >
            <Image
              src={chevronLeft}
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
            className="flex gap-1 rounded py-1 pl-2.5 pr-1 text-accent-foreground shadow-sm hover:bg-accent"
            href="#"
            onClick={handleNextPage}
          >
            <span>Next</span>
            <Image
              src={chevronRight}
              alt="Chevron Right Icon"
              className="h-4 w-4 translate-y-1"
            />
          </PaginationLink>
        </PaginationItem>
      </ul>
    </nav>
  );
};

export default Pagination;
