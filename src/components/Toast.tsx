"use client";

import Image from "next/image";

import { ToastVariants } from "@/constants";
import { XMarkIcon } from "@/icons";
import { ToastProps } from "@/types";

import { Button } from ".";

const Toast = ({
  id,
  type = "info",
  title,
  description,
  removeToast,
}: ToastProps) => {
  return (
    <div
      className={`${ToastVariants[type].styles} mb-2.5 flex justify-between rounded-md p-2.5`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={ToastVariants[type].icon.img}
          alt={ToastVariants[type].icon.name}
          className="h-8 w-8"
        />
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        className="w-3 pl-20 pr-3 hover:bg-transparent focus-visible:outline-offset-[-4px]"
        onClick={() => removeToast(id)}
        size="icon"
      >
        <span className="sr-only">Dismiss</span>
        <Image
          src={XMarkIcon}
          alt="Close Icon"
          className="h-5 min-h-5 w-5 min-w-5 text-white"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
};

export default Toast;
